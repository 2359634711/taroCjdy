"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var Search = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Search, _BaseComponent);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '搜索'
    }, _this.$usedState = ["loopArray35", "$compid__75", "goodsList"], _this.customComponents = ["SearchBox", "GoodsItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), "_constructor", this).call(this, props);
      this.state = {
        goodsList: []
      };
      this.$$refs = [];
    }
  }, {
    key: "subSearch",
    value: function subSearch(keywords) {
      var _this2 = this;

      if (!keywords) {
        _index2.default.showToast({
          title: "请输入搜索内容",
          icon: "none",
          duration: 800
        });
      } else {
        (0, _api.searchGoods)({ keywords: keywords }).then(function (res) {
          console.log(res);
          var goodsList = [];
          if (res.err) {
            _index2.default.showToast({
              title: '数据空',
              icon: 'none',
              duration: 800
            });
            return;
          } else {
            goodsList = res.data.data;
          }
          _this2.setState({
            goodsList: goodsList
          });
        });
      }
    }
  }, {
    key: "onSearchAction",
    value: function onSearchAction(e) {
      console.log(e);
      if (e.type == 'onSub') {
        this.subSearch(e.data.keywords);
      }
    }
  }, {
    key: "onGoodsItemClick",
    value: function onGoodsItemClick(e) {
      if (e.type == 'onItemClick') {
        _index2.default.redirectTo({
          url: '/pages/index/index?goodsid=' + e.data.id
        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__75 = (0, _index.genCompid)(__prefix + "$compid__75");

      var goodsList = this.__state.goodsList;

      var loopArray35 = goodsList.map(function (val, _anonIdx) {
        val = {
          $original: (0, _index.internal_get_original)(val)
        };
        var $compid__74 = (0, _index.genCompid)(__prefix + "AtwJJizxrp" + _anonIdx);
        _index.propsManager.set({
          "onAction": _this3.onGoodsItemClick.bind(_this3),
          "goodsInfo": val.$original
        }, $compid__74);
        return {
          $compid__74: $compid__74,
          $original: val.$original
        };
      });
      _index.propsManager.set({
        "onAction": this.onSearchAction.bind(this)
      }, $compid__75);
      Object.assign(this.__state, {
        loopArray35: loopArray35,
        $compid__75: $compid__75
      });
      return this.__state;
    }
  }]);

  return Search;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/search/search", _temp2);


Search.defaultProps = {
  goodsList: []
};
Search.config = { navigationBarTitleText: '搜索' };
exports.default = Search;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Search, true));