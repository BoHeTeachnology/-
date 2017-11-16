$(function(){
  var inviterUserIid=transform(window.location.search);
	var type=decodeURI(inviterUserIid.type);
	var id=decodeURI(inviterUserIid.id);
	var app_id=decodeURI(inviterUserIid.app_id);

	$('input').focus(function(){
		$('.foot-icon').hide();
	})
	$('input').blur(function(){
		setTimeout(function(){
			$('.foot-icon').show();
		},600)

	})
	$('#phone').blur(function(){
		if($('#phone2').val()==''){
			$('#phone2').val( $('#phone').val() )
		}
	})

  /*一键删除按钮*/
	$('#slider input.tel').keyup(function(){

		if( $(this).val() == '' ){
			$(this).siblings('.clear_num').hide();
		}else{
			$(this).siblings('.clear_num').show();
		}
	})
	$('#slider .clear_num').click(function(){
		$(this).siblings('input').val('');
		$(this).siblings('input').focus();
		$(this).hide();

	})
	$('#slider input.tel').focus(function(){
		if( $(this).val() == '' ){
			$(this).siblings('.clear_num').hide();
		}else{
			$(this).siblings('.clear_num').show();
		}
	})
	$('#slider input.tel').blur(function(){
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

  /*忘记密码跳转*/
  $('.forget').click(function(){
  	if(type == 'order'){
		location.href='http://'+location.host+"/mintwx/html/findMa.html?type=order";
	}else if(type == 'info'){
		location.href='http://'+location.host+"/mintwx/html/findMa.html?type=info";
	}else{
		location.href='http://'+location.host+"/mintwx/html/findMa.html";
	}
  })
    $('#slider #go_register').click(function(){
		if(type == 'order'){
			location.href='http://'+location.host+"/mintwx/register.html?type=order";
		}else if(type == 'info'){
			location.href='http://'+location.host+"/mintwx/register.html?type=info";
		}else{
			location.href='http://'+location.host+"/mintwx/register.html";
		}
	})

  /*发送验证码*/
	$('#sendYzm').click(function(){
		var phone = $('#phone').val();
		//console.log(phone)
		if( !phoneFun(phone) ){
			return false;
		}else{
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
		}

	})


  /*yzm登录*/
  $('#loginBut').click(function(){
  	$('#loginBut').addClass('hover');
	setTimeout(function(){
		$('#loginBut').removeClass('hover');
	},500)
   	var phone = $('#phone').val(),
   		code = $('#code').val();
   		if( !phoneFun(phone)){
   			return false;
   		}else if(code == ''){
   			opCityTip('请输入短信验证码')
   		}else{
   			Ajax.verifyLogin(function(result){
   				if(result.Data.code == 1){
   					opCityTip('登录成功')
					setTimeout(function(){
				      if(type == 'order'){
				        location.href='http://'+location.host+"/mintwx/html/order/chooseproj.html";
				      }else if(type == 'info'){
				        if( result.Data.identity_id == 2 ){//医生
				          location.href='http://'+location.host+"/mintwx/html/doctorCenter.html";
				        }else{
				          location.href='http://'+location.host+"/mintwx/html/mine.html";
				        }
				      }else if(type == 'order_info'){
				        location.href='http://'+location.host+"/mintwx/html/myOrderInfo.html?id="+id;
				      }else if(type == 'record_info'){
				        location.href='http://'+location.host+"/mintwx/html/myCasedesc.html?id="+id;
				      }else if(type == 'visit'){
				        location.href='http://'+location.host+"/mintwx/html/order/creturnVisit.html?app_id="+app_id;
				      }else if(type="doctor_order"){
				      	location.href='http://'+location.host+'/mintwx/html/doctormyOrder.html';
				      }else if(type == 'case_info'){
				        location.href='http://'+location.host+"/mintwx/html/casedesc.html?type=user&id="+id;
				      }else{
				        if( result.Data.identity_id == 2 ){//医生
				          location.href='http://'+location.host+"/mintwx/html/doctorCenter.html";
				        }else{
				          location.href='http://'+location.host+"/mintwx/html/mine.html";
				        }
				      }
				    },1000);
   				}else{
   					opCityTip(result.Data.msg)
   				}
   			},phone,code)
   		}

  })
  /*密码登录*/
  $('#loginBut2').click(function(){
  	$('#loginBut2').addClass('hover');
	setTimeout(function(){
		$('#loginBut2').removeClass('hover');
	},500)
   	var phone2 = $('#phone2').val(),
   		pwd = $('#pwd').val();
   		if( phone2==''){
   			opCityTip('请输入手机号/薄荷名')
   		}else if(pwd == ''){
   			opCityTip('请输入密码')
   		}else{
   			Ajax.login(function(result){
   				if(result.Data.code == 1){
   					opCityTip('登录成功')
					setTimeout(function(){
				      if(type == 'order'){
				        location.href='http://'+location.host+"/mintwx/html/order/chooseproj.html";
				      }else if(type == 'info'){
				        if( result.Data.identity_id == 2 ){//医生
				          location.href='http://'+location.host+"/mintwx/html/doctorCenter.html";
				        }else{
				          location.href='http://'+location.host+"/mintwx/html/mine.html";
				        }
				      }else if(type == 'order_info'){
				        location.href='http://'+location.host+"/mintwx/html/myOrderInfo.html?id="+id;
				      }else if(type == 'record_info'){
				        location.href='http://'+location.host+"/mintwx/html/myCasedesc.html?id="+id;
				      }else if(type == 'visit'){
				        location.href='http://'+location.host+"/mintwx/html/order/creturnVisit.html?app_id="+app_id;
				      }else if(type == 'case_info'){
				        location.href='http://'+location.host+"/mintwx/html/casedesc.html?type=user&id="+id;
				      }else{
				      	console.log('2222')
				        if( result.Data.identity_id == 2 ){//医生
				          location.href='http://'+location.host+"/mintwx/html/doctorCenter.html";
				        }else{
				          location.href='http://'+location.host+"/mintwx/html/mine.html";
				        }
				      }
				    },1000);
   				}else{
   					opCityTip(result.Data.msg)
   				}
   			},phone2,pwd)
   		}
  })

function phoneFun(phone){
	  var mobile_reg=/^1[3|4|5|7|8][0-9]\d{8}$/; //匹配手机正则
	  if( phone == ''){
	    opCityTip('请输入手机号')
		return false;
	  }else if( !mobile_reg . test( phone ) ){
	  	opCityTip('手机格式不正确')
	    return false;
	  }else{
	  	return true;
	  }
}
  function opCityTip(tipText){
      $('.opcitybox').fadeIn(500).delay(1000).fadeOut()
      $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
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
})
