import {reqCoffee} from '../api'
import {RECEIVE_COFFEE} from './mutation-types'
export default{
    async getCoffee({commit,state},callback){
        const result= await reqCoffee()
        if(result.code==0){
            const coffee=result.data
            commit(RECEIVE_COFFEE,{coffee})
            callback && callback()
        }
    }
}