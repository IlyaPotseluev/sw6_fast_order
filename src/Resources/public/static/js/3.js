(this["webpackJsonpPluginipotseluev-fast-order"]=this["webpackJsonpPluginipotseluev-fast-order"]||[]).push([[3],{"9oie":function(e,t,n){var r=n("uKwr");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("P8hj").default)("05c26259",r,!0,{})},P8hj:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,l=!1,d=function(){},u=null,f="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,o){l=n,u=o||{};var s=r(e,t);return g(s),function(t){for(var n=[],o=0;o<s.length;o++){var a=s[o];(c=i[a.id]).refs--,n.push(c)}t?g(s=r(e,t)):s=[];for(o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete i[c.id]}}}}function g(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(v(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(v(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:s}}}}function b(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function v(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(l)return d;r.parentNode.removeChild(r)}if(m){var o=c++;r=a||(a=b()),t=w.bind(null,r,o,!1),n=w.bind(null,r,o,!0)}else r=b(),t=y.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var _,h=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=h(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function y(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),u.ssrId&&e.setAttribute(f,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},qLGd:function(e,t,n){"use strict";n.r(t);n("9oie");function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){var o;return o=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==r(o)?o:o+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=Shopware.Mixin,c=Shopware.Data.Criteria;t.default={template:'\n{% block sw_cms_element_fast_order_config %}\n<div class="sw-cms-el-config-fast-order">\n\n    \n    {% block sw_cms_element_fast_order_config_tabs %}\n    <sw-tabs\n        position-identifier="sw-cms-element-config-fast-order"\n        class="sw-cms-el-config-fast-order__tabs"\n        default-item="content"\n    >\n        <template #default="{ active }">\n\n            \n            {% block sw_cms_element_fast_order_config_tab_content %}\n            <sw-tabs-item\n                name="content"\n                :title="$tc(\'sw-cms.elements.general.config.tab.content\')"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n            </sw-tabs-item>\n            {% endblock %}\n\n            \n            {% block sw_cms_element_fast_order_config_tab_option %}\n            <sw-tabs-item\n                name="options"\n                :title="$tc(\'sw-cms.elements.general.config.tab.options\')"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.general.config.tab.options\') }}\n            </sw-tabs-item>\n            {% endblock %}\n        </template>\n\n        <template #content="{ active }">\n            <div\n                v-if="active === \'content\'"\n                class="sw-cms-el-config-fast-order__tab-content"\n            >\n                \n                {% block sw_cms_element_fast_order_config_content_warning %}\n                <sw-alert\n                    v-if="isProductPage"\n                    class="sw-cms-el-config-fast-order__warning"\n                    variant="info"\n                >\n                    {{ $tc(\'sw-cms.elements.fastOrder.infoText.tooltipSettingDisabled\') }}\n                </sw-alert>\n                {% endblock %}\n\n                \n                {% block sw_cms_element_fast_order_config_product_select %}\n                <sw-entity-single-select\n                    v-if="!isProductPage"\n                    ref="cmsProductSelection"\n                    v-model="element.config.product.value"\n                    entity="product"\n                    :label="$tc(\'sw-cms.elements.fastOrder.config.label.selection\')"\n                    :placeholder="$tc(\'sw-cms.elements.fastOrder.config.placeholder.selection\')"\n                    :criteria="productCriteria"\n                    :context="productSelectContext"\n                    show-clearable-button\n                    {% if VUE3 %}\n                    @update:value="onProductChange"\n                    {% else %}\n                    @change="onProductChange"\n                    {% endif %}\n                >\n\n                    \n                    {% block sw_cms_element_fast_order_config_product_variant_label %}\n                    <template #selection-label-property="{ item }">\n                        <sw-product-variant-info :variations="item.variation">\n                            {{ item.translated.name || item.name }}\n                        </sw-product-variant-info>\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_fast_order_config_product_select_result_item %}\n                    <template #result-item="{ item, index }">\n                        <sw-select-result\n                            v-bind="{ item, index }"\n                        >\n\n                            \n                            {% block sw_entity_single_select_base_results_list_result_label %}\n                            <span class="sw-select-result__result-item-text">\n                                <sw-product-variant-info :variations="item.variation">\n                                    {{ item.translated.name || item.name }}\n                                </sw-product-variant-info>\n                            </span>\n                            {% endblock %}\n                        </sw-select-result>\n                    </template>\n                    {% endblock %}\n\n                </sw-entity-single-select>\n                {% endblock %}\n            </div>\n\n            <div\n                v-if="active === \'options\'"\n                class="sw-cms-el-config-fast-order__tab-options"\n            >\n\n                \n                {% block sw_cms_element_fast_order_config_options %}\n                <sw-select-field\n                    {% if VUE3 %}\n                    v-model:value="element.config.alignment.value"\n                    {% else %}\n                    v-model="element.config.alignment.value"\n                    {% endif %}\n                    class="sw-cms-el-config-fast-order__alignment"\n                    :label="$tc(\'sw-cms.elements.general.config.label.alignment\')"\n                    :placeholder="$tc(\'sw-cms.elements.general.config.label.alignment\')"\n                >\n\n                    \n                    {% block sw_cms_element_product_box_config_alignment_options %}\n                    <option value="flex-start">\n                        {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignTop\') }}\n                    </option>\n                    <option value="center">\n                        {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignCenter\') }}\n                    </option>\n                    <option value="flex-end">\n                        {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignBottom\') }}\n                    </option>\n                    {% endblock %}\n\n                </sw-select-field>\n                {% endblock %}\n\n            </div>\n        </template>\n    </sw-tabs>\n    {% endblock %}\n\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[a.getByName("cms-element")],computed:{productRepository:function(){return this.repositoryFactory.create("product")},productSelectContext:function(){return i(i({},Shopware.Context.api),{},{inheritance:!0})},productCriteria:function(){var e=new c(1,25);return e.addAssociation("options.group"),e.addFilter(c.equals("customFields.fast_order_enabled",!0)),e},selectedProductCriteria:function(){var e=new c(1,25);return e.addAssociation("deliveryTime"),e},isProductPage:function(){var e,t;return"product_detail"===(null===(e=this.cmsPageState)||void 0===e||null===(t=e.currentPage)||void 0===t?void 0:t.type)}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("fast-order")},onProductChange:function(e){var t=this;e?this.productRepository.get(e,this.productSelectContext,this.selectedProductCriteria).then((function(n){t.element.config.product.value=e,t.$set(t.element.data,"productId",e),t.$set(t.element.data,"product",n)})):(this.element.config.product.value=null,this.$set(this.element.data,"productId",null),this.$set(this.element.data,"product",null)),this.$emit("element-update",this.element)}}}},uKwr:function(e,t,n){}}]);
//# sourceMappingURL=3.js.map