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

var pinImg = "/res/icon/pin.png";

var MapItem = (_temp2 = _class = function (_BaseComponent) {
  _inherits(MapItem, _BaseComponent);

  function MapItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MapItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MapItem.__proto__ || Object.getPrototypeOf(MapItem)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["markers", "latitude", "longitude", "markList"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MapItem, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(MapItem.prototype.__proto__ || Object.getPrototypeOf(MapItem.prototype), "_constructor", this).call(this, props);
      this.$$refs = [];
    }
  }, {
    key: "markertap",
    value: function markertap(e) {
      console.log(e);
      this.props.onAction({
        type: 'onMarkerTap',
        data: e
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

      var markList = this.__props.markList;

      var markers = markList.map(function (val) {
        return {
          latitude: val.latitude,
          longitude: val.longitude,
          iconPath: pinImg,
          height: 30,
          width: 30,
          id: Number(val.id),
          callout: {
            content: val.title + '\n点击查看详情' || '',
            fontSize: 12,
            borderRadius: 5,
            padding: 10,
            display: 'ALWAYS',
            textAlign: 'center',
            color: '#1c1c1c',
            borderWidth: 1,
            bgColor: '#ffffff',
            borderColor: '#fffff'
          }
        };
      });
      var latitude = 0;
      var longitude = 0;
      switch (markers.length) {
        case 0:
          {
            latitude = 46.592136;
            longitude = 125.153431;
            break;
          }
        case 1:
          {
            latitude = markers[0].latitude;
            longitude = markers[0].longitude;
            break;
          }
        default:
          {
            break;
          }
      }
      Object.assign(this.__state, {
        markers: markers,
        latitude: latitude,
        longitude: longitude
      });
      return this.__state;
    }
  }]);

  return MapItem;
}(_index.Component), _class.$$events = ["markertap"], _class.$$componentPath = "components/MapItem/MapItem", _temp2);


MapItem.defaultProps = {
  markList: []
};
exports.default = MapItem;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(MapItem));