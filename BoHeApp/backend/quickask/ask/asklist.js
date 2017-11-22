import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'

import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import WeUI from 'react-weui';
const { Gallery, GalleryDelete, Uploader, Form, Cell,CellBody,FormCell,TextArea,Button} = WeUI;
import {
    isLoaded as isAuthLoaded,
    load as loadAuth,
    logout
} from 'backend/redux/reducers/auth';

import {
    asyncConnect
} from 'redux-connect'


import {
    load_left_list
} from 'backend/redux/reducers/left_list';

import {
    load as load_ask
} from 'backend/redux/reducers/ask';

import { _AskList_ } from './view/asklist.js'


export const asyncEvent = [{
    promise: ({ store: { dispatch, getState }, params }) => {
        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                    let state = getState();
                    let user = state.getIn(['auth','user']).toJS();
                    return dispatch(load_left_list());
            })
        } else {
                    let state = getState();
                    let user = state.getIn(['auth','user']).toJS();
                    return dispatch(load_left_list()).then(()=>{
                      return dispatch(load_ask({ num:10,begin:1 }))
                    });
        }
    }
}];


@asyncConnect(asyncEvent)
@connect(
  state => ({
      auth : state.get('auth'),
      asklist: state.getIn(['ask','asklist']).toJS(),
      allpage: state.getIn(['ask','allpage'])
  }),
  { pushState: push,load:load_ask })
export default class AskList extends Component {

