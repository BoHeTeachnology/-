import React , { Component } from 'react';

import Promise from 'bluebird'

import { asyncConnect } from 'redux-connect'

import { Link } from 'react-router'

import { push } from 'react-router-redux';

import { connect } from 'react-redux';

import { _OrderDate_ } from './view/orderdate.js'

import {
  load_date,
  select_date,
  lost_date_error
} from 'doctortool/redux/reducers/user_doctor.js'



@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {
    const promises = [];
    let state = getState()
    let doctorid = state.getIn(['user_doctor','doctor','id'])
    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month;
        return currentdate;
    }
    var date = getNowFormatDate();
    promises.push(dispatch(load_date({ doctorid,date })));
    return Promise.all(promises);
  }
}])
@connect(
  state => ({ doctorRepo : state.getIn(['user_doctor','doctor'])}),
  { pushState: push,select_date,lost_date_error,load_date})
export default class OrderDate extends Component {
    constructor(props) {
      super(props);
      this.state = {isShow:false,flush:true };
    }
    toTime(event){
    	event.preventDefault();
      let date = this.chooseDate;
      if((!date)||(date=='')){
         this.props.lost_date_error();
      }else{
         this.props.select_date(date)
    	   this.props.pushState('/doctorasist/doctorcenter/toOrderTime')
      }
    }
    close(){
      this.setState({...this.state,isShow:!this.state.isShow})
    }
    loadStyleString(css){

        var style = document.createElement("style");

        style.type = "text/css";

        try{

        style.appendChild(document.createTextNode(css));

        }catch(ex){

        style.styleSheet.cssText = css;

        }

        var str = css.split(':after')[0].split('.')[1];
        var head = document.getElementsByClassName(str);
        for(var i = 0;i<head.length;i++){
          head[i].appendChild(style);
        }
    }
    change(selected){
      let curdate = this.props.doctorRepo.get('curdate');
      if(curdate == selected.format('YYYY-MM')){
        return ;
      }
      let doctorid = this.props.doctorRepo.get('id');
      this.props.load_date({ doctorid,date:selected.format('YYYY-MM') })
      this.setState({...this.state,flush:(!this.state.flush)});
    }
    componentDidUpdate(){
      var width = window.innerWidth || document.documentElement.clientWidth;
       this.loadStyleString(".rc-calendar-date-public:after{content:'';display:block;left:"+((width-80)/14-3)+"px;width:6px;height:6px;position: absolute;bottom: -6px;background-color: #f4d34e;border-radius: 100%;}");
       this.loadStyleString(".rc-calendar-date-private:after{content:'';display:block;left:"+((width-80)/14-3)+"px;width:6px;height:6px;position: absolute;bottom: -6px;background-color: #00c5cc;border-radius: 100%;}");
    }
    componentDidMount(){

       var width = window.innerWidth || document.documentElement.clientWidth;
        this.loadStyleString(".rc-calendar-date-public:after{content:'';display:block;left:"+((width-80)/14-3)+"px;width:6px;height:6px;position: absolute;bottom: -6px;background-color: #f4d34e;border-radius: 100%;}");
        this.loadStyleString(".rc-calendar-date-private:after{content:'';display:block;left:"+((width-80)/14-3)+"px;width:6px;height:6px;position: absolute;bottom: -6px;background-color: #00c5cc;border-radius: 100%;}");
        if ((typeof window === 'undefined')||(window.__SERVER__ == true)) {

        }else{
          document.title = '预约日期';
        }
    }
    handleSelectDate(selected){
      this.chooseDate = selected.format('YYYY-MM-DD');
    }
    componentWillMount(){
        var that = this;
        require.ensure(['rc-calendar','rc-calendar/lib/locale/zh_CN'], function(require){ 
           that.Calendar = require('rc-calendar'); 
           that.locale = require('rc-calendar/lib/locale/zh_CN'); 
           that.setState({...that.state,flush:(!that.state.flush)});
        }
       ) 
    }
    render() {
        var dates = this.props.doctorRepo.get('dates')?this.props.doctorRepo.get('dates').toJS():[];
        var doctor = this.props.doctorRepo.toJS();
        return _OrderDate_({
            dates,
            ...doctor,
            handleSelectDate:(::this.handleSelectDate),
            toTime:(::this.toTime),
            isShow:(this.state.isShow),
            close:(::this.close),
            change:(::this.change),
            Calendar:(this.Calendar),
            locale:(this.locale)
        });
    }
	// methods
}
