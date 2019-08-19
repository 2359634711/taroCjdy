import { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import NavBottom from '../../../components/NavBottom/NavBottom'
import SearchBar from '../../../components/SearchBar/SearchBar'
import './groupHome.scss'

export default class groupHome extends Component {
    static config: Config = {
        navigationBarTitleText: '社团中心'
    }
    render() {
        return (
            <View>
                <SearchBar showType={1} onAction={() => { }} />
                Im Group
            <NavBottom showType={1} selectedIndex={2} />
            </View>

        )
    }
}
