import React from 'react';


import { Router, DefaultRoute, Route, NotFoundRoute, Redirect,IndexRoute} from 'react-router';
import  TransferCenter  from './transfercenter/transfercenter.js'
import  Center  from './usercenter/center.js'
import  Myorder  from './usercenter/myorder.js'
import  Outplan  from './usercenter/outplan.js'
import  Wallet  from './usercenter/wallet.js'
import  Notification  from './usercenter/notification.js'
import  SetNotification  from './usercenter/setnotification.js'
import  Setting  from './usercenter/setting.js'
import  TransferSuccess  from './transfercenter/transfersuccess.js'
import  OrderSuccess  from './transfercenter/ordersuccess.js'
import  OrderDetail  from './transfercenter/orderdetail.js'


var store_local;

const App = ({ children }) => (
  <div>
    {children || "ddddd"}
  </div>
)

const UserCenter =  ({ children }) => (
  <div>
    {children}
  </div>
)

const DoctorCenter =  ({ children }) => (
  <div>
    {children}
  </div>
)

function requireAuth (nextState, replaceState) {
  const state = store_local.getState()
  const auth = state.getIn(['auth','user']);
  console.log("UUU@@@@@@@@");
  //if(!auth)

}

function handleUpdate(){
  let { action } = this.state.location;
  if(action == 'PUSH'){
    window.scrollTo(0,0);
  }
}


const routes = (


      <Route path="/" name="/"  component={ App } >
          <Route path="/doctorapp/center" name="/doctorapp/center"  component={ Center }/>
          <Route path="/doctorapp/transfercenter" name="/doctorapp/transfercenter"  component={ TransferCenter }/>
          <Route path="/doctorapp/myorder" name="/doctorapp/myorder"  component={ Myorder }/>
          <Route path="/doctorapp/outplan" name="/doctorapp/outplan"  component={ Outplan }/>
          <Route path="/doctorapp/wallet" name="/doctorapp/wallet"  component={ Wallet }/>
          <Route path="/doctorapp/notification" name="/doctorapp/notification"  component={ Notification }/>
          <Route path="/doctorapp/setting" name="/doctorapp/setting"  component={ Setting }/>
          <Route path="/doctorapp/ordersuccess" name="/doctorapp/ordersuccess"  component={ OrderSuccess }/>
          <Route path="/doctorapp/transfersuccess" name="/doctorapp/transfersuccess"  component={ TransferSuccess }/>
          <Route path="/doctorapp/orderdetail" name="/doctorapp/orderdetail"  component={ OrderDetail }/>
          <Route path="/doctorapp/setnotification" name="/doctorapp/setnotification"  component={ SetNotification }/>


      </Route>
)

export default routes

export const injectStore = (

  store_global

) => {

  store_local = store_global;

}
