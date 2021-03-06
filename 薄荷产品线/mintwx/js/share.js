$(function(){
	var HOST_URL='http://'+window.location.host;
	var share_img = 'http://'+window.location.host+'/mintwx/images/yashare.jpg'
	var share_title = '薄荷牙医口腔初筛检查报告';
	var share_description = '薄荷牙医的口腔检查报告发布啦！您身边的口腔健康管理专家。';
	var appId;
	var timestamp;
	var nonceStr;
	var signature;
	var url=location.href.indexOf('#')<0?location.href:location.href.split('#')[0];
	$.ajax({
        url:"/mintAdmin/index.php/Home/Index/getPackage",
        type: 'GET',
        dataType:'json',
       	async:false,
        cache : false,
        data:{'url':url},
        success:function(data){
            //console.log(data)
            //data = JSON.parse(data);
        	appId = data.appId;
        	timestamp = data.timestamp;
        	nonceStr = data.nonceStr;
        	signature = data.signature;
        	config();
        }
    });

	function config(){
		wx.config({  
	      	debug: false,  
	      	appId: appId,  
	      	timestamp: timestamp,  
	      	nonceStr: nonceStr,  
	      	signature: signature,  
	      	jsApiList: [  
	        'checkJsApi',  
	        'onMenuShareTimeline',  
	        'onMenuShareAppMessage',  
	        'onMenuShareQQ',  
	        'onMenuShareWeibo'
	      	]  
	  	});
	}
  	
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
  	      title: share_title,  
  	      desc: share_description,  
  	      link:window.location.href,  
  	      imgUrl: share_img,  
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
  	      title:share_title,  
  	      desc: share_description,  
  	      link:window.location.href,  
  	      imgUrl:share_img,  
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
  	    //alert('已注册获取“分享到朋友圈”状态事件');  
  	  
  	  	// 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口  
  	    wx.onMenuShareQQ({  
  	      title: share_title,  
  	      desc: share_description,  
  	      link:window.location.href,  
  	      imgUrl:share_img,  
  	      trigger: function (res) {  
  	        //alert('用户点击分享到QQ');  
  	      },  
  	      complete: function (res) {  
  	        //alert(JSON.stringify(res));  
  	      },  
  	      success: function (res) {  
  	        //alert('已分享');
  	      },  
  	      cancel: function (res) {  
  	        //alert('已取消');  
  	      },  
  	      fail: function (res) {  
  	       // alert(JSON.stringify(res));  
  	      }  
  	    });  
  	  //  alert('已注册获取“分享到 QQ”状态事件');  
  	    
  	  	// 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口  
  	    wx.onMenuShareWeibo({  
  	      title: share_title,  
  	      desc: share_description,  
  	      link:window.location.href,  
  	      imgUrl:share_img,  
  	      trigger: function (res) {  
  	        //alert('用户点击分享到微博');  
  	      },  
  	      complete: function (res) {  
  	        //alert(JSON.stringify(res));  
  	      },  
  	      success: function (res) {  
  	        //alert('已分享');
  	      },  
  	      cancel: function (res) {  
  	        //alert('已取消');  
  	      },  
  	      fail: function (res) {  
  	        //alert(JSON.stringify(res));  
  	      }  
  	    });  
  	    //alert('已注册获取“分享到微博”状态事件');  
  	});
  	wx.error(function (res) {  
  	  	//alert(res.errMsg);  
  	});
})


function transform(urlstr){
  var obj = {};
     if (urlstr) {
         urlstr = urlstr.substr(1);
         var strArr = urlstr.split('&');
         for (var i = 0; i < strArr.length; i++) {
             var temArr = strArr[i].split('=');
             obj[temArr[0]] = temArr[1]
         }

        return obj;
     } else {
        return obj={};
     }
    
}