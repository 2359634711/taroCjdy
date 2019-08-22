import Taro, { Component, Config, setStorage } from '@tarojs/taro'
import Index from './pages/index'
import { getOpenId } from './utils/api'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/search/search',
      'pages/detail/detail',
      'pages/class/class',
      'pages/user/user',
      'pages/user/about',
      'pages/user/cookie',
      'pages/user/setting',
      'pages/user/edition',
      'pages/group/groupHome/groupHome',
      'pages/group/groupDetail/groupDetail'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount() {
    Taro.login({
      success: (res) => {
        // 换取openid
        getOpenId({ code: res.code }).then((res: any) => {
          setStorage({
            key: 'openid',
            data: res.data.openid
          })
          setStorage({
            key: 'session_key',
            data: res.data.session_key
          })
        })
      }
    })
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
