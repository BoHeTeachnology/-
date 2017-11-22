import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import Promise from 'bluebird'

import {
    isLoaded as isAuthLoaded,
    load as loadAuth,
    logout
} from 'backend/redux/reducers/auth';

import {
    asyncConnect
} from 'redux-connect'

import {
    load_template,
    edit_template,
    LoadedorLoading as successorLoading_template
} from 'backend/redux/reducers/case_template.js'


import {
  LoadedorLoading as successorLoading_index ,
  load as loadIndex
} from 'backend/redux/reducers/case_index';

import {
  load_left_list
} from 'backend/redux/reducers/left_list';

import {

   load_caselist_of_user,

   load_detail,

   LoadedorLoadingOfUser,

   edit_meta_data,

   edit_normal_info,

   frontCase as setFrontCase,

   searchUser,

   loadhistory,

   deleteTemplate,

   create_case,

   loaddoctor,

   loadclinic,

   update_case,

   state_error,

   cat_error,

   send

} from 'backend/redux/reducers/case_patient'

import { _CaseShow_ } from './view/caseshow.js'

import { _CaseEdit_ } from './view/casecheck.js'

import { select_bootstrap } from '../../modules/fillter/src/bootstrap-select.js'

import { livefilter } from '../../modules/fillter/livefilter.min.js'

import { tab } from '../../modules/fillter/tabcomplete.min.js'

export const asyncEvent = [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                return dispatch(load_caselist_of_user({ user_id:params.user_id }))
            }).then( ( )=>{
              if (!LoadedorLoadingOfUser(getState(), params.user_id, params.id)){
                return dispatch(load_detail({ id:params.id,user_id:params.user_id }))
              }
            }
          ).then( () => {
            if(!successorLoading_index(getState())){
                return dispatch(loadIndex())
            }
          })
        } else {
                let state = getState();
                let pos = state.getIn(['case_patient','frontcase'])?state.getIn(['case_patient','frontcase']).toJS():{};
                if(pos.user_id == 'new'){
                   return Promise.resolve().then(() => {
                          if(!successorLoading_index(getState())){
                              return dispatch(loadIndex())
                          }
                        }).then(()=>{
                                return dispatch(load_left_list());
                        });
                }else{
                  return dispatch(load_caselist_of_user({ user_id:pos.user_id })).then(()=>{
                      if (!LoadedorLoadingOfUser(getState(), pos.user_id, pos.id)){
                         return dispatch(load_detail({ id:pos.id,user_id:pos.user_id }))
                        }
                        }).then(() => {
                              if(!successorLoading_index(getState())){
                                  return dispatch(loadIndex())
                              }
                        }).then(()=>{
                                return  dispatch(loaddoctor())
                        }).then(()=>{
                                return  dispatch(loadclinic())
                        }).then(()=>{
                                return dispatch(load_left_list());
                        })
                }
        }
    }
}];


@asyncConnect(asyncEvent)
@connect(
  state => {
    var user_id = state.getIn(['case_patient','frontcase','user_id']);
    return {
        auth :      state.get('auth'),
        ucaseRepo:  state.getIn(['case_patient','ucases',user_id]),
        frontcase:  state.getIn(['case_patient','frontcase']),
        case_index: state.get('case_index'),
        searchuser: state.getIn(['case_patient','temp_users']),
        history: state.getIn(['case_patient','history']),
        doctors: state.getIn(['case_patient','doctors']),
        clinics: state.getIn(['case_patient','clinics'])


    }
  },
  { pushState: push, load_detail,load_template,edit_meta_data,edit_normal_info,setFrontCase,searchUser,load_caselist_of_user,loadhistory,deleteTemplate,create_case,loaddoctor,loadclinic,update_case,state_error,cat_error,send})
export default class CaseInfo extends Component {

