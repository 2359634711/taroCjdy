'use strict';

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverUri = 'http://127.0.0.1:8081/';
var request = function request(type, data) {
  return new Promise(function (resolve) {
    _index2.default.request({
      url: serverUri + type + '?openid=',
      data: data,
      method: data ? 'POST' : 'GET',
      success: function success(res) {
        resolve(res);
      }
    });
  });
};
module.exports = {
  getGoodsTitle: function getGoodsTitle() {
    return request('getGoodsTitle');
  }
};