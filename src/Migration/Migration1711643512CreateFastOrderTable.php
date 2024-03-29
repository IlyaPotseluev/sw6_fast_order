<?php declare(strict_types=1);

namespace Ipotseluev\FastOrder\Migration;

use Doctrine\DBAL\Connection;
use Doctrine\DBAL\Schema\ForeignKeyConstraint;
use Doctrine\DBAL\Schema\Table;
use Doctrine\DBAL\Types\Types;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1711643512CreateFastOrderTable extends MigrationStep
{
    private const TABLE_NAME = 'fast_order';

    public function getCreationTimestamp(): int
    {
        return 1711643512;
    }

    public function update(Connection $connection): void
    {
        $schema = $connection->createSchemaManager();
        if ($schema->tablesExist([self::TABLE_NAME])) {
            return;
        }

        $table = new Table(self::TABLE_NAME);

        $table->addColumn('id', Types::BINARY, ['length' => 16, 'fixed' => true])->setNotnull(true);

        $table->addColumn('customer_name', Types::TEXT)->setNotnull(true);
        $table->addColumn('customer_email', Types::TEXT)->setNotnull(true);
        $table->addColumn('customer_phone', Types::TEXT)->setNotnull(true);

        $table->addColumn('product_id', Types::BINARY, ['length' => 16, 'fixed' => true])->setNotnull(true);

        $table->addColumn('customer_id', Types::BINARY, ['length' => 16, 'fixed' => true])->setNotnull(false);
        $table->addColumn('customer_message', Types::TEXT)->setNotnull(false);

        $table->addColumn('created_at', Types::DATETIME_MUTABLE)->setNotnull(true);
        $table->addColumn('updated_at', Types::DATETIME_MUTABLE)->setNotnull(false);
        $table->setPrimaryKey(['id']);
        $table->addIndex(['id', 'product_id', 'customer_id']);
        $table->addForeignKeyConstraint(
            'product',
            ['product_id'], ['id'],
            ['onUpdate' => 'cascade', 'onDelete' => 'restrict'],
            `fk.fast_order.product_id`
        );

        /*
         * TODO: NULL foreign key becomes converted (after save) to BINARY that not existing in CUSTOMER
         *
         *
        $table->addForeignKeyConstraint(
            'customer',
            ['customer_id'], ['id'],
            ['onUpdate' => 'cascade', 'onDelete' => 'restrict'],
            `fk.fast_order.customer_id`
        );
        *
        */

        $schema->createTable($table);

        /* TODO: Just another way to create foreign key after table created */
        //$schema->createForeignKey(new ForeignKeyConstraint(['product_id'], 'product', ['id'], `fk.fast_order.product_id`), 'fast_order');

    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
