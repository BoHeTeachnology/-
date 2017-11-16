$(function(){
	var inviterUserIid=transform(window.location.search);
	var type=decodeURI(inviterUserIid.type);

	$('#phone').focus(function(){
		$('#sendYzm').attr('disabled',false)
	})
	$('#sendYzm').click(function(){
		var phone = $('#phone').val();
		if( !phoneFun(phone) ){
			return false;
		}else{
			Ajax.checkUser(function(result){
				if(result.Data.code == 1 ){
					var time=60;
			        var timer;
			            timer=setInterval(function(){
			                time--;
			                if(time<=0){
			                  $('#sendYzm').val('重新发送');
			                  $('#sendYzm').removeClass('addcur').attr('disabled',false)
			                  clearInterval(timer);
			                }else{
			                 $('#sendYzm').val(time+'s后重试');
			                 $('#sendYzm').addClass('addcur').attr('disabled',true)
			                }
			            },1000)
						Ajax.sendMsg(function(modal){
							if(modal.Data.code == 1 ){
						        console.log('验证码发送成功')
							}else{
								clearInterval(timer);
								$('#sendYzm').val('获取验证码');
								opCityTip(modal.Data.msg)
							}
						},phone)
				}else{
					opCityTip(result.Data.msg)

				}
			},phone)
				    
		}
		
	})
	$('#register').click(function(){
		$('.btn-default').addClass('hover');
		setTimeout(function(){
			$('.btn-default').removeClass('hover');
		},500)
		var phone = $('#phone').val(),
			code = $('#code').val(),
			pwd = $('#pwd').val();
		if( !phoneFun(phone) || !check(code,pwd) ){
			return false;
		}else{
			Ajax.register(function(result){
				if(result.Data.code == 1 ){
					opCityTip('注册成功')
					setTimeout(function(){
						if(type == 'order'){
							location.href='http://'+location.host+"/mintwx/html/order/chooseproj.html";
						}else if(type == 'info'){
							location.href='http://'+location.host+"/mintwx/html/mine.html";
						}else if(type="doctor_order"){
					      	location.href='http://'+location.host+'/mintwx/html/doctormyOrder.html';
					    }else{
							location.href='http://'+location.host+"/mintwx/html/mine.html"
						}
					},1000); 
						
				}else{
					opCityTip(result.Data.msg)
				}
			},phone,pwd,code)
				
		}
	})

	/*一键删除按钮*/
	$('#phone').keyup(function(){
		if( $(this).val() == '' ){
			$(this).siblings('.clear_num').hide();
		}else{
			$(this).siblings('.clear_num').show();
		}
	})
	$('.clear_num').click(function(){
		$(this).parents('.text-input-box').find('input').val('');
		$(this).hide();
	})
	$('#phone').focus(function(){
		if( $(this).val() == '' ){
			$(this).siblings('.clear_num').hide();
		}else{
			$(this).siblings('.clear_num').show();
		}
	})
	$('#phone').blur(function(){
		var that = $(this);
		setTimeout(function(){
			that.siblings('.clear_num').hide();
		},100)
	})
	/*显示和隐藏密码*/
	$('.pwd-show').click(function(){
		$(this).hide();
		$('.pwd-hide').show();
		$(this).siblings('.input-text').prop('type','password');
	})
	$('.pwd-hide').click(function(){
		$(this).hide();
		$('.pwd-show').show();
		$(this).siblings('.input-text').prop('type','text');
	})

	$('.opcitybox').click(function(){
		$(this).hide();
	})
})

function check(code,pwd){
	if( code == '' ){
		opCityTip('请输入短信验证码')
		//$('#code').focus();
		return false;
	}else if(pwd == ''){
		opCityTip('请输入密码')
		//$('#pwd').focus();
		return false;
	}else if(pwd.length <6 || pwd.length > 20){
		opCityTip('密码长度为6～20个字符')
		//$('#pwd').focus();
		return false;
	}else{
		return true;
	}
}
function phoneFun(phone){
	  var mobile_reg=/^1[3|4|5|7|8][0-9]\d{8}$/; //匹配手机正则
	  if( phone == ''){
	    opCityTip('请输入手机号')
	    //$('#phone').focus();
		return false;
	  }else if( !mobile_reg . test( phone ) ){
	  	opCityTip('手机格式不正确')
	  	//$('#phone').focus();
	    return false;
	  }else{
	  	return true;
	  }
}
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(1000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2),'top':'0','margin-top':'150px'})
}
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
