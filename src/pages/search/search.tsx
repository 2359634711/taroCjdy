import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import SearchBox from './components/SearchBox/SearchBox'
import { searchGoods } from '../../utils/api'
import GoodsItem, { IGoodsInfo } from './components/GoodsItem/GoodsItem'
import './search.scss'
interface IState {
    goodsList: IGoodsInfo[]
}

export default class Search extends Component<any, IState> {
    static defaultProps = {
        goodsList: []
    }
    constructor(props) {
        super(props);
        this.state = {
            goodsList: []
        }
    }
    static config = {
        navigationBarTitleText: '搜索'
    }


    subSearch(keywords) {
        if (!keywords) {
            Taro.showToast({
                title: "请输入搜索内容",
                icon: "none",
                duration: 800
            })
        } else {
            searchGoods({ keywords }).then((res: any) => {
                console.log(res)
                let goodsList = []
                if (res.err) {
                    Taro.showToast({
                        title: '数据空',
                        icon: 'none',
                        duration: 800
                    })
                    return
                } else {
                    goodsList = res.data.data
                }
                this.setState({
                    goodsList
                })
            })
        }
    }
    onSearchAction(e) {
        console.log(e)
        if (e.type == 'onSub') {
            this.subSearch(e.data.keywords)
        }
    }
    onGoodsItemClick(e) {
        if (e.type == 'onItemClick') {
            Taro.redirectTo({
                url: '/pages/index/index?goodsid='+e.data.id
            })
        }
    }
    render() {
        let { goodsList } = this.state
        return (
            <View className='searchBox'>
                <SearchBox onAction={this.onSearchAction.bind(this)} />
                <View>
                    {goodsList.map(val => (
                        <GoodsItem key={val.id} onAction={this.onGoodsItemClick.bind(this)} goodsInfo={val} />
                    ))}
                </View>
            </View>


        )
    }
}
