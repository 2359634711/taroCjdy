import Taro from '@tarojs/taro'
<<<<<<< HEAD
// const serverUri = 'http://127.0.0.1:8081/'
=======
>>>>>>> 36674edd398e0ed4d62823e1101ab334c511b8fe
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


export const getGoodsTitle = () => (request('getGoodsTitle'))
export const getGoodsDetail = (data) => (request('getGoods', data))
export const searchGoods = (data) => (request('searchGoods', data))
