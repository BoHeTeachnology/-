import React, {Component,PropTypes} from 'react'

import {Link, History} from 'react-router'
import {UserInfoUi} from './view/userinfo.js'
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import {asyncConnect} from 'redux-connect'
import { change_userinformation } from 'app/redux/reducers/usercenter';
import {Toast} from 'antd-mobile';
import { askquestionimgkey } from 'app/redux/reducers/askquestion';
import {getApiIp8007,qiniudomain} from 'app/util/utils.js'


@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {

  }
}])

@connect(state => ({
  user: state.getIn(['auth','user']),

}), {
  pushState: push,
  change_userinformation,
  askquestionimgkey,
})

export default class UserInfo extends Component {

  constructor(props) {
    super(props);
     var userinfo =this.props.user?this.props.user.toJS().data:{}
     var sex=''
     if(userinfo.iu_gender=='female'){
     sex='female';
   }else if(userinfo.iu_gender=='male'){
    sex='male';
   }
    var userinfo =this.props.user?this.props.user.toJS().data:{}
    this.state = {
     sex: sex,
     age:userinfo.age,
     name:userinfo.name?userinfo.name:'薄荷用户',
     files:[{
        url:userinfo.photo?(qiniudomain+userinfo.photo):require('app/common/images/user_default.jpg'),
        id:'100',
      }],
      imageids:[],
      avatarimg:'',

    };
  }
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
nexthandleclick(){
console.log('nexthandleclick')


if(this.state.files.length==0){
  Toast.info('头像不能为空',1);
  return;
}
if(this.state.name.length==0){
  Toast.info('姓名不能为空',1);
  return;
}
if(this.state.sex==0){
  Toast.info('请选择性别',1);
  return;
}
if(this.state.age.length==0||Number(this.state.age)<=0||Number(this.state.age)>=100){
  Toast.info('请输入真实年龄',1);
  return;
}


Toast.loading('提交中...',0);
this.state.uploader.start();
}
selectsexhandleclick(selectsex) {
  console.log(selectsex);
  this.setState({sex: selectsex})

}
userinputitemchange(ev,type){

if(type=='age'){
  this.setState({age: ev})
}else if (type=='name') {
  this.setState({name: ev})
}

}
// onChange(files, type, index){
//   console.log(files,type,index)
//   var that =this;
//    if (type == 'add') {
//      Toast.loading('加载中...',0);
//    this.props.askquestionimgkey().then(() =>{
//
//        var currentstate =this.context.store.getState();
//        var imgkey = currentstate.getIn(['askquestion','imgkey']).toJS();
//
//       if (imgkey.success == 0) {
//            Toast.hide();
//         Toast.info('请重新选择图片', 1);
//       } else {
//         this.state.uploader.addFile([(files[files.length-1].file)],['img'+imgkey.data]);
//       Toast.hide();
//       this.state.imageids.push({
//         disk_name:this.state.uploader.files[this.state.uploader.files.length - 1].id,
//         file_name:files[files.length-1].name,
//         file_size:files[files.length-1].size
//       })
//         that.setState({
//           files: files,
//          imageids:this.state.imageids
//         })
//       }
//
//      }, () => {
//        Toast.hide();
//        Toast.info('请重新选择图片', 1);
//      })
// } else {
//   if(this.state.imageids.length==0){
//     this.setState({
//       ...this.state,
//       files: files
//     })
//   }else{
//   this.state.uploader.removeFile(this.state.uploader.getFile(this.state.imageids[index].disk_name));
// this.state.imageids.splice(index,1)
//   this.setState({
//     ...this.state,
//     files: files
//   })
// }
// }
// }
componentDidMount() {
  var that = this;
  console.log('dsadsathat');
  var uploader = Qiniu.uploader({
    runtimes: 'html5,flash,html4', // 上传模式,依次退化
    browse_button: 'avatarpicker', // 上传选择的点选按钮，**必需**
    // 在初始化时，uptoken, uptoken_url, uptoken_func 三个参数中必须有一个被设置
    // 切如果提供了多个，其优先级为 uptoken > uptoken_url > uptoken_func
    // 其中 uptoken 是直接提供上传凭证，uptoken_url 是提供了获取上传凭证的地址，如果需要定制获取 uptoken 的过程则可以设置 uptoken_func
    // uptoken : '<Your upload token>', // uptoken 是上传凭证，由其他程序生成
    uptoken_url:  'http://'+ getApiIp8007() + '/qiniu_token/rest', // Ajax 请求 uptoken 的 Url，**强烈建议设置**（服务端提供）
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
        console.log('sdsdsd')
      },
      'BeforeUpload': function(up, file) {
        // 每个文件上传前,处理相关的事情

      },
      'UploadProgress': function(up, file) {
        // 每个文件上传时,处理相关的事情
      },
      'FileUploaded': function(up, file, info) {
      },
      'Error': function(up, err, errTip) {
        //上传出错时,处理相关的事情
        console.log('err' + errTip)

      },
      'UploadComplete': function(uploader, files) {
        //队列文件处理完毕后,处理相关的事情
        console.log('UploadComplete')
        console.log(files)

        if (files.length >= 1){
          var currentstateone =that.context.store.getState();
          var imgkey = currentstateone.getIn(['askquestion','imgkey']).toJS();
            var imgarray={disk_name:imgkey.data,file_name:that.state.imageids[0].file_name,file_size:that.state.imageids[0].file_size}
            console.log(imgarray);
              console.log('imgarray');
          that.props.change_userinformation({iu_gender:that.state.sex,username:that.state.name,age:that.state.age,photo:imgarray}).then(() =>{
            Toast.hide();
           var currentstate =that.context.store.getState();
           var updateuserinfores = currentstate.getIn(['usercenter','updateuserinfores']).toJS();
           if(updateuserinfores.state=='no'){
             Toast.info(updateuserinfores.msg,1)
           }else{
            that.props.pushState('/usercenter')
           }


          },() =>{
              Toast.hide();
             Toast.info('网络繁忙~',1)
          })

        }else{
          that.props.change_userinformation({iu_gender:that.state.sex,username:that.state.name,age:that.state.age,photo:{}}).then(() =>{
            Toast.hide();
           var currentstate =that.context.store.getState();
           var updateuserinfores = currentstate.getIn(['usercenter','updateuserinfores']).toJS();
           if(updateuserinfores.state=='no'){
             Toast.info(updateuserinfores.msg,1)
           }else{
            that.props.pushState('/usercenter')
           }


          },() =>{
              Toast.hide();
             Toast.info('网络繁忙~',1)
          })

        }

      },
      'Key': function(up, file) {
        var currentstate =that.context.store.getState();
        var imgkey = currentstate.getIn(['askquestion','imgkey']).toJS();
        // do something with key here
        console.log(imgkey.data)
           var pathone =imgkey.data.substr(0,3);
            var pathtwo =imgkey.data.substr(3,3);
            var paththree =imgkey.data.substr(6,3);
            console.log(pathone,pathtwo,paththree)
            console.log('/uploads/public/'+pathone+'/'+pathtwo+'/'+paththree+'/'+imgkey.data);
        return 'uploads/public/'+pathone+'/'+pathtwo+'/'+paththree+'/'+imgkey.data;


      }
    }
  })

  this.setState({uploader: uploader});


}

