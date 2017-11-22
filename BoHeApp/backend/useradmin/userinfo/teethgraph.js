import React , { Component } from 'react';

import {
    push
} from 'react-router-redux';

import { login } from 'backend/redux/reducers/auth.js'

import {
    connect
} from 'react-redux';

import Nav from './nav.js'
import { Header } from './view/baseinfo/header.js'

import {
	isLoaded as isAuthLoaded,
	load     as loadAuth,
	logout
} from 'backend/redux/reducers/auth';

import {
    LoadedorLoading as successorLoadingm,
    load as loadMteeth,
    switchteeth as switchteethm,
    switchache as switchachem,
    switchtooth as switchtoothm,
    create_teeth as create_mteeth,
    update_teeth as update_mteeth
} from 'backend/redux/reducers/mteeth_status';

import {
    LoadedorLoading as successorLoadingc,
    load as loadCteeth,
    switchteeth as switchteethc,
    switchache as switchachec,
    switchtooth as switchtoothc,
    update_teeth as update_cteeth,
    create_teeth as create_cteeth
} from 'backend/redux/reducers/cteeth_status';



import {
    asyncConnect
} from 'redux-connect'

import {
	TeethShow
}  from './view/teeth/teethshow.js'

import {
	TeethEdit
}  from './view/teeth/teethedit.js'

import {
	TeethHeader
}  from './view/teeth/teethheader.js'

var __asyncEvent = function({ dispatch, getState,userid }) {

      let state = getState();
      let user = state.getIn(['auth', 'user']).toJS();
      let patient;
      let idx = state.getIn(['user_patient','users']).findIndex(value => value.get('id') == userid)
      if(idx >= 0)
         patient =  state.getIn(['user_patient','users',idx]).toJS();
      else if(state.getIn(['user_patient','newuser','id']) == userid){
         patient =  state.getIn(['user_patient','newuser']).toJS();
      }
      if(!patient){
         return Promise.reject();
      }
      console.log('{{{[[[}}}}[]]]]]')
      console.log(patient);
      if (patient.teethtype == 'M')
          return dispatch(loadMteeth({ user, patient, userid, refresh: { flag: true } }));
      else if (patient.teethtype == 'C')
          return dispatch(loadCteeth({ user, patient, userid, refresh: { flag: true } }));
      else {
        console.log('#####!!!')
          return Promise.all([dispatch(loadMteeth({ user, patient, userid, refresh: { flag: true } })), dispatch(loadCteeth({ user, patient, userid, refresh: { flag: true } }))])
      }

}

export const asyncEvent =  [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())){

            return dispatch(loadAuth(params)).then(function() {
                let userid = getState().getIn(['user_patient', 'frontuserinfo','id'])
                if (!(successorLoadingm(getState(),userid)||successorLoadingc(getState(),userid))){
                         return __asyncEvent({ dispatch, getState, userid })
                }
                else
                    return Promise.resolve();
            })

        }else{
             let userid = getState().getIn(['user_patient', 'frontuserinfo','id'])
             if (!(successorLoadingm(getState(),userid)||successorLoadingc(getState(),userid))){
                       return __asyncEvent({ dispatch, getState, userid });
             }
             else
                   return Promise.resolve();
        }
    }
}];

@asyncConnect(asyncEvent)
@connect(
    state => {
        return {
        	  auth : state.get('auth'),
            mteeth_ui: state.getIn(['mteeth_status','teeth_ui']),
            cteeth_ui: state.getIn(['cteeth_status','teeth_ui'])
        }
    }, { pushState: push ,switchteethm,switchteethc,switchachem,switchachec,switchtoothm,switchtoothc,update_mteeth,update_cteeth,create_mteeth,create_cteeth })
