import { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import './GoodsItem.scss'
export interface IGoodsInfo {
    id: string,
    title: string,
    info: string,
    banner_list: string
}
interface IProps {
    onAction: Function,
    goodsInfo: IGoodsInfo
}
export default class GoodsItem extends Component<IProps, any>{
    render() {
        let { goodsInfo } = this.props
        let thumb = goodsInfo ? goodsInfo.banner_list[0] : ""
        return (
            <View className='goodsItem' onClick={() => {
                this.props.onAction({ type: 'onItemClick', data: goodsInfo })
            }}>
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
