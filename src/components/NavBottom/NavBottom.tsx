import { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import './NavBottom.scss'

const homeImg = require('../../res/icon/map.png')
const homeImgActive = require('../../res/icon/map_active.png')
const classImg = require('../../res/icon/class.png')
const classImgActive = require('../../res/icon/class_active.png')
const userImg = require('../../res/icon/user.png')
const userImgActive = require('../../res/icon/user_active.png')

interface IProps {
    selectedIndex: number,
    showType: number//0消失 1显示
}
export default class NavBottom extends Component<IProps, any> {
    render() {
        let { selectedIndex } = this.props
        let { showType } = this.props
        let navBottom = [{
            id: 0,
            title: '首页',
            img: homeImg,
            imgActive: homeImgActive
        }, {
            id: 1,
            title: '分类',
            img: classImg,
            imgActive: classImgActive
        }, {
            id: 2,
            title: '我的',
            img: userImg,
            imgActive: userImgActive
        }]
        return (
            <View className={'navBack ' + (showType == 0 ? 'navHidden' : '')}>

                <View className='navBottom'>
                    {navBottom.map(val => (
                        <View key={val.id} className={'navItem ' + (val.id == selectedIndex ? 'active' : '')}>
                            <Image src={val.id == selectedIndex ? val.imgActive : val.img}></Image>
                            <View className='title'>{val.title}</View>
                        </View>
                    ))}
                </View>
            </View>
        )
    }
}
