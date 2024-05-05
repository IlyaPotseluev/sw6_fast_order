import template from './sw-cms-preview-fast-order.html.twig';
import './sw-cms-preview-fast-order.scss';

/**
 * @private
 * @package buyers-experience
 */
export default {
    template,

    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        },
    },
};
