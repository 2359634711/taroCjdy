import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import InfoItem from "../../../../components/InfoItem/InfoItem"
import './CardItem.scss'
import '../../../../commonStyles/font.scss'

export default class CardItem extends Component {



    render() {
        let infoItem = {
            id: 0,
            title: '一食堂',
            value: '二号门，厚德学区附近'
        }
        return (
            <View className='CardItem'>
                <View className='title fontTitle'>食堂</View>
                <View className='infoList'>
                    <InfoItem infoItem={infoItem} />
                    <InfoItem infoItem={infoItem} />
                    <InfoItem infoItem={infoItem} />
                    <InfoItem infoItem={infoItem} />
                </View>
            </View>
        )
    }
}
