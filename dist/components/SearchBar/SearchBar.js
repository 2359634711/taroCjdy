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

var SearchBar = (_temp2 = _class = function (_BaseComponent) {
  _inherits(SearchBar, _BaseComponent);

  function SearchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["_$anonymousState__temp", "_$anonymousState__temp2", "anonymousState__temp3", "showType", "bar"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchBar, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(SearchBar.prototype.__proto__ || Object.getPrototypeOf(SearchBar.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      var _$anonymousState__temp, _$anonymousState__temp2;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var searchBar = void 0;
      if (this.__props.showType == 1) {
        this.anonymousFunc0 = function () {
          _this2.__props.onAction({
            type: 'open',
            data: {}
          });
        };

        _$anonymousState__temp = "/res/icon/search.png";

        this.anonymousFunc1 = function () {
          _index2.default.navigateTo({
            url: '/pages/search/search'
          });
        };
      } else {
        this.anonymousFunc2 = function () {
          _this2.__props.onAction({
            type: 'open',
            data: {}
          });
        };

        _$anonymousState__temp2 = "/res/icon/search.png";
      }
      var anonymousState__temp3 = (0, _index.internal_inline_style)(this.__props.showType == 1 ? 'width: 100%;background:#fff;' : '' + this.__props.bar ? 'padding-top: 0px;' : 'padding-top: 180px;');
      Object.assign(this.__state, {
        _$anonymousState__temp: _$anonymousState__temp,
        _$anonymousState__temp2: _$anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3
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
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return SearchBar;
}(_index.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"], _class.$$componentPath = "components/SearchBar/SearchBar", _temp2);
exports.default = SearchBar;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(SearchBar));