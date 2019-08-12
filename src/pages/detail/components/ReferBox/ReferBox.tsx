import { View, ScrollView, Image } from '@tarojs/components';
import { Component } from '@tarojs/taro';
import './ReferBox.scss'
import '../../../../commonStyles/font.scss'
interface IProps {
    referInfo: IReferInfo
}
interface IState {
    referInfo: IReferInfo
}
export interface IReferInfo {

    title: string,
    list: IReferItem[]
}
interface IReferItem {
    id: number,
    title: string,
    thumb: string,
    info?: string
}
export default class ReferBox extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = this.props
    }
    render() {
        let referInfo = this.state.referInfo;
        return (
            <View className='referBox'>
                <View className='titleBox fontTitle'>{referInfo.title}</View>

                <ScrollView scrollX>
                    <View className='scrollView'>
                        {referInfo.list.map(val => (
                            <View className='scrollItem'>
                                <Image mode='aspectFill' src={require('../../../../res/icon/swiper3.jpg')}></Image>
                                <View className='infoBox'>
                                    <View className='title '>{val.title}</View>
                                    {val.info && <View className='info '>{val.info}</View>}
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
