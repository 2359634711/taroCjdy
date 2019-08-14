import { Component, Config } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import InfoBox, { IInfoBox } from './components/InfoBox/InfoBox'
import ReferBox, { IReferInfo } from './components/ReferBox/ReferBox'
import RichDetail from './components/RichDetail/RichDetail'
import './detail.scss'

const { getGoodsDetail } = require('../../utils/api')
interface IProps {

}
interface IState {
    bannerList: string[],
    referInfo: IReferInfo,
    infoBox: IInfoBox
    richNode: any
}

export default class Detail extends Component<IProps, IState>{
    config: Config = {
        navigationBarTitleText: '详情',
    }
    constructor(props) {
        super(props);
        this.state = {
            bannerList: [],
            referInfo: {
                title: '推荐',
                list: []
            },
            infoBox: {
                title: '',
                info: '',
                latitude: '',
                longitude: ''
            },
            richNode: ''
        }
    }
    componentWillMount() {
        let goodsid = this.$router.params.goodsid;
        console.log(goodsid)
        getGoodsDetail({ goodsid }).then(res => {
            let goodsInfo = res.data.data
            console.log(goodsInfo)
            let referInfo = {
                title: '推荐',
                list: goodsInfo.referList
            }
            let infoBox = {
                title: goodsInfo.title,
                info: goodsInfo.info,
                longitude: goodsInfo.longitude,
                latitude: goodsInfo.latitude
            }
            this.setState({
                bannerList: goodsInfo.banner_list,
                referInfo,
                infoBox,
                richNode: goodsInfo.rich.rich_node

            }, () => {
                console.log(this.state)
            })
        })
    }
    render() {
        let { bannerList } = this.state
        let { referInfo } = this.state
        let { infoBox } = this.state
        let { richNode } = this.state
        return (
            <View>
                <Swiper
                    indicatorColor='#999'
                    indicatorActiveColor='#333'
                    circular
                    indicatorDots
                    autoplay>
                    {bannerList.map(val => (
                        <SwiperItem key={val} style='top: 0'>
                            <Image mode='aspectFill' src={val}></Image>
                        </SwiperItem>
                    ))}
                </Swiper>



                <InfoBox infoBox={infoBox} />
                <ReferBox referInfo={referInfo} />


                <View className='detailBox'>
                    <View className='title'></View>
                </View>
                <RichDetail node={richNode} />
            </View >
        )
    }
}
