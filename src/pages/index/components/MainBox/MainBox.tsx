import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import CardItem from "../CardItem/CardItem"
import './MainBox.scss'
interface IProps {
    maxHeight: number
}
export default class MainBox extends Component<IProps, any>{



    render() {
        console.log(this.props.maxHeight)
        return (
            <View className='mainBox' style={'max-height:' + this.props.maxHeight + 'px;overflow:hidden;'}>
                <CardItem />
                <CardItem />
                <CardItem />
            </View>
        )
    }
}
