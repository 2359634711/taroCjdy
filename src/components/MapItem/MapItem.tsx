
import { View, Map } from "@tarojs/components";
import './MapItem.scss'
import { Component } from "@tarojs/taro";


export default class MapItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View className='mapBox'>
                <Map longitude={113} latitude={23} />
            </View>
        )
    }
}