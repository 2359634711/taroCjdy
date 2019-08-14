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
    static defaultProps = {
        referInfo: {
            list: []
        }
    }
    constructor(props) {
        super(props);
        this.state = this.props
    }
    render() {
        let { referInfo } = this.props;
        console.log(referInfo)
        return (
            <View className='referBox'>
                <View className='titleBox fontTitle'>{referInfo.title}</View>

                <ScrollView scrollX>
                    <View className='scrollView'>
                        {referInfo.list.map(val => (
                            <View key={val.id} className='scrollItem'>
                                <Image mode='aspectFill' src={val.thumb}></Image>
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
