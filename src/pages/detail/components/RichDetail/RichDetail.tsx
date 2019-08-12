import { Component } from "@tarojs/taro";
import { View, RichText } from "@tarojs/components";
import './RichDetail.scss'
import '../../../../commonStyles/font.scss'


export default class RichDetail extends Component {
    render() {
        return (
            <View>
                <View className='titleBox'>
                    <View className='title fontInfo'>图文详情</View>
                </View>
                <RichText nodes=''></RichText>
            </View>
        )
    }
}
