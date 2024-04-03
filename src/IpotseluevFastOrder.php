<?php declare(strict_types=1);

namespace Ipotseluev\FastOrder;
use Ipotseluev\FastOrder\Service\CustomFieldsInstaller;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\UpdateContext;
use Shopware\Core\Framework\Plugin\Context\InstallContext;

class IpotseluevFastOrder extends Plugin
{
    public function update(UpdateContext $updateContext): void
    {
        $this->getCustomFieldsInstaller()->install($updateContext->getContext());
    }

    private function getCustomFieldsInstaller(): CustomFieldsInstaller
    {
        if ($this->container->has(CustomFieldsInstaller::class)) {
            return $this->container->get(CustomFieldsInstaller::class);
        }

        return new CustomFieldsInstaller(
            $this->container->get('custom_field_set.repository'),
            $this->container->get('custom_field_set_relation.repository')
        );
    }

}
