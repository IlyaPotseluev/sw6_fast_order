<?php

namespace Ipotseluev\FastOrder\Core\Content\FastOrder;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

class FastOrderCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return FastOrderEntity::class;
    }
}
