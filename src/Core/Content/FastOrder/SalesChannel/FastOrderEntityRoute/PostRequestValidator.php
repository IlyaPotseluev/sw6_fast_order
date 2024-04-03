<?php

/* TODO: validator should be as separated module */
/* TODO: error codes and constant as messages in separated file */

namespace Ipotseluev\FastOrder\Core\Content\FastOrder\SalesChannel\FastOrderEntityRoute;

use Symfony\Component\Config\Definition\Exception\Exception;

class PostRequestValidator implements ValidatorInterface
{
    public function validateParameters(array $parameters): void
    {
        $this->_validateRequiredParameters($parameters);
        $this->_validateEmail($parameters['customer_email']);
        $this->_validateHtmlEntities($parameters);
    }

    private function getRequiredFields()
    {
        return [
            'customer_name',
            'customer_email',
            'customer_phone',
            'product_id',
        ];
    }

    private function _validateRequiredParameters(array $parameters)
    {
        $requiredParameters = $this->getRequiredFields();
        foreach ($requiredParameters as $requiredParameter) {
            if (!isset($parameters[$requiredParameter]) || !$parameters[$requiredParameter]) {
                /*TODO: exception could be customized;
                For example, explode customer_name by _ and make it Customer Name is ... */
                throw new Exception('Make sure that all required fields are filled.');
            }
        }
    }

    private function _validateEmail(string $email)
    {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new Exception('Wrong Email Format.');
        }
        if (!checkdnsrr($email, 'MX')) {
            //throw new Exception('Wrong Email Format.');
        }
    }

    private function _validateHtmlEntities(array $parameters)
    {
        foreach ($parameters as $parameter) {
            if ($this->_isHtml($parameter)) {
                throw new Exception('HTML tags are restricted.');
            }
        }
    }

    private function _isHtml($string)
    {
        return 0 != preg_match('/<[^<]+>/', $string, $m);
    }
}
