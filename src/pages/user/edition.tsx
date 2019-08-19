import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import './edition.scss'
import {version} from '../../utils/api'
const Img  = require('../../res/icon/t01ade355a0cec32bde.jpg')

export default class edition extends Component {
    static config: Config = {
        navigationBarTitleText: '版本'
    }
    render() {
        return (
            <View>
                <Image className='imgBox' src={Img}></Image>

                <View className='infoBox'>版本：{version} v</View>
            </View>
        )
    }
}
