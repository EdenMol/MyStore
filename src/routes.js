import Home from './components/Home'
import Sell from './components/FollowupOrSell'
import Buy from './components/CoinsListAndBuy'

export const routes =[
    {path:'/', component:Home, name:'home'},
    {path:'/sell', component:Sell,name:'sell'},
    {path:'/buy', component:Buy,name:'buy'},
]