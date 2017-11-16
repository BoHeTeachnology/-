
var str = '';
	str += '<div class="header">';
	str += '<div class="logo">';
	str += '<img src="images/logo2.png" alt="">';
	str += '<span>薄荷口腔诊所管理系统</span>';
	str += '</div>';
	str += '<div class="headerbutbox">';
	str += '<a href="index.html">预约总览</a>';
	str += '<a href="message.html">诊所信息</a>';
	str += '</div>';
	str += '<div class="exit"><dl><dt>';
	str += '<img src="../images/user_default.png" alt=""></dt><dd id="name"></dd></dl>';
	str += '<p><a href="#" class="suggest-but">意见反馈</a><a href="#" class="editpwd-but">修改密码</a>';
	str += '<a href="#" class="exit-but">退出</a></p></div></div>';
	// $(".clinicwrap").append(str);
document.write(str);
function showCurrent(id){
	$('.headerbutbox a').eq(id).addClass('cur')
	// console.log(id)
}
var str2 = '';
	str2 += '<div class="clinicTipbox-opacity" id="EquipmentTipbox2" style="display:none">';
	str2 += '<div class="opacity-tipboxContain Mtop240 Mtop2401">';
	str2 += '<h4><span id="title_Equip">意见反馈</span><i class="closebtni2"></i></h4>'
	str2 += '<div class="inputboxdiv new-input-box h45">';
	str2 += '<span>请留下宝贵意见</span>';
	str2 += '<textarea></textarea>';
	str2 += '<p class="errorTip"></p>';
	str2 += '</div>';
	str2 += '<div class="inputboxdiv">';
	str2 += '<a href="javascript:;" class="btn clear" id="cancelBtn">取消</a>';
	str2 += '<a href="javascript:;" class="btn save" id="saveBtn">提交</a>';
	str2 += '</div>';
	str2 += '</div>';
	str2 += '</div>';

	var str3 = '';
	str3 += '<div class="clinicTipbox-opacity pswdTopbox" id="EquipmentTipbox3" style="display:none">';
	str3 += '<div class="opacity-tipboxContain Mtop240">';
	str3 += '<h4><span id="title_Equip">密码修改</span><i class="closebtni3"></i></h4>'
	str3 += '<div class="inputboxdiv new-input-box h45">';
	str3 += '<span>旧密码：</span>';
	str3 += '<input type="text" class="text1">';
	str3 += '<p class="errorTip"></p>';
	str3 += '</div>'
	str3 += '<div class="inputboxdiv new-input-box h45">';
	str3 += '<span>新密码：</span>';
	str3 += '<input type="text" class="text2">';
	str3 += '<p class="errorTip"></p>';
	str3 += '</div>'
	str3 += '<div class="inputboxdiv new-input-box h45">';
	str3 += '<span>确认新密码：</span>';
	str3 += '<input type="text" class="text3">';
	str3 += '<p class="errorTip"></p>';
	str3 += '</div>';
	str3 += '<div class="inputboxdiv">';
	str3 += '<a href="javascript:;" class="btn clear" id="cancelBtn">取消</a>';
	str3 += '<a href="javascript:;" class="btn save" id="saveBtn">提交</a>';
	str3 += '</div>';
	str3 += '</div>';
	str3 += '</div>';
	$("body").append(str2);
	$("body").append(str3);

