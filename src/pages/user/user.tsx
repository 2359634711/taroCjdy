import Taro, { Component, Config, getStorageSync } from "@tarojs/taro";
import { View, Image, Button } from "@tarojs/components";
import NavBottom from '../../components/NavBottom/NavBottom'
import InfoItem, { IInfoItem } from '../../components/InfoItem/InfoItem'
import { auth, getUserInfo } from '../../utils/api'
import './user.scss'
const imgRight = require('../../res/icon/right.png')
interface IState {
    infoList: IInfoItem[],
    userInfo: any
}
export default class user extends Component<any, IState>{
    static config: Config = {
        navigationBarTitleText: '我的'
    }
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
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
    onGetUserInfo(e) {
        let data = e.detail;
        data.sessionKey = getStorageSync('session_key')
        if (data.encryptedData)
            auth(data).then((res: any) => {
                if (res.data.err) {
                    console.log(res.data.msg)
                }
                this.getUserInfo()
            })

    }
    componentWillMount() {
        this.getUserInfo()
    }
    getUserInfo() {

        getUserInfo().then((res: any) => {
            if (!res.data.err) {
                let data = res.data.data;

                let groupInfoItem: IInfoItem = {
                    title: data.group_id ? '我的社团' : '加入社团',
                    iconArr: imgRight,
                    id: 1,
                    url:  data.group_id ?'/pages/': '/pages/user/joinGroup/joinGroup'
                }

                this.setState({
                    userInfo: data,
                    infoList: [...this.state.infoList, groupInfoItem]
                })
            }
        })
    }
    render() {
        let { infoList } = this.state
        let { userInfo } = this.state
        return (
            <View>
                <View className='userBox'>
                    <Image className='userImg' src={userInfo.avatar_url}></Image>
                    {userInfo.nick_name ?
                        <View className='userInfo'>{userInfo.nick_name}</View> :
                        <Button openType='getUserInfo' onGetUserInfo={this.onGetUserInfo.bind(this)} className='userInfo' >轻触登录</Button>
                    }

                </View>
                <View className='infoBox'>
                    {infoList.map(val => (
                        <InfoItem key={val.title} onClick={() => {
                            console.log(val)
                            if (val.url) {
                                Taro.navigateTo({ url: val.url })
                            }
                        }} infoItem={val}></InfoItem>
                    ))}
                </View>
                <NavBottom selectedIndex={3} showType={1} />
            </View>
        )
    }
}
