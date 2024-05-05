import template from './sw-cms-el-config-fast-order.html.twig';
import './sw-cms-el-config-fast-order.scss';

const { Mixin } = Shopware;
const { Criteria } = Shopware.Data;

/**
 * @private
 * @package buyers-experience
 */
export default {
    template,

    inject: ['repositoryFactory'],

    mixins: [
        Mixin.getByName('cms-element'),
    ],

    computed: {
        productRepository() {
            return this.repositoryFactory.create('product');
        },

        productSelectContext() {
            return {
                ...Shopware.Context.api,
                inheritance: true,
            };
        },

        productCriteria() {
            const criteria = new Criteria(1, 25);
            criteria.addAssociation('options.group');
            //Get only fast order enabled products
            criteria.addFilter(Criteria.equals('customFields.fast_order_enabled', true));
            return criteria;
        },

        selectedProductCriteria() {
            const criteria = new Criteria(1, 25);
            criteria.addAssociation('deliveryTime');
            return criteria;
        },
        isProductPage() {
            return this.cmsPageState?.currentPage?.type === 'product_detail';
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('fast-order');
        },

        onProductChange(productId) {
            if (!productId) {
                this.element.config.product.value = null;
                this.$set(this.element.data, 'productId', null);
                this.$set(this.element.data, 'product', null);
            } else {
                this.productRepository.get(productId, this.productSelectContext, this.selectedProductCriteria)
                    .then((product) => {
                        this.element.config.product.value = productId;
                        this.$set(this.element.data, 'productId', productId);
                        this.$set(this.element.data, 'product', product);
                    });
            }

            this.$emit('element-update', this.element);
        },
    },
};
