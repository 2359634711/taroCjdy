"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardItem = (_temp2 = _class = function (_BaseComponent) {
  _inherits(CardItem, _BaseComponent);

  function CardItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CardItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CardItem.__proto__ || Object.getPrototypeOf(CardItem)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__0", "$compid__1", "$compid__2", "$compid__3"], _this.customComponents = ["InfoItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CardItem, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(CardItem.prototype.__proto__ || Object.getPrototypeOf(CardItem.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__0 = (0, _index.genCompid)(__prefix + "$compid__0");
      var $compid__1 = (0, _index.genCompid)(__prefix + "$compid__1");
      var $compid__2 = (0, _index.genCompid)(__prefix + "$compid__2");
      var $compid__3 = (0, _index.genCompid)(__prefix + "$compid__3");

      var infoItem = {
        id: 0,
        title: '一食堂',
        value: '二号门，厚德学区附近'
      };
      _index.propsManager.set({
        "infoItem": infoItem
      }, $compid__0);
      _index.propsManager.set({
        "infoItem": infoItem
      }, $compid__1);
      _index.propsManager.set({
        "infoItem": infoItem
      }, $compid__2);
      _index.propsManager.set({
        "infoItem": infoItem
      }, $compid__3);
      Object.assign(this.__state, {
        $compid__0: $compid__0,
        $compid__1: $compid__1,
        $compid__2: $compid__2,
        $compid__3: $compid__3
      });
      return this.__state;
    }
  }]);

  return CardItem;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/index/components/CardItem/CardItem", _temp2);
exports.default = CardItem;

Component(require('../../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(CardItem));