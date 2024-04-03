<?php declare(strict_types=1);

namespace Ipotseluev\FastOrder\Service;

use Shopware\Core\Defaults;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Core\System\CustomField\CustomFieldTypes;

class CustomFieldsInstaller
{
    public const IS_FAST_ORDER_ALLOWED_FIELD_CODE = 'fast_order_enabled';

    //TODO: add fast order button text in configs

    private const FAST_ORDER_FIELDSET_NAME = 'fast_order_set';

    private const FAST_ORDER_FIELDSET = [
        'name' => self::FAST_ORDER_FIELDSET_NAME,
        'config' => [
            'label' => [
                'en-GB' => 'Is Fast Order Allowed',
                'de-DE' => 'Ist eine schnelle Bestellung erlaubt?',
                Defaults::LANGUAGE_SYSTEM => 'Select Yes or Not'
            ]
        ],
        'customFields' => [
            [
                'name' => self::IS_FAST_ORDER_ALLOWED_FIELD_CODE,
                'type' => CustomFieldTypes::BOOL,
                'config' => [
                    'label' => [
                        'en-GB' => 'Fast Order Allowed',
                        'de-DE' => 'Schnelle Bestellung erlaubt',
                        Defaults::LANGUAGE_SYSTEM => 'Fast Order Allowed For Product?'
                    ],
                    'customFieldPosition' => 1
                ]
            ]
        ]
    ];

    public function __construct(
        private readonly EntityRepository $customFieldSetRepository,
        private readonly EntityRepository $customFieldSetRelationRepository
    ) {
    }

    //TODO: really, that is an update
    public function install(Context $context): void
    {
        $fieldSetsToInstall = [self::FAST_ORDER_FIELDSET_NAME => self::FAST_ORDER_FIELDSET];
        foreach ($fieldSetsToInstall as $fieldsetName => $fieldSetToInstall) {
            //TODO: add check if already exist
            $this->customFieldSetRepository->upsert([
                $fieldSetToInstall
            ], $context);
            $this->addRelations($context, $fieldsetName);
        }

    }
    public function addRelations(Context $context, $fieldSetName): void
    {
        $this->customFieldSetRelationRepository->upsert(array_map(function (string $customFieldSetId) {
            return [
                'customFieldSetId' => $customFieldSetId,
                'entityName' => 'product',
            ];
        }, $this->getCustomFieldSetIds($context, $fieldSetName)), $context);
    }

    /**
     * @return string[]
     */
    private function getCustomFieldSetIds(Context $context, string $fieldSetName): array
    {
        $criteria = new Criteria();
        $criteria->addFilter(new EqualsFilter('name', $fieldSetName));
        return $this->customFieldSetRepository->searchIds($criteria, $context)->getIds();
    }
}
