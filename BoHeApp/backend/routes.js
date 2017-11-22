import React from 'react';


import { Router, DefaultRoute, Route, NotFoundRoute, Redirect,IndexRoute} from 'react-router';


import DashBoard  from 'backend/index.js'

import Login from 'backend/login.js'

import caselist from 'backend/caseadmin/case/caselist.js'

import caseinfo from 'backend/caseadmin/case/caseinfo.js'

import asklist from 'backend/quickask/ask/asklist.js'

import messagelist from 'backend/quickask/message/messagelist.js'


import container_template from 'backend/caseadmin/container_template.js'


const App = ({ children }) => (
  <div>
    {children || "ddddd"}
  </div>
)

const UserAdmin =  ({ children }) => (
  <div>
    {children}
  </div>
)

function requireAuth(nextState, replaceState) {

  //if ((__SERVER__==false)&&localStorage&&(!localStorage.token))
  //    replaceState({ nextPathname: nextState.location.pathname }, '/login')


  console.log("require.....auth")

}

const routes = (
      <Route path="/backend" component={ App }>
        <Route path="/backend/caseadmin/template" component={ container_template } />
        <Route path="/backend/caseadmin/caselist" component={ caselist } />
        <Route path="/backend/caseadmin/caseinfo/:edit/:show" component={ caseinfo } />
        <Route path="/backend/useradmin/index" component={ DashBoard } />
        <Route path="/backend/asklist" component={ asklist } />
        <Route path="/backend/messagelist" component={ messagelist } />
        

        <Route path="login" component={ Login } />
      </Route>
)

export default routes

