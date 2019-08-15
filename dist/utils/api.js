'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchGoods = exports.getGoodsDetail = exports.getGoodsTitle = undefined;

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverUri = 'https://nepu.fun:8081/';
var header = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
};
var request = function request(type, data) {
  return new Promise(function (resolve) {
    _index2.default.request({
      url: serverUri + type,
      data: data,
      header: header,
      method: data ? 'POST' : 'GET',
      success: function success(res) {
        resolve(res);
      }
    });
  });
};
var getGoodsTitle = exports.getGoodsTitle = function getGoodsTitle() {
  return request('getGoodsTitle');
};
var getGoodsDetail = exports.getGoodsDetail = function getGoodsDetail(data) {
  return request('getGoods', data);
};
var searchGoods = exports.searchGoods = function searchGoods(data) {
  return request('searchGoods', data);
};