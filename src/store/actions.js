import axios from 'axios'

export const loadData = ({commit})=>{
    axios.get('/coinsTrader.json')
    .then(res =>{
        if(res.data){
            const data = res.data
            let coins,coinFollowup = []
            let buddget = null
            coins = data.coins
            coinFollowup = data.followup
            buddget = Number(data.buddget)
            const followup = { 
                coinFollowup,
                buddget
            }
            commit('SET_COINS',coins)
            commit('SET_FOLLOWUP_COINS',followup)
        }
    })
    .catch(error => console.log('error',error))
}