    constructor(props) {
      super(props);
      this.state = { deleteid:undefined,status:'',showDetail:false,gallery:false,files:[],askfiles:[],idx:0 };
    }
    componentDidUpdate(){

    }
    handlePageClick(data){
        let selected = data.selected;
        this.props.load({ num:10,begin:selected+1});
    }
    delete_ask(){

    }
    getdeleteid(id,ev){
        ev.stopPropagation();
        var ele = ev.target || ev.srcElement;
        console.log(ele.tagName);
        if(ele.tagName == 'INPUT'){
         return;
        }
        console.log('DELETE_______++++++DELETE');
        console.log(id);
        this.setState({...this.state,deleteid:id});
    }
    reset(){
       this.setState({...this.state,status:''})
    }
    search(){

    }
    changeStatus(ev){
        this.setState({...this.state,status:ev.target.value})
    }
    detail(idx){

        let askfiles = [];
        let asklist = this.props.asklist;
        askfiles.push({ url:asklist[idx].photo});
        this.setState({...this.state,showDetail:true,idx,askfiles:askfiles})
    }
    close(){
        this.setState({...this.state,showDetail:false,files:[]})
    }
    reply(){
        console.log(this.state.uploader);
        this.setState({...this.state,showDetail:false,files:[]})
    }
    delete(){
        this.state.uploader.splice(this.state.gallery.id,1);
    }
    noreply(){
        this.setState({...this.state,showDetail:false,files:[]})
    }
    renderGalleryAsk(){
        if(!this.state.galleryAsk) return false;

        return (
            <Gallery src={this.state.galleryAsk.url} show onClick={ e=> {
                //avoid click background item
                e.stopPropagation();
                this.setState({...this.state,galleryAsk: false})
            }}>
            </Gallery>
        )
    }
    renderGallery(){
        if(!this.state.gallery) return false;

        return (
            <Gallery src={this.state.gallery.url} show onClick={ e=> {
                //avoid click background item
                e.stopPropagation();
                this.setState({gallery: false})
            }}>
                <GalleryDelete onClick={ e=> {
                    this.setState({
                        files: this.state.files.filter((e,i)=>i!=this.state.gallery.id),
                        gallery: false
                    });
                    this.delete();
                }} />
            </Gallery>
        )
    }
    lookaskbig(gallery){
      this.setState({...this.state,galleryAsk:gallery })
    }
    lookbig(gallery){
      this.setState({...this.state,gallery })
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
    componentDidMount(){
      var that = this;
      // console.log(that.state.demoFiles+'that');
      var uploader = Qiniu.uploader({
          runtimes: 'html5,flash,html4',      // 上传模式,依次退化
          browse_button: 'zdh',         // 上传选择的点选按钮，**必需**
          // 在初始化时，uptoken, uptoken_url, uptoken_func 三个参数中必须有一个被设置
          // 切如果提供了多个，其优先级为 uptoken > uptoken_url > uptoken_func
          // 其中 uptoken 是直接提供上传凭证，uptoken_url 是提供了获取上传凭证的地址，如果需要定制获取 uptoken 的过程则可以设置 uptoken_func
          // uptoken : '<Your upload token>', // uptoken 是上传凭证，由其他程序生成
          uptoken_url: 'http://homestead.app/qiniu_token/rest',         // Ajax 请求 uptoken 的 Url，**强烈建议设置**（服务端提供）
          // uptoken_func: function(file){    // 在需要获取 uptoken 时，该方法会被调用
          //    // do something
          //    return uptoken;
          // },
          get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的 uptoken
          // downtoken_url: '/downtoken',
          // Ajax请求downToken的Url，私有空间时使用,JS-SDK 将向该地址POST文件的key和domain,服务端返回的JSON必须包含`url`字段，`url`值为该文件的下载地址
          // unique_names: true,              // 默认 false，key 为文件名。若开启该选项，JS-SDK 会为每个文件自动生成key（文件名）
          //save_key: true,                  // 默认 false。若在服务端生成 uptoken 的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
          domain: 'http://xiaomaip.qiniudn.com/',     // bucket 域名，下载资源时用到，**必需**
          // container: 'container',             // 上传区域 DOM ID，默认是 browser_button 的父元素，
          max_file_size: '100mb',             // 最大文件体积限制
          multi_selection: true,              //是否允许多张图片上传
          unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
          flash_swf_url: 'path/of/plupload/Moxie.swf',  //引入 flash,相对路径
          max_retries: 3,                     // 上传失败最大重试次数
         //  dragdrop: true,                     // 开启可拖曳上传
          // drop_element: 'container',          // 拖曳上传区域元素的 ID，拖曳文件或文件夹后可触发上传
          chunk_size: '4mb',                  // 分块上传时，每块的体积
          auto_start: false,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传,
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

                 // alert(files[0].size);
                console.log(uploader);
                console.log(files);
                console.log('@#$%%%1111');
                var msgFlg = 0;
                for (var i = 0, len = files.length; i < len; i++) {
                    if (files[i].size > 81920) {
                        uploader.files.splice(i, 1);
                        msgFlg = 1;
                    }
                    else {
                        !function (i) {
                            that.previewImage(files[i], function (imgsrc) {
                                console.log(imgsrc);
                                that.setState({...that.state,files:that.state.files.concat({ url: imgsrc}),uploader })
                            })
                        }(i);
                    }
                }
                if (msgFlg == 1) {
                    alert("上传图片小于80K");
                }
              },
              'BeforeUpload': function(up, file) {
                  // 每个文件上传前,处理相关的事情

              },
              'UploadProgress': function(up, file) {
                  // 每个文件上传时,处理相关的事情
              },
              'FileUploaded': function(up, file, info) {
                  // 每个文件上传成功后,处理相关的事情
                  // 其中 info 是文件上传成功后，服务端返回的json，形式如
                  // {
                  //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                  //    "key": "gogopher.jpg"
                  //  }
                  // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

                  var domain = up.getOption('domain');
                  var res = JSON.parse(info);
                  var sourceLink = domain + res.key;// 获取上传成功后的文件的Url
                  let oldFiles = [...that.state.demoFiles];
                 if(oldFiles.length>=5){
                   alert('最多上传五张图片')
                   return
                 }
                  let newFiles = [...that.state.demoFiles,{url:sourceLink}];

                  console.log(newFiles)
                  console.log(that);
                 that.setState({
                   demoFiles:newFiles
                 })
                 console.log(that.state);

              },
              'Error': function(up, err, errTip) {
                  //上传出错时,处理相关的事情
                  console.log('err'+errTip)
              },
              'UploadComplete': function() {
                  //队列文件处理完毕后,处理相关的事情
                     console.log('UploadComplete')
              },
              'Key': function(up, file) {
                  // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                  // 该配置必须要在 unique_names: false , save_key: false 时才生效
             // console.log('key'+demoFiles[0]);

                  var key = "nihao";
                  // do something with key here
                  return key



                 //  var key = demoFiles
                 //  // do something with key here
                 //  return key
              }
          }
      })



         //  uploader.FilesAdded()

     }
    render() {
        var asklist = this.props.asklist;
        var allpage = this.props.allpage;

        if(this.props.auth.has('user')){
                return _AskList_({
                    handlePageClick:(::this.handlePageClick),
                    allpage,
                    deleteid:this.state.deleteid,
                    delete_ask:(::this.delete_ask),
                    asklist,
                    reset:(::this.reset),
                    search:(::this.search),
                    changeStatus:(::this.changeStatus),
                    status:this.state.status,
                    getdeleteid:(::this.getdeleteid),
                    detail:(::this.detail),
                    showDetail:this.state.showDetail,
                    close:(::this.close),
                    reply:(::this.reply),
                    noreply:(::this.noreply),
                    renderGallery:(::this.renderGallery),
                    lookbig:(::this.lookbig),
                    files:this.state.files,
                    askfiles:this.state.askfiles,
                    lookaskbig:(::this.lookaskbig),
                    renderGalleryAsk:(::this.renderGalleryAsk),
                    idx:this.state.idx
                })
        }else{
        return <div/>;
        }
    }


}


