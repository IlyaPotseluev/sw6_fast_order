<?php

declare(strict_types=1);

namespace Ipotseluev\FastOrder\Storefront\Controller;

use Ipotseluev\FastOrder\Core\Content\FastOrder\SalesChannel\FastOrderEntityRoute;
use Shopware\Core\Framework\Context;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route(defaults: ['_routeScope' => ['storefront']])]
class FastOrderJsonController extends AbstractController
{
    private FastOrderEntityRoute $fastOrderEntityRoute;

    public function __construct(FastOrderEntityRoute $fastOrderEntityRoute)
    {
        $this->fastOrderEntityRoute = $fastOrderEntityRoute;
    }

    #[Route(
        path: '/fastOrderJson',
        name: 'frontend.fast-order.json',
        methods: ['POST'],
        defaults: ['XmlHttpRequest' => true]
    )]
    public function createFastOrder(
        Request $request, Context $context
    ): JsonResponse {
        try {
            $parameters = $request->getPayload()->all();

            /* TODO: fix definition */
            $parameters['productId'] = $parameters['product_id'];
            $response = $this->fastOrderEntityRoute->create($parameters, $context);
        } catch (\Exception $e) {
            // TODO: could be better
            $response = ['status' => false, 'message' => 'Something went wrong...'];
        }

        return new JsonResponse($response);
    }
}
