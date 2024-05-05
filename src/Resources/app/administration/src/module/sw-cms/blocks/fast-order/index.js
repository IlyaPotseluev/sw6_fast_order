/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-preview-fast-order', () => import('./preview'));
/**
 * @private
 * @package buyers-experience
 */
Shopware.Component.register('sw-cms-block-fast-order', () => import('./component'));

/**
 * @private
 * @package buyers-experience
 */
Shopware.Service('cmsService').registerCmsBlock({
    name: 'fast-order',
    label: 'sw-cms.blocks.commerce.fastOrder.label',
    category: 'commerce',
    component: 'sw-cms-block-fast-order',
    previewComponent: 'sw-cms-preview-fast-order',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        left: 'image-gallery',
        right: 'fast-order',
    },
});
