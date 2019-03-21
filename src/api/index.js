/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
const BASE_URL = 'http://192.168.2.134:8080'


export const reqCoffee = () => ajax('/coffee')

