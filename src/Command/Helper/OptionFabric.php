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

class OptionFabric
{
    private EntityRepository $productRepository;
    private EntityRepository $customerRepository;

    private $currentOptionCode = null;

    public function __construct(
        EntityRepository $productRepository,
        EntityRepository $customerRepository,
    ) {
        $this->productRepository = $productRepository;
        $this->customerRepository = $customerRepository;
    }

    public function createOption($attribute, $mode)
    {
        $option = new Option($attribute, $mode);
        $this->currentOptionCode = $attribute;
        $option->setOptionFunction([]);
        return $option;
    }

    /**
     * @param string $attribute
     * @param int $mode
     * @return Option
     */
    public function createOptionWithValueCompletion($attribute, $mode)
    {
        $option = $this->createOption($attribute, $mode);
        $option->setDescription('Please type product name, and we will try to suggest');
        $option->setOptionFunction(
            function (CompletionInput $input): array {
                $currentProductId = $input->getCompletionValue();
                $criteria = new Criteria();
                $criteria->addFilter(new ContainsFilter($this->underScoreToCamelCase($this->currentOptionCode), $currentProductId));
                $criteria->setLimit(5);

                $products = $this->productRepository->search(
                    $criteria, Context::createDefaultContext()
                );

                $productElements = $products->getElements();

                return [$productElements ? current($productElements)->getProductNumber() : ''];

            });

        return $option;
    }

    private function underScoreToCamelCase($string, $capitalizeFirstCharacter = false)
    {
        $str = str_replace('_', '', ucwords($string, '_'));

        if (!$capitalizeFirstCharacter) {
            $str = lcfirst($str);
        }

        return $str;
    }
}
