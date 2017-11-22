import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import {
    isLoaded as isAuthLoaded,
    load as loadAuth,
    logout
} from 'backend/redux/reducers/auth';

import {
    asyncConnect
} from 'redux-connect'


import {
  LoadedorLoading as successorLoading ,
  load as loadIndex,
} from 'backend/redux/reducers/case_index';

import {
    load_left_list
} from 'backend/redux/reducers/left_list';

import {
   load as loadCases,
   frontCase,
   loaddoctor,
   loadclinic,
   delete_case
} from 'backend/redux/reducers/case_patient'

import { _CaseList_ } from './view/caselist.js'

import CaseInfo, {
  asyncEvent as caseAsync
} from './caseinfo.js'

import { select_bootstrap } from '../../modules/fillter/src/bootstrap-select.js'

import { livefilter } from '../../modules/fillter/livefilter.min.js'

import { tab } from '../../modules/fillter/tabcomplete.min.js'

export const asyncEvent = [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                    let state = getState();
                    let user = state.getIn(['auth','user']).toJS();
                    return dispatch(loadCases({p:1})).then(()=>{
                        return dispatch(load_left_list());
                    }).then(()=>{
                        return dispatch(loaddoctor())
                    }).then(()=>{
                        return dispatch(loadclinic())
                    }).then(()=>{
                        return dispatch(loadIndex())
                    });
            })
        } else {
                    let state = getState();
                    let user = state.getIn(['auth','user']).toJS();
                    return dispatch(loadCases({p:1})).then(()=>{
                        return dispatch(load_left_list());
                    }).then(()=>{
                        return dispatch(loaddoctor())
                    }).then(()=>{
                        return dispatch(loadclinic())
                    }).then(()=>{
                        return dispatch(loadIndex())
                    });
        }
    }
}];


@asyncConnect(asyncEvent)
@connect(
  state => ({
     auth : state.get('auth'),
     caseRepo: state.getIn(['case_patient','cases']),
     doctors: state.getIn(['case_patient','doctors']),
     clinics: state.getIn(['case_patient','clinics']),
     allpages: state.getIn(['case_patient','allpages']),
     case_index: state.get('case_index'),
  }),
  { pushState: push, load: loadCases,frontCase,delete_case })
export default class CaseList extends Component {

