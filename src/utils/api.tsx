import Taro from '@tarojs/taro'
const serverUri = 'http://127.0.0.1:8081/'
const request = (type, data?) => {
    return new Promise(resolve => {
        Taro.request({
            url: serverUri + type + '?openid=',
            data,
            method: data ? 'POST' : 'GET',
            success: (res) => {
                resolve(res)
            }
        })
    })
}

module.exports = {
    getGoodsTitle: () => (request('getGoodsTitle'))
}