import Dashboard from "../component/dashboard/Dashboard";
import InfoPage from "../component/infoPage/InfoPage"



export const routes = [
    {
        path:"/Dashboard",
        exact:true,
        component:Dashboard,
        name:"Dashboard",
        menu:true,
    
    },
    {
        path:"/InfoPage/:flightId",
       
        component:InfoPage,
        name:"InfoPage",
        menu:true,
        
    },
]