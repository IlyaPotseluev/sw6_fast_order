<?php

namespace Ipotseluev\FastOrder\Core\Content\FastOrder;

use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\CreatedAtField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
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
            (new StringField('customer_name', 'customer_name'))->addFlags(new Required()),
            (new StringField('customer_phone', 'customer_phone'))->addFlags(new Required()),
            (new StringField('customer_email', 'customer_email'))->addFlags(new Required()),
            new StringField('customer_message', 'customerMessage'),
            new IdField('customer_id', 'customerId'),
            (new IdField('product_id', 'productId'))->addFlags(new Required()),
            //(new ManyToManyAssociationField('customerId', CustomerDefinition::class, CustomerTagDefinition::class, 'customer_id', 'id'))->addFlags(new CascadeDelete()),
            //(new ManyToManyAssociationField('productId', ProductDefinition::class, ProductTagDefinition::class, 'product_id', 'id'))->addFlags(new CascadeDelete()),
            new CreatedAtField(),
            new UpdatedAtField(),
        ]);
    }
}
