"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}}(),_get=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,r,o)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(o):void 0},_index=require("../../../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ReferBox=(_temp2=_class=function(){function i(){var e,t,r;_classCallCheck(this,i);for(var o=arguments.length,n=Array(o),s=0;s<o;s++)n[s]=arguments[s];return(t=r=_possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(n)))).$usedState=["referInfo"],r.customComponents=[],_possibleConstructorReturn(r,t)}return _inherits(i,_index.Component),_createClass(i,[{key:"_constructor",value:function(e){_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"_constructor",this).call(this,e),this.state=this.props,this.$$refs=[]}},{key:"_createData",value:function(e,t,r){this.__state=e||this.state||{},this.__props=t||this.props||{};this.$prefix;var o=this.__props.referInfo;return console.log(o),Object.assign(this.__state,{referInfo:o}),this.__state}}]),i}(),_class.$$events=[],_class.$$componentPath="pages/detail/components/ReferBox/ReferBox",_temp2);ReferBox.defaultProps={referInfo:{list:[]}},exports.default=ReferBox,Component(require("../../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(ReferBox));