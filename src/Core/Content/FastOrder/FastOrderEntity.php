<?php

declare(strict_types=1);

namespace Ipotseluev\FastOrder\Core\Content\FastOrder;

use Shopware\Core\Checkout\Customer\CustomerEntity;
use Shopware\Core\Content\Product\ProductEntity;
use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityCustomFieldsTrait;
use Shopware\Core\Framework\DataAbstractionLayer\EntityIdTrait;

class FastOrderEntity extends Entity
{
    use EntityIdTrait;
    use EntityCustomFieldsTrait;

    protected string $customer_name;

    protected string $customer_phone;

    protected string $customer_email;

    protected string|null $customer_message;

    protected string|null $customer_id;

    protected $product;

    protected $customer;

    /**
     * TODO: there some options of product that we gets from Product Page in JSON.
     */
    protected string $productOptions;

    public function getProductId(): string
    {
        return $this->productId;
    }

    public function setProductId(string $product_id): void
    {
        $this->productId = $product_id;
    }

    public function getCustomerId(): string|null
    {
        return $this->customerId;
    }

    public function setCustomerId(string $customer_id): void
    {
        $this->customer_id = $customer_id;
    }

    public function getCustomerMessage(): string|null
    {
        return $this->customerMessage;
    }

    public function setCustomerMessage(string $customer_message): void
    {
        $this->customerMessage = $customer_message;
    }

    public function getCustomerEmail(): string
    {
        return $this->customer_email;
    }

    public function setCustomerEmail(string $customer_email): void
    {
        $this->customer_email = $customer_email;
    }

    public function getCustomerPhone(): string
    {
        return $this->customer_phone;
    }

    public function setCustomerPhone(string $customer_phone): void
    {
        $this->customer_phone = $customer_phone;
    }

    public function getCustomerName(): string
    {
        return $this->customer_name;
    }

    public function setCustomerName(string $customer_name): void
    {
        $this->customer_name = $customer_name;
    }

    public function getProduct(): ?ProductEntity
    {
        return $this->product;
    }

    public function setProduct(?ProductEntity $product): void
    {
        $this->product = $product;
    }

    public function getCustomer(): ?CustomerEntity
    {
        return $this->customer;
    }

    public function setCustomer(?CustomerEntity $customer): void
    {
        $this->customer = $customer;
    }

}
