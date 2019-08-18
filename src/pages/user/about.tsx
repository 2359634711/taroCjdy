import { Component, Config } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import './about.scss'
const Img  = require('../../res/icon/t01ade355a0cec32bde.jpg')

export default class about extends Component {
    static config: Config = {
        navigationBarTitleText: '关于我们'
    }
    render() {
        return (
            <View>
                <Image src={Img} className='imgBox'></Image>
                <View className='infoBox'>超级东油-盟享东油</View>
            </View>
        )
    }
}
