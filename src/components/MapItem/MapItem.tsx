
import { View, Map } from "@tarojs/components";
import './MapItem.scss'
import Taro, { Component } from "@tarojs/taro";
const pinImg = require('../../res/icon/pin.png')

interface IProps {
    markList: IMarkItem[],
    onAction: Function
}

export interface IMarkItem {
    latitude: number,
    longitude: number,
    id?: string,
    title?: string,
    info?: string,
    callout?: any
}

export default class MapItem extends Component<IProps, any> {
    static defaultProps = {
        markList: []
    }
    constructor(props) {
        super(props)
    }

    markertap(e) {
        console.log(e)
        this.props.onAction({
            type: 'onMarkerTap',
            data: e
        })
    }
    render() {
        let { markList } = this.props;
        let markers = markList.map(val => (
            {
                latitude: val.latitude,
                longitude: val.longitude,
                iconPath: pinImg,
                height: 30,
                width: 30,
                id: Number(val.id),
                callout: {
                    content: val.title+'\n点击查看详情' || '',
                    fontSize: 12,
                    borderRadius: 5,
                    padding: 10,
                    display: 'ALWAYS' as 'ALWAYS',
                    textAlign: 'center' as 'center',
                    color: '#1c1c1c',
                    borderWidth: 1,
                    bgColor: '#ffffff',
                    borderColor: '#fffff'
                }
            }
        ))
        let latitude = 0;
        let longitude = 0;
        switch (markers.length) {
            case 0: {
                latitude = 46.592136;
                longitude = 125.153431;
                break;
            }
            case 1: {
                latitude = markers[0].latitude;
                longitude = markers[0].longitude;
                break;
            }
            default: {
                break;
            }
        }

        return (
            <View className='mapBox'>
                <Map markers={markers} onCalloutTap={this.markertap.bind(this)} onMarkerTap={this.markertap.bind(this)} latitude={latitude} longitude={longitude} />
            </View>
        )
    }
}