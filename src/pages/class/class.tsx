import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import NavBottom from '../../components/NavBottom/NavBottom'
import NavTitle, { INavTitleItem } from '../../components/NavTitle/NavTitle'
import GoodsItem from '../../components/GoodsItem/GoodsItem'
import { getGoodsFromClass, getClass } from '../../utils/api'
import './class.scss'

interface IState {
    currentTitleIndex: number,
    navTitleList: INavTitleItem[],
    goodsList: any[]
}
export default class Class extends Component<any, IState> {
    static config = {
        navigationBarTitleText: '分类'
    }
    constructor(props) {
        super(props);
        this.state = {
            currentTitleIndex: 0,
            navTitleList: [],
            goodsList: []
        }
    }
    onTitleAction(e) {

        if (e.type == 'onItemClick') {
            this.setState({
                currentTitleIndex: e.data.id
            })
            this.getGoodsFromClass({ classid: e.data.id })
        }
    }


    getGoodsFromClass(obj) {
        getGoodsFromClass(obj).then((res: any) => {
            console.log(res)
            let data = res.data;
            if (!data.err) {
                this.setState({
                    goodsList: data.data
                })
            }

        })
    }
    componentWillMount() {
        getClass().then((res: any) => {
            console.log(res)
            let data = res.data;
            if (!data.err) {
                let navTitleList = data.result.map(val => ({
                    id: val.id,
                    title: val.class_text
                }))
                this.setState({
                    navTitleList,
                    currentTitleIndex: navTitleList[0].id
                })
                this.getGoodsFromClass({ classid: navTitleList[0].id })
            }
        })
    }
    render() {
        let { currentTitleIndex } = this.state;
        let { navTitleList } = this.state;
        let { goodsList } = this.state;
        return (
            <View>
                <NavTitle navTitleList={navTitleList} selectedIndex={currentTitleIndex} onAction={(e) => {
                    this.onTitleAction(e)
                }} />
                {goodsList.map(val => (
                    <GoodsItem goodsInfo={val} onAction={(e) => {
                        if (e.type == 'onItemClick') {
                            Taro.redirectTo({
                                url: '/pages/index/index?goodsid=' + e.data.id
                            })
                        }
                    }} key={val.title}></GoodsItem>
                ))}


                <NavBottom selectedIndex={1} showType={1} />

            </View>
        )
    }
}
