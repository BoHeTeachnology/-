import React , { Component } from 'react';
import Promise from 'bluebird'
import { FirstPageUi } from './view/firstpageui.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'
import {
    push
} from 'react-router-redux';

import Immutable from 'immutable'

import { save_token } from 'app/redux/reducers/save_token';
import { get_banner,famous_doctor } from 'app/redux/reducers/wechathome';
import { get_attention_doctorlist } from 'app/redux/reducers/doctorlist.js'

import {getApiIp8007} from 'app/util/utils.js'

import {
  isLoaded as isAuthLoaded,
  load as loadAuth
} from 'app/redux/reducers/auth';

@asyncConnect([{
    promise: ({ store: { dispatch, getState }, params }) => {
      console.log('llllLLLLpppp')
      if(!isAuthLoaded(getState())){
        console.log('1212122122')
          return dispatch(loadAuth(params)).then(()=>{
            return dispatch(get_banner())
          },()=>{
            return dispatch(get_banner())
          })
      }else{
        console.log('09090909')
        return dispatch(loadAuth(params)).then(()=>{
          return dispatch(get_banner())
        },()=>{
          return dispatch(get_banner())
        })
      }

    }
}])


@connect(
    state => {
        return {
          token: state.getIn(['save_token','token']),
          user: state.getIn(['auth','user']),
          home_doctorlist:state.getIn(['wechathome','home_doctorlist']),
          banner:state.getIn(['wechathome','banner']),
          attention_doctorlist:state.getIn(['doctorlist','attention_doctorlist']),
          famous_doctorlist:state.getIn(['wechathome','famous_doctor'])
        }
    }, { pushState: push ,save_token,get_attention_doctorlist,famous_doctor})

export default class FirstPage extends Component {
  	constructor(props) {
  	  super(props);
      this.state = { tap:1 };
  	}
	  next() {
        this.refs.reactSwipe.prev();
        this.setState({bullet:1});
    }
    prev() {
        this.refs.reactSwipe.next();
        this.setState({bullet:0});
    }
    handleSwipe(ev) {

       	if(ev.direction ==4){
        		  console.log("right");

                  this.next();

        	}else{
        		  console.log("left");
                  this.prev();
        	}
    }
    toDoctor(user_id){
      console.log(user_id)
      if ((typeof window === 'undefined')) {
          return;
      }
    }
    toOrder(service_id){
      console.log(service_id)
      if ((typeof window === 'undefined')) {
          return;
      }

    }
    toProjectList(){
      if ((typeof window === 'undefined')) {
          return;
      }
    }
    changeTap(tap){
      console.log(tap);
      this.setState({...this.state,tap:tap})
    }
    tologin(){
      if ((typeof window === 'undefined')) {
          return;
      }
      window.location.href = 'http://'+getApiIp8007()+'/weixin/user?redirect=1';
    }
    toDoctorList(){
      this.props.pushState('/doctorlist/'+this.is_login);
    }
    toQuickOrder(){
      // this.props.pushState('/quickorder');
        window.location.href = "tel:400-9696791";
    }
    doctordetailclickhandle(doctorid){
      console.log('mmmmmm')
      this.props.pushState('/doctorinfo/' + doctorid + '/' + 'null' + '/' + 'true');
      // this.props.pushState('/doctorinfo')

    }
    backoldversionclickhandle(){
     console.log('返回旧版')
     window.location.href = 'http://'+getApiIp8007()+'/weixin/user?redirect=2&type=info'

    }
    // toMyCenter(){
    //   this.props.pushState('/usercenter')
    // }
    // toFindDoctor(){
    //   console.log('我就是当前页了')
    // }
    componentWillMount(){
      if ((typeof window === 'undefined')) {
          return;
      }
      window.document.title='薄荷牙医'
      let type = '';
      let token = '';
      if(this.props.user){
          type = true;
          console.log('1111')
      }else{
          type = false;
          console.log('22222')
      }
      if(type == false){
        this.is_login=false;
      }else if(type == true){
        console.log('q177');
        console.log(this.props.user.toJS());
        token = this.props.user.toJS().token;
        if(token){
          // window.document.cookie = "token="+token;
          window.document.cookie = "khantoken="+token;
          this.props.save_token({token})
          this.is_login= true;
        }
        // window.document.cookie = "token="+token;
        // this.props.save_token({token})
        // this.is_login= true;
      }else{

      }
    }
    componentDidMount(){
      var that = this;
      // if(this.props.user){
      //   this.props.get_attention_doctorlist().then(()=>{
      //       that.props.famous_doctor()
      //   })
      // }else{
      //   this.props.famous_doctor()
      // }
     this.props.famous_doctor()
    }
    toBanner(url){
      window.location.href = url;
    }
  	render(){
        console.log('2222!!!@@@');
        console.log(this.is_login);
        console.log(this.props.token);

        let  home_doctorlist =this.props.home_doctorlist?this.props.home_doctorlist.toJS().data:[];

        let attention_doctorlist =this.props.attention_doctorlist?this.props.attention_doctorlist.toJS():[];
        let famous_doctorlist =this.props.famous_doctorlist?this.props.famous_doctorlist.toJS():[];
        let banner = this.props.banner?this.props.banner.toJS():[];
        console.log(attention_doctorlist);
        console.log(banner);
        console.log(famous_doctorlist);
        return FirstPageUi({
            home_doctorlist,
            attention_doctorlist,
            famous_doctorlist,
            banner,
            toDoctorList:(::this.toDoctorList),
            toDoctor:(::this.toDoctor),
            toOrder:(::this.toOrder),
            toProjectList:(::this.toProjectList),
            tap:(this.state.tap),
            changeTap:(::this.changeTap),
            is_login:this.is_login,
            tologin:(::this.tologin),
            toQuickOrder:(::this.toQuickOrder),
            doctordetailclickhandle:(::this.doctordetailclickhandle),
            backoldversionclickhandle:(::this.backoldversionclickhandle),
            toBanner:(::this.toBanner),
            // toMyCenter:(::this.toMyCenter),
            // toFindDoctor:(::this.toFindDoctor),
        });
  	}

}
