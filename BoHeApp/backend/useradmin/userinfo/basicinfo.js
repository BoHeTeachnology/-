import React , { Component } from 'react';

import {
    push
} from 'react-router-redux';


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
  LoadedorLoadingUser as successorLoading,
  load_detail_baseinfo,
  basicInfoEdit,
  basicInfoSave,
  update_baseinfo,
  create_user
} from 'backend/redux/reducers/user_patient'

import {
    asyncConnect
} from 'redux-connect'

import {
  BaseInfoEdit
} from './view/baseinfo/baseinfoedit'

import {
  BaseInfoShow
} from './view/baseinfo/baseinfoshow'

import UserInfoCom,{ asyncEvent as containerasyncEvent } from './container.js'



var __asyncEvent = function({ dispatch, getState }) {

    let state = getState();
    let id = state.getIn(['user_patient', 'frontuserinfo','id']);
    console.log('@@@~~~~~~~')
    console.log(id);
    if(id != 'add'){
      console.log('POPPPPPPOOOOO123');
      return dispatch(load_detail_baseinfo({ id }))
    }else{
      console.log(id);
    }


}
export const BaseInfoHead = ({
    edit,
    check,
    add,
    toEdit,
    toSave,
}) => {
            if(check){
               var index=0;
                 return (<div className="time z_time_edit" style={{top:'215px'}}>
                          <div className="z_time_btn" style={{border:'none'}}>
                              <label>
                                  <span onClick={ toEdit } className="default_inputbtn z_edit_btn">编辑</span>
                              </label>
                          </div>
                        </div>)
             }else if(edit){
                 return (<div className="time z_time_edit">
                          <div className="z_time_btn">
                            <label>
                                <span onClick={ toSave } className="default_inputbtn z_save_btn">保存</span>
                            </label>
                          </div>
                        </div>)
             }

}
export const asyncEvent =  [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())){
            return dispatch(loadAuth(params)).then(function() {
                if (!(successorLoading(getState()))){
                      return __asyncEvent({ dispatch, getState })
                }
                else
                    return Promise.resolve();
            })
        }else{
             if (!(successorLoading(getState()))){
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
        var id = state.getIn(['user_patient', 'frontuserinfo','id']);
        var users = state.getIn(['user_patient','users']);
        console.log('>>>>>>------_____-----<<<<<<<<')
        console.log(idx);
        console.log(id);
        return {
        	  auth : state.get('auth'),
            user:  (idx=='add')?state.getIn(['user_patient','newuser']):state.getIn(['user_patient','users',idx]),
            idx: idx,
            id:id,
            users
        }
    }, { pushState: push,basicInfoEdit,basicInfoSave,create_user,update_baseinfo})
export default  class BasicInfo extends Component{
   constructor(props) {
       // code
        super(props);
        let id = this.props.idx;

        this.state = { check: (id=='add')?false:true, edit: (id=='add')?true:false ,dateModal:{display:"none"}};
   }
    
