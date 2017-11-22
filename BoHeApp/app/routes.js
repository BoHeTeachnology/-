import React from 'react';


import { Router, DefaultRoute, Route, NotFoundRoute, Redirect,IndexRoute} from 'react-router';

import ToOrder from 'app/toorder/main.js'

import DashBoard  from 'app/usercenter/main.js'

import MineOrder from 'app/usercenter/myorder/mineorder.js'
import MineOrderInfo from 'app/usercenter/myorder/mineorderinfo.js'
import UserInfo from 'app/usercenter/userinfo/userinfo.js'
import MyOrderInfo from 'app/usercenter/myorder/myorderinfo.js'
import MyCases from 'app/usercenter/mycase/mycases.js'
import MyCaseContent from 'app/usercenter/mycase/mycasecontent.js'
import MyCaseDesc from 'app/usercenter/mycase/mycasedesc.js'
import MyBills from 'app/usercenter/mybill/mybills.js'
import MyBillContent from 'app/usercenter/mybill/mybillcontent.js'
import Login from 'app/usercenter/login.js'
import Setting from 'app/usercenter/setting/setting.js'



import FirstPage from 'app/firstpage/firstpage.js'
import DoctorInfo from 'app/doctor/doctorinfo.js'
import OrderInfo from 'app/doctor/orderinfo.js'
import OrderSuccess from 'app/doctor/ordersuccess.js'
import DoctorList from 'app/doctor/doctorlist.js'
import QuickOrder from 'app/firstpage/quickorder.js'
import DoctorCard from 'app/doctor/doctorcard.js'
import AskDoctor from 'app/doctor/askdoctor.js'
import AskQuestion from 'app/doctor/askquestion.js'
import AskQuestionSuccess from 'app/doctor/askquestionsuccess.js'


import TieCard from 'app/doctorcenter/wallet/tiecard.js'
import PhoneConfirm from 'app/doctorcenter/wallet/phoneconfirm.js'
import TieSuccess from 'app/doctorcenter/wallet/tiesuccess.js'
import MyWallet from 'app/doctorcenter/wallet/mywallet.js'
import Detail from 'app/doctorcenter/wallet/detail.js'
import DoctorMain from 'app/doctorcenter/main.js'
import InviteCode from 'app/doctorcenter/invitecode/invitecode.js'
import Mycard from 'app/doctorcenter/mycard/mycard.js'
import BankCard from 'app/doctorcenter/wallet/bankcard.js'
import NoCard from 'app/doctorcenter/wallet/nocard.js'
import MyOrder from 'app/doctorcenter/myorder/myorder.js'
import PriceList from 'app/doctorcenter/myorder/pricelist.js'
import OrderDetail from 'app/doctorcenter/myorder/orderdetail.js'



import WithdrawCashCode from 'app/doctorcenter/wallet/withdrawcashcode.js'
import WithdrawCash from 'app/doctorcenter/wallet/withdrawcash.js'
import WithdrawValidate from 'app/doctorcenter/wallet/withdrawvalidate.js'
import WithdrawSuccess from 'app/doctorcenter/wallet/withdrawsuccess.js'
import WithdrawFail from 'app/doctorcenter/wallet/withdrawfail.js'
import ValidateOne from 'app/doctorcenter/validate/validateone.js'
import ValidateTwo from 'app/doctorcenter/validate/validatetwo.js'
import ValidateThree from 'app/doctorcenter/validate/validatethree.js'
import ValidateSuccess from 'app/doctorcenter/validate/validatesuccess.js'
import ValidateFail from 'app/doctorcenter/validate/validatefail.js'
import IndentyFail from 'app/doctorcenter/wallet/indentyfail.js'

