import { Component, Config } from "@tarojs/taro";
import { View, Image, Swiper, SwiperItem } from "@tarojs/components";
import { getGroupFromId } from '../../../utils/api'
import './groupDetail.scss'

interface IProps {
    groupInfo: any
}
export default class groupDetail extends Component<IProps, any> {
    static config:Config = {
        navigationBarBackgroundColor: '#1296db',
        navigationBarTextStyle: 'white'
    }
    constructor(props) {
        super(props);
        this.state = {
            groupInfo: {}
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
        let { groupInfo } = this.state;
        return (
            <View>
                <View className='topBack'></View>
                <View className='infoBox'>
                    <Image className='avatar' src={groupInfo.avatar}></Image>
                    <View className='title'>{groupInfo.title}</View>
                    <View className='info'>{groupInfo.info}</View>
                </View>

                <Swiper className='swiper' autoplay circular>
                    {groupInfo.banner_list.map(val => (
                        <SwiperItem>
                            <Image className='image' mode='widthFix' src={val}></Image>
                        </SwiperItem>
                    ))}
                </Swiper>

            </View>
        )
    }
}
