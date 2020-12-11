import React, {Component}from 'react'
import './login.less'
import { Form, Input, Button} from 'antd'
import { UserOutlined, LockOutlined, RadiusBottomrightOutlined } from '@ant-design/icons'
import {reqLogin} from '../../api'

/*
https://ant.design/components/form/v3-cn/
*/
export default class Login extends Component{
   //定义函数在这里  return里用的时候要this.onFinish函数
   onFinish = (values) => {
    console.log('Received values of form: ', values);
   
        //请求登录
      const {username, password} = values
      reqLogin(username, password).then(reponse=>{
          console.log('success', reponse.data)
      }).catch( error=>{
          console.log('fail', error)
      })

  
   }

  /*handelSubmit=(event)=>{
      
      event.preventDefault()
      this.props.form.validateFields((err,values)=>{
          if(!err){
              //请求登录
            const {username, password} = values
            reqLogin(username, password).then(reponse=>{
                console.log('success', reponse.data)
            }).catch( error=>{
                console.log('fail', error)
            })

          }else{
              console.log('fail')
          }
      });
  }*/

  /*
  对密码进行自定义验证
  */
    validatorPwd=(rule,value)=>{
        if(!value){
            return Promise.reject('Please input your Password!');//验证不通过
        }else if(value.length<4){
            return Promise.reject('Enter a combination of at least four numbers, letters and punctuation  marks');//验证不通过
        }/*else if(!/^[a-zA-Z0-9_-]+$/.test(value)){
            callback('Enter a combination of at least four numbers, letters and punctuation  marks');//验证不通过
        }*/else{
            return Promise.resolve();//验证通过
        }
        
        
    }
    
    render(){
        //定义一个元素变量 调用的时候不需要this 直接
       /* const onFinish = (values) => {
            console.log('Received values of form: ', values);
          }*/
        
        
        return(
            <div className="login">
                <header  className="login-header"> 
                    <h1>React Project: Admin System</h1>
                </header>
                <section className="login-content">
                <h2>Log in</h2>
                <div>  <Form name="normal_login" className="login-form" initialValues={{remember: true,}} onFinish={this.onFinish}>
      <Form.Item name="username" rules={[
          {
            required: true,
            whitespace:true,
            message: 'Please input your Username!',
          },
          {
            min: 4, message:'Enter a combination of at least four numbers, letters and underscore  marks',
          },
          {
            pattern: /^[a-zA-Z0-9_]+$/, message: 'Enter a combination of at least four numbers, letters and underscore  marks',
          },
          
        ]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item name="password" rules={[
         {
            validator:this.validatorPwd,
          }
        ]}>
        <Input 
          prefix={<LockOutlined className="site-form-item-icon" />} 
          type="password"
          placeholder="Password"/>
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>  
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>  
      </Form.Item>
    </Form></div>

              
                </section>
            </div>
        )
    }

}

/*
1.高阶函数
1）一类特别函数
  a 接受函数类型的参数
  b 函数的返回值是个函数
2）常见
   a.定时器：setTimeout()/setInterval()
   b.Promise: Promise(()=>{}) then (value=>{}, reason=>{})
   c.数组遍历相关的方法：forEach()/filter()/map()/reduce()/find()/findIndex()
   d.函数对象的bind()
3）高阶函数更新动态，更加具有扩展性
2.高阶组件
  1）本质就是一个函数
  2）接受一个组件（被包装组件），返回一个新组件（包装组件），新组件内部渲染被包装组件传入特定属性
  3) 作用：扩展组件的功能
  4) 高阶组件也是高阶函数：接收一个组件函数，返回是一个新的组件函数
*/
/*
包装Form组件生成一个新的组件：Form(Login)
新组件会向Form组件传递一个强大的对象属性：form
*/

/*
1.前台表单验证
2.收集表单输入数据

*/