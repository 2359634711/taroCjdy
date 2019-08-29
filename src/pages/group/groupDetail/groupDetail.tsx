import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image, Swiper, SwiperItem } from "@tarojs/components";
import { getGroupFromId } from '../../../utils/api'
import InfoItem, { IInfoItem } from '../../../components/InfoItem/InfoItem'
import './groupDetail.scss'
const iconArr = require('../../../res/icon/right.png')
const qrCode = require('../../../res/icon/qrCode.png')
interface IProps {
    groupInfo: any
}
interface IState {
    groupInfo: any,
    infoList: IInfoItem[]
}
export default class groupDetail extends Component<IProps, IState> {
    static config: Config = {
        navigationBarBackgroundColor: '#1296db',
        navigationBarTextStyle: 'white'
    }
    constructor(props) {
        super(props);
        this.state = {
            groupInfo: {},
            infoList: [{
                id: 0,
                title: '社团规模',
                value: '40人',
                iconArr
            }, {
                id: 1,
                title: '部门',
                iconArr
            }, {
                id: 2,
                title: '活动',
                iconArr
            }]
        }
    }
    componentWillMount() {
        getGroupFromId({ groupId: this.$router.params.id }).then((res: any) => {
            console.log(res)
            if (!res.data.err) {
                this.setState({
                    groupInfo: res.data.data
                })
            }
        })
    }
    render() {
        let { groupInfo, infoList } = this.state;
        return (
            <View>
                <View className='topBack'>
                    <Image onClick={() => {
                        Taro.navigateTo({ url: 'qrPage/qrPage?groupId=' + this.state.groupInfo.id })
                    }} src={qrCode} className='qrBtn'></Image>
                </View>
                <View className='infoBox'>
                    <Image mode='aspectFill' className='avatar' src={groupInfo.avatar}></Image>
                    <View className='title'>{groupInfo.title}</View>
                    <View className='info'>{groupInfo.info}</View>
                </View>

                <Swiper className='swiper' autoplay circular>
                    {groupInfo.banner_list.map(val => (
                        <SwiperItem key={val}>
                            <Image className='image' mode='aspectFill' src={val}></Image>
                        </SwiperItem>
                    ))}
                </Swiper>
                <View className='infoItemBox'>
                    {infoList.map(val => (
                        <InfoItem key={val.id} infoItem={val}></InfoItem>
                    ))}
                </View>

            </View>
        )
    }
}
