import React , { Component } from 'react';

import { DoctorCardUi } from './view/doctorcard.js'
import ReactDOM from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { load_detail,frontBill as front,doctorcardinfo } from 'app/redux/reducers/doctorlist.js'
import { wxJdkLoad,test } from 'app/redux/reducers/wxjdk.js'
import { shareadd } from 'app/redux/reducers/wechathome';

import { asyncConnect } from 'redux-connect'
import {qiniudomain} from 'app/util/utils.js'
import {getApiIp8007} from 'app/util/utils.js'
import {Toast} from 'antd-mobile';


@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {

    // var id = param.payload.pathname.split('/')[2];
    // var idx = param.payload.pathname.pathname.split('/')[3];
    // console.log(id,idx);
    //   console.log('~~~~~~~~~~~')
    // var firstpage = false;
    // if(idx == 'null'){
    //   firstpage = true;
    // }
    // return dispatch(load_detail({id,firstpage}))
    var id;
    if( typeof window == 'undefined') {
      id = params.req.path.split('/')[2];
    }else{
       id = window.location.pathname.split('/')[2];
    }
    return dispatch(doctorcardinfo({id}))
}
}])


@connect(
    state => {
        var doctorinfo = state.getIn(['doctorlist','doctorcardinfo']);
        var wxpackage = state.getIn(['wxjdk','wxpackage']);
        return { doctorinfo,wxpackage  }
    }, { pushState: push,load_detail,front,wxJdkLoad,shareadd,test })

export default class DoctorInfo extends Component {
  	constructor(props) {
  	  super(props);
      this.state = {
        height:''
      }
  	}
    share(){
      let id = window.location.pathname.split('/')[2];
      this.props.shareadd({id});
    }
    componentDidMount(){

        if ((typeof window === 'undefined')||(window.__SERVER__ == true)) {

        }else{
          this.props.wxJdkLoad().then(()=>{

            var that = this;
            var doctor = this.props.doctorinfo?this.props.doctorinfo.toJS():null;
            document.title = doctor.name+'医生的名片';
            console.log('wxpackage--------');
            console.log(this.props.wxpackage)
            var appId;
            var timestamp;
            var nonceStr;
            var signature;
            if(this.props.wxpackage){
              console.log(this.props.wxpackage.toJS())
              appId = this.props.wxpackage.get('appId');
              timestamp = this.props.wxpackage.get('timestamp');
              nonceStr = this.props.wxpackage.get('nonceStr');
              signature = this.props.wxpackage.get('signature');
            }else{
              Toast.info('您的网络有问题',1)
            }

            window.require(["http://res.wx.qq.com/open/js/jweixin-1.0.0.js"], function(para) {
            var wx = para;

            wx.config({
                  debug: false,
                  appId,
                  timestamp,
                  nonceStr,
                  signature,
                  jsApiList: [
                  'checkJsApi',
                  'onMenuShareTimeline',
                  'onMenuShareAppMessage'
                  ]
              });
           wx.ready(function () {
          // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
                   wx.checkJsApi({
                      jsApiList: [
                        'getNetworkType',
                        'previewImage',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage'
                      ],
                      success: function (res) {

                      }
                    });

                    // 2. 分享接口
                    // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
                    wx.onMenuShareAppMessage({
                      title: '薄荷牙医--'+doctor.name,
                      desc: doctor.institution + doctor.jobtitle + '擅长'+ doctor.skilledin,
                      link:'http://view.boheyayi.com/doctorcard/'+doctor.id,
                      imgUrl: qiniudomain+doctor.photo,
                      trigger: function (res) {
                        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                        // alert('用户点击发送给朋友');
                      },
                      success: function (res) {
                        // alert('qqqqq');
                        that.share();
                      },
                      cancel: function (res) {
                        // alert('已取消');
                      },
                      fail: function (res) {

                        // alert(JSON.stringify(res));
                      }
                    });
                    //alert('已注册获取“发送给朋友”状态事件');

                    // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口

                    wx.onMenuShareTimeline({
                      title: '薄荷牙医--'+doctor.name,
                      desc: doctor.institution + doctor.jobtitle + '擅长'+ doctor.skilledin,
                      link:'http://view.boheyayi.com/doctorcard/'+doctor.id,
                      imgUrl: qiniudomain+doctor.photo,
                      trigger: function (res) {
                        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                        // alert('用户点击分享到朋友圈');
                      },
                      success: function (res) {
                        // alert('wwwwww')
                      },
                      cancel: function (res) {
                        // alert('已取消22222');
                      },
                      fail: function (res) {
                        // alert(JSON.stringify(res));
                      }
                    });
            });
            wx.error(function (res) {
              //  alert(res);
            });


            },
              function() {
                debugger;
            });

            let height = window.innerHeight || document.documentElement.clientHeight;
            let width = window.innerWidth || document.documentElement.clientWidth;
            console.log('aasdasdappppp');
            console.log(width);
            console.log(height);
            this.setState({height})
            })
          }


      }
    componentWillMount(){
      console.log('lLLLLLLl');

      // console.log(this.props.idx)
      // if(!this.props.idx){
      //   console.log('$$$$$44444')
      //   let id = this.props.params.id;
      //   let idx = this.props.params.idx;
      //   console.log(id);
      //   console.log(idx);
      //   this.props.load_detail({id})
      // }
    }
    toShare(){
      console.log('shareshare111');
      this.props.test()
    }
  	render(){
        console.log('111222333')
        console.log(this.state.height);
        var doctor = this.props.doctorinfo?this.props.doctorinfo.toJS():{};
        console.log(doctor);
        return DoctorCardUi({
            ...doctor,
            height:this.state.height,
            toShare:(::this.toShare)
        });
  	}

}
