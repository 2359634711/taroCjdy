import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import InfoItem from "../../../../components/InfoItem/InfoItem"
import './CardItem.scss'
import '../../../../commonStyles/font.scss'

interface IProps {
    onAction: Function
}
export default class CardItem extends Component<IProps, any> {



    render() {
        let infoList = [
            {
                id: 0,
                title: '一食堂',
                value: '二号门，厚德学区附近'
            }, {
                id: 1,
                title: '一食堂',
                value: '二号门，厚德学区附近'
            }, {
                id: 2,
                title: '一食堂',
                value: '二号门，厚德学区附近'
            }, {
                id: 3,
                title: '一食堂',
                value: '二号门，厚德学区附近'
            }
        ]
        return (
            <View className='CardItem'>
                <View className='title fontTitle'>食堂</View>
                <View className='infoList'>
                    {infoList.map(val => (
                        <InfoItem key={val.id} infoItem={val} onClick={(e) => {
                            this.props.onAction({
                                type: 'onClick',
                                data: e
                            })
                        }} />
                    ))}
                </View>
            </View>
        )
    }
}
