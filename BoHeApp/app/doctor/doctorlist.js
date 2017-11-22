import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';
import Promise from 'bluebird'
import Doctor from './doctor.js'
import { isElementVisible } from 'app/util/utils.js'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect'

import { LoadedorLoading as successorLoading ,  load as loadDoctors,clearlist } from 'app/redux/reducers/doctorlist';

import { push } from 'react-router-redux';

import { serviceList } from 'app/redux/reducers/service';

import { FrontPage } from './view/frontpage.js'

import Immutable from 'immutable'

import { get_servicecategroy,get_home_doctorlist } from 'app/redux/reducers/wechathome';

import {
  isLoaded as isAuthLoaded,
  load as loadAuth
} from 'app/redux/reducers/auth';

@asyncConnect([{
    promise: ({ store: { dispatch, getState }, params }) => {
      console.log('D0000')
      console.log(getState().toJS());
      if(!getState().hasIn(['doctorlist','doctors'])){
          return dispatch(loadDoctors( { num: 10, page: 1})).then(()=>{
            return dispatch(serviceList())
          })
      }else{

      }
      // const promises = [];
      // promises.push(dispatch(get_servicecategroy()));
      // promises.push(dispatch(get_home_doctorlist(1,20)));
      // promises.push(dispatch(UsergetInfo()));
      // promises.push(dispatch(loadShiYueCount()));
      // return Promise.all(promises);
    }
}])
@connect(
    state => {
        return {
            loading: state.getIn(['doctorlist', 'loading']),
            doctorlist:state.get('doctorlist'),
            billMetas: state.hasIn(['doctorlist', 'doctors']) ? state.getIn(['doctorlist', 'doctors']) : [],
            service_list: state.getIn(['service','service_list'])?state.getIn(['service','service_list']).toJS():[]
          //  servicecategroy:state.getIn(['wechathome','servicecategroy']),
          //  home_doctorlist:state.getIn(['wechathome','home_doctorlist']),
        }
    }, { pushState: push, load: loadDoctors,serviceList,clearlist })
