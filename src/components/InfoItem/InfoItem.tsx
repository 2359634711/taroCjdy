import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import "./InfoItem.scss"
export interface IInfoItem {
    id: number,
    title: string,
    value?: string,
    icon?: string,
    iconArr?: string,
    url?:string
}
interface IProps {
    infoItem: IInfoItem,
    onClick?: Function

}


export default class InfoItem extends Component<IProps, any> {
    render() {
        let infoItem = this.props.infoItem
        return (
            <View className='infoItem' hoverClass='infoHover' onClick={() =>
                this.props.onClick && this.props.onClick(infoItem)
            }>
                <View className='infoLeft'>
                    {infoItem.icon && <Image className='icon' src={infoItem.icon}></Image>}
                    {infoItem.title && <View className='title'>{infoItem.title}</View>}

                </View>
                <View className='infoRight'>
                    {infoItem.value && <View className='value'>{infoItem.value}</View>}
                    {infoItem.iconArr && <Image className='iconArr' src={infoItem.iconArr}></Image>}
                </View>

            </View>
        )
    }
}
