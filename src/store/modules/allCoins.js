import {initializeData} from '../../data'

const state = {
    coins:[]
}

const mutations = {
    'SET_COINS'(state,payload){
        state.coins = payload
    },
    'RANDOM_PRICE'(){
        state.coins.forEach(coin => {
            coin.price = (Math.random() + 3).toFixed(2)
            
        })

    }
}

const actions = {
    buyCoin:({commit},order)=>{
        commit('BUY_COIN',order)
    },
    initCoins:({commit})=>{
        commit('SET_COINS',initializeData)
    },
    randomPrice:({commit})=>{
        commit('RANDOM_PRICE')
    }
}

const getters = {
    coins: state=>{
        return state.coins
    },
}

export default {state,mutations,actions,getters}