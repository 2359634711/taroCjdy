import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import MapItem, { IMarkItem } from '../../components/MapItem/MapItem'
import MainBox from './components/MainBox/MainBox'
import SearchBar from '../../components/SearchBar/SearchBar'
import CardItem, { ICardInfo } from './components/CardItem/CardItem'
import { getGoodsTitle, getGoodsDetail } from '../../utils/api'
import NavBottom from '../../components/NavBottom/NavBottom'

interface IState {
  sceenHeight: number,
  scrollFlag: boolean,
  showType: number,//0 搜索小图标 1 搜索bar
  goodTitle: ICardInfo[],
  markList: IMarkItem[]
}

export default class Index extends Component<any, IState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页',
    navigationStyle: 'custom'

  }

  componentWillMount() { }

  componentDidMount() {
    Taro.getSystemInfo({
      success: (res) => {
        this.setState({
          sceenHeight: res.windowHeight,
          showType: 0
        })
      }
    })

    getGoodsTitle().then((res: any) => {
      console.log(res)
      this.setState({
        goodTitle: res.data
      })
    })
  }

  componentWillUnmount() { }

  componentDidShow() {
    this.setState({
      showType: 0
    })
    let goodsid = this.$router.params.goodsid
    this.$router.params.goodsid = ''
    if (goodsid) {
      this.showMapMarkerFromGoodsid(goodsid)
    }
  }

  componentDidHide() { }
  onPageScroll(e) {
    if (e.scrollTop > this.state.sceenHeight * 0.75) {
      this.setState({
        showType: 1
      })
    } else {
      this.setState({
        showType: 0
      })
    }
  }
  onSearchBarAction(e) {
    if (e.type == 'open') {
      this.setState({
        showType: this.state.showType == 1 ? 0 : 1
      })
    }
    if (e.type == 'click') {
      Taro.navigateTo({
        url: '/pages/search/search'
      })
    }
  }
  onCardAction(e) {
    Taro.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
    if (e.type == 'onClick') {
      // Taro.navigateTo({ url: '/pages/detail/detail?goodsid=' + e.data.id })
      let goodsid = e.data.id;
      this.showMapMarkerFromGoodsid(goodsid)
    }
  }
  showMapMarkerFromGoodsid(goodsid) {

    getGoodsDetail({ goodsid }).then((res: any) => {
      this.setState({
        markList: [{
          ...res.data.data
        }]
      })
    })
  }
  render() {
    let { goodTitle } = this.state
    goodTitle = goodTitle || []
    let showType = this.state.showType;
    let { markList } = this.state;
    return (
      <View>
        <SearchBar showType={showType} onAction={(e) => this.onSearchBarAction(e)} />
        <MapItem onAction={(e) => {
          if (e.type == 'onMarkerTap') {
            Taro.navigateTo({
              url: '/pages/detail/detail?goodsid=' + e.data.markerId
            })
          }
        }} markList={markList} />
        <MainBox >
          {goodTitle.map(val => (
            <CardItem key={val.classId} cardInfo={val} onAction={this.onCardAction.bind(this)} />
          ))}

        </MainBox>

        <NavBottom showType={showType} selectedIndex={0} />
      </View>
    )
  }
}
