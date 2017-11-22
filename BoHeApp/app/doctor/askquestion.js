import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import {getApiIp8007,qiniudomain} from 'app/util/utils.js'
import { askquestionimgkey,askquestionimgupload } from 'app/redux/reducers/askquestion';
import {Toast} from 'antd-mobile';

import {
    asyncConnect
} from 'redux-connect'


import { askQuestionUi } from './view/askquestion.js'

@connect(
  state => ({

  }),
  { pushState: push,askquestionimgkey,askquestionimgupload })
export default class AskQuestion extends Component {

    constructor(props) {
      super(props);
        this.state = {
            files: [],
            imageids:[],
            imgkeys:[],
            describe:'',
            currentNum:0,
            showViewer:false,
        }
    }
  static contextTypes = {
      store: PropTypes.object.isRequired
    };
show(fs, currentNum){

  this.setState({showViewer: true, currentNum: currentNum})
}
closeimgview(){
    this.setState({showViewer: false})
}

onChange(files, type, index){
  var that =this;
   if (type == 'add') {
     Toast.loading('加载中...',0);
   this.props.askquestionimgkey().then(() =>{

       var currentstate =this.context.store.getState();
       var imgkey = currentstate.getIn(['askquestion','imgkey']).toJS();

      if (imgkey.success == 0) {
           Toast.hide();
        Toast.info('请重新选择图片', 1);
      } else {

        this.state.uploader.addFile([(files[files.length-1].file)],['img'+imgkey.data]);
      Toast.hide();
      this.state.imageids.push({
        disk_name:this.state.uploader.files[this.state.uploader.files.length - 1].id,
        file_name:files[files.length-1].file.name,
        file_size:files[files.length-1].file.size
      })
        this.state.imgkeys.push(imgkey)
        that.setState({
          files: files,
         imageids:this.state.imageids
        })
      }

     }, () => {
       Toast.hide();
       Toast.info('请重新选择图片', 1);
     })
} else {
  this.state.uploader.removeFile(this.state.uploader.getFile(this.state.imageids[index].disk_name));
this.state.imageids.splice(index,1)
this.state.imgkeys.splice(index,1)
  this.setState({
    ...this.state,
    files: files
  })
}

}
describeInputChange(ev){
  this.setState({
    ...this.state,
    describe:ev
  })
}
commithandleclick(){

  console.log('commithandleclick')
  if (this.state.describe.length==0) {
       Toast.info('请填写您的问题~', 1);
       return;
  }else if (this.state.files.length==0) {
    Toast.info('请选择图片~', 1);
    return;
  }
      Toast.loading('提交中...',0);
  this.state.uploader.start();

}
componentDidMount() {
  var that = this;
  console.log('dsadsathat');
var num=0;
  var uploader = Qiniu.uploader({
    runtimes: 'html5,flash,html4', // 上传模式,依次退化
    browse_button: 'askimgpicker', // 上传选择的点选按钮，**必需**
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
        num=0;
        var imgkeys =that.state.imgkeys;
        console.log(imgkeys)

        var imgstrarray=[];
        for(var i=0;i<imgkeys.length;i++){

          imgstrarray.push({
            disk_name:imgkeys[i].data,
            file_name:that.state.imageids[i].file_name,
            file_size:that.state.imageids[i].file_size
          })
        }

            console.log(imgstrarray)
        // var imgstr =imgstrarray.join(',');

  if (files.length >= imgkeys.length) {
    if (that.state.describe.length==0) {
         Toast.info('请填写您的问题~', 1);
         return;
    }

    that.props.askquestionimgupload({ content:that.state.describe,doc_id:that.props.params.id,featured_images:imgstrarray }).then(() =>{
    Toast.hide();
            var currentstate =that.context.store.getState();
            var askuploadres = currentstate.getIn(['askquestion','askuploadres']).toJS();
            if(askuploadres.state=='no'){
                Toast.info(askuploadres.msg, 1);
            }else{

          that.props.pushState('/askquestionsuccess');
            }

   },() =>{
     Toast.hide();
     Toast.info('网络繁忙,请重试~', 1);
   })

  }else{
    Toast.hide();
  Toast.info('上传图片失败,请重试~', 1);
  }
      },
      'Key': function(up, file) {
        var imgkey =that.state.imgkeys[num].data;
        console.log(that.state.imgkeys)
        console.log(num)
        console.log(that.state.imgkeys[num].data)
        var pathone =imgkey.substr(0,3);
         var pathtwo =imgkey.substr(3,3);
         var paththree =imgkey.substr(6,3);
         console.log(pathone,pathtwo,paththree)
         console.log('/uploads/public/'+pathone+'/'+pathtwo+'/'+paththree+'/'+imgkey);
        num++;
        return 'uploads/public/'+pathone+'/'+pathtwo+'/'+paththree+'/'+imgkey;


      }
    }
  })

  this.setState({uploader: uploader});


}


render() {
  var fileurls=[];
  this.state.files.map((item) => {
    return (fileurls.push(item.url))
  })
  console.log(fileurls)
    console.log('fileurls')
        return askQuestionUi({
            files: (this.state.files),
            onChange: (::this.onChange),
            fileurls:fileurls,
            showViewer:this.state.showViewer,
            currentNum:this.state.currentNum,
            show: (::this.show),
            describe:(this.state.describe),
            describeInputChange:(::this.describeInputChange),
            commithandleclick:(::this.commithandleclick),
            closeimgview:(::this.closeimgview)
        })
}


}
