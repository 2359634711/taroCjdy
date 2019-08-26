import Taro, { Component } from "@tarojs/taro";
import { View, Input, Form, Button, Textarea } from "@tarojs/components";
import { aplyGroup } from '../../../utils/api'
import './joinGroup.scss'

export default class joinGroup extends Component {
    constructor(props) {
        super(props);
    }
    formSubmit(e) {
        let params = e.detail.value;
        console.log(params)
        aplyGroup(params).then(res => {
            console.log(res)
        })

    }
    render() {
        return (
            <View>
                <Form ref='form' onSubmit={this.formSubmit.bind(this)} className='formBox'>
                    <View className='inputItem'>
                        <View className='title'>社团编号</View>
                        <Input type='text' placeholder='请输入社团编号' className='inputVaule' />
                    </View>
                    <View className='inputItem'>
                        <View className='title'>学号</View>
                        <Input name='user' type='text' placeholder='请输入学号' className='inputVaule' />
                    </View>
                    <View className='inputItem'>
                        <View className='title'>姓名</View>
                        <Input name='name' type='text' placeholder='请输入姓名' className='inputVaule'></Input>
                    </View>
                    <View className='inputItem'>
                        <View className='title'>性别</View>
                        <Input className='inputVaule'></Input>
                    </View>
                    <View className='inputItem'>
                        <View className='title'>手机号</View>
                        <Input name='phone' placeholder='请输入手机号' className='inputVaule'></Input>
                    </View>
                    <View className='inputItem'>
                        <View className='title'>部门</View>
                        <Input name='deparment' type='text' placeholder='请输入申请的部门' className='inputVaule'></Input>
                    </View>
                    <View className='inputItem'>
                        <View className='title'>特长</View>
                        <Textarea name='special' placeholder='请输入特长' value='' className='inputVaule' />
                    </View>
                    <Button className='btn' form-type='submit'>
                        提交
                    </Button>
                </Form>
            </View>
        )
    }
}
