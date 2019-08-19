import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import InfoItem, { IInfoItem } from '../../components/InfoItem/InfoItem'
import './setting.scss'
const imgRight = require('../../res/icon/right.png')
interface IState {
    infoList: IInfoItem[]
}
export default class setting extends Component<any, IState> {
    constructor(props) {
        super(props);
        this.state = {
            infoList: [
                {
                    id: 0,
                    title: '版本',
                    iconArr: imgRight,
                    url: '/pages/user/'
                }, {
                    id: 1,
                    title: '权限管理',
                    iconArr: imgRight
                }
            ]
        }
    }
    static config: Config = {
        navigationBarTitleText: '设置'
    }
    render() {
        let { infoList } = this.state;
        return (
            <View>
                {infoList.map(val => (
                    <InfoItem key={val.title} infoItem={val} onClick={() => {
                        switch (val.id) {
                            case 0: {
                                Taro.navigateTo({url: '/pages/user/edition'})
                                break;
                            }
                            case 1: {
                                Taro.openSetting()
                                break;
                            }
                            default:break;
                        }
                    }} />
                ))}
            </View>
        )
    }
}
