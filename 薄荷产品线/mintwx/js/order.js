$(function(){
	var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1): nowDate.getMonth() + 1;
    var day = nowDate.getDate() < 10 ? "0" + (nowDate.getDate()+3) : (nowDate.getDate()+3);
    var dateStr = year + "-" + month + "-" + day;
    //console.log(day)
    $("#date").val(dateStr)
    $("#date").calendar();

    $('#contact_tel').blur(function(){
    	var mobile_reg=/^1[3|4|5|7|8][0-9]\d{8}$/; //匹配手机正则
    	if( $(this).val() !='' && !mobile_reg . test( $(this).val() )){
			opCityTip('手机号格式不正确')
		}
    })
    Ajax.UsergetInfo(function(result){
		if(result.Data.code == 1){
			$('#patient_name').val(result.Data.data.name);
			$('#contact_tel').val(result.Data.data.phone);
		}else{
			opCityTip(result.Data.msg)
		}
	})
	$('#is_self input').change(function(){
		if( $(this).val() ==2 ){
			$('#patient_name').val('');
			$('#contact_tel').val('');
		}else{
			Ajax.UsergetInfo(function(result){
				if(result.Data.code == 1){
					$('#patient_name').val(result.Data.data.name);
					$('#contact_tel').val(result.Data.data.phone);
				}else{
					opCityTip(result.Data.msg)
				}
			})
		}
	})
    Ajax.clinicLst(function(result){
    	if( result.Data.code == 1 ){
    		var option = '';
    		for (var i = 0 ;  i<result.Data.data.length; i++ ) {
    			option+='<option value="'+result.Data.data[i].id+'">'+result.Data.data[i].clinic_name+'</option>'
    		}
    		$('#clinic_id').append(option)
    	}else{
    		opCityTip(result.Data.msg)
    	}
    })

	$('#submit').click(function(){
		var is_self = $('#is_self input:checked').val(),
			patient_name = $('#patient_name').val(),
			invite_code = $('#invite_code').val(),
			clinic_id = $('#clinic_id option:selected').val(),
			clinic_name = $('#clinic_id option:selected').text(),
			visit_time = $('#date').val(),
			contact_tel = $('#contact_tel').val(),
			project_name = $('#project_name').val(),
			remark = $('#remark').val();
			//alert(clinic_name)
			//console.log(is_self,patient_name,invite_code,clinic_id,visit_time,contact_tel,project_name,remark)
			if( !check(is_self,patient_name,contact_tel,invite_code,clinic_id,visit_time,project_name,remark) ){
				return false;
			}else{
				Ajax.Appointmentadd(function(result){
					if( result.Data.code == 1 ){
						$('#toast').fadeIn(500).delay(1000).fadeOut();
						$('#submit').attr('disabled',true);
						setTimeout(function(){
							location.href='http://'+location.host+"/mintwx/html/orderSuccess.html";
						},1000); 
						
					}else{
						opCityTip(result.Data.msg)
					}
				},is_self,patient_name,contact_tel,invite_code,clinic_id,visit_time,project_name,remark,clinic_name)
			}
	})
})

function check(is_self,patient_name,contact_tel,invite_code,clinic_id,visit_time,project_name,remark){
	var mobile_reg=/^1[3|4|5|7|8][0-9]\d{8}$/; //匹配手机正则
	if(patient_name == ''){
		opCityTip('请输入姓名')
		return false;
	}else if(contact_tel == ''){
		opCityTip('请输入手机号')
		return false;
	}else if(!mobile_reg . test( contact_tel )){
		opCityTip('手机号格式不正确')
		return false;
	}else if(invite_code == ''){
		opCityTip('请输入邀请码')
		return false;
	}else if(clinic_id == ''){
		opCityTip('请选择诊所')
		return false;
	}else if(project_name == ''){
		opCityTip('请输入就诊需求意向')
		return false;
	}else{
		return true;
	}
}
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(1000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}