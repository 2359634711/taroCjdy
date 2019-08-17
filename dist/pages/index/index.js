"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _api = require("../../utils/api.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray10", "$compid__22", "$compid__23", "$compid__24", "goodTitle"], _this.config = {
      navigationBarTitleText: '首页',
      navigationStyle: 'custom'
    }, _this.customComponents = ["SearchBar", "MapItem", "MainBox", "CardItem", "NavBottom"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */
      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _index2.default.getSystemInfo({
        success: function success(res) {
          _this2.setState({
            sceenHeight: res.windowHeight,
            showType: 0
          });
        }
      });
      (0, _api.getGoodsTitle)().then(function (res) {
        console.log(res);
        _this2.setState({
          goodTitle: res.data
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.setState({
        showType: 0
      });
      var goodsid = this.$router.params.goodsid;
      this.$router.params.goodsid = '';
      if (goodsid) {
        this.showMapMarkerFromGoodsid(goodsid);
      }
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "onPageScroll",
    value: function onPageScroll(e) {
      if (e.scrollTop > this.state.sceenHeight * 0.75) {
        this.setState({
          showType: 1
        });
      } else {
        this.setState({
          showType: 0
        });
      }
    }
  }, {
    key: "onSearchBarAction",
    value: function onSearchBarAction(e) {
      if (e.type == 'open') {
        this.setState({
          showType: this.state.showType == 1 ? 0 : 1
        });
      }
    }
  }, {
    key: "onCardAction",
    value: function onCardAction(e) {
      _index2.default.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
      if (e.type == 'onClick') {
        // Taro.navigateTo({ url: '/pages/detail/detail?goodsid=' + e.data.id })
        var goodsid = e.data.id;
        this.showMapMarkerFromGoodsid(goodsid);
      }
    }
  }, {
    key: "showMapMarkerFromGoodsid",
    value: function showMapMarkerFromGoodsid(goodsid) {
      var _this3 = this;

      (0, _api.getGoodsDetail)({ goodsid: goodsid }).then(function (res) {
        _this3.setState({
          markList: [_extends({}, res.data.data)]
        });
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this4 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__22 = (0, _index.genCompid)(__prefix + "$compid__22");
      var $compid__23 = (0, _index.genCompid)(__prefix + "$compid__23");
      var $compid__24 = (0, _index.genCompid)(__prefix + "$compid__24");

      var goodTitle = this.__state.goodTitle;

      goodTitle = goodTitle || [];
      var showType = this.__state.showType;
      var markList = this.__state.markList;


      this.anonymousFunc0 = function (e) {
        return _this4.onSearchBarAction(e);
      };

      this.anonymousFunc1 = function (e) {
        if (e.type == 'onMarkerTap') {
          _index2.default.navigateTo({
            url: '/pages/detail/detail?goodsid=' + e.data.markerId
          });
        }
      };

      var loopArray10 = goodTitle.map(function (val, _anonIdx) {
        val = {
          $original: (0, _index.internal_get_original)(val)
        };
        var $compid__21 = (0, _index.genCompid)(__prefix + "YoSRvLTZqB" + _anonIdx);
        _index.propsManager.set({
          "cardInfo": val.$original,
          "onAction": _this4.onCardAction.bind(_this4)
        }, $compid__21);
        return {
          $compid__21: $compid__21,
          $original: val.$original
        };
      });
      _index.propsManager.set({
        "showType": showType,
        "onAction": this.anonymousFunc0
      }, $compid__22);
      _index.propsManager.set({
        "onAction": this.anonymousFunc1,
        "markList": markList
      }, $compid__23);
      _index.propsManager.set({
        "showType": showType,
        "selectedIndex": 0
      }, $compid__24);
      Object.assign(this.__state, {
        loopArray10: loopArray10,
        $compid__22: $compid__22,
        $compid__23: $compid__23,
        $compid__24: $compid__24,
        goodTitle: goodTitle
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));