export default class DoctorList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tap:'',
        height:'',
        changeDoctor:false,
        searchDoctor:'',
        chooseSerName:'',
        chooseTimeName:'',
        chooseTime:1,
        chooseSer:'all',
        chooseFamous:0,
        chooseFamousName:'',
        week:[
            { value: 1, label: '周一' ,checked:false},
            { value: 2, label: '周二' ,checked:false},
            { value: 3, label: '周三' ,checked:false},
            { value: 4, label: '周四' ,checked:false},
            { value: 5, label: '周五' ,checked:false},
            { value: 6, label: '周六' ,checked:false},
            { value: 7, label: '周日' ,checked:false},
          ]
      }
      this.page = 1;
    }
  renderBill(index, key) {
    console.log('898989')
    // console.log(this.props.home_doctorlist)
    var billMeta = this.props.billMetas.toJS()[index];
    billMeta.idx = index;
    billMeta.is_login = this.props.params.is_login;
        if(this.props.billMetas.toJS().length == (index+1)){
          billMeta.loading = this.props.loading;
          return <Doctor ref={(c) => this._last = c} key={key} {...billMeta}></Doctor>;
        }
    return <Doctor key={key} {...billMeta} ></Doctor>;
  }

  handlePan(ev) {
      var toLoad = isElementVisible(ReactDOM.findDOMNode(this._last))

      if (ev.direction == 8) {
          console.log(window.scrollY);
          if (toLoad) {
              if (!this.props.loading){
                ++this.page;
                let cat = (this.state.chooseSer!='all')?this.state.chooseSer:'';
                let name = this.state.searchDoctor;
                let have = this.state.have;
                let week = this.state.week;
                let _week = [];
                week.map((item) => {
                  if( item.checked ) {
                    _week.push(item.value)
                  }
                })
                let chooseFamous = this.state.chooseFamous==1?1:'';
                this.props.load({ num: 10, page:this.page,cat,name,have,week:_week,famous:chooseFamous })

              }
          }
      } else if (ev.direction == 16) {
        console.log('16___-----')
        console.log(window.scrollY);
      }
  }
  componentDidMount(){
      window.document.title='医生团队';
      if(typeof window == undefined){
        return;
      }
      var height = window.innerHeight || document.documentElement.clientHeight;
      // window.scrollTo(0,0);
      this.setState({...this.state,height})
  }
  componentWillMount(){

  }
  dropdown(tap){
    if(tap == this.state.tap){
      this.setState({...this.state,tap:''})
    }else{
      this.setState({...this.state,tap:tap})
    }
  }
  change(ev){
    console.log(this.state.searchDoctor);
    console.log(ev.target.value);
    this.setState({...this.state,changeDoctor:true,searchDoctor:ev.target.value})
  }
  search(){
    this.page = 1;
    let cat = this.state.chooseSer!='all'?this.state.chooseSer:'';
    let name = this.state.searchDoctor;
    this.props.clearlist();
    let week = this.state.week;
    let _week = [];
    week.map((item) => {
      if( item.checked ) {
        _week.push(item.value)
      }
    })
    let chooseFamous = this.state.chooseFamous==1?1:'';
    this.props.load({ num: 10, page:this.page,cat,name,week:_week,famous:chooseFamous})
  }
  clearSearch(){
    this.page = 1;
    let cat = this.state.chooseSer!='all'?this.state.chooseSer:'';
    this.props.clearlist();
    this.props.load({ num: 10, page:this.page,cat}).then(()=>{
      this.setState({...this.state,searchDoctor:''})
    })
  }
  choose(where,id,name){
    if(where == 'time'){
      //选择出诊
      this.props.clearlist();
      this.page = 1;
      var that = this;
      let cat = (this.state.chooseSer=='all')?'':this.state.chooseSer;
      let doctorname = this.state.searchDoctor;
      let week = this.state.week;
      let _week = [];
      week.map((item) => {
        if( item.checked ) {
          _week.push(item.value)
        }
      })
      let chooseFamous = this.state.chooseFamous==1?1:'';
      this.props.load({ num: 10, page:this.page,cat,name:doctorname,have:id,week:_week,famous:chooseFamous }).then(()=>{
        that.setState({...that.state,tap:'',chooseTimeName:name,chooseTime:id,have:id})
      })
    }else if(where == 'ser'){
      //选择服务项目
      this.props.clearlist();
      let week = this.state.week;
      let _week = [];
      week.map((item) => {
        if( item.checked ) {
          _week.push(item.value)
        }
      })
      this.page = 1;
      var that = this;
      let cat = (id=='all')?'':id;
      let doctorname = this.state.searchDoctor;
      let chooseFamous = this.state.chooseFamous==1?1:'';
      this.props.load({ num: 10, page:this.page,cat,name:doctorname,week:_week,famous:chooseFamous  }).then(()=>{
        that.setState({...that.state,chooseSer:id,tap:'',chooseSerName:name})
      })
    }else if( where == 'famous'){
      this.props.clearlist();
      let week = this.state.week;
      let _week = [];
      week.map((item) => {
        if( item.checked ) {
          _week.push(item.value)
        }
      })
      this.page = 1;
      var that = this;
      let cat = (this.state.chooseSer=='all')?'':this.state.chooseSer;
      let doctorname = this.state.searchDoctor;
      let famous = id==1?'1':'';
      this.props.load({ num: 10, page:this.page,cat,name:doctorname,week:_week,famous }).then(()=>{
        that.setState({...that.state,tap:'',chooseFamousName:name,chooseFamous:id})
      })
    }
  }
  keypress(e){
    e.preventDefault();
    console.log('ketpress-------');
    this.search();
  }

  change_week( idx ) {
    let week = this.state.week;
    week[idx].checked = !week[idx].checked;
    console.log(week);
    this.setState({ week })
  }

  change_famous( idx ) {
    let famous = this.state.famous;
    famous[idx].checked = !famous[idx].checked;
    console.log(famous);
    this.setState({ famous })
  }

  confirm() {
    console.log('confirm');
    let week = this.state.week;
    this.page = 1;
    var that = this;
    let _week = [];
    week.map((item) => {
      if( item.checked ) {
        _week.push(item.value)
      }
    })
    this.props.clearlist();
    console.log(_week);
    let cat = (this.state.chooseSer=='all')?'':this.state.chooseSer;
    let name = this.state.searchDoctor;
    let chooseFamous = this.state.chooseFamous==1?1:'';
    this.props.load({ num: 10, page:this.page,week:_week,cat,name,famous:chooseFamous }).then(()=>{
      that.setState({...that.state,tap:''})
    })
  }


  render() {
      console.log('DDDD111');
        // console.log(this.props.billMetas.toJS());
      var size = this.props.billMetas?this.props.billMetas.toJS().length:0;
      // var service_list = this.props.service_list;
      // var size = 0;
      var options = {
          touchAction: 'pan-y'
      };

      // var servicecategroy =this.props.servicecategroy?this.props.servicecategroy.toJS().data:[]
      var servicecategroy = this.props.service_list;
      console.log(servicecategroy);

      return FrontPage({
        options,
        length: size,
        handlePan: (::this.handlePan),
        renderItem: (::this.renderBill),
        dropdown:(::this.dropdown),
        tap:(this.state.tap),
        height:(this.state.height),
        changeDoctor:(this.state.changeDoctor),
        search:(::this.search),
        change:(::this.change),
        clearSearch:(::this.clearSearch),
        searchDoctor:this.state.searchDoctor,
        choose:(::this.choose),
        chooseTime:(this.state.chooseTime),
        chooseSer:(this.state.chooseSer),
        servicecategroy,
        chooseSerName:this.state.chooseSerName,
        chooseTimeName:this.state.chooseTimeName,
        keypress:(::this.keypress),
        change_week:(::this.change_week),
        week:this.state.week,
        confirm:(::this.confirm),
        chooseFamousName:(this.state.chooseFamousName),
        chooseFamous:(this.state.chooseFamous)
        })

  }


}
