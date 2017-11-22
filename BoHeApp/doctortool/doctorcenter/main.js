import React , { Component } from 'react';


import Promise from 'bluebird'

import { asyncConnect } from 'redux-connect'

import { Link } from 'react-router'

import { push } from 'react-router-redux';

import { connect } from 'react-redux';

import { _DoctorCenter_ } from './view/mainpage.js'

import  getApiIp  from 'doctortool/util/apiinterface.js'

import {
  load,
  LoadedorLoading,
  load_wxjs
} from 'doctortool/redux/reducers/user_doctor.js'


@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {
    const promises = [];
    if(!LoadedorLoading(getState())){
        promises.push(dispatch(load(params)));
        promises.push(dispatch(load_wxjs()));
    }
    return Promise.all(promises);
  }
}])
@connect(
  state => ({ doctorRepo : state.getIn(['user_doctor','doctor']),
              wxpackage  : state.getIn(['user_doctor','wxjs'])
  }),
  { pushState: push})
export default class DoctorCenter extends Component {

    toOrder(event){
    	event.preventDefault();
    	this.props.pushState('/doctorcenter/toOrderDate')
    }
    componentDidMount(){

        if ((typeof window === 'undefined')||(window.__SERVER__ == true)) {

        }else{
          var doctor = this.props.doctorRepo?this.props.doctorRepo.toJS():{};
          document.title = doctor.name+'的名片';

          var appId = this.props.wxpackage.get('appId');
          var timestamp = this.props.wxpackage.get('timestamp');
          var nonceStr = this.props.wxpackage.get('nonceStr');
          var signature = this.props.wxpackage.get('signature');

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
                      'previewImage'
                    ],
                    success: function (res) {
                      //alert(JSON.stringify(res));
                    }
                  });

                  // 2. 分享接口
                  // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
                  wx.onMenuShareAppMessage({
                    title: '薄荷牙医--'+doctor.name,
                    desc: doctor.hospital +'的名医，擅长'+ doctor.field,
                    link:'http://'+getApiIp()+'/doctorasist/?id='+doctor.id+'?&',
                    imgUrl: 'http://'+getApiIp()+doctor.photo,
                    trigger: function (res) {
                      // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                      //alert('用户点击发送给朋友');
                    },
                    success: function (res) {
                    },
                    cancel: function (res) {
                      //alert('已取消');
                    },
                    fail: function (res) {
                      //alert(JSON.stringify(res));
                    }
                  });
                  //alert('已注册获取“发送给朋友”状态事件');

                  // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口

                  wx.onMenuShareTimeline({
                    title: '薄荷牙医--'+doctor.name,
                    desc: doctor.hospital +'的名医，擅长'+ doctor.field,
                    link:'http://'+getApiIp()+'/doctorasist/?id='+doctor.id+'?&',
                    imgUrl: 'http://'+getApiIp()+doctor.photo,
                    trigger: function (res) {
                      // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                      //alert('用户点击分享到朋友圈');
                    },
                    success: function (res) {
                    },
                    cancel: function (res) {
                      //alert('已取消');
                    },
                    fail: function (res) {
                      //alert(JSON.stringify(res));
                    }
                  });
          });
          wx.error(function (res) {  
          });


          },
            function() {
              debugger;
          });
        }
        function customName(visibility) {

          let patientname = doctor.u_real_name?doctor.u_real_name:doctor.u_name?doctor.u_name:'';
          if (visibility === 'visible') {
            _MEIQIA('metadata', {
                name : doctor.name+'的患者('+patientname+')', // 美洽默认字段
                address : '', // 美洽默认字段
                phone : '', // 自定义字段
                email : '', // 自定义字段
                company : '', // 自定义字段
                job : '', // 自定义字段
                category : '', // 自定义字段
            });
          }
          else {
              _MEIQIA('metadata', {
                name : doctor.name+'的患者('+patientname+')', // 美洽默认字段
                address : '', // 美洽默认字段
                phone : '', // 自定义字段
                email : '', // 自定义字段
                company : '', // 自定义字段
                job : '', // 自定义字段
                category : '', // 自定义字段
            });
          }
        }

    componentDidMount(){

    }

    toDoctorAssitant(){

    }

    render() {
        var doctor = this.props.doctorRepo.get('doctor').toJS();
        return _DoctorCenter_({
            doctor,
            toOrder:(::this.toOrder),
            toDoctorAssitant:(::this.toDoctorAssitant)
        });
    }
	// methods
}