import MyDoctor from 'app/usercenter/mydoctor/myDoctor.js'
import MyQuestion from 'app/usercenter/myquestion/myQuestion.js'
import MyNote from 'app/usercenter/mynote/myNote.js'
import Uploader from 'app/usercenter/upLoador/UpLoador.js'
import QuestionDetail from 'app/usercenter/myquestion/questionDetail.js'

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
      <Route path="/" component={ App } >
        <Route path="usercenter(?)" component={ UserCenter } onEnter={ requireAuth }>
          <IndexRoute component={ DashBoard }/>
          <Route path="/usercenter/toOrder"   component={ ToOrder } />
          <Route path="/usercenter/userinfo"   component={ UserInfo } />
          <Route path="/usercenter/orderlist"  component={ MineOrder } />
          <Route path="/usercenter/orderinfo"  component={ MineOrderInfo } />
          <Route path="/usercenter/myOrderInfo" component={ MyOrderInfo } />
          <Route path="/usercenter/myCases"   component={ MyCases }/>
          <Route path="/usercenter/myCaseContent"   component={ MyCaseContent }/>
          <Route path="/usercenter/myCaseDesc"    component={ MyCaseDesc }/>
          <Route path="/usercenter/myBills" component={ MyBills }/>
          <Route path="/usercenter/myBillContent" component={ MyBillContent }/>
          <Route path="/usercenter/mydoctor" component={ MyDoctor }/>
          <Route path="/usercenter/MyQuestion" component={ MyQuestion }/>
          <Route path="/usercenter/MyQuestionDetail" component={ QuestionDetail }/>
          <Route path="/usercenter/mynote" component={ MyNote } />
          <Route path="/usercenter/setting" component={ Setting } />
        </Route>
        <Route path="doctorcenter(?)" component={ DoctorCenter }>
          <IndexRoute component={ DoctorMain }/>
          <Route path="/doctorcenter/tiecard" component={ TieCard } />
          <Route path="/doctorcenter/phoneconfirm" component={ PhoneConfirm } />
          <Route path="/doctorcenter/tiesuccess" component={ TieSuccess } />
          <Route path="/doctorcenter/mywallet" component={ MyWallet } />
          <Route path="/doctorcenter/detail" component={ Detail } />
          <Route path="/doctorcenter/invitecode" component={ InviteCode } />
          <Route path="/doctorcenter/mycard" component={ Mycard } />
          <Route path="/doctorcenter/bankcard" component={ BankCard } />
          <Route path="/doctorcenter/nocard" component={ NoCard } />
          <Route path="/doctorcenter/myorder" component={ MyOrder } />
          <Route path="/doctorcenter/pricelist" component={ PriceList } />
          <Route path="/doctorcenter/orderdetail" component={ OrderDetail } />


          <Route path="/doctorcenter/withdrawcashcode" component={ WithdrawCashCode } />
          <Route path="/doctorcenter/withdrawcash" component={ WithdrawCash } />
          <Route path="/doctorcenter/withdrawsuccess" component={ WithdrawSuccess } />
          <Route path="/doctorcenter/withdrawfail" component={ WithdrawFail } />
          <Route path="/doctorcenter/withdrawvalidate" component={ WithdrawValidate } />
          <Route path="/doctorcenter/validateone" component={ ValidateOne } />
          <Route path="/doctorcenter/validatetwo" component={ ValidateTwo } />
          <Route path="/doctorcenter/validatethree" component={ ValidateThree } />
          <Route path="/doctorcenter/validatesuccess" component={ ValidateSuccess } />
          <Route path="/doctorcenter/validatefail" component={ ValidateFail } />
          <Route path="/doctorcenter/indentyfail" component={ IndentyFail } />

        </Route>

        <Route path="/usercenter/uploader" component={ Uploader }/>

        <Route path="/firstpage" component={ FirstPage }/>
        <Route path="/doctorinfo/:id/:idx(/:is_login)" component={ DoctorInfo }/>
        <Route path="/orderinfo" component={ OrderInfo }/>
        <Route path="/ordersuccess" component={ OrderSuccess }/>
        <Route path="/doctorlist(/:is_login)" component={ DoctorList }/>
        <Route path="/quickorder" component={ QuickOrder }/>
        <Route path="/doctorcard/:id(/:idx)" component={ DoctorCard }/>
        <Route path="/askdoctor" component={ AskDoctor }/>
        <Route path="/askquestion/:id" component={ AskQuestion }/>
        <Route path="/askquestionsuccess" component={ AskQuestionSuccess }/>




        <Route path="login" component={ Login } />
        <Route path="doctormain" component={ DoctorMain } />
      </Route>
)

export default routes

export const injectStore = (

  store_global

) => {

  store_local = store_global;

}
