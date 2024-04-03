<?php

declare(strict_types=1);

namespace Ipotseluev\FastOrder\Storefront\Controller;

use Ipotseluev\FastOrder\Core\Content\FastOrder\SalesChannel\FastOrderEntityRoute;
use Shopware\Core\Framework\Context;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Storefront\Controller\StorefrontController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route(defaults: ['_routeScope' => ['storefront']])]
class FastOrderController extends StorefrontController
{
    private FastOrderEntityRoute $fastOrderEntityRoute;

    public function __construct(FastOrderEntityRoute $fastOrderEntityRoute)
    {
        $this->fastOrderEntityRoute = $fastOrderEntityRoute;
    }

    /* TODO: path can be /fast-order/{$productId}/{$customerId}/create ... */
    #[Route(
        path: '/fast-order/create',
        name: 'frontend.fast-order.create',
        methods: ['POST'],
        defaults: ['XmlHttpRequest' => true]
    )]
    public function createFastOrder(
        Request $request, Context $context
    ): \Symfony\Component\HttpFoundation\Response {
        try {
            $parameters = $request->getPayload()->all();

            /* TODO: fix definition */
            $parameters['productId'] = $parameters['product_id'];
            $parameters['customerMessage'] = $parameters['customer_message'];

            $response = $this->fastOrderEntityRoute->create($parameters, $context);
        } catch (\Exception $e) {
            // TODO: could be better
            $response = ['status' => -1, 'message' => 'Something went wrong...'];
        }

        return $this->renderStorefront(
            '@IpotseluevFastOrder/storefront/page/product-detail/buy-widget-form/fast-order-modal.html.twig',
            $response
        );

    }
}
