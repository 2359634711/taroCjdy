import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image, ScrollView } from "@tarojs/components";
import NavBottom from '../../../components/NavBottom/NavBottom'
import SearchBar from '../../../components/SearchBar/SearchBar'
import NavTitle, { INavTitleItem } from '../../../components/NavTitle/NavTitle'
import LeftScroll from '../LeftScroll/LeftScroll'
import { getGroupAll } from '../../../utils/api'
import './groupHome.scss'

interface IState {
    navTitleList: INavTitleItem[],
    navTitleIndex: number,
    groupList: any,
    departmentList: INavTitleItem[],//院系列表
    departmentIndex: number
}
export default class groupHome extends Component<any, IState> {
    static config: Config = {
        navigationBarTitleText: '社团中心'
    }
    constructor(props) {
        super(props);
        this.state = {
            navTitleList: [{
                id: 0,
                title: '校级社团'
            }, {
                id: 1,
                title: '院级社团'
            }],
            navTitleIndex: 0,
            groupList: [],
            departmentIndex: 0,
            departmentList: [{
                id: 0,
                title: '油工院'
            }, {
                id: 1,
                title: '油工院'
            }, {
                id: 2,
                title: '油工院'
            }, {
                id: 3,
                title: '油工院'
            }, {
                id: 4,
                title: '油工院'
            }, {
                id: 5,
                title: '油工院'
            },  {
                id: 6,
                title: '油工院'
            }, {
                id: 7,
                title: '油工院'
            }, {
                id: 8,
                title: '油工院'
            }, {
                id: 9,
                title: '油工院'
            }, {
                id: 10,
                title: '油工院'
            }, {
                id: 11,
                title: '油工院'
            }, {
                id: 12,
                title: '油工院'
            }, {
                id: 13,
                title: '油工院'
            }, {
                id: 14,
                title: '油工院'
            }, {
                id: 15,
                title: '油工院'
            }, {
                id: 16,
                title: '油工院'
            }, {
                id: 17,
                title: '油工院'
            }, {
                id: 18,
                title: '油工院'
            }, {
                id: 19,
                title: '油工院'
            }]
        }
    }
    componentWillMount() {
        getGroupAll().then((res: any) => {
            console.log(res)
            if (res.data.err) {
                Taro.showToast({ title: res.msg, icon: 'none', duration: 800 })
                return
            } else {
                this.setState({
                    groupList: res.data.data
                })
            }
        })
    }
    render() {
        let { navTitleList, departmentIndex, navTitleIndex, groupList, departmentList } = this.state;
        return (
            <View>
                <SearchBar showType={1} bar={true} onAction={() => {
                    Taro.navigateTo({
                        url: '/pages/search/search?type=group'
                    })
                }} />
                <View className='main'>
                    <View className='navTitle'>
                        <NavTitle selectedIndex={navTitleIndex} navTitleList={navTitleList} onAction={(e) => {
                            console.log(e)
                            if (e.type == 'onItemClick') {
                                this.setState({
                                    navTitleIndex: e.data.id
                                })
                            }
                        }}></NavTitle>
                    </View>
                    <View className='mainBottom'>
                       <View className='leftBox'>

                       <LeftScroll onAction={(e) => {
                            if (e.type == 'onNavLeftItemClick') {
                                this.setState({
                                    departmentIndex: e.data.id
                                })
                            }
                        }} selectedIndex={departmentIndex} navLeftTitleList={departmentList} />
                       </View>
                            <View className='rightBox' >
                                {groupList.map(val => (
                                    <View key={val.id} className='groupItem' onClick={()=>{
                                        Taro.navigateTo({url: '/pages/group/groupDetail/groupDetail?id='+val.id})
                                    }}>
                                        <Image src={val.avatar} />
                                        <View className='title'>{val.title}</View>
                                    </View>
                                ))}
                            </View>
                    </View>

                </View>

                <NavBottom showType={1} selectedIndex={2} />
            </View>

        )
    }
}
