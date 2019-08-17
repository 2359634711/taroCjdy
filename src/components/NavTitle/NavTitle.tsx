import Taro, { Component } from "@tarojs/taro";
import { View, ScrollView } from "@tarojs/components";

export interface INavTitleItem {
    id: number,
    title: string,
}
interface IProps {
    navTitleList: INavTitleItem[],
    selectedIndex: number,
    onAction: Function
}
interface IState {
    navTitleList: INavTitleItem[],
    selectedIndex: number
}

export default class NavTitle extends Component<IProps, IState> {
    static defaultProps = {
        navTitleList: [],
        selectedIndex: 1
    }
    constructor(props) {
        super(props);
    }
    render() {
        let { navTitleList } = this.props;
        let { selectedIndex } = this.props;
        console.log(selectedIndex, navTitleList)
        return (
            <View className='navTitle'>
                <ScrollView className='scroll' scrollX>
                    <View className='navTitleBox'>
                        {navTitleList.map(val => (
                            <View onClick={() => {
                                this.props.onAction({
                                    type: 'onItemClick',
                                    data: {
                                        ...val
                                    }
                                })
                            }} className={'navItem' + (selectedIndex == val.id ? ' navItemActive' : '')} key={val.title}>{val.title}</View>
                        ))}
                    </View>
                </ScrollView>
            </View >
        )
    }
}
