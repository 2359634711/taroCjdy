import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import MapItem from "../../../components/MapItem/MapItem"

export default class map extends Component {
    render() {
        return (
            <View>
                <MapItem onAction={() => {
                    
                }}/>
            </View>
        )
    }
}
