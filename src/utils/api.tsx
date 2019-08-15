import Taro from '@tarojs/taro'
// const serverUri = 'http://127.0.0.1:8081/'
const serverUri = 'https://nepu.fun:8081/'
const header = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
}
const request = (type, data?) => {
    return new Promise(resolve => {
        Taro.request({
            url: serverUri + type,//+ '?openid=',
            data,
            header,
            method: data ? 'POST' : 'GET',
            success: (res) => {
                resolve(res)
            }
        })
    })
}

module.exports = {
    getGoodsTitle: () => (request('getGoodsTitle')),
    getGoodsDetail: (data) => (request('getGoods', data))
}