      constructor(props) {
          // code
        super(props);
        this.state = {
            edit:false,
            show:true,
            teethShow:0,
            addTempCure:false,
            addTempCheck:false,
            flush:0,
            showPannelTip:false
        };
        this.allShow = 0;
        this.patient_name = '';
        this.patient_phone = '';
        this.loadtab = 0;
        this.patient_photo = '';
        this.downShow = false;
      }
      static contextTypes = {
        showRight: React.PropTypes.func.isRequired,
        store: PropTypes.object.isRequired,
      }
     componentWillReceiveProps(nextProps){

        if(nextProps.status){
            this.state.edit = nextProps.status.edit;
            this.state.show = nextProps.status.show;

        }else if(this.state.statefirst){

        }else{
            this.state.edit = nextProps.params.edit;
            this.state.show = nextProps.params.show;
        }

     }
     componentWillMount(){
            if(!this.state.statefirst)
                this.state.edit = this.props.params.edit;
                this.state.show = this.props.params.show;
     }
     addMainTemplate(project,category,subcategory,type){
        if(type == '0'||!type){
          this.props.state_error();
          return;
        }
        if(!(project)){
          console.log('***********^^^^^^^^^^^');
          this.props.cat_error();
          return;
        }
        return this.props.load_template({ project, category, subcategory, type }).then((ev)=>{

                 let state = this.context.store.getState();
                 let template_id = type+'_'+(project?project.id:'')+'_'+(category?category.id:'')+'_'+(subcategory?subcategory.id:'')

                 let content = state.getIn(['case_template','templates',template_id,'template'])?state.getIn(['case_template','templates',template_id,'template']).toJS():{};
                 var tipname = '';
                 var flag = 0;


                 if(content.id == undefined ){
                    flag = 1;
                    tipname = '模版不存在';
                 }
                 let pos = this.props.frontcase?(this.props.frontcase.toJS()):{};

                 var user_id = this.props.frontcase.toJS().user_id;
                 var id = this.props.frontcase.toJS().id;
                 console.log('IDIDIDI______))))))');
                 console.log(user_id);
                 console.log(id);
                 console.log(template_id);

                 if(state.hasIn(['case_patient','ucases',user_id,'repo',id,'edit','meta_data'])){
                   state.getIn(['case_patient','ucases',user_id,'repo',id,'edit','meta_data']).mapKeys(key => {

                      console.log(key);
                      if(key == template_id){
                        flag = 1;
                        tipname = '您所选的主诉模版与已有的检查或治疗模版冲突，请先删除原有模版';
                      }

                   })

                   if(flag == 1){
                      console.log("panel_______tip_____");
                      this.setState({ ...this.state,showPannelTip:true,tipname });
                      return;
                   }
                }
                this.downShow = true;
                 this.props.edit_meta_data({ template_id, content, pos , where:'main'})

        })
     }
     addCheckTemplate(project,category,subcategory,type){
       return this.props.load_template({ project, category, subcategory, type }).then((ev)=>{
                 let state = this.context.store.getState();
                 let template_id = type+'_'+(project?project.id:'')+'_'+(category?category.id:'')+'_'+(subcategory?subcategory.id:'')
                 let content = state.getIn(['case_template','templates',template_id,'template']).toJS();
                 let pos = this.props.frontcase.toJS();
                 delete content.main;
                 delete content.cure;
                 delete content.currentill;
                 delete content.reExamination;
                 this.props.edit_meta_data({ template_id, content, pos , where:'check'})
        })
    }
    addCureTemplate(project,category,subcategory,type){
       return this.props.load_template({ project, category, subcategory, type }).then((ev)=>{
                 let state = this.context.store.getState();
                 let template_id = type+'_'+(project?project.id:'')+'_'+(category?category.id:'')+'_'+(subcategory?subcategory.id:'')
                 let content = state.getIn(['case_template','templates',template_id,'template']).toJS();
                 let pos = this.props.frontcase.toJS();
                 delete content.main;
                 delete content.check;
                 delete content.currentill;
                 delete content.reExamination;
                 this.props.edit_meta_data({ template_id, content, pos , where:'cure'})
        })
    }
    chooseProject(where,ev){

       let key = where+'_project_id';
       let obj = {};
       obj[key] = ev.target.value;
       this.setState({...this.state.value,...obj});

    }
    chooseCategory(where,ev){

       let key = where+'_category_id';
       let obj = {};
       obj[key] = ev.target.value;
       this.setState({...this.state.value,...obj});

    }
    chooseSubCategory(where,ev){

       let key = where+'_subcategory_id';
       let obj = {};
       obj[key] = ev.target.value;
       this.setState({...this.state.value,...obj});

    }
    changeMeta(where,e,template_id){
       let pos = this.props.frontcase.toJS();
       let content = {};
       content[where] = e.target.value;
       let pairs=[{ key:'is_send',val:'0' }]
       this.props.edit_normal_info({ pairs, pos });
       this.props.edit_meta_data({ template_id, content, pos })

    }
    change(where,ev){
       let pos = this.props.frontcase.toJS();
       let pairs=[{ key:where, val:ev.target.value},{ key:'is_send',val:'0' }];
       this.props.edit_normal_info({ pairs, pos });
    }
    toAddCase({ user_id,patient_name,patient_phone,patient_photo }){
        this.patient_name = patient_name;
        this.patient_phone = patient_phone;
        this.patient_photo = patient_photo;
        this.props.setFrontCase({user_id,id:'new'});
        this.allShow = 1;
        var that = this;
        this.props.loadhistory({ user_id }).then(()=>{
                 this.setState({...this.state,edit:'true',show:'false',statefirst:true});
                 tab(window.$)
                 livefilter(window.$)
                 select_bootstrap(window.$)

        },()=>{
          
        })
    }
    toEditCase({ user_id , id,patient_name,patient_phone }){

      this.props.setFrontCase({ user_id ,id });
      this.patient_name = patient_name;
      this.patient_phone = patient_phone;
      var that = this;
      this.props.loadhistory({ user_id }).then(()=>{
               this.downShow = true;
               this.setState({...this.state,edit:'true',show:'false',statefirst:true});
               tab(window.$)
               livefilter(window.$)
               select_bootstrap(window.$)

      },()=>{
        
      })
    }
    success(){

    }
    onSave(){
        var id = this.props.frontcase?this.props.frontcase.get('id'):'';
        var acase = this.props.ucaseRepo?this.props.ucaseRepo.getIn(['repo',id]):''
        var edit = acase?acase.get('edit').toJS():{};
        let pos = this.props.frontcase.toJS();
        var casecat_id = '';
       for(var template_id in edit.meta_data){
         if((template_id=='advice')||(template_id=='history'))
                 continue;
         if(edit.meta_data[template_id].main!=undefined){
            var casecat_id = edit.meta_data[template_id].index.subcategory.id?edit.meta_data[template_id].index.subcategory.id:edit.meta_data[template_id].index.category.id;
         }
       }

        edit.casecat_id = this.state.main_subcategory_id?this.state.main_subcategory_id:this.state.main_category_id;
        console.log('SAVE_____------')
        console.log(edit);
        edit.casecat_id = casecat_id;
        var that = this;
        let state = this.context.store.getState();
        let user_id = edit.patient_id;

        if(edit.id == undefined){
              if(!state.hasIn(['case_patient','ucases',user_id,'repo','new','edit','meta_data'])){
                return;
              }
              this.props.create_case({ post_success:(::this.success),case_edit:edit,history:this.props.history?this.props.history.toJS():{}}).then(()=>{
                  let state = this.context.store.getState();
                  let user_id = edit.patient_id;
                  let id = state.getIn(['case_patient','ucases',user_id,'repo','new','edit','id']);

                  return that.props.load_detail({ id,user_id })

              }).then(()=>{
                  let state = this.context.store.getState();
                  let user_id = edit.patient_id;
                  let id = state.getIn(['case_patient','ucases',user_id,'repo','new','edit','id']);
                  that.props.setFrontCase({user_id:edit.patient_id,id});
                  that.setState({...this.state,edit:'false',show:'true',statefirst:true,main_project_id:'',main_category_id:'',main_subcategory_id:''});
              })
        }else{
              that.props.update_case({case_edit:edit,post_success:(::this.success)})

              this.setState({...this.state,edit:'false',show:'true',statefirst:true,main_project_id:'',main_category_id:'',main_subcategory_id:''});
        }

    }
    changeUser(ev){
      this.setState({...this.state,changeUserMsg:ev.target.value})
    }
    search(){
      this.ulShow = 1;
      this.props.searchUser({ account:this.state.changeUserMsg });
    }
    getUser({user_id,patient_name,patient_phone}){
      this.patient_name = patient_name;
      this.patient_phone = patient_phone;
      this.ulShow = 0;
      this.props.setFrontCase({ user_id ,id:'new'});
      var that = this;
      that.props.loadhistory({ user_id }).then(()=>{
          return that.props.load_caselist_of_user({ user_id })
      }).then(()=>{
               let pairs=[{ key:'patient_id', val:user_id}];
               return that.props.edit_normal_info({ pairs, pos:{ user_id ,id:'new'} });
      }).then(()=>{
               return  that.props.loaddoctor()
      }).then(()=>{
               return  that.props.loadclinic()
      }).then(()=>{
               this.allShow = 1;
               this.downShow = false;
               tab(window.$)
               livefilter(window.$)
               select_bootstrap(window.$)
      },()=>{
               this.allShow = 0;
      });
    }
    haveUser({ user_id , id }){
        //this.props.loadhistory({ user_id })

        this.allShow = 1;
    }
    toothpanel(template_id){
      this.setState({...this.state,teethShow:1,template_id })
    }
    closePanel(){
      this.clicktoothlist = '';
      this.setState({...this.state,teethShow:0})
    }
    chooseTooth(tooth){
      let pos = this.props.frontcase.toJS();
      var content = {
        check_teeth:tooth
      };
      this.props.edit_meta_data({ append:true, template_id:this.state.template_id,content,pos });
    }
    deleteTemp(template_id){
      let pos = this.props.frontcase.toJS();
      this.props.deleteTemplate({ template_id,pos })
    }
    addTemp(where){
      if(where == 'check'){
        this.setState({...this.state,addTempCheck:true})
      }else if(where == 'cure'){
        this.setState({...this.state,addTempCure:true})
      }
    }
    cancel(where){
      if(where == 'check'){
        this.setState({...this.state,addTempCheck:false})
      }else if(where == 'cure'){
        this.setState({...this.state,addTempCure:false})
      }
    }
    clickCalendar(ev){
      ev.stopPropagation();
      this.calendarShow = true;
      this.setState({...this.state,flush:1});
    }
    chooseVisitTime(date,ev){
      this.calendarShow = false;
      let pos = this.props.frontcase.toJS();
      let pairs=[{ key:'visit_time', val:date.format('YYYY-MM-DD HH:mm')}];
      this.props.edit_normal_info({pos,pairs});
      this.setState({...this.state,flush:0})
    }

