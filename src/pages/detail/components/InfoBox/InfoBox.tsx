import { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import '../../../../commonStyles/font.scss'
import './InfoBox.scss'
export default class InfoBox extends Component {
    render() {
        return (
            <View className='infoBox'>
                <View className='left'>
                    <View className='fontTitle'>一食堂</View>
                    <View className='fontInfo'>厚德学区附近，二号门旁边</View>
                </View>
                <View className='right'>
                    <Image src={require('../../../../res/icon/daohang.png')}></Image>
                </View>

            </View>

        )
    }
}
