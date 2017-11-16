$(function(){
	sessionStorage.clear();//清除所有缓存
	Ajax.UsergetInfo(function(result){
		if(result.Data.code == 1){
			if(result.Data.data.photo == '' || result.Data.data.photo == null){
				$('#userImg').html('<img src="'+result.Data.data.headimgurl+'" alt="">')
			}else if(result.Data.data.photo == '/mintAdmin/up/images/m.jpg'){
				$('#userImg').html('<img src="'+result.Data.data.headimgurl+'" alt="">')
			}else{
				$('#userImg').html('<img src="'+result.Data.data.photo+'" alt="">')
			}
			if(result.Data.data.name == ''){
				$('#userName a').html('完善个人信息')
			}else{
				$('#userName a').html(result.Data.data.name)
			}
			if(result.Data.data.password ==''){
	          sessionStorage.setItem("passwordyes","no");
	        }else{
	          sessionStorage.setItem("passwordyes","yes");
	        }
	        sessionStorage.setItem("mint_name",result.Data.data.mint_name);
	        sessionStorage.setItem("account_phone",result.Data.data.account);
			var name = result.Data.data.name;
			var sex = result.Data.data.sex;
			var company_code = result.Data.data.company_code;
			$('#IwantOrdertab').click(function(){

				if(name == '' || sex=='' || company_code==''){
					location.href='http://'+location.host+"/mintwx/html/personmsg.html?mine=1";
					/*location.href='http://'+location.host+"/mintwx/html/order/doctorMa.html";*/
				}else{
					Ajax.shiyueCount(function(modal){
					    if(modal.Data.code ==1){

					      if(modal.Data.count >= 3){
					        opCityTip('您已爽约超过3次 <br /> 三个月内无法预约')
					      }else{
					        location.href='http://'+location.host+"/mintwx/html/order/chooseproj.html";
					       /* location.href='http://'+location.host+"/mintwx/html/order/doctorMa.html";*/
					      }
					    }else{
					      opCityTip(modal.Data.msg)
					    }
					})
				}
			})
			$('#userImg').click(function(){
				location.href='http://'+location.host+"/mintwx/html/personmsg.html";
			})
			Ajax.BillgetBillNum(function(model){
				if(model.Data.count ==0){
					$('#points').hide();
				}else{
					$('#points').html(model.Data.count).show();
				}
			},result.Data.data.id,0)
		}else{
			opCityTip(result.Data.msg)
		}
	})
})
$(function(){
	$('.a1,.a2,.chuzhen').click(function(){
		$(this).css("background-color",'#eee');
	})
	Ajax.DoctorserviceLst(function(result){
		if(result.Data.code == 1){
			//console.log(result.Data);
			var str = '';
			for(var i=0;i<result.Data.data.length;i++){
				str += result.Data.data[i].service_name + "&nbsp;";
			}
			$(".spancon").html(str);
		}else{
			opCityTip(result.Data.msg)
		}
	})
})
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(2000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}