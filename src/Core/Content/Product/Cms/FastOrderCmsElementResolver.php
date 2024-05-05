<?php declare(strict_types=1);

namespace Ipotseluev\FastOrder\Core\Content\Product\Cms;

use Shopware\Core\Content\Cms\Aggregate\CmsSlot\CmsSlotEntity;
use Shopware\Core\Content\Cms\DataResolver\Element\ElementDataCollection;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\EntityResolverContext;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\ResolverContext;
use Shopware\Core\Content\Cms\SalesChannel\Struct\BuyBoxStruct;
use Shopware\Core\Content\Product\Cms\AbstractProductDetailCmsElementResolver;
use Shopware\Core\Content\Product\SalesChannel\Detail\ProductConfiguratorLoader;
use Shopware\Core\Content\Product\SalesChannel\SalesChannelProductEntity;
use Shopware\Core\Framework\Log\Package;

#[Package('inventory')]
class FastOrderCmsElementResolver extends AbstractProductDetailCmsElementResolver
{
    /**
     * @internal
     */
    public function __construct(
        private readonly ProductConfiguratorLoader $configuratorLoader) {
    }

    public function getType(): string
    {
        return 'fast-order';
    }

    public function enrich(CmsSlotEntity $slot, ResolverContext $resolverContext, ElementDataCollection $result): void
    {
        //TODO: buy box was used as an example; the code could be refactored
        $buyBox = new BuyBoxStruct();
        $slot->setData($buyBox);

        $productConfig = $slot->getFieldConfig()->get('product');
        if ($productConfig === null) {
            return;
        }

        $product = null;

        if ($productConfig->isMapped() && $resolverContext instanceof EntityResolverContext) {
            $product = $this->resolveEntityValue($resolverContext->getEntity(), $productConfig->getStringValue());
        }

        if ($productConfig->isStatic()) {
            $product = $this->getSlotProduct($slot, $result, $productConfig->getStringValue());
        }

        /** @var SalesChannelProductEntity|null $product */
        if ($product !== null) {
            $buyBox->setProduct($product);
            $buyBox->setProductId($product->getId());
            $buyBox->setConfiguratorSettings($this->configuratorLoader->load($product, $resolverContext->getSalesChannelContext()));
        }
    }
}
