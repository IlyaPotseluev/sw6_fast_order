<?php declare(strict_types=1);
namespace Ipotseluev\FastOrder\Command;

use Ipotseluev\FastOrder\Command\Helper\Option;
use Ipotseluev\FastOrder\Command\Helper\OptionFabric;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Core\Framework\Uuid\Uuid;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class FastOrderCreateCommand extends Command
{
    private EntityRepository $fastOrderRepository;
    private OptionFabric $optionFabric;

    private $inputOptions = [];
    private EntityRepository $productRepository;

    /**
     * @var string[]
     */
    private $requiredFields = ['customer_name', 'customer_phone', 'customer_email', 'product_number'];

    public function __construct(
        EntityRepository $fastOrderRepository,
        OptionFabric $optionFabric,
        EntityRepository $productRepository,
        ?string $name = null
    ) {
        $this->optionFabric = $optionFabric;
        $this->productRepository = $productRepository;
        parent::__construct($name);
        $this->fastOrderRepository = $fastOrderRepository;
        $this->_initHelpText();
    }

    // Provides a description, printed out in bin/console
    protected function configure(): void
    {
        $this->setName('ipotseluev:fast-order:create');
        $this->setDescription('Create fast order.');

        foreach ($this->_getInputOptions() as $name => $option) {
            /* @var Option $option */
            $this->addOption(
                $name,
                null,
                $option->getMode(),
                $option->getDescription(),
                null,
                $option->getOptionFunction()
            );
        }
    }

    // Actual code executed in the command
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $inputData = $this->_getInputData($input);

        if (!$inputData) {
            $output->writeln('No data to save');
            return Command::FAILURE;
        }

        $errors = $this->_validateInputData($inputData);
        if ($errors) {
            foreach ($errors as $errorMessage) {
                $output->writeln($errorMessage);
            }
            return Command::INVALID;
        }

        $this->fastOrderRepository->create([$inputData], Context::createDefaultContext());

        $output->writeln('Fast Order with ID '.$inputData['id'].' has been created');

        return Command::SUCCESS;
    }

    private function _getInputData(InputInterface $input)
    {
        $inputData = ['id' => Uuid::randomHex()];
        $entityAttributes = array_keys($this->_getInputOptions());

        $criteria = new Criteria();
        $criteria->addFilter(new EqualsFilter('productNumber', $input->getOption('product_number')));
        $productResult = $this->productRepository->search($criteria, Context::createDefaultContext())->first();

        foreach ($entityAttributes as $entityAttribute) {
            $inputData[$entityAttribute] = $input->getOption($entityAttribute);
        }
        $inputData['productId'] = $productResult->get('id');
        $inputData['customerMessage'] = $inputData['customer_message'];

        array_filter($inputData);

        return $inputData;
    }

    private function _getInputOptions()
    {
        if ($this->inputOptions) {
            return $this->inputOptions;
        }
        $this->inputOptions = [
            'customer_name' => $this->optionFabric->createOption('customer_name',
                InputOption::VALUE_REQUIRED),
            'customer_phone' => $this->optionFabric->createOption('customer_phone',
                InputOption::VALUE_REQUIRED),
            'customer_email' => $this->optionFabric->createOption('customer_email',
                InputOption::VALUE_REQUIRED),
            'customer_message' => $this->optionFabric->createOption('customer_message',
                InputOption::VALUE_OPTIONAL),
            'customer_id' => $this->optionFabric->createOption('customer_id',
                InputOption::VALUE_OPTIONAL),
            // Just for suggesting
            'product_number' => $this->optionFabric->createOptionWithValueCompletion('product_number',
                InputOption::VALUE_REQUIRED),
        ];

        return $this->inputOptions;
    }

    private function _initHelpText()
    {
        $attributes = $this->_getInputOptions();
        $helpText = 'To Create Fast Order By CLI you need to use next options: '.PHP_EOL;
        foreach ($attributes as $attributeKey => $optionObject) {
            $isRequired = InputOption::VALUE_REQUIRED == $optionObject->getMode();
            $helpText .= ' --'.$attributeKey.' <'.$attributeKey.'>';
            $helpText .= $isRequired ? ' IS REQUIRED' : '';
            $helpText .= PHP_EOL;
        }

        $helpText .= 'Example: bin/console ipotseluev:fast-order:create --product_number SWDEMO10007.2 --customer_name "Ilia Potseluev" --customer_phone "+7999" --customer_email "poceluevilya@gmail.com"' . PHP_EOL;
        $helpText.= 'Also you can use autocompletion on --product number SWDEMO1000 + TAB';
        $this->setHelp($helpText);
    }

    private function _validateInputData($inputData)
    {
        $errors = [];
        foreach ($this->requiredFields as $requiredField) {
            if (!isset($inputData[$requiredField])) {
                $errors[] = $requiredField . ' is missing. Please complete it.';
                continue;
            }

            if (!$inputData[$requiredField]) {
                $errors[] = $requiredField . ' is empty. Input the value, please';
            }
        }

        return $errors;

    }
}
