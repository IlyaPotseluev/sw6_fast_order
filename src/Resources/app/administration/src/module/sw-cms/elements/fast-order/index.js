/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-el-preview-fast-order', () => import('./preview'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-el-config-fast-order', () => import('./config'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-el-fast-order', () => import('./component'));

const Criteria = Shopware.Data.Criteria;
const criteria = new Criteria(1, 25);
criteria.addAssociation('deliveryTime');

/**
 * @private
 * @package buyers-experience
 */
Shopware.Service('cmsService').registerCmsElement({
    name: 'fast-order',
    label: 'sw-cms.elements.fastOrder.label',
    component: 'sw-cms-el-fast-order',
    configComponent: 'sw-cms-el-config-fast-order',
    previewComponent: 'sw-cms-el-preview-fast-order',
    disabledConfigInfoTextKey: 'sw-cms.elements.fastOrder.infoText.tooltipSettingDisabled',
    defaultConfig: {
        product: {
            source: 'static',
            value: null,
            required: true,
            entity: {
                name: 'product',
                criteria: criteria,
            },
        },
        alignment: {
            source: 'static',
            value: null,
        },
    },
    defaultData: {
        product: {
            name: 'Lorem Ipsum dolor',
            productNumber: 'XXXXXX',
            minPurchase: 1,
            deliveryTime: {
                name: '1-3 days',
            },
            price: [
                { gross: 0.00 },
            ],
        },
    },
    collect: Shopware.Service('cmsService').getCollectFunction(),
});
