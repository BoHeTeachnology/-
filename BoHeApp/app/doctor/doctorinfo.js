import React, {Component} from 'react';

import {DoctorInfoUi} from './view/doctorinfo.js'
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';


import { load_detail ,load,frontBill as front,get_follow_num,get_passcase,get_message,followdoctor,delfollow,get_attention_doctorlist,if_attention } from 'app/redux/reducers/doctorlist.js'
import {get_doctorinfo,get_orderinfo,store_currentorderinfo,shareadd} from 'app/redux/reducers/wechathome';

import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {asyncConnect} from 'redux-connect'
import Message from './message.js'
import {qiniudomain} from 'app/util/utils.js'
import {Popup, Icon,Toast} from 'antd-mobile';
import { isElementVisible } from 'app/util/utils.js'
import { ListView } from 'antd-mobile';
import { MessageView } from './view/message.js'
import { getApiIp8007 } from 'app/util/utils.js'
import {
  isLoaded as isAuthLoaded,
  load as loadAuth
} from 'app/redux/reducers/auth';


@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {
    console.log('~~~~~~~~~~~')
    var state = getState();
    console.log(state.toJS())
    var idx;
    var id;
    if( typeof window == 'undefined') {
       idx = 'null';
       console.log(params.req.path)
      id = params.req.path.split('/')[2];
      console.log(params);
      console.log(params.req.cookies);
      console.log('aaaa')
    }else{
       id = window.location.pathname.split('/')[2];
      idx = window.location.pathname.split('/')[3];
      console.log('bbbbb')
    }
    // if(state.hasIn(['doctorlist','doctors',idx,'messagelist'])){
    //   return;
    // }
    var firstpage = false;
    if(idx == 'null'){
      firstpage = true;
    }
    return dispatch(loadAuth(params)).then(()=>{
      return dispatch(load_detail({id,firstpage})).then(()=>{
          return dispatch(get_orderinfo(id)).then(()=>{
            // return dispatch(if_attention({id}))
          })
      })
    },()=>{
      return dispatch(load_detail({id,firstpage})).then(()=>{
          return dispatch(get_orderinfo(id))
      })
    })


      // const promises = [];
      // promises.push(dispatch(get_doctorinfo(id)));
      // promises.push(dispatch(get_doctor_passcase(id)));
      // promises.push(dispatch(get_doctor_messagelist(id)));
      // promises.push(dispatch(get_orderinfo(8)));
      // return Promise.all(promises);

  }
}])

@connect(state => {
  // var idx = state.getIn(['doctorlist', 'frontbill', 'idx']);
  // var doctorinfo = state.getIn(['wechathome', 'doctorinfo']);
  var idx;
  if(typeof window == 'undefined'){
    idx = 'null';
    console.log('zhang')
    console.log(idx);

  }else{
    idx = window.location.pathname.split('/')[3];
    console.log('qwerqwrqwrqwqwrqwrw');
    idx = idx?idx:'null';
  }
  // idx = state.getIn(['doctorlist', 'frontbill', 'idx']);
  console.log('1234@4311');
  console.log(idx);
  console.log('fuck');
  console.log(state.getIn(['doctorlist']).toJS())
  let doctorinlist = state.getIn(['doctorlist','doctors',idx]);
  let doctoroutlist = state.getIn(['doctorlist']);
  let isinlist = state.hasIn(['doctorlist','doctors',idx]);
  console.log(state.hasIn(['doctorlist','doctors',idx]))
  var doctorinfo;
  if(idx!='null'){
    if(isinlist){
      doctorinfo = doctorinlist;
    }else{
      doctorinfo = doctoroutlist;
    }
  }else{
    doctorinfo = doctoroutlist;
  }
  // var doctorinfo = (idx!='null')?(isinlist?doctorinlist:doctoroutlist):doctoroutlist;
  var orderinfo = state.getIn(['wechathome', 'orderinfo']);
  var attention_doctorlist = state.getIn(['doctorlist', 'attention_doctorlist']);
  var famous_doctor = state.getIn(['wechathome', 'famous_doctor']);
  var user =  state.getIn(['auth','user']);
  var if_att = state.getIn(['doctorlist', 'if_attention']);

  return {doctorinfo, idx,orderinfo,attention_doctorlist,famous_doctor,user,if_att}
}, {
  pushState: push,
  store_currentorderinfo,
  followdoctor,
  delfollow,
  get_message,
  shareadd,
  get_passcase,
  get_attention_doctorlist,
  if_attention
})

