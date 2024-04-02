<?php
namespace Ipotseluev\FastOrder\Core\Content\FastOrder\SalesChannel\FastOrderEntityRoute;

interface ValidatorInterface
{
    public function validateParameters(array $parameters);

}