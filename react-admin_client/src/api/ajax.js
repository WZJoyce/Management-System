/*
能发送异步ajax请求的函数模块
封装axios库
函数的返回值是promise对象

自己用 axios库写ajax
*/
import axios from 'axios'

export default  function ajax(url, data={}, type='GET' ){
    if(type ==='GET'){
       return axios.get(url, {//发送get请求
           params:data //指定参数
       })
    }else{ //post请求
        return axios.post(url, data)
    }

}


