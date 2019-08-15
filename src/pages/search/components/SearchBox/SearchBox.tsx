import Taro, { Component } from "@tarojs/taro";
import { View, Image, Input } from "@tarojs/components";
import './SearchBox.scss'

const searchImg = require('../../../../res/icon/search.png')
interface IState {
    searchBtnFlag: boolean//false 灰色 true 蓝色
    keywords: string
}
interface IProps{
    onAction: Function
}
export default class SearchBox extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            searchBtnFlag: false,
            keywords: ''
        }
    }
    render() {
        let { searchBtnFlag } = this.state
        return (
            <View className='SearchBox'>
                <Image className='searchImg' src={searchImg}></Image>
                <Input onInput={(e) => {
                    this.setState({
                        searchBtnFlag: !!e.detail.value,
                        keywords: e.detail.value
                    })
                }} placeholder='输入搜索的内容' className='input' type="text" />
                <View
                    onClick={() => {
                        this.props.onAction({
                            type: 'onSub',
                            data: {
                                keywords: this.state.keywords
                            }
                        })
                    }}
                    hover-class='searchBtnHover' className={'searchBtn ' + (searchBtnFlag ? 'searchBtnActive' : 'searchBtnDis')}>搜索</View>
            </View>
        )
    }
}
