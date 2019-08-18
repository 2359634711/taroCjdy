import { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import './cookie.scss'

export default class cookie extends Component {
    static config: Config = {
        navigationBarTitleText: 'cookie协议'
    }
    render() {
        return (
            <View>
                <text>
                    1、应用包含前端页面展示和后端服务器数据交互。\n\n
                    2、前端页面将涉及到用户部分信息的获取，这些信息将通过https协议安全传输至远程服务器。\n\n
                    3、以便更好的服务，部分信息将会保留在远程服务器，服务器是安全可靠的，不会向任何地方展示这些信息。\n\n
                    4、远程服务器将有一些爬虫相关的操作，以获取特性的前端内容，遵守robots协议。\n\n
                    5、在某些服务中，远程服务器可能会使用用户的cookies，但并不会永久保存在数据库中。\n\n
                </text>
            </View>
        )
    }
}
