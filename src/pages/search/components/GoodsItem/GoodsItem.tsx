import { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";

export interface IGoodsInfo {
    id: string,
    title: string,
    info: string,
    banner_list: string
}
interface IProps {
    goodsInfo: IGoodsInfo
}
export default class GoodsItem extends Component<IProps, any>{
    render() {
        let { goodsInfo } = this.props
        let thumb = goodsInfo.banner_list[0]
        return (
            <View className='goodsItem'>
                <Image src={thumb} className='imgBox'>
                </Image>
                <View className='infoBox'>
                    <View className='title'>{goodsInfo.title}</View>
                    <View className='info'>{goodsInfo.info}</View>
                </View>
            </View>
        )
    }
}