//   const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let maskProps;
// if (isIPhone) {
// // Note: the popup content will not scroll.
// maskProps = {
//   onTouchStart: e => e.preventDefault(),
// };
// }

export default class DoctorInfo extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });



    let follow_doctors =  this.props.attention_doctorlist?this.props.attention_doctorlist.toJS():[];
    console.log(123456789);
    console.log(this.props.if_att)
    let id = this.props.params.id;
    // let follow = false;
    // follow_doctors.map((item)=>{
    //   if(item.id == id){
    //     follow = true;
    //   }
    // })
    let follow = this.props.if_att == 'yes'?true:false;
    console.log(this.props.doctorinfo)
    var orderinfo =this.props.orderinfo?this.props.orderinfo.toJS().data:[];
    // var _messagelist = this.props.doctorinfo.toJS().messagelist?this.props.doctorinfo.toJS().messagelist:[];
    console.log('dehuilllll');
    // console.log(_messagelist);
    this.state = {
      tap: 1,
      follow,
      panelshow: false,
      upAndDown: false,
      lightboxIsOpen: true,
      showViewer: false,
      currentindex:0,
      ordermodalshow:false,
      dataSource: dataSource.cloneWithRows([]),
      isLoading: true,
      goodState:false,
      timearray:orderinfo.length!=0?orderinfo[0]:[],
    }
    this.page = 1;
    this.toLoad = true;
    this.firsttapthree = true;

  }

  componentWillReceiveProps(nextProps) {
    console.log('dehui1');
    if (nextProps.doctorinfo !== this.props.doctorinfo) {
      let doctorinfo =  nextProps.doctorinfo?nextProps.doctorinfo.toJS():'';
      let messagelist = (doctorinfo&&doctorinfo.messagelist)?doctorinfo.messagelist:[]
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(messagelist),
      });
    }
  }

  onEndReached = (event) => {
    if(this.state.tap != 3){
      return;
    }
    var that = this;
    var doctor = this.props.doctorinfo? this.props.doctorinfo.toJS(): {};

    console.log('dehui333444')
    console.log(doctor);
    if (!this.toLoad) {
      return;
    }
    let firstpage = false;
    console.log('reach end', event);
    if(!doctor.loading){
      this.toLoad = false;
      let id = window.location.pathname.split('/')[2];
      let idx = window.location.pathname.split('/')[3];
      if(idx == 'null'){
        firstpage = true;
      }
      ++this.page;
      this.props.get_message({ num: 5, page:this.page,id,firstpage }).then(()=>{
        that.toLoad = true;
      })
    }
  }
  row(rowData, sectionID, rowID){
    console.log('dehui22222')
    console.log(rowData)
    if(rowData.flag){
      return <div/>;
    }
    rowData['idx'] = rowID
    return <Message key={rowID} {...rowData} show={this.show.bind(this)}/>
      // return  <MessageView  key={rowID} {...rowData} show={this.show.bind(this)}  good={this.good.bind(this)}/>
      // if(rowData.featured_images.length == 1){
      //   return (<div>
      //      <img src={ qiniudomain+rowData.featured_images }/>
      //   </div>)
      // }else{
      //   return (
      //     <div>
      //        <img src={ qiniudomain+rowData.featured_images[0] }/>
      //     </div>
      //   )
      // }
   };

   good(id){
      //  if(this.state.goodState){
      //    this.setState({...this.state,goodState:false,goodNum:this.state.goodNum-1})
      //    this.props.messagegood({id,type:1});
      //  }else{
      if(this.state.goodState){
        return;
      }
         this.setState({...this.state,goodState:true,goodNum:this.state.goodNum+1})
         this.props.messagegood({id,type:0});
      //  }
   }
    changeTap(tap){
      console.log('asdf11111');
      var that = this;
      let id = window.location.pathname.split('/')[2];
      let idx = window.location.pathname.split('/')[3];
      let firstpage = (idx=='null')?true:false;
      if(tap == 2){
        this.props.get_passcase({id,firstpage}).then(()=>{
          that.setState({...that.state,tap})
        })
      }else if(tap == 3){
        if(this.firsttapthree){
          this.firsttapthree = false;
          this.props.get_message({id,num:5,page:1,first:true,firstpage}).then(()=>{
            that.setState({...that.state,tap})
          })
        }
      }
      that.setState({...that.state,tap})
    }
    followClick(follow){
      if(!this.props.user){
        if ((typeof window === 'undefined')) {
            return;
        }
        window.location.href = 'http://'+getApiIp8007()+'/weixin/user?redirect=1';
      }
      if(follow){
        this.setState({...this.state,panelshow:true})
      }else{
        //关注接口
        console.log('train!!!!!!!');
        console.log(this.props.doctorinfo.toJS().id);
        var that = this;
        let doctorid = this.props.doctorinfo.toJS().id;
        console.log('zhangzhang1');
        console.log(doctorid);
        this.props.followdoctor({doctorid}).then(()=>{
          that.setState({...that.state,follow:true})
        });
      }
    }
    close(type) {
      if (type == 'no') {
        this.setState({
          ...this.state,
          panelshow: false
        })
      } else if (type == 'yes') {
        var that = this;
        let doctorid = this.props.doctorinfo.toJS().id;
        this.props.delfollow({doctorid}).then(()=>{
          that.setState({
            ...that.state,
            panelshow: false,
            follow: !that.state.follow
          })
        })
        //取消关注接口
      }
    }
    ordermodalclose() {
    this.setState({...state,ordermodalshow:false})
    }
  down() {
    console.log('~~~~111');
    this.setState({
      ...this.state,
      upAndDown: !this.state.upAndDown
    })
  }
  show(messageid, currentNum,index) {
    console.log('show????');
    console.log(currentNum);
    console.log(messageid);

    var doctor = this.props.doctorinfo? this.props.doctorinfo.toJS(): {};
    var messagelist = doctor.messagelist;
    console.log(doctor);
    console.log(messagelist)
    console.log(index);
    console.log(messagelist[index].featured_images);
    let imagelist;
    messagelist.map((message) => {
      console.log('~~~~222');
      console.log(message)
      if (message.id == messageid) {
        imagelist = message.featured_images;
      }
      // window.scrollTo(0,0);
    })
    var allimg = [];
    for (let i = 0; i < imagelist.length; i++) {
      var image = imagelist[i];
      allimg.push((qiniudomain + image))
    }
    console.log(allimg)
    this.setState({showViewer: true, currentNum, imagelist: allimg})
  }
  closes() {
    this.setState({showViewer: false})
  }
  share() {

    let id = this.props.params.id;
    let idx = this.props.params.idx;
    // this.props.pushState('/doctorcard/' + id);
    window.location.href = 'http://view.boheyayi.com/doctorcard/' + id;

  }
  askDoctor(id) {
    // if(this.props.user){
    //
    //       this.props.pushState('/askquestion/' + id);
    // }else{
    //   window.location.href = 'http://'+getApiIp8007()+'/weixin/user?redirect=1';
    //
    // }
      window.location.href = "tel:400-9696791";

  }
