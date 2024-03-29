<?php

declare(strict_types=1);

namespace Ipotseluev\FastOrder\Command\Helper;

use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\ContainsFilter;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\PrefixFilter;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\SuffixFilter;
use Symfony\Component\Console\Completion\CompletionInput;

class OptionCompletionFabric
{
    private EntityRepository $productRepository;
    private EntityRepository $customerRepository;

    public function __construct(
        EntityRepository $productRepository,
        EntityRepository $customerRepository,
    ) {
        $this->productRepository = $productRepository;
        $this->customerRepository = $customerRepository;
    }

    public function createOptionValueCompletion($attribute, $mode, $completionInput = null)
    {
        $option = new OptionCompletion($attribute, $mode);
        $option->setOptionFunction([]);

        switch ($attribute) {
            case 'product_number':
                $option->setDescription('Please type product name, and we will try to suggest');
                $option->setOptionFunction(
                    function (CompletionInput $input): array {
                        $currentProductId = $input->getCompletionValue();
                        $criteria = new Criteria();
                        $criteria->addFilter(new ContainsFilter('productNumber', $currentProductId));
                        $criteria->setLimit(5);

                        $products = $this->productRepository->search(
                            $criteria, Context::createDefaultContext()
                        );

                        $productElements = $products->getElements();

                        return [$productElements ? current($productElements)->getProductNumber() : ''];

                    });
        }

        return $option;
    }
}
