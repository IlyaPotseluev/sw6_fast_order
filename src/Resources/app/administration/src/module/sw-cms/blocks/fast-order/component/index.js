import template from './sw-cms-block-fast-order.html.twig';
import './sw-cms-block-fast-order.scss';

const { State } = Shopware;

/**
 * @private
 * @package buyers-experience
 */
export default {
    template,

    computed: {
        currentDeviceView() {
            return State.get('cmsPageState').currentCmsDeviceView;
        },

        currentDeviceViewClass() {
            if (this.currentDeviceView) {
                return `is--${this.currentDeviceView}`;
            }

            return null;
        },
    },
};
