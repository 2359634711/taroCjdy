import Taro, { getStorageSync } from '@tarojs/taro'
// const serverUri = 'http://127.0.0.1:8081/'
const serverUri = 'https://nepu.fun:8081/'
const header = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
}
const request = (type, data?) => {
    return new Promise(resolve => {
        Taro.request({
            url: serverUri + type + '?openid=' + (getStorageSync('openid') || ""),
            data,
            header,
            method: data ? 'POST' : 'GET',
            success: (res) => {
                resolve(res)
            }
        })
    })
}

export const version = '1.3.0'

export const getGoodsTitle = () => (request('getGoodsTitle'))
export const getGoodsDetail = (data) => (request('getGoods', data))
export const searchGoods = (data) => (request('searchGoods', data))
export const getGoodsFromClass = data => request('getGoodsFromClass', data)
export const getClass = () => request('getClass')
export const getOpenId = data => request('getOpenId', data)
export const auth = data => request('auth', data)
export const getUserInfo = () => request('getUserInfo')
export const getGroupAll = () => request('getGroupAll')
export const getGroupFromId = data => request('getGroupFromId', data)
