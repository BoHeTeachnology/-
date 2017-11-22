import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
import {getApiIp8007,qiniudomain} from 'app/util/utils.js'

const { Gallery, GalleryDelete, Uploader, Form, Cell,CellBody,FormCell,TextArea,Button} = WeUI;


class UploaderDemo extends Component {
    constructor(props){
        super(props)

        this.state = {
            gallery: false,
            demoFiles : []
        };
    }

    handlerUplaoad(){

    }

    componentDidMount(){
      var that = this;
      // console.log(that.state.demoFiles+'that');
      var uploader = Qiniu.uploader({
          runtimes: 'html5,flash,html4',      // 上传模式,依次退化
          browse_button: 'weui-uploader__input',         // 上传选择的点选按钮，**必需**
          // 在初始化时，uptoken, uptoken_url, uptoken_func 三个参数中必须有一个被设置
          // 切如果提供了多个，其优先级为 uptoken > uptoken_url > uptoken_func
          // 其中 uptoken 是直接提供上传凭证，uptoken_url 是提供了获取上传凭证的地址，如果需要定制获取 uptoken 的过程则可以设置 uptoken_func
          // uptoken : '<Your upload token>', // uptoken 是上传凭证，由其他程序生成
          uptoken_url:  'http://' + getApiIp8007() + '/qiniu_token/rest',         // Ajax 请求 uptoken 的 Url，**强烈建议设置**（服务端提供）
          // uptoken_func: function(file){    // 在需要获取 uptoken 时，该方法会被调用
          //    // do something
          //    return uptoken;
          // },
          get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的 uptoken
          // downtoken_url: '/downtoken',
          // Ajax请求downToken的Url，私有空间时使用,JS-SDK 将向该地址POST文件的key和domain,服务端返回的JSON必须包含`url`字段，`url`值为该文件的下载地址
          // unique_names: true,              // 默认 false，key 为文件名。若开启该选项，JS-SDK 会为每个文件自动生成key（文件名）
          //save_key: true,                  // 默认 false。若在服务端生成 uptoken 的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
          domain: qiniudomain+'/',     // bucket 域名，下载资源时用到，**必需**
          // container: 'container',             // 上传区域 DOM ID，默认是 browser_button 的父元素，
          max_file_size: '100mb',             // 最大文件体积限制
          multi_selection: true,              //是否允许多张图片上传
          unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
          flash_swf_url: 'path/of/plupload/Moxie.swf',  //引入 flash,相对路径
          max_retries: 3,                     // 上传失败最大重试次数
         //  dragdrop: true,                     // 开启可拖曳上传
          // drop_element: 'container',          // 拖曳上传区域元素的 ID，拖曳文件或文件夹后可触发上传
          chunk_size: '4mb',                  // 分块上传时，每块的体积
          auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传,
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
              'FilesAdded': function(up, file) {


                console.log(file.length+'file.length')
                  plupload.each(file, function(file) {
                      // 文件添加进队列后,处理相关的事情
                      console.log('plupload')
                  });


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


    renderGallery(){
        if(!this.state.gallery) return false;

        return (
            <Gallery src={this.state.gallery.url} show onClick={ e=> {
                //avoid click background item
                e.preventDefault()
                e.stopPropagation();
                this.setState({gallery: false})
            }}>
                <GalleryDelete onClick={ e=> {
                    this.setState({
                        demoFiles: this.state.demoFiles.filter((e,i)=>i!=this.state.gallery.id),
                        gallery: false
                    })
                }} />
            </Gallery>
        )
    }

    render(){
        return (

              <div className="cell">


                { this.renderGallery() }
                <Form>
                  <FormCell>
                    <CellBody>
                        <TextArea style={{border: '1px solid #d9d9d9',padding: '0.2rem',marginBottom: '0.2rem',fontSize: '0.24rem',height: '2.1rem'}} placeholder="例如：请问，我是孕妇，怀孕期间可以洗牙吗？洗牙会不会把牙齿洗薄了呢？"  maxlength="100"></TextArea>
                    </CellBody>
                  </FormCell>
                    <Cell>
                        <CellBody>


                  <Uploader
                      title="上传口腔实拍图，方便医生做诊断。"
                      maxCount={5}
                      files={this.state.demoFiles}
                      onError={msg => alert(msg)}
                      onChange={(file,e) => {

                          let newFiles = [...this.state.demoFiles, {url:file.data}];
                          console.log('文件数据'+newFiles);
                       console.log(writeObj(newFiles))
                          this.setState({
                              demoFiles: newFiles
                          });
                      }}
                      onFileClick={
                          (e, file, i) => {
                              console.log('file click', file, i)
                              this.setState({
                                  gallery: {
                                      url: file.url,
                                      id: i
                                  }
                              })
                          }
                      }
                      lang={{
                          maxError: maxCount => `最多允许上传 ${maxCount} 图片`
                      }}
                  />


                        </CellBody>
                    </Cell>
   <Button id="upLoador_Btn" onClick={this.handlerUplaoad.bind(this)} style={{width: '80%',height:'0.88rem',fontSize:'0.24rem',position: 'fixed',
    bottom: '1rem',left: '10%',backgroundColor:'#04B9C0'}}>提交</Button>
                </Form>
                  </div>
            // </Page>
        );
    }
}

export default UploaderDemo;
