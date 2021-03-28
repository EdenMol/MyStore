import Vue from 'vue'
import Vuex from 'vuex'
import allCoins from './modules/allCoins'
import followup from './modules/followup'

import * as actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules:{
       
        allCoins,
        followup
    }

})