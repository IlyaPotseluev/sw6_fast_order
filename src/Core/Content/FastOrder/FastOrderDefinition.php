<?php

namespace Ipotseluev\FastOrder\Core\Content\FastOrder;

use Shopware\Core\Checkout\Customer\CustomerDefinition;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\CreatedAtField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\CustomFields;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\ApiAware;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\SearchRanking;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\UpdatedAtField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;

class FastOrderDefinition extends EntityDefinition
{
    public const ENTITY_NAME = 'fast_order';

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getEntityClass(): string
    {
        return FastOrderEntity::class;
    }

    public function getCollectionClass(): string
    {
        return FastOrderCollection::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new PrimaryKey(), new Required()),
            (new FkField('product_id', 'productId', ProductDefinition::class))->addFlags(new ApiAware(),
                new Required()),
            new FkField('customer_id', 'customerId', CustomerDefinition::class),
            (new StringField('customer_name', 'customer_name'))->addFlags(new Required(), new ApiAware(), new SearchRanking(SearchRanking::LOW_SEARCH_RANKING)),
            (new StringField('customer_phone', 'customer_phone'))->addFlags(new Required(), new ApiAware(), new SearchRanking(SearchRanking::LOW_SEARCH_RANKING)),
            (new StringField('customer_email', 'customer_email'))->addFlags(new Required(), new ApiAware(), new SearchRanking(SearchRanking::LOW_SEARCH_RANKING)),
            new StringField('customer_message', 'customerMessage'),
            new IdField('customer_id', 'customerId'),
            (new IdField('product_id', 'productId'))->addFlags(new Required()),
            new CreatedAtField(),
            new UpdatedAtField(),
            (new ManyToOneAssociationField('product', 'product_id', ProductDefinition::class, 'id',
                false))->addFlags(new SearchRanking(SearchRanking::ASSOCIATION_SEARCH_RANKING)),
            (new ManyToOneAssociationField('customer', 'customer_id', CustomerDefinition::class, 'id',
                false))->addFlags(new SearchRanking(SearchRanking::MIDDLE_SEARCH_RANKING)),
        ]);
    }
}
