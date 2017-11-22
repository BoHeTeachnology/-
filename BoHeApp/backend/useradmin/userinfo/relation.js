import React , { Component } from 'react';

import {
    push
} from 'react-router-redux';


import {
    connect
} from 'react-redux';

import {
  isLoaded as isAuthLoaded,
  load     as loadAuth,
  logout
} from 'backend/redux/reducers/auth';

import {
  load_relation,
  add_relation,
  edit_relation,
  delete_relation
} from 'backend/redux/reducers/user_patient'

import {
    asyncConnect
} from 'redux-connect'

import {
  Relation_ui
} from './view/relation/relation'

var __asyncEvent = function({ dispatch, getState }) {
    let state = getState();
    let userid = state.getIn(['user_patient', 'frontuserinfo','id']);
    return dispatch(load_relation({ userid }))
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
        return {
            auth : state.get('auth'),
            relation: state.getIn(['user_patient','users',idx,'relation']),
            idx : idx,
            id:id
        }
    }, { pushState: push,add_relation,load_relation,edit_relation,delete_relation})

export default  class Relation extends Component{
    constructor(props) {
       super(props);
       this.state = { tipShow:false,calShow:false,tipShowWhere:'',tipDelShow:false }
    }
    add(){
      this.setState({...this.state,tipShow:true,tipShowWhere:'add' });
    }
    close(){
      this.setState({...this.state,tipShow:false,real_name:'',relation:'',phone:'',birth:'',edit_id:''});
    }
    change(ev,type){
      if(type == 'real_name')
        this.setState({...this.state,real_name:ev.target.value})
      else if(type == 'phone')
        this.setState({...this.state,phone:ev.target.value})
      else if(type == 'relation')
        this.setState({...this.state,relation:ev.target.value})
    }
    confirm(where){
      console.log('CONFIRM_____------');
      var that = this;
      let real_name = this.state.real_name;
      let relation = this.state.relation;
      let phone = this.state.phone;
      let birth = this.state.birth;
      let parent_id = this.props.id;
      let edit_id = this.state.edit_id
      if( where == 'add'){
        this.props.add_relation({ real_name,relation,birth,phone,parent_id}).then(()=>{
          that.props.load_relation({userid:parent_id}).then(()=>{
              that.setState({...that.state,tipShow:false,real_name:'',relation:'',phone:'',birth:''});
            })
          });
      }else if(where == 'edit'){
        this.props.edit_relation({id:edit_id,real_name,relation,birth,phone}).then(()=>{
          that.props.load_relation({userid:parent_id}).then(()=>{
              that.setState({...that.state,tipShow:false,real_name:'',relation:'',phone:'',birth:'',edit_id:''});
            })
          });
      }

    }
    edit_rel(item){
      this.setState({...this.state,tipShow:true,edit_id:item.id,tipShowWhere:'edit',real_name:item.real_name,relation:item.relation,phone:item.phone,birth:item.birth});
    }
    click(){
      this.setState({...this.state,calShow:true})
    }
    chooseTime(date){
      let birth =  date.format('YYYY-MM-DD');
      this.setState({...this.state,birth,calShow:false});
    }
    delete_rel(id){
      this.setState({...this.state,delete_id:id,tipDelShow:true})
    }
    closeDel(){
      this.setState({...this.state,delete_id:'',tipDelShow:false})
    }
    confirmDel(){
      var that = this;
      let parent_id = this.props.id;
      let id = this.state.delete_id;
      this.props.delete_relation({id}).then(()=>{
        that.props.load_relation({userid:parent_id}).then(()=>{
          that.setState({...that.state,delete_id:'',tipDelShow:false});
        })
      })
    }
    render(){
      console.log('RRRRREEEEVVVEEEENNNNNGGGGGG');
      if(!this.props.relation){
        return <div/>
      }
      var relations = this.props.relation?this.props.relation.toJS():[];
      console.log(relations);
	  	return (<div>
            {  Relation_ui({
              relations,
              tipShow:this.state.tipShow,
              close:(::this.close),
              add:(::this.add),
              close:(::this.close),
              change:(::this.change),
              real_name:this.state.real_name,
              phone:this.state.phone,
              relation:this.state.relation,
              birth:this.state.birth,
              confirm:(::this.confirm),
              chooseTime:(::this.chooseTime),
              calShow:this.state.calShow,
              click:(::this.click),
              edit_rel:(::this.edit_rel),
              delete_rel:(::this.delete_rel),
              tipShowWhere:this.state.tipShowWhere,
              tipDelShow:this.state.tipDelShow,
              closeDel:(::this.closeDel),
              confirmDel:(::this.confirmDel)
            })
          }
        </div>
	 		)
   }
}
