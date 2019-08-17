import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import NavBottom from '../../components/NavBottom/NavBottom'
import './user.scss'
export default class user extends Component {
    render() {
        return (
            <View>
                Im user

                <NavBottom selectedIndex={2} showType={1} />
            </View>
        )
    }
}
