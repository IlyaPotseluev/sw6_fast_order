import template from './ipotseluev-fast-order-list.html.twig';

const {Component} = Shopware;
const {Criteria} = Shopware.Data;
const { Mixin } = Shopware;


Component.register('ipotseluev-fast-order-list', {
    name: "Fast Order",
    template,
    inject: ['repositoryFactory', 'acl'],
    mixins: [Mixin.getByName('listing')],
    data() {
        //We make sure there no properties before it executing something
        return {
            repository: null,
            fastOrders: null,
            sortBy: 'createdAt',
        }
    },

    metaInfo() {
        return {
            //Default title from your module
            title: this.$createTitle()
        }
    },

    computed: {
        //For data that can change
        //Columns displaying actual template...
        columns() {
            return this.getColumns();
        },

        repository() {
            return this.repositoryFactory.create('fast_order');
        },
        criteria() {
            const criteria = new Criteria(this.page, this.limit);
            criteria.setTerm(this.term);

            this.sortBy.split(',').forEach(sorting => {
                criteria.addSorting(Criteria.sort(sorting, this.sortDirection, this.naturalSorting));
            });
            //criteria.addAssociation('customer');
            criteria.addAssociation('product');

            return criteria;
        },
        dateFilter() {
            return Shopware.Filter.getByName('date');
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.getList();

        },
        getList() {
            this.isLoading = true;
            this.repository = this.repositoryFactory.create('fast_order');
            const context = { ...Shopware.Context.api, inheritance: true };
            return this.repository.search(this.criteria, context).then((result) => {
                this.total = result.total;
                this.fastOrders = result;
                this.isLoading = false;
            });
        },
        loadCustomFieldSets() {
            this.customFieldDataProviderService.getCustomFieldSets('fast_order').then((sets) => {
                this.customFieldSets = sets;
            });
        },
        getColumns() {
            return [
                {
                    property: 'product',
                    dataIndex: 'product.productNumber',
                    //translation container
                    label: 'sw-review.list.columnProduct',
                    routerLink: 'ipotseluev.fast.order.detail',
                    allowResize: true,
                    primary: true,

                },
                {
                    property: 'customerId',
                    //translation container
                    label: this.$tc('ipotseluev-fast-order.list.columnCustomer'),
                    routerLink: 'ipotseluev.fast.order.detail',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'customer_name',
                    //translation container
                    label: this.$tc('ipotseluev-fast-order.list.columnCustomerName'),
                    routerLink: 'ipotseluev.fast.order.detail',
                    allowResize: true,
                },
                {
                    property: 'customer_email',
                    //translation container
                    label: this.$tc('ipotseluev-fast-order.list.columnCustomerEmail'),
                    routerLink: 'ipotseluev.fast.order.detail',
                    allowResize: true,
                },
                {
                    property: 'customer_phone',
                    label: this.$tc('ipotseluev-fast-order.list.columnCustomerPhone'),
                    routerLink: 'ipotseluev.fast.order.detail',
                    allowResize: true,
                },
                {
                    property: 'customerMessage',
                    label: this.$tc('ipotseluev-fast-order.list.columnCustomerMessage'),
                    routerLink: 'ipotseluev.fast.order.detail',
                    allowResize: true,
                },
                {
                    property: 'updatedAt',
                    label: this.$tc('ipotseluev-fast-order.list.columnUpdatedAt'),
                    routerLink: 'ipotseluev.fast.order.detail',
                    allowResize: true,
                },
                {
                    property: 'createdAt',
                    label: this.$tc('ipotseluev-fast-order.list.columnCreatedAt'),
                    routerLink: 'ipotseluev.fast.order.detail',
                    allowResize: true,
                }
            ]
        },

    }
});
