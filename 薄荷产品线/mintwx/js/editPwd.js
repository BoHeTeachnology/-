$(function(){




	var passwordyes = sessionStorage.getItem('passwordyes');
	
	console.log(passwordyes);
	if(passwordyes == 'no'){
		$('#oldpass,#confirmpass').hide();


		$('#saveBut').click(function(){
			var pass = $('#new_pwd').val();
			console.log(pass);
			Ajax.setpass(function(data){
				console.log(data.Data);
				
				window.location.href = 'http://'+location.host+"/mintwx/html/set.html";
			},pass);
		})
	}else{
		$('#oldpass,#confirmpass').show();

	$('input')[0].focus();
	$('#saveBut').click(function(){
		var old_pwd = $('#old_pwd').val(),
			new_pwd = $('#new_pwd').val(),
			com_pwd = $('#com_pwd').val();
		if( !check(old_pwd,new_pwd,com_pwd) ){
			return false;
		}else{
			Ajax.changePwd(function(result){
				if(result.Data.code == 1 ){
					$('#toast').fadeIn(500).delay(1000).fadeOut()
					setTimeout(function(){
						location.href='http://'+location.host+"/mintwx/html/set.html";
					},1000);
		
				}else{
					opCityTip(result.Data.msg)
				}
			},old_pwd,new_pwd,com_pwd)
		}
	})
}
	/*一键删除按钮*/
	$('.editPwdbox input').keyup(function(){
		if( $(this).val() == '' ){
			$(this).siblings('.clear_num').hide();
		}else{
			$(this).siblings('.clear_num').show();
		}
	})
	$('.editPwdbox .clear_num').click(function(){
		$(this).siblings('input').val('');
		$(this).hide();
	})
	$('.editPwdbox input').focus(function(){
		if( $(this).val() == '' ){
			$(this).siblings('.clear_num').hide();
		}else{
			$(this).siblings('.clear_num').show();
		}
	})
	$('.editPwdbox input').blur(function(){
		var that = $(this);
		setTimeout(function(){
			that.siblings('.clear_num').hide();
		},100)

	})


	function check(old_pwd,new_pwd,com_pwd){
		if( old_pwd == ''){
			opCityTip('请输入旧密码')
			return false;
		}else if( new_pwd == '' ){
			opCityTip('请输入新密码')
			return false;
		}else if( new_pwd.length <6 || new_pwd.length > 20 ){
			opCityTip('新密码长度为6～20个字符')
			return false;
		}else if( com_pwd == ''){
			opCityTip('请再次确认新密码')
			return false;
		}else if(new_pwd != com_pwd){
			opCityTip('密码不一致，请再次确认密码')
			return false;
		}else{
			return true;
		}
	}
	function opCityTip(tipText){
	    $('.opcitybox').fadeIn(500).delay(1000).fadeOut()
	    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2),'top':'0','margin-top':'150px'})
	}
})
