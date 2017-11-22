import React , { Component,PropTypes } from 'react';

import Promise from 'bluebird'

import {
    push
} from 'react-router-redux';

import {
  isLoaded as isAuthLoaded,
  load as loadAuth,
  logout
} from 'backend/redux/reducers/auth';

import { EditDoctor } from './view/edit.js'

import {
    LoadedorLoading as successorLoading_doctors ,
    LoadedorLoading_doctor as successorLoading_doctor,
    load as loadDoctors,
    load_detail as load_detail_doctor,
    detailEdit  as detailEditDoctor,
    doctorFlush,
    labelEdit,
    projectEdit,
    selectDay,
    selectTime
} from 'backend/redux/reducers/user_doctor';

import {
    LoadedorLoading as successorLoading_projects ,
    load as loadProjects
} from 'backend/redux/reducers/service_project';


import {
    connect
} from 'react-redux';

import {
    asyncConnect
} from 'redux-connect'

export const asyncEvent = [{
    promise: ({ store: { dispatch, getState }, params }) => {
        var state = getState();
        let id = state.getIn(['user_doctor', 'frontuserinfo', 'id']);
        let idx = state.getIn(['user_doctor', 'frontuserinfo', 'idx']);
        if (!isAuthLoaded(state))
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading_doctor(state, idx, id))
                    return dispatch(load_detail_doctor({ id, idx, extract: true }))
                else
                    return Promise.resolve();
            })
        else
        if (!successorLoading_doctor(state, idx, id))
            return dispatch(load_detail_doctor({ id, idx, extract: true }))
        else
            return Promise.resolve();
    }
},{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                if (!successorLoading_projects(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadProjects({ user }));
                } else
                    return Promise.resolve();
            })
        } else {
                if (!successorLoading_projects(getState())) {
                    let state = getState();
                    let user = state.getIn(['auth', 'user']).toJS();
                    return dispatch(loadProjects({ user }));
                } else
                    return Promise.resolve();
        }
    }
}]


@asyncConnect(asyncEvent)
@connect(
    state => {
        var idx = state.getIn(['user_doctor', 'frontuserinfo','idx']);
        return {
            auth : state.get('auth'),
            detailEdit:  state.getIn(['user_doctor','doctors',idx,'detailedit']),
            labels: state.getIn(['user_doctor','labels']),
            projectRepo: state.get('service_project')
        }
    }, { pushState: push,detailEditDoctor,doctorFlush,labelEdit,projectEdit,selectDay,selectTime } )
export default  class Edit extends Component{
    constructor(props) {
        // code
      super(props);
      this.state = { dateModal:{display:"none"},detail:false };
    }
    static contextTypes = {
        store: PropTypes.object.isRequired,
    };

    static contextTypes = {
        showRight: PropTypes.func.isRequired
    };
    click(e,key,val){
        // console.log(time);
        // time = time.split(' ')[0];
        // this.props.orderEdit([{key,val:time+' '+e.target.innerHTML}]);
        this.props.detailEditDoctor([{key,val}])
    }
    labelclick(val){
        var value = { name:val }
        this.props.labelEdit(value)
    }
    proClick(val){
        var provalue = { name:val }
        this.props.projectEdit(provalue)
    }
    change(ev,key){
        this.props.detailEditDoctor([{key,val:ev.target.value}])
    }
    handleSelectDate(selected){
       this.props.selectDay({key:selected.format('YYYY-MM-DD') });
    }
    checkDutyInfo(){
       this.setState({...this.state,detail:!this.state.detail})
    }
    selecttime(time,curDate){
        console.log(time);
        this.props.selectTime({key:'visit_time',val:time,todate:curDate})
    }
    save(){
        console.log('AAAAAAA');
        this.props.doctorFlush();
    }
    chooseBirth(date){
      this.state.dateModal.display = 'none';
      var dated = new Date();
      var nowYear = dated.getFullYear();
      console.log('yyyYYYYYYYWWWEErrthgdrgfd')
      var age = nowYear-date.year();
      this.props.detailEditDoctor([{key:'birthdate',val:date.format('YYYY-MM-DD')},{key:'age',val:age}])
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
       if((!(window.$._data(window.$("#base_doctor_photo_choose").get(0), "events")))||(!(window.$._data(window.$("#base_doctor_photo_choose").get(0), "events").change))){
               console.log("33344444444443333333333333")
               window.$('#base_photo_rechoose,#base_doctor_photo_choose').on('change', function() {
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
                 comself.props.detailEditDoctor([{key:'photo',val:img}])
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
    componentDidMount(){
        this.upLoadPhoto();
    }
    showBirthCalendar(){
        console.log('sssss!!!!!!!!')
        this.state.dateModal.display == 'block'?this.setState({...this.state,dateModal:{display:'none'}}):this.setState({...this.state,dateModal:{display:'block',position:'absolute',zIndex:'100'}});
    }
    render(){
        let doctordata = this.props.detailEdit.get('data')?this.props.detailEdit.get('data').toJS():{};
        let allprojects  = this.props.projectRepo.get('projects')?this.props.projectRepo.get('projects').toJS():[];
        let labels  = this.props.labels?this.props.labels.toJS():[];
        console.log(labels);
        return EditDoctor({
            ...doctordata,
            handleSelectDate:(::this.handleSelectDate),
            change:(::this.change),
            click:(::this.click),
            save:(::this.save),
            allprojects,
            labels,
            showBirthCalendar:(::this.showBirthCalendar),
            dateModal:(this.state.dateModal),
            chooseBirth:(::this.chooseBirth),
            labelclick:(::this.labelclick),
            proClick:(::this.proClick),
            checkDutyInfo:(::this.checkDutyInfo),
            detail:(this.state.detail),
            selecttime:(::this.selecttime)
        })
    }
}