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

var _require = require("../../utils/api.js"),
    getGoodsDetail = _require.getGoodsDetail;

var Detail = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Detail, _BaseComponent);

  function Detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Detail.__proto__ || Object.getPrototypeOf(Detail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__5", "$compid__6", "$compid__7", "bannerList", "referInfo", "infoBox", "richNode"], _this.config = {
      navigationBarTitleText: '详情'
    }, _this.customComponents = ["InfoBox", "ReferBox", "RichDetail"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Detail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Detail.prototype.__proto__ || Object.getPrototypeOf(Detail.prototype), "_constructor", this).call(this, props);

      this.state = {
        bannerList: [],
        referInfo: {
          title: '推荐',
          list: []
        },
        infoBox: {
          title: '',
          info: '',
          latitude: '',
          longitude: ''
        },
        richNode: ''
      };
      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var goodsid = this.$router.params.goodsid;
      console.log(goodsid);
      getGoodsDetail({ goodsid: goodsid }).then(function (res) {
        var goodsInfo = res.data.data;
        console.log(goodsInfo);
        var referInfo = {
          title: '推荐',
          list: goodsInfo.referList
        };
        var infoBox = {
          title: goodsInfo.title,
          info: goodsInfo.info,
          longitude: goodsInfo.longitude,
          latitude: goodsInfo.latitude
        };
        _this2.setState({
          bannerList: goodsInfo.banner_list,
          referInfo: referInfo,
          infoBox: infoBox,
          richNode: goodsInfo.rich ? goodsInfo.rich.rich_node : ''
        }, function () {
          console.log(_this2.state);
        });
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__5 = (0, _index.genCompid)(__prefix + "$compid__5");
      var $compid__6 = (0, _index.genCompid)(__prefix + "$compid__6");
      var $compid__7 = (0, _index.genCompid)(__prefix + "$compid__7");

      var bannerList = this.__state.bannerList;
      var referInfo = this.__state.referInfo;
      var infoBox = this.__state.infoBox;
      var richNode = this.__state.richNode;

      _index.propsManager.set({
        "infoBox": infoBox
      }, $compid__5);
      _index.propsManager.set({
        "referInfo": referInfo
      }, $compid__6);
      _index.propsManager.set({
        "node": richNode
      }, $compid__7);
      Object.assign(this.__state, {
        $compid__5: $compid__5,
        $compid__6: $compid__6,
        $compid__7: $compid__7
      });
      return this.__state;
    }
  }]);

  return Detail;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/detail/detail", _temp2);
exports.default = Detail;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Detail, true));