   toEdit() {
       this.setState({...this.state, check: false, edit: true})
   }
   toCheck(){
      console.log('CHECK____')
       this.setState({...this.state, check: true, edit: false})
   }
   toSave() {
       var baseinfoedit = this.props.user.get('baseinfoedit').toJS();
       console.log('QQQQWWWWW123');
       console.log(baseinfoedit);
       var id = this.props.id;
       baseinfoedit.id = id;
       if(this.props.id=='add'){
          return this.props.create_user({ post_success:(::this.toCheck), baseinfoedit});
       }else{
          return this.props.update_baseinfo({ post_success:(::this.toCheck),baseinfoedit});
       }
   }
   onChangeInfo(ev,key) {
       this.props.basicInfoEdit([{key,val:ev.target.value}])
   }
   onClickInfo(key,val) {
      this.props.basicInfoEdit([{key,val}])
   }
   showDateModal(){
      this.state.dateModal.display == 'block'?this.setState({...this.state,dateModal:{display:'none'}}):this.setState({...this.state,dateModal:{display:'block',position:'absolute',zIndex:'100'}});
   }
   handleSelectDate(date){
      this.state.dateModal.display = 'none';
      var dated = new Date();
      var nowYear = dated.getFullYear();
      var age = nowYear-date.year();
      this.props.basicInfoEdit([{key:'birthdate',val:date.format('YYYY-MM-DD')},{key:'age',val:age},{key:'birthyear',val:date.format('YYYY')},{key:'birthmonth',val:date.format('MM')},{key:'birthday',val:date.format('DD')}])
   }
   upLoadPhoto() {
       /*图片头像上传*/
       var comself = this;
       console.log(this.state)
       console.log("upLoadPhoto!!!!!!!!!!!!!")
       var options = {
           thumbBox: '.thumbBox',
           spinner: '.spinner',
           imgSrc: require('backend/common/images/user.png')
       }
       console.log((window.$._data(window.$("#btnCrop").get(0), "events")));
       var cropper = window.$('.imageBox').cropbox(options);
       if((!(window.$._data(window.$("#base_photo_choose").get(0), "events")))||(!(window.$._data(window.$("#base_photo_choose").get(0), "events").change))){
               console.log("33344444444443333333333333")
               window.$('#base_photo_rechoose,#base_photo_choose').on('change', function() {
                   window.$('.new-create-opcity').show()
                   var reader = new FileReader();
                   reader.onload = function(e) {
                       options.imgSrc = e.target.result;
                       cropper = window.$('.imageBox').cropbox(options);
                   }
                   console.log(this.files)
                   var file = this.files[0];
                   console.log(this.files)
                   if(file){
                     console.log("YYYYYYYY")
                     console.log(file)
                     reader.readAsDataURL(file);
                   }
                   //this.files = [];
               })
       }
       if((!(window.$._data(window.$("#btnCrop").get(0), "events")))||(!(window.$._data(window.$("#btnCrop").get(0), "events").click)))
               window.$('#btnCrop').on('click', function() {
                 var img = cropper.getDataURL();
                 comself.props.basicInfoEdit([{key:'photo',val:img}])
                 window.$('.new-create-opcity').hide();
                 console.log("eeeee")
                 // AjaxObj.imgBase64Up(function(result) {
                 //     if (result.Data.code == 1) {
                 //         $('.new-create-opcity').hide()
                 //         $('#base_photo_show img').attr('src', result.Data.photo_path)
                 //         $('#file,#file2').val('');
                 //     } else {
                 //         $('#base_photo_show').siblings('p').html(result.Data.msg).show()
                 //         $('#file,#file2').val('');
                 //     }
                 // }, img)
              })
       if((!(window.$._data(window.$("#btnZoomIn").get(0), "events")))||(!(window.$._data(window.$("#btnZoomIn").get(0), "events").click)))
               window.$('#btnZoomIn').on('click', function() {
                   cropper.zoomIn();
               })
       if((!(window.$._data(window.$("#btnZoomOut").get(0), "events")))||(!(window.$._data(window.$("#btnZoomOut").get(0), "events").click)))
               window.$('#btnZoomOut').on('click', function() {
                   cropper.zoomOut();
               })
       if((!(window.$._data(window.$(".close_dialog").get(0), "events")))||(!(window.$._data(window.$(".close_dialog").get(0), "events").click)))
               window.$('.close_dialog').click(function() {
                       window.$('.new-create-opcity').hide();
               })
           /*------图片头像上传结束----*/
   }
   componentDidUpdate(){
     if(this.state.edit){
        this.upLoadPhoto();
     }
   }
   render(){
   	  if(this.props.auth.get('user')){
        if(!this.props.user.hasIn(['baseinfo']))
          return <div/>
        var baseinfo= this.props.user.get('baseinfo').toJS();
        var baseinfoedit= this.props.user.get('baseinfoedit').toJS();

        let id = this.props.idx;
        console.log('~~~~~1234567890~~~~');
        console.log(baseinfo);
        console.log(baseinfoedit);
        console.log(this.props.user.toJS());
        return  (
            <div>
              { BaseInfoHead({
                           edit: (this.state.edit),
                           check: (this.state.check),
                           toEdit: (::this.toEdit),
                           toSave: (::this.toSave),
                           toMainUser:(::this.toMainUser),
                           test:(::this.test),
                          backToUsers:(::this.backToUsers)

                       }) }
              {
                           this.state.check ? BaseInfoShow({
                              ...baseinfo
                           }) : BaseInfoEdit({
                              ...baseinfoedit,
                              id,
                              change: (::this.onChangeInfo),
                              click: (::this.onClickInfo),
                              handleSelectDate:(::this.handleSelectDate),
                              showDateModal:(::this.showDateModal),
                              dateModal:(this.state.dateModal),
                              birthdate:(this.props.user.getIn(['baseinfoedit','birthdate'] ))
                           })
              }
            </div>
          )
      }
    }

}


