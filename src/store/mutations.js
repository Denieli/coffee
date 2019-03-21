import {
    RECEIVE_COFFEE
}from './mutation-types'

export default{
    [RECEIVE_COFFEE](state,{coffee}){
        state.coffee=coffee
    }
}