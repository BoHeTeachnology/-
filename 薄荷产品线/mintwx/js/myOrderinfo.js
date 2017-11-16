$(function(){
	var inviterUserIid=transform(window.location.search);
	var id=decodeURI(inviterUserIid.id);
	Ajax.AppointmentgetOne(function(result){
		if(result.Data.code == 1 ){
			var visit_name =result.Data.data.visit_name == null || result.Data.data.visit_name =='' ? result.Data.data.patient_name : result.Data.data.visit_name;
			$('#appointment_name').html(result.Data.data.appointment_name)
			$('#reserve_number').html(result.Data.data.reserve_number)
			$('#contact_tel').html(result.Data.data.contact_tel)
			$('#patient_phone').html(result.Data.data.patient_phone)
			$('#visit_time').html(result.Data.data.visit_time)
			$('#doctor_name').html(result.Data.data.doctor_name)
			$('#clinic_name').html(result.Data.data.clinic_name)
			if( result.Data.data.company_name =='' || result.Data.data.company_name ==null){
				$('#company_name_box').hide();
			}else{
				$('#company_name').html(result.Data.data.company_name)
			}
			if( result.Data.data.project_name =='' || result.Data.data.project_name == null){
				$('#project_name_box').hide();
			}else{
				if(result.Data.data.is_return == 0){
					$('#project_name').html(result.Data.data.project_name)
				}else{
					$('#project_name').html(result.Data.data.project_name+' - 复诊')
				}
			}
				
			$('#clinic_address').html(result.Data.data.clinic_address)
			if(result.Data.data.status == 1){
				$('#status').html('已预约').attr('class','yuyuehzong')
				$('#quxiaoBut').show();
			}else if(result.Data.data.status == 2){
				$('#status').html('已完成').attr('class','wancheng')
				$('#quxiaoBut').hide();
			}else if(result.Data.data.status == 3){
				$('#status').html('已过期').attr('class','guoqi')
				$('#quxiaoBut').hide();
			}else if(result.Data.data.status == 4){
				$('#status').html('已取消').attr('class','quxiao')
				$('#quxiaoBut').hide();
			}else if(result.Data.data.status == 5){
				$('#status').html('已确认').attr('class','queren')
				$('#quxiaoBut').hide();
			}
			if(result.Data.data.is_self == 1){
				$('#isselfDiv').hide();
				$('#apBox b').html('就&nbsp;&nbsp;诊&nbsp;人：')
			}else{
				$('#isselfDiv').show();
				$('#apBox b').html('预&nbsp;&nbsp;约&nbsp;人：')
			}
			$('#patient_name').html(visit_name)
			$('#relations').html(result.Data.data.relations)
		}else{
			alert(result.Data.msg)
		}
	},id)

	$('#confirm').click(function(){
		Ajax.Appointmentcancel(function(result){
			if(result.Data.code == 1){
				$('#toast').fadeIn(500).delay(1000).fadeOut()
				setTimeout(function(){
					window.history.go(-1);
				},1000); 
			}else{
				opCityTip(result.Data.msg)
			}
		},id)
	})
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
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(1000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}