getWeekDay(date){
  console.log('getWeekDay')
  	var arys1 = new Array();
  	   arys1 = date.split('-');     //日期为输入日期，格式为 2013-3-10
  	   var ssdate = new Date(arys1[0], parseInt(arys1[1] - 1), arys1[2]);
  	   var  week1=String(ssdate.getDay()).replace("0","日").replace("1","一").replace("2","二").replace("3","三").replace("4","四").replace("5","五").replace("6","六")//就是你要的星期几
  	   return"星期"+week1
  }
orderdatettimehandle(timetype,index){
  console.log('lllll')
  console.log(timetype)
  if(this.props.orderinfo){
    var srctype = window.location.pathname.split('/')[3];
    var orderinfo =this.props.orderinfo?this.props.orderinfo.toJS().data:[];
    var idx =this.state.currentindex;
      console.log(orderinfo)
    var storedata =orderinfo[idx][index];
    console.log(storedata)
    storedata.timetype =timetype;
    storedata.srctype=srctype;
    console.log(storedata)
    this.props.store_currentorderinfo(storedata);
    this.props.pushState('/orderinfo')
}
}
ordertimeclickhandle(currentindex){
  console.log(currentindex)
  console.log('currentindex')
  var orderinfo =this.props.orderinfo?this.props.orderinfo.toJS().data:[];

  this.setState({...this.state,currentindex:currentindex,timearray:orderinfo[currentindex]})
}

