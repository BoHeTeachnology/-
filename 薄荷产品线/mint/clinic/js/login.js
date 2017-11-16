
$(function(){
	sessionStorage.removeItem('clinic_id')
	sessionStorage.removeItem('clinicName_Name')
	$(".btn").click(function(){
		var user = $("#username").attr("value");
		var psd = $("#password").attr("value");
		
		if(user == ""){
			$(".error").css("visibility","visible");
			$("#error_msg").text("用户名不能为空");
		}else if(psd == ""){
			$(".error").css("visibility","visible");
			$("#error_msg").text("密码不能为空");
		}else if(user != "" && psd != ""){
			AjaxObj.login(function(data){
				if(data.Data.code == 1){
					window.location.href = "http://" + location.host + "/mint/clinic/index.html";
				}else if(data.Data.code == 0){
					$(".error").css("visibility","visible");
					$("#error_msg").text(data.Data.msg);
				}
			},user,psd);
		}
		

	})
	


})