    constructor(props) {
      super(props);
      this.state = { flush:0 };
      this.calendarShow = false;
      this.page = 1;
    }
    componentDidUpdate(){

    }
    toCaseInfo({patient_id,id}){

        console.log('toCaseInfo..........');
        console.log(patient_id);
        console.log(id);

        this.props.frontCase({user_id:patient_id,id})

        this.props.pushState('/backend/caseadmin/caseinfo/'+false+'/'+true+'?k_userid='+patient_id+'&k_id='+id);

    }
    toSearch(){

        console.log(11111);
        let doctor_name = this.state.doctor?this.state.doctor.name:undefined;
        let doctor_id = this.state.doctor?this.state.doctor.id:undefined;
        let clinic_name = this.state.clinic?this.state.clinic.name:undefined;
        let clinic_id = this.state.clinic?this.state.clinic.id:undefined;
        let visit_time = this.state.date;
        let account = this.state.phone;
        let case_number = this.state.caseid;
        let patient_name = this.state.username;

        let casecat_id = (this.state.subcategory_id&&this.state.subcategory_id!='请选择')?this.state.subcategory_id:(this.state.category_id&&this.state.category_id!='请选择')?this.state.category_id:(this.state.project_id&&this.state.project_id!='请选择')?this.state.project_id:'';
        console.log(casecat_id);
        this.props.load({doctor_name,doctor_id,clinic_name,clinic_id,visit_time,account,case_number,patient_name,casecat_id,p:1})

    }
    toAddCase(){

        console.log('新建........');

        this.props.frontCase({user_id:'new',id:'new'})

        this.props.pushState('/backend/caseadmin/caseinfo/'+true+'/'+false+'?k_userid=new&k_id=new');
    }
    toDeleteCase(){
        let doctor_name = this.state.doctor?this.state.doctor.name:undefined;
        let doctor_id = this.state.doctor?this.state.doctor.id:undefined;
        let clinic_name = this.state.clinic?this.state.clinic.name:undefined;
        let clinic_id = this.state.clinic?this.state.clinic.id:undefined;
        let visit_time = this.state.date;
        let account = this.state.phone;
        let case_number = this.state.caseid;
        let patient_name = this.state.username;
        var that = this;
        this.props.delete_case({case_id:this.state.deleteid}).then(()=>{
            that.props.load({doctor_name,doctor_id,clinic_name,clinic_id,visit_time,account,case_number,patient_name,p:that.page})
        },()=>{

        })
    }
    toEditCase({user_id,id}){

        this.props.frontCase({user_id,id})

        this.context.showRight({
            asyncProcess:caseAsync,
            comCreater:function(){
               return <CaseInfo status={{edit:true,show:false}}/>
            }
        })
    }
    handlePageClick(data){
        let selected = data.selected;

        let doctor_name = this.state.doctor?this.state.doctor.name:undefined;
        let doctor_id = this.state.doctor?this.state.doctor.id:undefined;
        let clinic_name = this.state.clinic?this.state.clinic.name:undefined;
        let clinic_id = this.state.clinic?this.state.clinic.id:undefined;
        let visit_time = this.state.date;
        let account = this.state.phone;
        let case_number = this.state.caseid;
        let patient_name = this.state.username;
        this.page = selected+1;

       return this.props.load( { doctor_name,doctor_id,clinic_name,clinic_id,visit_time,account,case_number,patient_name, p:(selected+1) })

    }
    componentDidMount() {
        tab(window.$)
        livefilter(window.$)
        select_bootstrap(window.$)

    }
    moreSlider(){
        window.$('.moreboxhide').slideToggle();
    }
    getdeleteid(id,ev){
        ev.stopPropagation();
       var ele = ev.target || ev.srcElement;
       console.log(ele.tagName);
       if(ele.tagName == 'INPUT'){
         return;
       }
        console.log('DELETE_______++++++DELETE');
        console.log(id);
        this.setState({...this.state,deleteid:id});
    }
    clickCalendar(){
        this.calendarShow = true;
        this.setState({...this.state,flush:1});
    }
    chooseVisitTime(date){
      this.calendarShow = false;
      this.setState({...this.state,date:date.format('YYYY-MM-DD')});
    }
    change(key,ev){
        var val = {};
        val[key] = ev.target.value;
        this.setState({ ...this.state,...val })
    }
    click(key,name,id){
        let val = {};

        val[key] = {
            name,
            id
        }


        this.setState({ ...this.state,...val})
    }
    reset(){
        console.log("RESET_____")
        this.setState({ ...this.state,project_id:undefined,category_id:undefined,subcategory_id:undefined,doctor:undefined,clinic:undefined,date:undefined,phone:undefined,caseid:undefined,username:undefined})
    }
    closeCal(){
        console.log('父亲');
        this.calendarShow = false;
        this.setState({...this.state,flush:1});
    }
    chooseProject(ev){
            this.setState({...this.state,project_id:ev.target.value,category_id:undefined,subcategory_id:undefined });
    }
    chooseCategory(ev){
            this.setState({...this.state,category_id:ev.target.value,subcategory_id:undefined });
    }
    chooseSubCategory(ev){
            this.setState({...this.state,subcategory_id:ev.target.value });
    }
    render() {
         if(this.props.auth.has('user')){
                console.log('<<<<pPPPPPPPP');
                console.log(this.props.allpages);
                var allpages = this.props.allpages;
                 var size = this.props.caseRepo?this.props.caseRepo.size:0;
                 var nodata = (size == 0) ? true : false;
                 var options = {
                    touchAction: 'pan-y'
                 };
                var height = window.innerHeight || document.documentElement.clientHeight
                var cases = [];
                for(let i=0;(i<size);i++){
                     cases.push(this.props.caseRepo.get(i).toJS())
                }
                console.log('CASES........')
                console.log(this.state.deleteid);
                var doctors = this.props.doctors?this.props.doctors.toJS():[]
                var clinics = this.props.clinics?this.props.clinics.toJS():[]

                var case_index = this.props.case_index?this.props.case_index.toJS():undefined;

                console.log('$$$$DDDDD');
                console.log(case_index);
                return _CaseList_({
                                    handlePageClick:(::this.handlePageClick),
                                    toCaseInfo:(::this.toCaseInfo),
                                    toSearch:(::this.toSearch),
                                    toAddCase:(::this.toAddCase),
                                    toDeleteCase:(::this.toDeleteCase),
                                    toEditCase:(::this.toEditCase),
                                    moreSlider:(::this.moreSlider),
                                    cases,
                                    nodata,
                                    options,
                                    doctors,
                                    clinics,
                                    deleteid:(this.state.deleteid),
                                    getdeleteid:(::this.getdeleteid),
                                    length: size,
                                    chooseVisitTime:(::this.chooseVisitTime),
                                    date:this.state.date,
                                    calendarShow:this.calendarShow,
                                    clickCalendar:(::this.clickCalendar),
                                    change:(::this.change),
                                    click:(::this.click),
                                    reset:(::this.reset),
                                    phone:this.state.phone,
                                    caseid:this.state.caseid,
                                    username:this.state.username,
                                    doctor:this.state.doctor,
                                    clinic:this.state.clinic,
                                    closeCal:(::this.closeCal),
                                    allpages,

                                    chooseProject:(::this.chooseProject),
                                    chooseCategory:(::this.chooseCategory),
                                    chooseSubCategory:(::this.chooseSubCategory),
                                    project_id:this.state.project_id,
                                    category_id:this.state.category_id,
                                    subcategory_id:this.state.subcategory_id,
                                    case_index
                                })
        }else{
        return <div/>;
        }
    }


}