import template from './ipotseluev-fast-order-detail.html.twig';

const {Component, Mixin} = Shopware;
const {Criteria} = Shopware.Data;

Component.register('ipotseluev-fast-order-detail', {
    template,
    inject: [
        //Using API here - pooled from the Container
        'repositoryFactory'
    ],
    mixins: [
        //After inject repository - defined mixin and get it by name
        Mixin.getByName('notification')
    ],

    metaInfo() {
        return {
            //Default title from your module
            title: this.$createTitle()
        }

    },
    data() {
        //We make sure there no properties before it executing something
        return {
            fastOrder: null,
            isLoading: false,
            processSuccess: false,
            repository: null,
            fastOrderId: null,

        }

    },

    computed: {

        options() {
            return [
                {value: 'customer_name', customer_name: this.$tc('ipotseluev-fast-order.detail.inputCustomerMessage')},
                {value: 'customer_email', customer_email: this.$tc('ipotseluev-fast-order.detail.inputCustomerEmail')},
                {value: 'customer_phone', customer_phone: this.$tc('ipotseluev-fast-order.detail.inputCustomerPhone')},
                {
                    value: 'customerMessage',
                    customerMessage: this.$tc('ipotseluev-fast-order.detail.inputCustomerMessage')
                }

            ]
        }

    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.repository = this.repositoryFactory.create('fast_order');
            if (this.$route.params.id) {
                this.fastOrderId = this.$route.params.id;
                this.loadEntityData();
            }
        },
        onClickSave() {
            this.isLoading = true;
            const messageSaveError = this.$tc(
                'global.notification.notificationSaveErrorMessageRequiredFieldsInvalid',
            );
            this.repository.save(this.fastOrder).then(() => {
                this.isLoading = false;
            }).catch(() => {
                this.createNotificationError({
                    message: messageSaveError,
                });
            });
        },

        saveFinish() {
            this.processSuccess = false;
        },
        loadEntityData() {
            this.isLoading = true;
            const criteria = new Criteria(1, 25);
            criteria.addAssociation('product');

            const context = {...Shopware.Context.api, inheritance: true};
            this.repository.get(this.fastOrderId, context, criteria).then((fastOrder) => {
                this.fastOrder = fastOrder;
                this.isLoading = false;
            });
        }
    }
});
