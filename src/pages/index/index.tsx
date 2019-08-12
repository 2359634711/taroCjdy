import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import MapItem from '../../components/MapItem/MapItem'
import MainBox from './components/MainBox/MainBox'
import SearchBar from '../../components/SearchBar/SearchBar'
import CardItem from './components/CardItem/CardItem'

interface IState {
  sceenHeight: number,
  scrollFlag: boolean,
  showType: number
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
  }

  componentWillUnmount() { }

  componentDidShow() {
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
      console.log('open')
      this.setState({
        showType: this.state.showType == 1 ? 0 : 1
      })
    }
  }
  onCardAction(e) {
    console.log(e)
    if (e.type == 'onClick') {
      Taro.navigateTo({ url: '/pages/detail/detail?id=' + e.data.id })
    }
  }
  render() {
    let showType = this.state.showType;
    return (
      <View>
        <SearchBar showType={showType} onAction={(e) => this.onSearchBarAction(e)} />
        <MapItem />
        <MainBox >
          <CardItem onAction={this.onCardAction.bind(this)} />
        </MainBox>
      </View>
    )
  }
}
