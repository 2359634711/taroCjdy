import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import './qrPage.scss'
const { getGroupQr } = require('../../../../utils/api')
interface IState {
    img: string
}
export default class qrPage extends Component<any, IState> {
    static config: Config = {
        navigationBarTitleText: '邀请二维码'
    }
    componentWillMount() {
        getGroupQr({ group_id: this.$router.params.groupId }).then(res => {
            this.setState({
                img: res.data.img
            })
        })
    }
    render() {
        let { img } = this.state;
        return (
            <View>
                <Image onClick={() => {
                    Taro.previewImage({ urls: [img] })
                }} mode='widthFix' src={img} className='qrImg'></Image>
            </View>
        )
    }
}
