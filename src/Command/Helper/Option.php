<?php

declare(strict_types=1);

namespace Ipotseluev\FastOrder\Command\Helper;

class Option
{
    private $attribute;
    private $mode;

    private $optionFunction;
    private String $description;

    public function __construct(string $attribute,  int|null $mode, string $description = '')
    {
        $this->attribute = $attribute;
        $this->mode = $mode;
        $this->description = $description;
    }

    public function getAttribute()
    {
        return $this->attribute;
    }

    public function setAttribute($attribute): void
    {
        $this->attribute = $attribute;
    }

    public function getMode()
    {
        return $this->mode;
    }

    public function setMode($mode): void
    {
        $this->mode = $mode;
    }

    /**
     * @return mixed
     */
    public function getOptionFunction()
    {
        return $this->optionFunction;
    }

    /**
     * @param mixed $optionFunction
     */
    public function setOptionFunction($optionFunction): void
    {
        $this->optionFunction = $optionFunction;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $helpText
     */
    public function setDescription($description): void
    {
        $this->description = $description;
    }
}
