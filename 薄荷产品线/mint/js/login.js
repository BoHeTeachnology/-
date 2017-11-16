$(function(){
	sessionStorage.clear(); 	
	localStorage.clear();
	if ($.cookie("rmbUser") == "true") {
	    $("#ck_rmb").attr("checked", true);
	    $("#username").val($.cookie("username"));
	    $("#pwd").val($.cookie("password"));
    }
	$('#username,#pwd').focus(function(){
		$('#submit').attr('disabled',false)
	})

	$('#submit').click(function(){
		loginForm($('#username').val(),$('#pwd').val())
	})

	$(document).keydown(function(e) {
		if (e.keyCode == 13) {
			loginForm($('#username').val(),$('#pwd').val())
		}
	});
})
function loginForm(username,pwd){
	if(username == ''){
		$('.opacity-tip p').html('请输入用户名')
		$('.opacity-tip').fadeIn(500).delay(500).fadeOut();
	    $('.opacity-tip p').css({'margin-left':-($('.opacity-tip p').width()/2)})
	}else if(pwd == ''){
		$('.opacity-tip p').html('请输入密码')
		$('.opacity-tip').fadeIn(500).delay(500).fadeOut()
		$('.opacity-tip p').css({'margin-left':-($('.opacity-tip p').width()/2)})
	}else{
		AjaxObj.login(function(result){
			if(result.Data.code==1){
				Save();
				console.log(result.Data.url)
				location.href=result.Data.url;
			}else{
				$('.opacity-tip p').html(result.Data.msg)
				$('.opacity-tip').fadeIn(500).delay(500).fadeOut()
				$('.opacity-tip p').css({'margin-left':-($('.opacity-tip p').width()/2)})
				$('#submit').attr('disabled',true)
			}
		},username,pwd)
	}
}

 
  //记住用户名密码
  function Save() {
    if ($("#ck_rmb").attr("checked")) {
      var str_username = $("#username").val();
      var str_password = $("#pwd").val();
      $.cookie("rmbUser", "true", { expires: 7 }); //存储一个带7天期限的cookie
      $.cookie("username", str_username, { expires: 7 });
      $.cookie("password", str_password, { expires: 7 });
    }
    else {
      $.cookie("rmbUser", "false", { expire: -1 });
      $.cookie("username", "", { expires: -1 });
      $.cookie("password", "", { expires: -1 });
    }
  }