export default  class TeethGraph extends Component{
   constructor(props) {
       // code
       super(props);
       var teethtype = 'M';
       var mteeth = this.props.mteeth_ui.get('teeth').toJS();
       var cteeth = this.props.cteeth_ui.get('teeth').toJS();
       mteeth.map((item)=>{
          if(item.ache.length > 0)
            teethtype = 'M'
       })
       cteeth.map((item)=>{
          if(item.ache.length > 0)
            teethtype = 'C'
       })
       this.state = { check: true, edit: false, add: false ,teethtype };
   }
   toMteeth() {
      this.setState({...this.state,teethtype:'M'})
   }
   toCteeth() {
      this.setState({...this.state,teethtype:'C'})
   }
   toAdd() {
       var teeth_ui = (this.props.teethtype == 'M') ? this.props.mteeth_ui : this.props.cteeth_ui;
       var addtime = teeth_ui.get('time');
       this.setState({...this.state, check: false, edit: false, add: true, addtime })
   }
   save(){
      if(this.state.teethtype == 'M')
        this.props.update_mteeth({ post_success:(::this.toCheck),teeth_ui:this.props.mteeth_ui.toJS() })
      else if(this.state.teethtype == 'C')
        this.props.update_cteeth({ post_success:(::this.toCheck),teeth_ui:this.props.cteeth_ui.toJS() })

   }
   add(){
      if(this.state.teethtype == 'M')
        this.props.create_mteeth({ post_success:(::this.toCheck),teeth_ui:this.props.mteeth_ui.toJS() })
      else if(this.state.teethtype == 'C')
        this.props.create_cteeth({ post_success:(::this.toCheck),teeth_ui:this.props.cteeth_ui.toJS() })
   }
   toEdit() {
       this.setState({ ...this.state, check: false, edit: true, add: false })
   }
   toCheck() {
       this.setState({ ...this.state, check: true, edit: false, add: false })
   }
   changeEditTime(ev) {
       (this.state.teethtype == 'M') ? this.props.switchteethm({ idx: ev.target.value }): this.props.switchteethc({ idx: ev.target.value })

   }
   changeCheckTime(ev) {
       (this.state.teethtype == 'M') ? this.props.switchteethm({ idx: ev.target.value }): this.props.switchteethc({ idx: ev.target.value })

   }
   componentWillMount() {

       // var teethtype = (((this.props.mteeth_ui.get('size') >= 0)||(this.props.cteeth_ui.get('size') == 0)) ? 'M' : 'C');
       // this.setState({...this.state, teethtype })
   }
   componentWillUpdate() {

   }
   componentWillReceiveProps(nextProps){
       //var teethtype = (((nextProps.mteeth_ui.get('size') >= 0)||(nextProps.cteeth_ui.get('size')==0)) ? 'M' : 'C');
       //var curToothName = ((nextProps.mteeth_ui.get('size') >= 0)||(nextProps.cteeth_ui.get('size')==0))? nextProps.mteeth_ui.get('toothname'):nextProps.cteeth_ui.get('toothname')
        var curToothName = (this.state.teethtype == 'M')? nextProps.mteeth_ui.get('toothname'):nextProps.cteeth_ui.get('toothname')
       if(curToothName)
         this.setState({...this.state,curToothName })
       else
         this.setState({...this.state })
   }
   clickOnTooth(ev, toothname) {
       if(this.state.teethtype == 'M'){
           this.props.switchtoothm({ toothname })
       }else{
           this.props.switchtoothc({ toothname })
       }
       //this.setState({...this.state, curToothName: toothname })
   }
   clickOnMAche(ev, acheidx, curToothName,status) {
       this.props.switchachem({ acheidx, curToothName,status })
   }
   clickOnCAche(ev, acheidx, curToothName,status) {
       this.props.switchachec({ acheidx, curToothName,status })
   }
   render(){

      console.log(':::::::');
      if(!this.props.mteeth_ui){
        return <div/>
      }
      console.log(this.props.mteeth_ui.toJS());
      console.log(this.props.cteeth_ui.toJS());
      var size = this.props.mteeth_ui.getIn(['size'])
   	  if(this.props.auth.get('user')){
        return  (<div>
                   {
                       TeethHeader({
                           edit: (this.state.edit),
                           check: (this.state.check),
                           add: (this.state.add),
                           addTime: (this.state.addtime),
                           teeth_ui: ((this.state.teethtype == 'M') ? this.props.mteeth_ui.toJS() : this.props.cteeth_ui.toJS()),
                           toAdd: (::this.toAdd),
                           toEdit: (::this.toEdit),
                           toCheck: (::this.toCheck),
                           saveTeethGraph: (::this.save),
                           addTeethGraph: (::this.add),
                           changeCheckTime: (::this.changeCheckTime),
                           changeEditTime: (::this.changeEditTime),
                           size
                       })
                   } {  
                       this.state.check ? TeethShow({
                           teethtype: this.state.teethtype,
                           mteeth_ui: this.props.mteeth_ui ? this.props.mteeth_ui.toJS() : {},
                           cteeth_ui: this.props.cteeth_ui ? this.props.cteeth_ui.toJS() : {},
                           toMteeth: (::this.toMteeth),
                           toCteeth: (::this.toCteeth)
                       }) : TeethEdit({
                           teethtype: this.state.teethtype,
                           mteeth_ui: this.props.mteeth_ui ? this.props.mteeth_ui.toJS() : {},
                           cteeth_ui: this.props.cteeth_ui ? this.props.cteeth_ui.toJS() : {},
                           toMteeth: (::this.toMteeth),
                           toCteeth: (::this.toCteeth),
                           clickOnTooth:(::this.clickOnTooth),
                           curToothName:(this.state.curToothName),
                           clickOnMAche:(::this.clickOnMAche),
                           clickOnCAche:(::this.clickOnCAche)

                       })

                   }
                </div>)
            }
          }
       }


