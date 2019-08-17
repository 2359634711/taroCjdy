import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import NavBottom from '../../components/NavBottom/NavBottom'
import NavTitle, { INavTitleItem } from '../../components/NavTitle/NavTitle'
import './class.scss'

interface IState {
    currentTitleIndex: number,
    navTitleList: INavTitleItem[]
}
export default class Class extends Component<any, IState> {
    constructor(props) {
        super(props);
        this.state = {
            currentTitleIndex: 0,
            navTitleList: [{
                id: 0,
                title: '食堂'
            }, {
                id: 1,
                title: '宿舍学区'
            }, {
                id: 2,
                title: '攻略'
            }, {
                id: 3,
                title: '教室自习'
            }]
        }
    }
    render() {
        let { currentTitleIndex } = this.state;
        let { navTitleList } = this.state;
        return (
            <View>
                <NavTitle navTitleList={navTitleList} selectedIndex={currentTitleIndex} onAction={(e) => {
                    console.log(e)
                    if (e.type == 'onItemClick') {
                        this.setState({
                            currentTitleIndex: e.data.id
                        })
                    }
                }} />
                Im class
                <NavBottom selectedIndex={1} showType={1} />

            </View>
        )
    }
}
