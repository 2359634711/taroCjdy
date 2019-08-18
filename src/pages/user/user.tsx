import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import NavBottom from '../../components/NavBottom/NavBottom'
import InfoItem, { IInfoItem } from '../../components/InfoItem/InfoItem'
import './user.scss'
const imgRight = require('../../res/icon/right.png')
interface IState {
    infoList: IInfoItem[]
}
export default class user extends Component<any, IState>{
    static config:Config = {
        navigationBarTitleText: '我的'
    }
    constructor(props) {
        super(props);
        this.state = {
            infoList: [{
                id: 0,
                title: '关于我们',
                icon: '',
                iconArr: imgRight,
                url: '/pages/user/about'
            }, {
                id: 0,
                title: '设置',
                icon: '',
                iconArr: imgRight,
                url: '/pages/user/setting'
            }, {
                id: 0,
                title: 'cookie协议',
                icon: '',
                iconArr: imgRight,
                url: '/pages/user/cookie'
            }]
        }
    }
    render() {
        let { infoList } = this.state
        return (
            <View>
                <View className='userBox'>
                    <Image className='userImg' src=''></Image>
                    <View className='userInfo'>微信用户</View>
                </View>
                <View className='infoBox'>
                    {infoList.map(val => (
                        <InfoItem key={val.title} onClick={() => {
                            console.log(val)
                            if(val.url){
                                Taro.navigateTo({url: val.url})
                            }
                        }} infoItem={val}></InfoItem>
                    ))}
                </View>
                <NavBottom selectedIndex={2} showType={1} />
            </View>
        )
    }
}
