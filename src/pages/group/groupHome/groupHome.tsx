import Taro, { Component, Config } from "@tarojs/taro";
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
                <SearchBar showType={1} bar={true} onAction={() => {
                    Taro.navigateTo({
                        url: '/pages/search/search?type=group'
                    })
                }} />
                Im Group
            <NavBottom showType={1} selectedIndex={2} />
            </View>

        )
    }
}
