
const state = {
    buddget:100,
    coins:[]
}

const mutations = {
    'BUY_COIN'(state,{coinId,quantity,coinPrice}){
        const record = state.coins.find((item)=>item.id===coinId)
        if(record){
            record.quantity+=quantity
        }
        else{
            state.coins.push({id:coinId,quantity:quantity})
        }
        const myBuddget = (state.buddget - (coinPrice * quantity)).toFixed(2)
        state.buddget = Number(myBuddget)

    },
    'SELL_COIN'(state,{coinId,quantity,coinPrice}){
        const record =  state.coins.find((item)=>item.id===coinId)
        const indexRecord = state.coins.map(item => item.id).indexOf(coinId);
        if(record.quantity>quantity){
            record.quantity-=quantity
        }
        else{
            state.coins.splice(indexRecord,1)
        }
        const myBuddget = (state.buddget + (coinPrice * quantity)).toFixed(2)
        state.buddget = Number(myBuddget)

    },
    'SET_FOLLOWUP_COINS'(state,payload){
        state.buddget = payload.buddget
        state.coins = payload.coinFollowup ? payload.coinFollowup: []

    }
    
}

const actions = {
    sellCoin:({commit},order)=>{
        commit('SELL_COIN',order)
    },
    
}

const getters = {
    coinFollowup (state, getters) {
        return state.coins.map(coin => {
            const record =  getters.coins.find(item => item.id === coin.id) 
            return {
                id:       coin.id,
                quantity: coin.quantity,
                name:     record.name,
                price:    record.price
            }
        });
    },
    buddget(state){
        return state.buddget
    }

}

export default {state,mutations,actions,getters}