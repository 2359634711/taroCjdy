import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import NavBottom from '../../components/NavBottom/NavBottom'
import InfoItem, { IInfoItem } from '../../components/InfoItem/InfoItem'
import './user.scss'
const imgRight = require('../../res/icon/right.png')
interface IState {
    infoList: IInfoItem[]
}
export default class user extends Component<any, IState>{
    constructor(props) {
        super(props);
        this.state = {
            infoList: [{
                id: 0,
                title: '关于我们',
                icon: '',
                iconArr: imgRight
            }, {
                id: 0,
                title: '设置',
                icon: '',
                iconArr: imgRight
            }, {
                id: 0,
                title: 'cookie协议',
                icon: '',
                iconArr: imgRight
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
                        <InfoItem onClick={() => {
                            console.log(val)
                        }} infoItem={val}></InfoItem>
                    ))}
                </View>
                <NavBottom selectedIndex={2} showType={1} />
            </View>
        )
    }
}
