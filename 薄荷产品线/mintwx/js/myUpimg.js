$(function(){
  //图片上传
  var hammer = '';
  var currentIndex = 0;
  var body_width = $('body').width();
  var body_height = $('body').height();


  $("#clipArea").photoClip({
    width: body_width * 0.8125,
    height: body_width * 0.8125,
    file: "#file",
    view: "#hit",
    ok: "#clipBtn",
    loadStart: function () {
      //console.log()
      //console.log("照片读取中");
      $('.lazy_cover,.lazy_tip').show();
    },
    loadComplete: function () {
      //console.log("照片读取完成");
      $('.lazy_tip span').text('100%');
      $('.lazy_cover,.lazy_tip').hide();
    },
    clipFinish: function (dataURL) {
      $('#hit').attr('src', dataURL);
      saveImageInfo();
    }
  });

  $('#clipBtn').click(function(){
    console.log($('#hit').attr('src'))
    if( $('#hit').attr('src')==''){
      opCityTip('请选择图片')
    }else{
      opCityTip('上传中')
    }
  })

})

//图片上传
function saveImageInfo() {
  var filename = $('#hit').attr('fileName');
  var img_data = $('#hit').attr('src');
  if(img_data==""){alert('null');}
    render(img_data);
    console.log(img_data)
  Ajax.imgBase64Up(function(result){
    if(result.Data.code == 1){
      sessionStorage.setItem('photo_path',result.Data.photo_path)
      Ajax.UsermodifyInfo3(function(result2){
        if(result2.Data.code == 1){
          $('.opcitybox').hide();
          $('#toast').fadeIn(500).delay(1000).fadeOut()
          setTimeout(function(){
            location.href='http://'+location.host+"/mintwx/html/personmsg.html";
          },1000)
        }else{
          alert(result.Data.msg)
        }
      },result.Data.photo_path)
    }else{
      alert(result.Data.msg)
    }

  },img_data)
}
// 渲染 Image 缩放尺寸
function render(src){
   var MAX_HEIGHT = 256;  //Image 缩放尺寸
    // 创建一个 Image 对象
    var image = new Image();

    // 绑定 load 事件处理器，加载完成后执行
    image.onload = function(){
    // 获取 canvas DOM 对象
      var canvas = document.getElementById("myCanvas");
        // 如果高度超标
        if(image.height > MAX_HEIGHT) {
            // 宽度等比例缩放 *=
            image.width *= MAX_HEIGHT / image.height;
            image.height = MAX_HEIGHT;
        }

    image.src = src;
  };
}
/*获取文件拓展名*/
function getFileExt(str) {
  var d = /\.[^\.]+$/.exec(str);
  return d;
}
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(1000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2),'top':'0','margin-top':'150px'})
}
