import './page/ipotseluev-fast-order-list';
import './page/ipotseluev-fast-order-detail';
import './page/ipotseluev-fast-order-create';


import deDE from "./snippet/de-DE.json";
import enGB from "./snippet/en-GB.json";

const {Module} = Shopware;


Module.register('ipotseluev-fast-order', {
    type: 'plugin',
    name: 'ipotseluev-fast-order',
    title: 'ipotseluev-fast-order.general.mainMenuItemGeneral',
    description: 'ipotseluev-fast-order.general.descriptionTextModule',
    version: '1.0.0',
    targetVersion: '1.0.0',
    color: '#F88962',
    icon: 'regular-comments',
    favicon: 'icon-module-orders.png',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    /*

Which one of your configured routes shall be used when clicking this menu entry?
The path is composed of the module id and the path name.
Dashes become dots, for example module 'swag-example' and path 'index' become 'swag.example.index'.
 */
    routes: {
        index: {
            component: 'ipotseluev-fast-order-list',
            path: 'index'
        },
        detail: {
            component: 'ipotseluev-fast-order-detail',
            //for edit certain fast-order
            //if you click back button - you will go to the listing
            path: 'detail/:id',
            meta: {
                parentPath: 'ipotseluev.fast.order.index'
            }
        },
        create: {
            component: 'ipotseluev-fast-order.create',
            path: 'create',
            meta: {
                //The same
                parentPath: 'ipotseluev.fast.order.index'
            }
        }
    },
    navigation: [{
        label: 'ipotseluev-fast-order.general.mainMenuItemGeneral',
        path: 'ipotseluev.fast.order.index',
        icon: 'regular-shopping-bag',
        parent: 'sw-order',
        color: '#ff3d58'
    }],
});
