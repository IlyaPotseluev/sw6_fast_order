<?php declare(strict_types=1);

namespace Ipotseluev\FastOrder\Command;

use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Helper\Table;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class FastOrderListCommand extends Command
{
    // Command name
    protected static $defaultName = 'ipotseluev:fast-order:list';

    protected static $defaultDescription = 'Show the List of Fast Orders';
    private EntityRepository $fastOrderRepository;

    public function __construct(
        EntityRepository $fastOrderRepository,
        ?string $name = null
    ) {
        parent::__construct($name);
        $this->fastOrderRepository = $fastOrderRepository;
    }

    // Actual code executed in the command
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $searchResult = $this->fastOrderRepository->search(new Criteria(), Context::createDefaultContext());

        $table = new Table($output);

        $headersAndMethods = $this->_getHeadersAndMethodsMap();
        $headers = array_keys($headersAndMethods);
        $methods = array_values($headersAndMethods);

        $table->setHeaders($headers);

        if (!$searchResult->count()) {
            return Command::FAILURE;
        }
        foreach ($searchResult->getEntities() as $fastOrderItem) {
            /** @var  \Ipotseluev\FastOrder\Core\Content\FastOrder\FastOrderEntity $fastOrderItem */
            $row = [];
            array_walk($methods, function ($getValueForHeader) use ($fastOrderItem, &$row) {
                $row[] = $fastOrderItem->$getValueForHeader();
            });
            $table->addRow($row);
        }

        $table->render();
        return Command::SUCCESS;
    }


    private function _getHeadersAndMethodsMap()
    {
        /* Just For Fun ^_^, KISS */
        return
            [
                'UUID' => 'getId',
                'Product ID' => 'getProductId',
                'Customer ID' => 'getCustomerId',
                'Customer Name' => 'getCustomerName',
                'Customer Email' => 'getCustomerEmail',
                'Customer Phone' => 'getCustomerPhone',
                'Customer Message' => 'getCustomerMessage',

                //TODO: something wrong with date output
                //'Created At' => 'getCreatedAt',
                //'Updated At' => 'getUpdatedAt',
            ];

    }

}