passcaseclickhandle(caseid){
  if (typeof window === 'undefined') {
      return;
  }
  window.location.href = 'http://www.boheyayi.com/mobile/passcaseDetail/post/'+caseid;
}

  componentDidMount() {
    var doctor = this.props.doctorinfo? this.props.doctorinfo.toJS():null;
    if(doctor){
      window.document.title=doctor.name;
    }
    (function(m, ei, q, i, a, j, s) {
        m[i] = m[i] || function() {
            (m[i].a = m[i].a || []).push(arguments)
        };
        j = ei.createElement(q),
            s = ei.getElementsByTagName(q)[0];
        j.async = true;
        j.charset = 'UTF-8';
        j.src = '//static.meiqia.com/dist/meiqia.js?_=t';
        s.parentNode.insertBefore(j, s);
    })(window, document, 'script', '_MEIQIA');
    _MEIQIA('entId', '47693');
    _MEIQIA('withoutBtn');
    var that = this;
    let id = window.location.pathname.split('/')[2];
    // this.props.if_attention({id}).then(()=>{
    //   let follow = that.props.if_att=='yes'?true:false;
    //   that.setState({follow})
    // })
    window.scrollTo(0, 0);
  }
  componentWillMount() {

    if (!this.props.idx) {
      console.log('5555555');
      let id = this.props.params.id;
      let idx = this.props.params.idx;
      console.log(id);
      console.log(idx);
      // this.props.load_detail({id})
    }
  }
  shouldComponentUpdate(nextProps){
    if(!nextProps.doctorinfo){
      return false;
    }
    return true;
  }
  renderItem(index, key) {
    console.log('2000');
    console.log(index)
    var doctor = this.props.doctorinfo? this.props.doctorinfo.toJS(): {};
    console.log(doctor);
    var messagelist = doctor.messagelist;
    var message = messagelist[index];
    message.idx = index;
    if (messagelist.length == (index + 1)) {
      return <Message ref={(c) => this._last = c} key={key} {...message} show={this.show.bind(this)}></Message>;
    }
    return <Message key={key} {...message} show={this.show.bind(this)}></Message>;
  }

  goorderClose() {
    console.log('iiiii')
    // this.setState({...this.state,ordertimeshow:false})
    Popup.hide();
  }
  goorderclickhandle() {

    if(this.props.user){

      if(this.props.orderinfo.toJS().data.length==0){

        Toast.info('没有出诊安排',1)
      return;

      }else {
        this.setState({...this.state,ordermodalshow:true})
      }

    }else{

      window.location.href = 'http://'+getApiIp8007()+'/weixin/user?redirect=1';
    }


  }
  ordermodalclose(){
      this.setState({...this.state,ordermodalshow:false})

  }
  meiqia(){
    _MEIQIA('showPanel', {
        groupToken: 'ee0de96cec4b430a3ea8c2bab2e3743a'
    });
  }
  handlePan(ev) {
      var toLoad = isElementVisible(ReactDOM.findDOMNode(this._last))
      var doctor = this.props.doctorinfo? this.props.doctorinfo.toJS(): {};
      var that = this;
      if (ev.direction == 8) {
          console.log(window.scrollY);
          console.log(toLoad);
          if ( this.toLoad) {
            this.toLoad = false;
              if(!doctor.loading){
                  let idx = window.location.pathname.split('/')[3];
                  let firstpage = false;
                  if(idx == 'null'){
                    firstpage = true;
                  }
                  let id = window.location.pathname.split('/')[2];
                  ++this.page;
                  this.props.get_message({ num: 5, page:this.page,id,firstpage }).then(()=>{
                    that.toLoad = true;
                  })
              }
          }
      } else if (ev.direction == 16) {
        console.log('16___-----')
        console.log(window.scrollY);
      }
  }

  render() {
    var options = {
        touchAction: 'pan-y'
    };
    var idx = this.props.params.idx;
    var id = this.props.params.id;
    var doctor = this.props.doctorinfo? this.props.doctorinfo.toJS(): {};
    var messagelist = doctor.messagelist;
    var size = messagelist?messagelist.length:0;
    var servicelist=[];
    servicelist=doctor.skilledin?doctor.skilledin.split('、'):[];
    console.log('OOOOOOpppp');
    var currentindex =this.state.currentindex;
    var orderinfo =this.props.orderinfo?this.props.orderinfo.toJS().data:[];
    console.log(orderinfo);
    console.log(this.props.orderinfo.toJS());
    console.log('OOOOOOpppp');
    var orderdatearray=[];
    var ordercatarray=[];
    if(orderinfo&&orderinfo.length>0){
   orderinfo.map((orderitem,index)=>{
     orderdatearray.push(orderitem[0].date)
   });
  orderinfo[0][0].type.map((ordercatitem,index)=>{
    ordercatarray.push(ordercatitem.name)
   })
  }

    var orderdatestr=orderdatearray.join('、');
    var ordercatstr=ordercatarray.join('、');
    console.log(this.props.orderinfo.toJS().data)
    var toLoad = this.toLoad;
    return DoctorInfoUi({
      ...doctor,
      orderinfo,
      orderdatearray,
      timearray:(this.state.timearray),
      orderdatestr,
      ordercatstr,
      toLoad,
      changeTap: (:: this.changeTap),
      tap: this.state.tap,
      follow: this.state.follow,
      followClick: (:: this.followClick),
      panelshow: this.state.panelshow,
      close: (:: this.close),
      down: (:: this.down),
      upAndDown: this.state.upAndDown,
      lightboxIsOpen: this.state.lightboxIsOpen,
      showViewer: this.state.showViewer,
      show: (:: this.show),
      closes: (:: this.closes),
      currentNum: this.state.currentNum,
      messagelist: messagelist,
      share: (:: this.share),
      askDoctor: (:: this.askDoctor),
      imagelist: (this.state.imagelist),
      renderItem: (:: this.renderItem),
      length: size,
      goorderclickhandle: (:: this.goorderclickhandle),
      servicelist,
      currentindex:(this.state.currentindex),
      ordermodalshow:(this.state.ordermodalshow),
      ordertimeclickhandle:(::this.ordertimeclickhandle),
      orderdatettimehandle:(::this.orderdatettimehandle),
      ordermodalclose:(::this.ordermodalclose),
      handlePan:(::this.handlePan),
      options,
      length:size,
      passcaseclickhandle:(::this.passcaseclickhandle),
      onEndReached:(::this.onEndReached),
      dataSource:this.state.dataSource,
      row:(::this.row),
      meiqia:(::this.meiqia),
      getWeekDay:(::this.getWeekDay),
    });
  }
}
