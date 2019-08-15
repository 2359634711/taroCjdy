import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import '../../../../commonStyles/font.scss'
import './InfoBox.scss'
export interface IInfoBox {
    title: string,
    info: string,
    latitude: string,
    longitude: string
}
interface IProps {
    infoBox: IInfoBox
}
export default class InfoBox extends Component<IProps, any> {
    render() {
        let { infoBox } = this.props
        return (
            <View className='infoBox'>
                <View className='left'>
                    <View className='fontTitle'>{infoBox.title}</View>
                    <View className='fontInfo'>{infoBox.info}</View>
                </View>
                <View onClick={() => {
                    Taro.openLocation({
                        latitude: Number(infoBox.latitude),
                        longitude: Number(infoBox.longitude)
                    })
                }} className='right'>
                    <Image src={require('../../../../res/icon/daohang.png')}></Image>
                </View>

            </View>

        )
    }
}
