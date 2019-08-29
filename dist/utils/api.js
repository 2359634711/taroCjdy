'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
<<<<<<< HEAD
exports.getGroupQr = exports.getGroupFromId = exports.getGroupAll = exports.getUserInfo = exports.auth = exports.getOpenId = exports.getClass = exports.getGoodsFromClass = exports.searchGoods = exports.getGoodsDetail = exports.getGoodsTitle = exports.version = undefined;
=======
exports.aplyGroup = exports.getGroupFromId = exports.getGroupAll = exports.getUserInfo = exports.auth = exports.getOpenId = exports.getClass = exports.getGoodsFromClass = exports.searchGoods = exports.getGoodsDetail = exports.getGoodsTitle = exports.version = undefined;
>>>>>>> 19b0c7a597da9e0629d4948fe584b921d204b3aa

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const serverUri = 'http://127.0.0.1:8081/'
var serverUri = 'https://nepu.fun:8081/';
var header = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
};
var request = function request(type, data) {
  return new Promise(function (resolve) {
    _index2.default.request({
      url: serverUri + type + '?openid=' + ((0, _index.getStorageSync)('openid') || ""),
      data: data,
      header: header,
      method: data ? 'POST' : 'GET',
      success: function success(res) {
        resolve(res);
      }
    });
  });
};
var version = exports.version = '1.3.0';
var getGoodsTitle = exports.getGoodsTitle = function getGoodsTitle() {
  return request('getGoodsTitle');
};
var getGoodsDetail = exports.getGoodsDetail = function getGoodsDetail(data) {
  return request('getGoods', data);
};
var searchGoods = exports.searchGoods = function searchGoods(data) {
  return request('searchGoods', data);
};
var getGoodsFromClass = exports.getGoodsFromClass = function getGoodsFromClass(data) {
  return request('getGoodsFromClass', data);
};
var getClass = exports.getClass = function getClass() {
  return request('getClass');
};
var getOpenId = exports.getOpenId = function getOpenId(data) {
  return request('getOpenId', data);
};
var auth = exports.auth = function auth(data) {
  return request('auth', data);
};
var getUserInfo = exports.getUserInfo = function getUserInfo() {
  return request('getUserInfo');
};
var getGroupAll = exports.getGroupAll = function getGroupAll() {
  return request('getGroupAll');
};
var getGroupFromId = exports.getGroupFromId = function getGroupFromId(data) {
  return request('getGroupFromId', data);
};
<<<<<<< HEAD
var getGroupQr = exports.getGroupQr = function getGroupQr(data) {
  return request('getQr', data);
=======
var aplyGroup = exports.aplyGroup = function aplyGroup(data) {
  return request('aplyGroup', data);
>>>>>>> 19b0c7a597da9e0629d4948fe584b921d204b3aa
};