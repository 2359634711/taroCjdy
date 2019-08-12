import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import InfoItem, { IInfoItem } from "../../../../components/InfoItem/InfoItem"
import './CardItem.scss'
import '../../../../commonStyles/font.scss'

interface IProps {
    onAction: Function,
    cardInfo: ICardInfo
}
export interface ICardInfo {
    classId: number,
    className: string,
    list: IGoodTitle[]
}
export interface IGoodTitle {
    id: number,
    title: string,
    info: string,
    lagtitude?: string,
    longtitude?: string
}
interface IState {
    cardInfo: {
        classId: number,
        className: string,
        list: IGoodTitle[]
    }
}
export default class CardItem extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = this.props
    }
    render() {

        return (
            <View className='CardItem'>
                <View className='title fontTitle'>{this.state.cardInfo.className}</View>
                <View className='infoList'>
                    {this.state.cardInfo.list.map(val => {
                        let infoItem: IInfoItem = {
                            id: val.id,
                            title: val.title,
                            value: val.info
                        }
                        return <InfoItem key={val.id} infoItem={infoItem} onClick={(e) => {
                            this.props.onAction({
                                type: 'onClick',
                                data: e
                            })
                        }} />
                    }

                    )}
                </View>
            </View>
        )
    }
}
