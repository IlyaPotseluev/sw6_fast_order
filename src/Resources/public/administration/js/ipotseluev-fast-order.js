!function(e){function t(t){for(var r,o,i=t[0],s=t[1],a=0,l=[];a<i.length;a++)o=i[a],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&l.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);l.length;)l.shift()()}var r={},o={"ipotseluev-fast-order":0},n={"ipotseluev-fast-order":0};function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{0:1,1:1,2:1,3:1,4:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="static/css/"+({}[e]||e)+".css",s=i.p+n,a=document.getElementsByTagName("link"),l=0;l<a.length;l++){var u=(d=a[l]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===n||u===s))return t()}var c=document.getElementsByTagName("style");for(l=0;l<c.length;l++){var d;if((u=(d=c[l]).getAttribute("data-href"))===n||u===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css";p.onerror=p.onload=function(n){if(p.onerror=p.onload=null,"load"===n.type)t();else{var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||s,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=a,delete o[e],p.parentNode.removeChild(p),r(l)}},p.href=s,document.head.appendChild(p)})).then((function(){o[e]=0})));var r=n[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=s);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+"static/js/"+({}[e]||e)+".js"}(e);var u=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,r[1](u)}n[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p=(window.__sw__.assetPath + '/bundles/ipotseluevfastorder/'),i.oe=function(e){throw console.error(e),e};var s=this["webpackJsonpPluginipotseluev-fast-order"]=this["webpackJsonpPluginipotseluev-fast-order"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=a;i(i.s="7dfn")}({"7dfn":function(e,t,r){"use strict";r.r(t);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){var n;return n=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==o(n)?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=Shopware.Component,l=Shopware.Data.Criteria,u=Shopware.Mixin;a.register("ipotseluev-fast-order-list",{name:"Fast Order",template:'{% block ipotseluev_fast_order_list %}\n    <sw-page class="ipotseluev-fast-order-list">\n        \n        {% block ipotseluev_fast_order_list_search_bar %}\n            <template #search-bar>\n                <sw-search-bar\n                        initial-search-type="fast_order"\n                        :initial-search="term"\n                        :label="$tc(\'ipotseluev-fast-order.list.placeholderSearchBar\')"\n                        :placeholder="$tc(\'ipotseluev-fast-order.list.placeholderSearchBar\')"\n                        @search="onSearch"\n                />\n            </template>\n        {% endblock %}\n\n        <template #content>\n            {% block ipotseluev_fast_order_list_content %}\n            <sw-entity-listing\n                    v-if="fastOrders"\n                    :items="fastOrders"\n                    :repository="repository"\n                    :showSelection="false"\n                    :columns="columns"\n                    detailRoute="ipotseluev.fast.order.detail"\n            >\n                {% block ipotseluev_fast_order_list_content_list_product %}\n                    <template #column-product="{ item }">\n                        <template v-if="item.productId">\n                            <router-link :to="{ name: \'sw.product.detail\', params: { id: item.productId } }">\n                                {{ item.product.productNumber }}\n                            </router-link>\n                        </template>\n                    </template>\n                {% endblock %}\n                {% block ipotseluev_fast_order_list_content_list_created_at %}\n                    <template #column-createdAt="{ item }">\n                        {{ dateFilter(item.createdAt, { hour: \'2-digit\', minute: \'2-digit\', second: \'2-digit\' }) }}\n                    </template>\n                {% endblock %}\n                {% block ipotseluev_fast_order_list_content_list_created_at %}\n                    <template #column-updatedAt="{ item }">\n                        {{ dateFilter(item.updatedAt, { hour: \'2-digit\', minute: \'2-digit\', second: \'2-digit\' }) }}\n                    </template>\n                {% endblock %}\n            </sw-entity-listing>\n            {% endblock %}\n        </template>\n    </sw-page>\n{% endblock %}',inject:["repositoryFactory","acl"],mixins:[u.getByName("listing")],data:function(){return{repository:null,fastOrders:null,sortBy:"createdAt"}},metaInfo:function(){return{title:this.$createTitle()}},computed:{columns:function(){return this.getColumns()},repository:function(){return this.repositoryFactory.create("fast_order")},criteria:function(){var e=this,t=new l(this.page,this.limit);return t.setTerm(this.term),this.sortBy.split(",").forEach((function(r){t.addSorting(l.sort(r,e.sortDirection,e.naturalSorting))})),t.addAssociation("product"),t},dateFilter:function(){return Shopware.Filter.getByName("date")}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.getList()},getList:function(){var e=this;this.isLoading=!0,this.repository=this.repositoryFactory.create("fast_order");var t=i(i({},Shopware.Context.api),{},{inheritance:!0});return this.repository.search(this.criteria,t).then((function(t){e.total=t.total,e.fastOrders=t,e.isLoading=!1}))},loadCustomFieldSets:function(){var e=this;this.customFieldDataProviderService.getCustomFieldSets("fast_order").then((function(t){e.customFieldSets=t}))},getColumns:function(){return[{property:"product",dataIndex:"product.productNumber",label:"sw-review.list.columnProduct",routerLink:"ipotseluev.fast.order.detail",allowResize:!0,primary:!0},{property:"customerId",label:this.$tc("ipotseluev-fast-order.list.columnCustomer"),routerLink:"ipotseluev.fast.order.detail",allowResize:!0,primary:!0},{property:"customer_name",label:this.$tc("ipotseluev-fast-order.list.columnCustomerName"),routerLink:"ipotseluev.fast.order.detail",allowResize:!0},{property:"customer_email",label:this.$tc("ipotseluev-fast-order.list.columnCustomerEmail"),routerLink:"ipotseluev.fast.order.detail",allowResize:!0},{property:"customer_phone",label:this.$tc("ipotseluev-fast-order.list.columnCustomerPhone"),routerLink:"ipotseluev.fast.order.detail",allowResize:!0},{property:"customerMessage",label:this.$tc("ipotseluev-fast-order.list.columnCustomerMessage"),routerLink:"ipotseluev.fast.order.detail",allowResize:!0},{property:"updatedAt",label:this.$tc("ipotseluev-fast-order.list.columnUpdatedAt"),routerLink:"ipotseluev.fast.order.detail",allowResize:!0},{property:"createdAt",label:this.$tc("ipotseluev-fast-order.list.columnCreatedAt"),routerLink:"ipotseluev.fast.order.detail",allowResize:!0}]}}});function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){var o;return o=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==c(o)?o:o+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=Shopware,v=f.Component,h=f.Mixin,b=Shopware.Data.Criteria;v.register("ipotseluev-fast-order-detail",{template:'{% block ipotseluev_fast_order_detail %}\n    <sw-page class="ipotseluev-fast-order-detail">\n        {% block ipotseluev_fast_order_detail_smart_bar_actions %}\n            \n            <template #smart-bar-actions>\n                <sw-button variant="primary" :routerLink="{ name: \'ipotseluev.fast.order.index\' }">\n                    {{ $tc(\'ipotseluev-fast-order.detail.cancelButtonText\') }}\n                </sw-button>\n                \n                <sw-button-process\n                        :isLoading="isLoading"\n                        :processSuccess="processSuccess"\n                        variant="primary"\n                        @process-finish="saveFinish"\n                        @click="onClickSave"\n                >\n                    {{ $tc(\'ipotseluev-fast-order.detail.saveButtonText\') }}\n                </sw-button-process>\n            </template>\n        {% endblock %}\n\n        \n        <template #content>\n            {% block ipotseluev_fast_order_detail_content %}\n                <sw-card-view>\n                    <sw-card v-if="fastOrder" :isLoading="isLoading">\n                        <sw-field v-model="fastOrder.customer_name" :label="$tc(\'ipotseluev-fast-order.detail.inputCustomerName\')"></sw-field>\n                        <sw-field v-model="fastOrder.customer_email" :label="$tc(\'ipotseluev-fast-order.detail.inputCustomerEmail\')"></sw-field>\n                        <sw-field v-model="fastOrder.customer_phone" :label="$tc(\'ipotseluev-fast-order.detail.inputCustomerPhone\')"></sw-field>\n                        <sw-field v-model="fastOrder.customerMessage" :label="$tc(\'ipotseluev-fast-order.detail.inputCustomerMessage\')"></sw-field>\n\n                        \n                        {% block ipotseluev_fast_order_base_metadata_product %}\n                            <sw-description-list>\n                                \n                                {% block ipotseluev_fast_order_base_metadata_product_label %}\n                                    <dt class="sw-fast-order-base-info__label">\n                                        {{ $tc(\'ipotseluev-fast-order.detail.labelProduct\') }}\n                                    </dt>\n                                {% endblock %}\n\n                                \n                                {% block sw_customer_base_metadata_product_content %}\n                                    <dd>{{ fastOrder.product.productNumber }}</dd>\n                                {% endblock %}\n                            </sw-description-list>\n                        {% endblock %}\n                    </sw-card>\n                </sw-card-view>\n            {% endblock %}\n        </template>\n    </sw-page>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[h.getByName("notification")],metaInfo:function(){return{title:this.$createTitle()}},data:function(){return{fastOrder:null,isLoading:!1,processSuccess:!1,repository:null,fastOrderId:null}},computed:{options:function(){return[{value:"customer_name",customer_name:this.$tc("ipotseluev-fast-order.detail.inputCustomerMessage")},{value:"customer_email",customer_email:this.$tc("ipotseluev-fast-order.detail.inputCustomerEmail")},{value:"customer_phone",customer_phone:this.$tc("ipotseluev-fast-order.detail.inputCustomerPhone")},{value:"customerMessage",customerMessage:this.$tc("ipotseluev-fast-order.detail.inputCustomerMessage")}]}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.repository=this.repositoryFactory.create("fast_order"),this.$route.params.id&&(this.fastOrderId=this.$route.params.id,this.loadEntityData())},onClickSave:function(){var e=this;this.isLoading=!0;var t=this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid");this.repository.save(this.fastOrder).then((function(){e.isLoading=!1})).catch((function(){e.createNotificationError({message:t})}))},saveFinish:function(){this.processSuccess=!1},loadEntityData:function(){var e=this;this.isLoading=!0;var t=new b(1,25);t.addAssociation("product");var r=p(p({},Shopware.Context.api),{},{inheritance:!0});this.repository.get(this.fastOrderId,r,t).then((function(t){e.fastOrder=t,e.isLoading=!1}))}}});var g=r("H7oD"),y=r("fqw7");Shopware.Module.register("ipotseluev-fast-order",{type:"plugin",name:"ipotseluev-fast-order",title:"ipotseluev-fast-order.general.mainMenuItemGeneral",description:"ipotseluev-fast-order.general.descriptionTextModule",version:"1.0.0",targetVersion:"1.0.0",color:"#F88962",icon:"regular-comments",favicon:"icon-module-orders.png",snippets:{"de-DE":g,"en-GB":y},routes:{index:{component:"ipotseluev-fast-order-list",path:"index"},detail:{component:"ipotseluev-fast-order-detail",path:"detail/:id",meta:{parentPath:"ipotseluev.fast.order.index"}},create:{component:"ipotseluev-fast-order.create",path:"create",meta:{parentPath:"ipotseluev.fast.order.index"}}},navigation:[{label:"ipotseluev-fast-order.general.mainMenuItemGeneral",path:"ipotseluev.fast.order.index",icon:"regular-shopping-bag",parent:"sw-order",color:"#ff3d58"}]});r("yyrw"),r("gcjG")},H7oD:function(e){e.exports=JSON.parse('{"ipotseluev-example":{"general":{"mainMenuItemGeneral":"Fast Order DE","descriptionTextModule":"Manage this custom module here"},"list":{"addButtonText":"Add example","columnName":"Name","columnUpdatedAt":"Updated At","columnCreatedAt":"Created At"}}}')},fqw7:function(e){e.exports=JSON.parse('{"ipotseluev-fast-order":{"general":{"mainMenuItemGeneral":"Fast Order","descriptionTextModule":"Module that allows to create fast order on product detail page"},"list":{"addButtonText":"Add Fast Order","columnProduct":"Product","columnCustomer":"Customer","columnCustomerName":"Customer Name","columnCustomerEmail":"Customer Email","columnCustomerPhone":"Customer Phone","columnCustomerMessage":"Customer Message","columnCreatedAt":"Created At","columnUpdatedAt":"Updated At","placeholderSearchBar":"Search fast order..."},"detail":{"nameLabel":"Fast Order","addButtonText":"Add Fast Order","inputProduct":"Product","inputCustomer":"Customer","inputCustomerName":"Customer Name","inputCustomerEmail":"Customer Email","inputCustomerPhone":"Customer Phone","inputCustomerMessage":"Customer Message","inputCreatedAt":"Created At","inputUpdatedAt":"Updated At","assignProductsLabel":"Assign Products","cancelButtonText":"Cancel","saveButtonText":"Save","labelProduct":"Product Number"}}}')},gcjG:function(e,t,r){Shopware.Component.register("sw-cms-el-preview-fast-order",(function(){return r.e(4).then(r.bind(null,"6fZr"))})),Shopware.Component.register("sw-cms-el-config-fast-order",(function(){return r.e(3).then(r.bind(null,"qLGd"))})),Shopware.Component.register("sw-cms-el-fast-order",(function(){return r.e(2).then(r.bind(null,"dHPj"))}));var o=new(0,Shopware.Data.Criteria)(1,25);o.addAssociation("deliveryTime"),Shopware.Service("cmsService").registerCmsElement({name:"fast-order",label:"sw-cms.elements.fastOrder.label",component:"sw-cms-el-fast-order",configComponent:"sw-cms-el-config-fast-order",previewComponent:"sw-cms-el-preview-fast-order",disabledConfigInfoTextKey:"sw-cms.elements.fastOrder.infoText.tooltipSettingDisabled",defaultConfig:{product:{source:"static",value:null,required:!0,entity:{name:"product",criteria:o}},alignment:{source:"static",value:null}},defaultData:{product:{name:"Lorem Ipsum dolor",productNumber:"XXXXXX",minPurchase:1,deliveryTime:{name:"1-3 days"},price:[{gross:0}]}},collect:Shopware.Service("cmsService").getCollectFunction()})},yyrw:function(e,t,r){Shopware.Component.register("sw-cms-preview-fast-order",(function(){return r.e(1).then(r.bind(null,"vBAV"))})),Shopware.Component.register("sw-cms-block-fast-order",(function(){return r.e(0).then(r.bind(null,"FGMy"))})),Shopware.Service("cmsService").registerCmsBlock({name:"fast-order",label:"sw-cms.blocks.commerce.fastOrder.label",category:"commerce",component:"sw-cms-block-fast-order",previewComponent:"sw-cms-preview-fast-order",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{left:"image-gallery",right:"fast-order"}})}});
//# sourceMappingURL=ipotseluev-fast-order.js.map