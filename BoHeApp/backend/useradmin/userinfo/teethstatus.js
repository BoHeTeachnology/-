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
  LoadedorLoadingUser_Oral as successorLoading,
  load_detail_oral,
  oralEditADD,
  oralFlush,
  changeOralTime,
  oralEditDEL,
  update_oralinfo,
  create_oralinfo
} from 'backend/redux/reducers/user_patient'

import {
    asyncConnect
} from 'redux-connect'

import {
  OralEdit
} from './view/oral/oraledit.js'

import {
  OralShow
} from './view/oral/oralshow.js'


import { table as oraltable } from 'backend/useradmin/userinfo/config/oraltable.js';

var __asyncEvent = function({ dispatch, getState }) {
    let state = getState();
    let id = state.getIn(['user_patient', 'frontuserinfo','id']); 
    id=id||'add';
    return dispatch(load_detail_oral({ userid:id }))
}
export const asyncEvent =  [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())){
          console.log("his login!!!!!!!!!!!!!!!!!!11")
            return dispatch(loadAuth(params)).then(function() {
                if (!(successorLoading(getState()))){
                      console.log("his login!!!!!!!!!!!!!!!!!!22")
                      return __asyncEvent({ dispatch, getState })
                }
                else
                    return Promise.resolve();
            })
        }else{
            console.log("his login!!!!!!!!!!!!!!!!!!33")
             if (!(successorLoading(getState()))){
                          console.log("his login!!!!!!!!!!!!!!!!!!44")
                  return __asyncEvent({ dispatch, getState });
             }
             else
                   return Promise.resolve();
        }
    }
}];

@asyncConnect(asyncEvent)
@connect(
    state => {
        var idx = state.getIn(['user_patient', 'frontuserinfo','idx']);
        return {
            auth : state.get('auth'),
            oraledit:  idx=='add'?state.getIn(['user_patient','newuser','oraledit']):state.getIn(['user_patient','users',idx,'oraledit']),
            idx:idx
        }
    }, { pushState: push,oralEditADD,oralFlush,changeOralTime,oralEditDEL,update_oralinfo,create_oralinfo})

export default  class TeethStatus extends Component{
    constructor(props) {
       // code
       super(props);
       console.log(this.props.idx);
        this.state = { check: true, edit: false, add: false ,refresh:0 };
    }
    toAdd() {
       var addtime = this.props.oraledit.get('time');
       this.setState({...this.state, check: false, edit: false, add: true ,addTime:addtime})
    }
    toEdit() {
       this.setState({...this.state, check: false, edit: true, add: false })
    }
    toCheck(){
        this.setState({...this.state, check: true, edit: false, add: false })
    }
    UpdateThenCheck() {
        var oraledit = this.props.oraledit.toJS();
        this.props.update_oralinfo({ post_success:(::this.toCheck), oraledit });
    }
    CreateThenCheck(){
        var oraledit = this.props.oraledit.toJS();
        this.props.create_oralinfo({ post_success:(::this.toCheck), oraledit});
    }
    changeCheckTime(e) {
      this.props.changeOralTime({ idx: e.target.value -1 })
    }
    changeEditTime(e) {
      this.props.changeOralTime({ idx: e.target.value -1 })
    }
    onClickInfo(key,val,id) {
        var tmp = {};
        tmp[id] = val.name;
	  	var value = { name:val.title,val:tmp }
        console.log("onClickInfo!!!!")
        console.log(tmp);
        console.log(value);
        console.log(key);
        console.log(val);
        if(val.check==0){
	        this.props.oralEditADD( {key,val:value} )
        }else{
            this.props.oralEditDEL( {key,val:value} )
        }
   	}
   	onChangeInfo(name,e){
   		var value = {name:name,val:{content:e.target.value}}
   		this.props.oralEditADD( {key:'repairhis',val:value} )
   	}
    render(){
      if(!this.props.oraledit){
        return <div/>
      }
    	var oraledit=this.props.oraledit.toJS();
      var idx = this.props.idx;
	  	return (<div>
		 		{
		 			TeethStatusHead({
		 				oraledit,
             edit: (this.state.edit),
             check: (this.state.check),
             add: (this.state.add),
             addTime:(this.state.addTime),
             toEdit: (::this.toEdit),
             toAdd: (::this.toAdd),
             UpdateThenCheck: (::this.UpdateThenCheck),
             CreateThenCheck: (::this.CreateThenCheck),
             changeCheckTime: (::this.changeCheckTime),
             changeEditTime: (::this.changeEditTime),
             idx
		 			})
		 		}
		 		{
		 			this.state.check ? OralShow({
		 				oraledit
		 			}):OralEdit({
		 				oraltable,
		 				oraledit,
		 				click:(::this.onClickInfo),
		 				change:(::this.onChangeInfo)
 					})
		 		}
	 		</div>
	 		)
   }
}

export const TeethStatusHead = ({
  oraledit,
  edit,
  check,
  add,
  addTime,
    toAdd,
    toEdit,
    CreateThenCheck,
    UpdateThenCheck,
    changeCheckTime,
    changeEditTime,
    idx
}) => {
            if(check){
               let index=0;
                 return (<div className="time z_time_edit" style={{top:'215px'}}>
                          <div className="z_time_btn" style={{border:'none'}}>
                              <p>
                                <b>更新记录：</b>
                                  <select onChange={ (e)=>{ changeCheckTime(e) } }>
                                     {oraledit.timelist?oraledit.timelist.map((time)=>{
                                      index++;
                                      if((oraledit.idx+1) == index)
                                        return (<option selected='selected' value={ index }>{time}</option>)
                                      else
                                        return (<option value={ index }>{time}</option>)
                                     }):''}
                                  </select>
                              </p>

                              <label>
                                  <span onClick={ toAdd } className="default_inputbtn z_add_btn">添加</span>
                                  <span onClick={ toEdit } style={ idx=='add'?{display:'none'}:{display:'block'}} className="default_inputbtn z_edit_btn">编辑</span>
                              </label>
                          </div>
                        </div>)
             }else if(edit){
              let index = 0;
                 return (<div className="time z_time_edit">
                          <div className="z_time_btn">

                            <p>
                                <b>更新记录：</b>
                                <select onChange={ (e)=>{ changeEditTime(e) } }>
                                     {oraledit.timelist?oraledit.timelist.map((time)=>{
                                      index++;
                                      if((oraledit.idx+1) == index)
                                        return (<option selected='selected' value={ index }>{time}</option>)
                                      else
                                        return (<option value={ index }>{time}</option>)
                                     }):''}
                                </select>
                            </p>
                            <label>
                                <span onClick={ UpdateThenCheck } className="default_inputbtn z_save_btn">保存</span>
                            </label>
                          </div>
                        </div>)
             }else if(add){
              return (<div className="time z_time_edit">
                          <div className="z_time_btn">
                            <p>
                                <em className="see_page_em">基于最新（<font className="new_time">{addTime}</font>）信息上进行添加</em>
                            </p>
                            <label>
                                <span onClick={ CreateThenCheck } className="default_inputbtn z_save_btn">保存</span>
                            </label>
                          </div>
                        </div>)
             }
}