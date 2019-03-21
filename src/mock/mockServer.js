import data from './data.json'
import Mock from 'mockjs'
Mock.mock("/coffee", {code:0, data:data.coffee } )