    getDoctor(id,name){

      let pos = this.props.frontcase.toJS();
      let pairs=[{ key:'doctor_id', val:id},{key:'doctor_name',val:name}];
      this.props.edit_normal_info({pos,pairs});
    }
    getClinic(id,name){

      let pos = this.props.frontcase.toJS();
      let pairs=[{ key:'clinic_id', val:id},{ key:'clinic_name', val:name}];
      this.props.edit_normal_info({pos,pairs});
    }
    chooseCase(ev){
          let pos = this.props.frontcase.toJS();
          let user_id = pos.user_id;
          let id = ev.target.value;
          var that = this;
          this.props.load_detail({ id,user_id }).then(()=>{
              that.props.setFrontCase({user_id,id})
          })
    }
    closeCal(ev){
      ev.stopPropagation();
      if(this.calendarShow == true){
        this.calendarShow = false;
        this.setState({...this.state,flush:1});
      }
    }
    stopProp(ev){
      ev.stopPropagation();
    }
    hidePannelTip(){
      this.setState({ ...this.state,showPannelTip:false });
    }
    onSend( case_id ){
      let pos = this.props.frontcase.toJS();
      this.props.send({case_id,pos})
    }
    toDocument(id){
      sessionStorage.setItem("user_id", id);
      window.location.href = 'http://182.254.213.207/mint/html/user/see_info.html#User';
    }
    backToList(){
      this.props.pushState('/backend/caseadmin/caselist');
    }
    render() {
      console.log('重新渲染。。。。。。')
         if(this.props.auth.has('user')){
              var height = window.innerHeight || document.documentElement.clientHeight;
              var id = this.props.frontcase?this.props.frontcase.get('id'):'';
              var acase = this.props.ucaseRepo?this.props.ucaseRepo.getIn(['repo',id]):''
              var edit = acase?acase.get('edit').toJS():{};
              var case_bak = acase?acase.get('case_bak').toJS():{};
              console.log(edit)
              console.log(case_bak)
              var timeseq = this.props.ucaseRepo?(this.props.ucaseRepo.get('timeseq')?this.props.ucaseRepo.get('timeseq').toJS():[]):[];
              var case_index = this.props.case_index?this.props.case_index.toJS():undefined;
              var users = this.props.searchuser?this.props.searchuser.toJS():[];
              var history = this.props.history?this.props.history.toJS():{}
              var doctors = this.props.doctors?this.props.doctors.toJS():[]
              var clinics = this.props.clinics?this.props.clinics.toJS():[]
              if(this.state.edit == 'true'){
                  return _CaseEdit_({
                    edit,
                    case_index,
                    onSend:(::this.onSend),
                    addMainTemplate:(::this.addMainTemplate),
                    addCheckTemplate:(::this.addCheckTemplate),
                    addCureTemplate:(::this.addCureTemplate),
                    changeMeta:(::this.changeMeta),
                    change:(::this.change),
                    chooseProject:(::this.chooseProject),
                    chooseCategory:(::this.chooseCategory),
                    chooseSubCategory:(::this.chooseSubCategory),
                    main_project_id:(this.state.main_project_id),
                    main_category_id:(this.state.main_category_id),
                    main_subcategory_id:(this.state.main_subcategory_id),
                    check_project_id:(this.state.check_project_id),
                    check_category_id:(this.state.check_category_id),
                    check_subcategory_id:(this.state.check_subcategory_id),
                    cure_project_id:(this.state.cure_project_id),
                    cure_category_id:(this.state.cure_category_id),
                    cure_subcategory_id:(this.state.cure_subcategory_id),
                    onSave:(::this.onSave),
                    changeUser:(::this.changeUser),
                    search:(::this.search),
                    changeUserMsg:(this.state.changeUserMsg),
                    users,
                    getUser:(::this.getUser),
                    ulShow:(this.ulShow),
                    allShow:(this.allShow),
                    history,
                    toothpanel:(::this.toothpanel),
                    teethShow:(this.state.teethShow),
                    chooseTooth:(::this.chooseTooth),
                    closePanel:(::this.closePanel),
                    deleteTemp:(::this.deleteTemp),
                    addTemp:(::this.addTemp),
                    addTempCheck:(this.state.addTempCheck),
                    addTempCure:(this.state.addTempCure),
                    cancel:(::this.cancel),
                    clickCalendar:(::this.clickCalendar),
                    calendarShow:(this.calendarShow),
                    chooseVisitTime:(::this.chooseVisitTime),
                    haveUser:(::this.haveUser),
                    doctors,
                    clinics,
                    getDoctor:(::this.getDoctor),
                    getClinic:(::this.getClinic),
                    patient_phone:this.patient_phone,
                    patient_name:this.patient_name,
                    patient_photo:this.patient_photo,
                    closeCal:(::this.closeCal),
                    showPannelTip:this.state.showPannelTip,
                    hidePannelTip:(::this.hidePannelTip),
                    tipname:this.state.tipname,
                    onSend:(::this.onSend),
                    downShow:this.downShow,
                    stopProp:(::this.stopProp),
                    toDocument:(::this.toDocument),
                    backToList:(::this.backToList)
                  })
              }else if(this.state.show == 'true'){
                  console.log('show........');
                  return _CaseShow_({
                    case_bak,
                    timeseq,
                    case_index,
                    toAddCase:(::this.toAddCase),
                    toEditCase:(::this.toEditCase),
                    chooseCase:(::this.chooseCase),
                    onSend:(::this.onSend),
                    toDocument:(::this.toDocument),
                    backToList:(::this.backToList)
                  })
              }else{
                  return <div/>;
              }
        }
    }
}