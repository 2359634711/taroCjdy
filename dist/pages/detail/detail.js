"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Detail, _BaseComponent);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "$compid__2", "referInfo"], _this.config = {
      navigationBarTitleText: '详情'
    }, _this.customComponents = ["InfoBox", "ReferBox", "RichDetail"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Detail.prototype.__proto__ || Object.getPrototypeOf(Detail.prototype), "_constructor", this).call(this, props);

      this.state = {
        referInfo: {
          title: '推荐菜',
          list: [{
            id: 0,
            title: '扬州炒饭',
            thumb: '../../res/icon/swiper2.jpg',
            info: '第一窗口，少油、美味'
          }, {
            id: 0,
            title: '扬州炒饭',
            thumb: '../../res/icon/swiper2.jpg',
            info: '第一窗口，少油、美味'
          }, {
            id: 0,
            title: '扬州炒饭',
            thumb: '../../res/icon/swiper2.jpg',
            info: '第一窗口，少油、美味'
          }, {
            id: 0,
            title: '扬州炒饭',
            thumb: '../../res/icon/swiper2.jpg',
            info: '第一窗口，少油、美味'
          }, {
            id: 0,
            title: '扬州炒饭',
            thumb: '../../res/icon/swiper2.jpg',
            info: '第一窗口，少油、美味'
          }]
        }
      };
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
      var $compid__2 = (0, _index.genCompid)(__prefix + "$compid__2");

      var referInfo = this.__state.referInfo;
      var anonymousState__temp = "/res/icon/swiper1.jpg";
      var anonymousState__temp2 = "/res/icon/swiper2.jpg";
      var anonymousState__temp3 = "/res/icon/swiper3.jpg";
      _index.propsManager.set({
        "referInfo": referInfo
      }, $compid__2);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        $compid__2: $compid__2
      });
      return this.__state;
    }
  }]);

  return Detail;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/detail/detail", _temp2);
exports.default = Detail;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Detail, true));