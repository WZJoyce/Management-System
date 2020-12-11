/*
要求：能根据接口文档定义接口请求
包含应用中所有接口请求函数的模块
每个函数返回值都是promise
*/
import ajax from './ajax'
//login  不能用{} 或者 { return ajax('/login',{username, password}, 'POST') }
export const reqLogin = (username, password) => ajax('/login',{username, password}, 'POST')
//add user
export const reqAddUser = (user) =>ajax('./manage/user/add', user, 'POST')
