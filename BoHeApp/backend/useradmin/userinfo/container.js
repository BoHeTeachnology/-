import React , { Component,PropTypes } from 'react';

import {
    push
} from 'react-router-redux';

import { login } from 'backend/redux/reducers/auth.js'

import {
    connect
} from 'react-redux';

import {
    asyncConnect
} from 'redux-connect'

import {
  isLoaded as isAuthLoaded,
  load     as loadAuth,
  logout
} from 'backend/redux/reducers/auth';

import Nav from './nav.js'
import { Header } from './view/baseinfo/header.js'
import { hasRelation, frontUserForInfo  } from 'backend/redux/reducers/user_patient.js'


var __asyncEvent = function({ dispatch, getState }) {
    let state = getState();
    let userid = state.getIn(['user_patient', 'frontuserinfo','id']);
    return dispatch(hasRelation({ id:userid }))
}
export const asyncEvent =  [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())){
          console.log("his login!!!!!!!!!!!!!!!!!!11")
            return dispatch(loadAuth(params)).then(function() {
                    return Promise.resolve();
            })
        }else{
            console.log("his login!!!!!!!!!!!!!!!!!!33");
            return __asyncEvent({ dispatch, getState })
        }
    }
}];

@asyncConnect(asyncEvent)
@connect(
    state => {
        var idx = state.getIn(['user_patient','frontuserinfo','idx']);
        var id = state.getIn(['user_patient','frontuserinfo','id']);
        var isRelation = state.getIn(['user_patient','users',idx,'isRelation']);
        var user = state.getIn(['user_patient','users',idx]);
        var baseinfo = state.getIn(['user_patient','users',idx,'baseinfo']);
        return {
            auth : state.get('auth'),
            isRelation:isRelation,
            idx,
            baseinfo,
            user
        }
    }, { pushState: push,frontUserForInfo })
export default  class Container extends Component{
    constructor(props) {
        // code
      super(props);
      this.state = {toShowData:function(){
          return  <div/>
      }};
    }
    static contextTypes = {
        store: PropTypes.object.isRequired,
    };
    static childContextTypes = {
         showUserData: React.PropTypes.func.isRequired
    };

    getChildContext(){
        return {
            showUserData: (this.showUserData.bind(this))
        }
    }
    showUserData({ asyncProcess,itemid,comCreater }){

        const promises = [];
        var self = this;
        console.log(this.context.store)
        console.log("sssseeeewwwwww")
        asyncProcess.forEach(function(p){
             promises.push(p.promise({store:self.context.store,params:{}}))
        })

        Promise.all(promises).then(function(s){
          self.setState({
            toShowData:function(){
              return comCreater()
            }
        })
        },function(e){

        })
    }
    toMainUser(ev,userid){

      ev.stopPropagation();
      console.log(userid);
      let users = this.props.users.toJS();
      console.log(users);
      var that = this;
      users.map((item,idx)=>{
        if(item.id == userid ){

          that.props.frontUserForInfo({ idx,id:userid })
          var data = that.props.users.toJS();
          that.context.showRight({
              asyncProcess:containerasyncEvent,
              comCreater:function(){
                 return <UserInfoCom data={data}/>
              }
          })

        }else{

        }
      })
    }
    render(){
      console.log('PPPPOOOO')
      if(this.props.idx == 'add'){
        var isRelation = '';
        var baseinfo = '';
      }else{
        var isRelation = (this.props.isRelation=='')?'':(this.props.isRelation.toJS());
        var baseinfo = this.props.baseinfo?this.props.baseinfo.toJS():this.props.user.toJS();
      }
      console.log(isRelation);
      return (<div style={{height:"100%"}}>
               { Header({
                ...baseinfo,
                isRelation,
                toMainUser:(::this.toMainUser)
               }) }
               <div className="add-box-container">
               <div className="user_main_top">
               <Nav isRelation={isRelation}/>
                 {this.state.toShowData()}
               </div>
               </div>
              </div>)
   }
}