avatarchange(files){


  var that =this;





  if(this.state.uploader.files.length>0){

    this.state.uploader.removeFile(this.state.uploader.getFile(this.state.imageids[0].disk_name));
  this.state.imageids.splice(0,1)

  }



  Toast.loading('加载中...',0);
this.props.askquestionimgkey().then(() =>{

    var currentstate =this.context.store.getState();
    var imgkey = currentstate.getIn(['askquestion','imgkey']).toJS();

   if (imgkey.success == 0) {
        Toast.hide();
     Toast.info('请重新选择图片', 1);
   } else {
     Toast.hide();
         var that =this;
       var selectfile = this.refs.avatardom.files[0];
          console.log('ddsadsa')
       console.log('ddsadsa')
       this.state.uploader.addFile([selectfile],['userimg']);
       console.log('ddsadsa')
       this.previewImage(this.state.uploader.files[0],function(imgsrc){
       that.setState({avatarimg:imgsrc})
         console.log('imgsrc')

       })
       this.state.imageids.push({
         disk_name:this.state.uploader.files[this.state.uploader.files.length - 1].id,
         file_name:selectfile.name,
         file_size:selectfile.size
       })


   }

  }, () => {
    Toast.hide();
    Toast.info('请重新选择图片', 1);
  })

}
previewImage(file, callback) {//file为plupload事件监听函数参数中的file对象,callback为预览图片准备完成的回调函数
    if (!file || !/image\//.test(file.type)) return; //确保文件是图片
    if (file.type == 'image/gif') {//gif使用FileReader进行预览,因为mOxie.Image只支持jpg和png
        var fr = new mOxie.FileReader();
        fr.onload = function () {
            callback(fr.result);
            fr.destroy();
            fr = null;
        }
        fr.readAsDataURL(file.getSource());
    } else {
        var preloader = new mOxie.Image();
        preloader.onload = function () {
            //preloader.downsize(550, 400);//先压缩一下要预览的图片,宽300，高300
            var imgsrc = preloader.type == 'image/jpeg' ? preloader.getAsDataURL('image/jpeg', 80) : preloader.getAsDataURL(); //得到图片src,实质为一个base64编码的数据
            callback && callback(imgsrc); //callback传入的参数为预览图片的url
            preloader.destroy();
            preloader = null;
        };
        preloader.load(file.getSource());
    }
}

render(){

     console.log(this.state.name);
     console.log(this.state.files);
         var userinfo =this.props.user?this.props.user.toJS().data:{}

    return UserInfoUi({
      ...userinfo,
      userage:(this.state.age),
      username:(this.state.name),
      avatarimg:(this.state.avatarimg),
      sex:(this.state.sex),
      files:(this.state.files),
      nexthandleclick:(::this.nexthandleclick),
      selectsexhandleclick:(::this.selectsexhandleclick),
      userinputitemchange:(::this.userinputitemchange),
      avatarchange:(::this.avatarchange),
    })
  }

}