$(function(){
	/*退出登录 返回登录页面*/	

	$('.exit-but').click(function(){
	  	AjaxObj.logout(function(data){
	        if(data.Data.code == 1){
	        	sessionStorage.removeItem('clinic_id')
	        	sessionStorage.removeItem('clinicName_Name')
	      		window.location.href = "http://" + location.host + "/mint/clinic/login.html";
	        }
	  	});
	});
	if( sessionStorage.getItem('clinicName_Name') ){
		$("#name").text( sessionStorage.getItem('clinicName_Name') );
	}else{
		AjaxObj.getHead(function(data){
			sessionStorage.setItem('clinicName_Name',data.Data.data.clinic_name)
			$("#name").text(data.Data.data.clinic_name);
		})
	}
	AjaxObj.getHead(function(data){
		if(data.Data.code ==1 ){
		   	var clinicId = data.Data.data.id;
			sessionStorage.setItem('clinic_id',clinicId)
		   	$(".suggest-but").click(function(){
		   		$("#EquipmentTipbox2").show();
		   	});

		   	$("#EquipmentTipbox2 .clear,#EquipmentTipbox2 .closebtni2").click(function(){
		   		$("#EquipmentTipbox2").hide();
		   		$("#EquipmentTipbox2 textarea").val("");
		   		$("#EquipmentTipbox2 .errorTip").html("");
	   			$("#EquipmentTipbox2 textarea").css("border","1px solid #ccc");
		   	})

		   	$("#EquipmentTipbox2 .save").click(function(){
		   		var textarea = $("#EquipmentTipbox2 textarea").val();
		   		if(textarea == ""){
		   			$("#EquipmentTipbox2 .errorTip").html("不能为空");
		   			$("#EquipmentTipbox2 textarea").css("border","1px solid #f00");
		   		}else if(textarea != ""){
		   			AjaxObj.suggestMsg(function(data){
		   				console.log(data.Data);
		   				$("#EquipmentTipbox2").hide();
						$(".opacity-tip p").html(data.Data.msg);
						$(".opacity-tip").fadeIn(500).delay(2000).fadeOut();
		   			},textarea,2);
		   		}
		   		console.log(textarea);
		   	})

		   	$("#EquipmentTipbox2 textarea").focus(function(){
		   		$("#EquipmentTipbox2 .errorTip").html("");
		   		$("#EquipmentTipbox2 textarea").css("border","1px solid #ccc");
		   	})
			
			$(".editpwd-but").click(function(){
				$("#EquipmentTipbox3").show();
			})

			$("#EquipmentTipbox3 .closebtni3").click(function(){
				$("#EquipmentTipbox3").hide();
			})
			
			$("#EquipmentTipbox3 .clear,#EquipmentTipbox3 .closebtni3").click(function(){
				$("#EquipmentTipbox3").hide();
				$("#EquipmentTipbox3 .text1").val('');
				$("#EquipmentTipbox3 .text2").val('');
				$("#EquipmentTipbox3 .text3").val('');
				$("#EquipmentTipbox3 p").html('');
				$("#EquipmentTipbox3 input").css("border","1px solid #ccc");

			})
			$("#EquipmentTipbox3 .save").click(function(){
				var pwd1 = $("#EquipmentTipbox3 .text1").val();
				var pwd2 = $("#EquipmentTipbox3 .text2").val();
				var pwd3 = $("#EquipmentTipbox3 .text3").val();

				if(pwd1 == ""){
					$("#EquipmentTipbox3 .text1").siblings("p").html("不能为空");
					$("#EquipmentTipbox3 .text1").css("border","1px solid #f00");
				}
				else if(pwd2 == ""){
					$("#EquipmentTipbox3 .text2").siblings("p").html("不能为空");
					$("#EquipmentTipbox3 .text2").css("border","1px solid #f00");
				}
				else if(pwd3 == ""){
					$("#EquipmentTipbox3 .text3").siblings("p").html("不能为空");
					$("#EquipmentTipbox3 .text3").css("border","1px solid #f00");
				}
				else if(pwd1.length<6 || pwd1.length>20 ){
					$("#EquipmentTipbox3 .text1").siblings("p").html("密码必须在6-20位");
					$("#EquipmentTipbox3 .text1").css("border","1px solid #f00");
				}
				else if(pwd2.length<6 || pwd2.length>20 ){
					$("#EquipmentTipbox3 .text2").siblings("p").html("密码必须在6-20位");
					$("#EquipmentTipbox3 .text2").css("border","1px solid #f00");
				}
				else if(pwd3.length<6 || pwd3.length>20 ){
					$("#EquipmentTipbox3 .text3").siblings("p").html("密码必须在6-20位");
					$("#EquipmentTipbox3 .text3").css("border","1px solid #f00");
				}
				else if(pwd2 != pwd3){
					$("#EquipmentTipbox3 .text2").siblings("p").html("密码不一致");
					$("#EquipmentTipbox3 .text2").css("border","1px solid #f00");
				}else {
					AjaxObj.changePsd(function(data){
						console.log(data.Data);
						$("#EquipmentTipbox3").hide();
						$(".opacity-tip p").html(data.Data.msg);
						$(".opacity-tip").fadeIn(500).delay(2000).fadeOut();
					},pwd1,pwd2,pwd3);
				}
			})
			$("#EquipmentTipbox3 .text1,#EquipmentTipbox3 .text2,#EquipmentTipbox3 .text3").focus(function(){
				$(this).siblings("p").html("");
				$(this).css("border","1px solid #ccc");
			})

		}

	});

})

