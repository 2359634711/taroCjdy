import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import './leftScroll.scss'
import { INavTitleItem } from "src/components/NavTitle/NavTitle";
interface IProps {
    navLeftTitleList: INavTitleItem[],
    onAction: Function,
    selectedIndex: number
}
export default class LeftScroll extends Component<IProps, any> {
    render() {
        let { navLeftTitleList, selectedIndex } = this.props;
        return (
            <View className='leftScroll'>
                {navLeftTitleList.map(val => (
                    <View className={'navItem '+(selectedIndex==val.id?'active':'')} onClick={() => {
                        this.props.onAction({
                            type: 'onNavLeftItemClick',
                            data: val
                        })
                    }} key={val.id} style='height:34px;border-bottom:1px solid #f5f5f5;line-height:34px;'>{val.title}</View>
                ))}
                <View className='floatBlock' style={'top:'+selectedIndex * 35+'px;height:34px;'} ></View>
            </View>
        )
    }
}
