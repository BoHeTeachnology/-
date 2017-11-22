import React from 'react';


import { Router, DefaultRoute, Route, NotFoundRoute, Redirect,IndexRoute} from 'react-router';


import DashBoard  from 'doctortool/doctorcenter/main.js'

import ToOrderClinic  from 'doctortool/doctorcenter/orderclinic.js'

import ToOrderDate  from 'doctortool/doctorcenter/orderdate.js'

import ToOrderTime  from 'doctortool/doctorcenter/ordertime.js'

import ToOrderSuccess  from 'doctortool/doctorcenter/ordersuccess.js'



const App = ({ children }) => (
  <div>
    {children || "ddddd"}
  </div>
)


function requireAuth(nextState, replaceState) {

  //if ((__SERVER__==false)&&localStorage&&(!localStorage.token))
  //    replaceState({ nextPathname: nextState.location.pathname }, '/login')



}

const routes = (
      <Route path="/doctorasist" component={ App }>
        <IndexRoute component={ DashBoard }/>
        <Route path="/doctorasist/doctorcenter/toOrderDate"   component={ ToOrderDate }/>
        <Route path="/doctorasist/doctorcenter/toOrderTime"   component={ ToOrderTime } />
        <Route path="/doctorasist/doctorcenter/toOrderClinic/:clinicname/:clinicaddress/:visitdate/:visittime/:week/:clinicid" component={ ToOrderClinic } />
        <Route path="/doctorasist/doctorcenter/toOrderSuccess/:clinicname/:clinicaddress/:visitdate/:visittime/:week/:patientName/:patientPhone" component={ ToOrderSuccess }/>
      </Route>
)

export default routes
