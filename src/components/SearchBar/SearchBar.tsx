import { Component } from "@tarojs/taro";
import { View, Image, Input } from "@tarojs/components";
import './SearchBar.scss'
import '../../commonStyles/font.scss'

interface IProps {
    showType: number,//0是浮动按钮 1是条形搜索框
    onAction: Function
}

export default class SearchBar extends Component<IProps, any> {
    render() {
        let searchBar;
        if (this.props.showType == 1) {
            searchBar = (
                <View className='inputBox'>
                    <Image onClick={() => {
                        this.props.onAction({
                            type: 'open',
                            data: {}
                        })
                    }} src={require('../../res/icon/search.png')} ></Image>
                    <Input placeholder='请输入搜索的内容'></Input>
                </View>
            )
        } else {
            searchBar = (
                <View onClick={() => {
                    this.props.onAction({
                        type: 'open',
                        data: {}
                    })
                }
                } className='searchBtn'>
                    <Image src={require('../../res/icon/search.png')}></Image>
                </View>
            )
        }

        let title = (
            <View className='title fontTitle'>搜索</View>
        )
        return (
            <View className='searchBar' style={this.props.showType == 1 ? 'width: 100%;background:#fff;': ''}>
                {this.props.showType == 1 && title}
                {searchBar}
            </View>
        )
    }
}
