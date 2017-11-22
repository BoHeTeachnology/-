import React , { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import { push } from 'react-router-redux';
import Immutable from 'immutable'
import { DoctorMainUi } from './view/main';
import {  loaddoctor } from 'app/redux/reducers/doctorapp.js'
import { save_token } from 'app/redux/reducers/save_token';
import { validatestatecheck } from 'app/redux/reducers/validate.js';
import { Toast } from 'antd-mobile';


@asyncConnect([{
    promise: ({ store: { dispatch, getState }, params }) => {
      if(params.req)
      {
        if(params.req.query.token)
            return dispatch(validatestatecheck(params.req.query.token))
      }

    }
}])
@connect(
    state => {
        return {
          doctorbaseinfo:state.getIn(['doctorapp','doctorbaseinfo']),
          token:state.getIn(['save_token','token']),
          validatestate:state.getIn(['validate','validatestate'])
        }
    }, { pushState: push,save_token,loaddoctor,validatestatecheck })

export default class DoctorMain extends Component {
  	constructor(props) {
  		// code
    	  super(props);
        this.state = {

        };
  	}

    static contextTypes = {
      store: PropTypes.object.isRequired
    };
    componentWillMount(){

      if ((typeof window === 'undefined')) {
          return;
      }
      let token = '';
      let type = '';
      if( window.location.search && window.location.search.split('?')[1] && window.location.search.split('?')[1].split('&')[0] ){
        type = window.location.search.split('?')[1].split('&')[0].split('=')[1];
      }
      if(type == 'false'){

      }else if(type == 'true'){
        if( window.location.search && window.location.search.split('?')[1].split('&')[1] ){
          token = window.location.search.split('?')[1].split('&')[1].split('=')[1];
        }
        console.log('hong111')
        window.document.cookie = "token="+token;
        this.props.save_token({token})
      }
    }
    componentDidMount(){
      this.props.validatestatecheck();
      if(this.props.validatestate&&this.props.validatestate.toJS()&&this.props.validatestate.toJS().success=='0'){
        Toast.info(this.props.validatestate.toJS().message,1)
      }

      this.props.loaddoctor({}).then(() =>{
        var currentstate =this.context.store.getState();
        var doctorbaseinfo = currentstate.getIn(['doctorapp','doctorbaseinfo']).toJS();
        if(doctorbaseinfo.success=='0'){
          Toast.info(doctorbaseinfo.message,1)
        }
      }, ()=>{
      Toast.info('服务器繁忙',1)
    });
    }
    clickGrid(el,index){
      console.log(index)

    //  var vds= this.props.validatestate?this.props.validatestate.toJS():null;
    //    console.log(vds)
    //  if (vds) {
    //    if (vds.data.state==1) {
    //       Toast.info('您的认证正在审核中~',1)
    //    }else if(vds.data.state==2) {
     //
    //      if(index == 0){
    //        this.props.pushState('/doctorcenter/mywallet');
    //      } else if(index == 1){
    //          this.props.pushState('/doctorcenter/invitecode');
    //        }else if(index == 2){
    //          this.props.pushState('/doctorcenter/mycard');
    //        }
    //    }else if(vds.data.state==3) {
    //     Toast.info('认证失败,重新认证~',1)
    //   }else if (vds.data.state==null||vds.data.state==0) {
    //     Toast.info('您还没认证,赶快去认证吧~',1)
    //   }
    //  }else {
    //    Toast.info('您还没认证,赶快去认证吧~',1)
    //  }

     if(index == 0){
       this.props.pushState('/doctorcenter/mywallet');
     }else if(index == 1){
       this.props.pushState('/doctorcenter/invitecode');
     }else if(index == 2){
       this.props.pushState('/doctorcenter/mycard');
     }else if(index == 3){
       this.props.pushState('/doctorcenter/myorder');
     }
    }
    toallow(){
        var vds= this.props.validatestate?this.props.validatestate.toJS():{};
      if (vds&&vds.data.state==3){
          this.props.pushState('/doctorcenter/indentyfail')
      }else {
          this.props.pushState('/doctorcenter/validateone')
      }

    }


  	render(){
      console.log('1111111');
      console.log(this.props.token);
      let doctorbaseinfo = this.props.doctorbaseinfo?this.props.doctorbaseinfo.toJS():{};
      let isallow=false;

        var validatestr='';
        if (this.props.validatestate) {
        var vds= this.props.validatestate?this.props.validatestate.toJS():{};
      if(vds&&Number(vds.data.state)==3){
        isallow=false;
        validatestr='审核失败';
      }else if(vds&&vds.data.state==null){
        isallow=false;
        validatestr='未认证';
      }else if(vds&&vds.data.state==0){
        isallow=false;
        validatestr='未认证';
      }else if(vds&&vds.data.state==1){
        isallow=false;
        validatestr='审核中';
      }else if(vds&&vds.data.state==2){
        isallow=true;
        validatestr='审核成功';
      }
    }

        return DoctorMainUi({
          ...doctorbaseinfo.data,
          clickGrid:(::this.clickGrid),
          validatestr:(validatestr),
          allow:isallow,
          toallow:(::this.toallow),
        });
  	}

}
