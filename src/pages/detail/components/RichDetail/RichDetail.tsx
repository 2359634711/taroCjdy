import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import './RichDetail.scss'
import '../../../../commonStyles/font.scss'
import ParserRichText from '../../../../components/ParserRichText/parserRichText'

interface IProps {
    node: any
}
export default class RichDetail extends Component<IProps, any>{
    render() {
        return (
            <View className='richBox'>
                <View className='titleBox'>
                    <View className='title fontInfo'>图文详情</View>
                </View>
                <ParserRichText html={this.props.node} selectable></ParserRichText>
            </View>
        )
    }
}
