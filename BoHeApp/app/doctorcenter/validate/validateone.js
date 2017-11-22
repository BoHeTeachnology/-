import React, {Component,PropTypes} from 'react';

import {ValidateoneUi} from './view/validateone.js'
import {connect} from 'react-redux';
import {asyncConnect} from 'redux-connect'
import {push} from 'react-router-redux';
import Immutable from 'immutable'
import {validateuploadone, validateimgkey} from 'app/redux/reducers/validate';
import {getApiIp8007,qiniudomain} from 'app/util/utils.js'
import {Toast} from 'antd-mobile';
import { getcity } from 'app/redux/reducers/doctorapp.js'





@asyncConnect([{
    promise: ({ store: { dispatch, getState }, params }) => {
        return dispatch(getcity({citycode:0}))
    }
}])

@connect(state => {
  return {
    validatestate: state.getIn(['validate', 'validatestate']),
    province:state.getIn(['doctorapp','province']),
  }
}, {
  pushState: push,
  validateuploadone: validateuploadone,
  validateimgkey: validateimgkey,
  getcity:getcity
})

export default class ValidateOne extends Component {
  constructor(props) {
    // code
    super(props);
    this.state = {

      files: [],
      pickerValue: [],
      sex: '',
      username: '',
      phone: '',
      identity:'',
      showViewer: false,
      currentNum: 0
    }
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  closeimgview() {
    console.log('wwww');
    this.setState({showViewer: false})
  }
  show(fs, currentNum) {
    console.log(fs, currentNum);
    this.setState({showViewer: true, currentNum: currentNum})
  }



  onChange(files, type, index){
    console.log(files, type, index)

      var that =this;
       if (type == 'add') {
       this.props.validateimgkey('avatar').then(() =>{

           var currentstate =this.context.store.getState();
           var avatarimgkey = currentstate.getIn(['validate','avatarimgkey']).toJS();

          if (avatarimgkey.success == 0) {
            Toast.info('请重新选择图片', 1);
          } else {
            this.state.uploader.addFile([files[0].file], ['avatarimg']);
            console.log(this.state.uploader.files)
            console.log("KKKKK!!!!")
            that.setState({
              files: files,
              avatarid:{
                disk_name:(this.state.uploader.files[this.state.uploader.files.length - 1]).id,
                file_name:files[0].file.name,
                file_size:files[0].file.size,
                content_type:files[0].file.type,
                created_at:files[0].file.lastModifiedDate.getFullYear()+'/'+files[0].file.lastModifiedDate.getMonth()+'/'+files[0].file.lastModifiedDate.getDate()
              },
            })
          }

         }, () => {
           Toast.info('请重新选择图片', 1);
         })
    } else {
      this.state.uploader.removeFile(this.state.uploader.getFile(this.state.avatarid.disk_name));
      this.setState({
        ...this.state,
        avatarid: {},
        files: files
      })
    }
  }

  validateInputChange(ev, inputtype) {
    console.log(ev)
    if (inputtype == 'username') {
      this.setState({
        ...this.state,
        username: ev
      })

    } else if (inputtype == 'phone') {
      this.setState({
        ...this.state,
        phone: ev
      })
    }else if (inputtype == 'identity') {
      this.setState({
        ...this.state,
        identity: ev
      })
    }

  }
changePick(ev){
  console.log('QQQQQQQ')
  console.log(ev[0]);
  if(ev[0] != this.state.province){
    console.log('province');
// <<<<<<< Updated upstream
    this.props.getcity({citycode:ev[0]}).then(() => {
        this.setState({...this.state,province:ev[0],city:ev[1]})
    })

  }
}
  cityOkBtnhandleClick (city) {
  console.log('jjjj')
    this.setState({pickerValue: city})
  }

  nexthandleclick() {
    console.log('kkk');

if (!this.state.avatarid) {
  Toast.info('请选择头像',1)
  return;

}else if (!this.state.username) {
  Toast.info('请填写姓名',1)
    return;
}else if (!this.state.sex) {
  Toast.info('请选择性别',1)
    return;
}else if (!this.state.phone) {
  Toast.info('请填写手机号',1)
    return;
}else if (!this.state.identity) {
  Toast.info('请填写身份证号',1)
    return;
}else if (!this.state.pickerValue.join('')) {
  Toast.info('请选择地址',1)
    return;
}
    // this.props.addvalidateonedata(data);
    this.state.uploader.start();
  }
  selectsexhandleclick(selectsex) {
    console.log(selectsex);
    this.setState({sex: selectsex})

  }

  componentDidMount() {
    var that = this;
    console.log('dsadsathat');

    var uploader = Qiniu.uploader({
      runtimes: 'html5,flash,html4', // 上传模式,依次退化
      browse_button: 'indentypicker12', // 上传选择的点选按钮，**必需**
      // 在初始化时，uptoken, uptoken_url, uptoken_func 三个参数中必须有一个被设置
      // 切如果提供了多个，其优先级为 uptoken > uptoken_url > uptoken_func
      // 其中 uptoken 是直接提供上传凭证，uptoken_url 是提供了获取上传凭证的地址，如果需要定制获取 uptoken 的过程则可以设置 uptoken_func
      // uptoken : '<Your upload token>', // uptoken 是上传凭证，由其他程序生成
      uptoken_url:  'http://' + getApiIp8007() + '/qiniu_token/rest', // Ajax 请求 uptoken 的 Url，**强烈建议设置**（服务端提供）
      // uptoken_func: function(file){    // 在需要获取 uptoken 时，该方法会被调用
      //    // do something
      //    return uptoken;
      // },
      get_new_uptoken: false, // 设置上传文件的时候是否每次都重新获取新的 uptoken
      // downtoken_url: '/downtoken',
      // Ajax请求downToken的Url，私有空间时使用,JS-SDK 将向该地址POST文件的key和domain,服务端返回的JSON必须包含`url`字段，`url`值为该文件的下载地址
      // unique_names: true,              // 默认 false，key 为文件名。若开启该选项，JS-SDK 会为每个文件自动生成key（文件名）
      //save_key: true,                  // 默认 false。若在服务端生成 uptoken 的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
      domain: qiniudomain+'/', // bucket 域名，下载资源时用到，**必需**
      // container: 'container',             // 上传区域 DOM ID，默认是 browser_button 的父元素，
      max_file_size: '100mb', // 最大文件体积限制
      multi_selection: true, //是否允许多张图片上传
      // unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
      flash_swf_url: 'path/of/plupload/Moxie.swf', //引入 flash,相对路径
      max_retries: 3, // 上传失败最大重试次数
      //  dragdrop: true,                     // 开启可拖曳上传
      // drop_element: 'container',          // 拖曳上传区域元素的 ID，拖曳文件或文件夹后可触发上传
      chunk_size: '4mb', // 分块上传时，每块的体积
      auto_start: false, // 选择文件后自动上传，若关闭需要自己绑定事件触发上传,
      //x_vars : {
      //    自定义变量，参考http://developer.qiniu.com/docs/v6/api/overview/up/response/vars.html
      //    'time' : function(up,file) {
      //        var time = (new Date()).getTime();
      // do something with 'time'
      //        return time;
      //    },
      //    'size' : function(up,file) {
      //        var size = file.size;
      // do something with 'size'
      //        return size;
      //    }
      //},
      init: {
        'FilesAdded': function(uploader, files) {
          console.log('FilesAdded')
          console.log(files)

        },
        'BeforeUpload': function(up, file) {
          // 每个文件上传前,处理相关的事情
          console.log(111)

        },
        'UploadProgress': function(up, file) {
          console.log(222)
          // 每个文件上传时,处理相关的事情
        },
        'FileUploaded': function(up, file, info) {
          console.log(333)
          // 每个文件上传成功后,处理相关的事情
          // 其中 info 是文件上传成功后，服务端返回的json，形式如
          // {
          //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
          //    "key": "gogopher.jpg"
          //  }
          // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

          // var res = JSON.parse(info);


        },
        'Error': function(up, err, errTip) {
          //上传出错时,处理相关的事情
          console.log('err' + errTip)
        },
        'UploadComplete': function(uploader, files) {
          //队列文件处理完毕后,处理相关的事情
          console.log('UploadComplete')
          console.log(files)
          if (files.length >= 1) {
            var status = 1;
            console.log(that.props.validatestate);
            var vds = that.props.validatestate?that.props.validatestate.toJS():{};
            if (vds && vds.data.state == null) {
              status = 0;
            } else {
              status = 1;
            }
            var currentstate =that.context.store.getState();
            var avatarimgkey = currentstate.getIn(['validate','avatarimgkey']).toJS();


            let _phone = that.state.phone;
            let phone = _phone.split(' ')[0]+_phone.split(' ')[1]+_phone.split(' ')[2];
            that.props.validateuploadone(status,that.state.avatarid,that.state.identity,that.state.username, avatarimgkey.data, that.state.sex, that.state.pickerValue.join(''), phone).then(() => {
                var currentstate =that.context.store.getState();
              var uploadoneres = currentstate.getIn(['validate','uploadoneres']).toJS();
              if (uploadoneres.success == '0') {
                Toast.info(uploadoneres.message, 1);
              } else {
                that.props.pushState('/doctorcenter/validatetwo');
              }

            }, () => {
              Toast.info('网络繁忙,请稍后再试', 1);
            })
          }else{
              Toast.info('请选择上传图片', 1);
          }
        },
        'Key': function(up, file) {
          // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
          // 该配置必须要在 unique_names: false , save_key: false 时才生效
          // console.log('key'+demoFiles[0]);
          console.log(file)
          console.log('dsdssd')

          var currentstate =that.context.store.getState();
          var avatarimgkey = currentstate.getIn(['validate','avatarimgkey']).toJS();
          // do something with key here
          console.log(avatarimgkey.data)
             var pathone =avatarimgkey.data.substr(0,3);
              var pathtwo =avatarimgkey.data.substr(3,3);
              var paththree =avatarimgkey.data.substr(6,3);
              console.log(pathone,pathtwo,paththree)
              console.log('/uploads/public/'+pathone+'/'+pathtwo+'/'+paththree+'/'+avatarimgkey.data);
          return 'uploads/public/'+pathone+'/'+pathtwo+'/'+paththree+'/'+avatarimgkey.data;
          //  var key = demoFiles
          //  // do something with key here
          //  return key
        }
      }
    })

    console.log('llls')
    this.setState({uploader: uploader});

    //  uploader.FilesAdded()

  }

  render() {
   console.log("\\\\\\\\\\\\");
console.log(this.props.province);
let province = this.props.province?this.props.province.toJS():[];
console.log(province);
    console.log('province');
let district = [];
province.map((province)=>{
  let _children = [];
  province.city?province.city.map((city)=>{
    let _city = {
      label:city.cityname,
      value:city.citycode
    }
    _children.push(_city)
  }):''
  let _province = {
    label:province.cityname,
    value:province.citycode,
    children:_children
  }
  district.push(_province)
})
   console.log(district);

    return ValidateoneUi({
      district,
      showViewer: (this.state.showViewer),
      currentNum: (this.state.currentNum),
      files: (this.state.files),
      sex: (this.state.sex),
      show: (::this.show),
      closeimgview: (::this.closeimgview),
      pickerValue: (this.state.pickerValue),
      citys: (this.state.citys),
      onChange: (::this.onChange),
      cityOkBtnhandleClick: (::this.cityOkBtnhandleClick),
      nexthandleclick: (::this.nexthandleclick),
      selectsexhandleclick: (::this.selectsexhandleclick),
      validateInputChange: (::this.validateInputChange),
      changePick:(::this.changePick)
    });
  }

}
