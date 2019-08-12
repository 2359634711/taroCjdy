import { Component, Config } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import InfoBox from './components/InfoBox/InfoBox'
import ReferBox, { IReferInfo } from './components/ReferBox/ReferBox'
import RichDetail from './components/RichDetail/RichDetail'
import './detail.scss'

interface IProps {

}
interface IState {
    referInfo: IReferInfo
}

export default class Detail extends Component<IProps, IState>{
    config: Config = {
        navigationBarTitleText: '详情',
    }
    constructor(props) {
        super(props);
        this.state = {
            referInfo: {
                title: '推荐菜',
                list: [
                    {
                        id: 0,
                        title: '扬州炒饭',
                        thumb: '../../res/icon/swiper2.jpg',
                        info: '第一窗口，少油、美味'
                    },
                    {
                        id: 0,
                        title: '扬州炒饭',
                        thumb: '../../res/icon/swiper2.jpg',
                        info: '第一窗口，少油、美味'
                    },
                    {
                        id: 0,
                        title: '扬州炒饭',
                        thumb: '../../res/icon/swiper2.jpg',
                        info: '第一窗口，少油、美味'
                    },
                    {
                        id: 0,
                        title: '扬州炒饭',
                        thumb: '../../res/icon/swiper2.jpg',
                        info: '第一窗口，少油、美味'
                    },
                    {
                        id: 0,
                        title: '扬州炒饭',
                        thumb: '../../res/icon/swiper2.jpg',
                        info: '第一窗口，少油、美味'
                    }
                ]
            }
        }
    }
    render() {
        let referInfo = this.state.referInfo
        return (
            <View>
                <Swiper
                    indicatorColor='#999'
                    indicatorActiveColor='#333'
                    circular
                    indicatorDots
                    autoplay>
                    <SwiperItem style='top: 0'>
                        <Image mode='aspectFill' src={require('../../res/icon/swiper1.jpg')}></Image>
                    </SwiperItem>
                    autoplay>
                    <SwiperItem style='top: 0'>
                        <Image mode='aspectFill' src={require('../../res/icon/swiper2.jpg')}></Image>
                    </SwiperItem>
                    autoplay>
                    <SwiperItem style='top: 0'>
                        <Image className='' mode='aspectFill' src={require('../../res/icon/swiper3.jpg')}></Image>
                    </SwiperItem>
                </Swiper>



                <InfoBox />

                <ReferBox referInfo={referInfo} />

                <View className='detailBox'>
                    <View className='title'></View>
                </View>
                <RichDetail />
            </View >
        )
    }
}
