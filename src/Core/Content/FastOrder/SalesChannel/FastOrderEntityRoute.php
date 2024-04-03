<?php
namespace Ipotseluev\FastOrder\Core\Content\FastOrder\SalesChannel;

use Ipotseluev\FastOrder\Core\Content\FastOrder\SalesChannel\FastOrderEntityRoute\ValidatorInterface;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Core\System\SalesChannel\StoreApiResponse;
use Ipotseluev\FastOrder\Core\Content\FastOrder\SalesChannel\FastOrderEntityRoute\PostRequestValidator;
use Symfony\Component\Routing\Annotation\Route;

#[Route(defaults: ['_routeScope' => ['store-api']])]

class FastOrderEntityRoute
{
    private EntityRepository $fastOrderRepository;

    private ValidatorInterface $validator;

    /**
     * TODO: validator could be do
     *
     * @param EntityRepository $fastOrderRepository
     * @param PostRequestValidator $postRequestValidator
     */
    public function __construct(
        EntityRepository $fastOrderRepository,
        ValidatorInterface $validator)
    {
        $this->fastOrderRepository = $fastOrderRepository;
        $this->validator = $validator;
    }

    #[Route(
        path: '/store-api/fast-order/create',
        name: 'store-api.fast-order.create',
        methods: ['POST']
    )]
    public function create(array $parameters, Context $context)
    {
        $this->validator->validateParameters($parameters);
        try {
            $this->fastOrderRepository->create([$parameters], $context);
        } catch (\Exception $exception) {
            //TODO: log exception $exception->getMessage()
            throw new \Exception('Something went wrong...');
        }

        //TODO: it could be something that extends from StoreApiResponse, but it too short...
        return ['status' => true, 'message' => 'Your order has been placed.'];
    }

}