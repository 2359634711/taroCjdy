"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getClass=exports.getGoodsFromClass=exports.searchGoods=exports.getGoodsDetail=exports.getGoodsTitle=exports.version=void 0;var _index=require("../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var serverUri="https://nepu.fun:8081/",header={"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},request=function(e,o){return new Promise(function(t){_index2.default.request({url:serverUri+e,data:o,header:header,method:o?"POST":"GET",success:function(e){t(e)}})})},version=exports.version="1.1.0",getGoodsTitle=exports.getGoodsTitle=function(){return request("getGoodsTitle")},getGoodsDetail=exports.getGoodsDetail=function(e){return request("getGoods",e)},searchGoods=exports.searchGoods=function(e){return request("searchGoods",e)},getGoodsFromClass=exports.getGoodsFromClass=function(e){return request("getGoodsFromClass",e)},getClass=exports.getClass=function(){return request("getClass")};