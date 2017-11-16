$(function(){
	var inviterUserIid=transform(window.location.search);
	var serviceId=decodeURI(inviterUserIid.service_id);
	var visit_date=decodeURI(inviterUserIid.visit_date);
	var doctorId=decodeURI(inviterUserIid.doctor_id);

    $('#todayDate').html(visit_date)
	Ajax.getOneVisitData(function(result){
		if(result.Data.code == 1){
			sessionStorage.setItem('clinicId',result.Data.data.clinic_id)
			sessionStorage.setItem('clinicnName',result.Data.data.clinic_name)
			var html='';
			var photo = result.Data.data.photo == '' ? '/mintwx/images/user_default.png' : result.Data.data.photo;
			var str = '<div href="#" class="weui_media_box weui_media_appmsg">\
				            <div class="weui_media_hd">\
				                <img src="'+photo+'" alt="">\
				            </div>\
				            <div class="weui_media_bd">\
				              <h4 class="weui_media_title"><b>'+result.Data.data.name+'</b> <label>'+result.Data.data.job_age+'年</label></h4>\
				                <p class="weui_media_interest"><span>擅长领域：</span><label>'+result.Data.data.field+' </label></p>\
				                <p class="weui_media_interest"><span>所在诊所：</span><label>'+result.Data.data.clinic_name+' </label></p>\
				                <p class="weui_media_interest"><span>出诊地址：</span><label>'+result.Data.data.clinic_address+' </label></p>\
				            </div>\
				            <span class="weui_cell_ft"></span>\
				        </div>'
			$('#doctorList').html(str)
			var str1='',str2='',str3='';
			for(var i=0; i<result.Data.data.time_arr.length; i++){

				if( result.Data.data.time_arr[i].is_have == 1 ){ 
					if( parseInt(result.Data.data.time_arr[i].visit_time)<12 ){
						str1+='<li class="gray"><span>'+result.Data.data.time_arr[i].visit_time+'</span></li>'
					}else if(parseInt(result.Data.data.time_arr[i].visit_time)>12 && parseInt(result.Data.data.time_arr[i].visit_time)<18){
						str2+='<li class="gray"><span>'+result.Data.data.time_arr[i].visit_time+'</span></li>'
					}else if( parseInt(result.Data.data.time_arr[i].visit_time)>=18 ){
						str3+='<li class="gray"><span>'+result.Data.data.time_arr[i].visit_time+'</span></li>'
					}
				}else{
					if( result.Data.data.time_arr[i].visit_time == '12:00' || result.Data.data.time_arr[i].visit_time == '12:15' || result.Data.data.time_arr[i].visit_time == '12:30' || result.Data.data.time_arr[i].visit_time == '12:45'){
						str1+='<li class="gray" style="display:none"><span>'+result.Data.data.time_arr[i].visit_time+'</span></li>'
					}else{ 
						if( parseInt(result.Data.data.time_arr[i].visit_time)<12 ){
							str1+='<li><span>'+result.Data.data.time_arr[i].visit_time+'</span></li>'
						}else if(parseInt(result.Data.data.time_arr[i].visit_time)>12 && parseInt(result.Data.data.time_arr[i].visit_time)<18){
							str2+='<li><span>'+result.Data.data.time_arr[i].visit_time+'</span></li>'
						}else if( parseInt(result.Data.data.time_arr[i].visit_time)>=18 ){
							str3+='<li><span>'+result.Data.data.time_arr[i].visit_time+'</span></li>'
						}
					}
<<<<<<< .mine


				}
=======
				}
				
					
>>>>>>> .r14865
			}
			var str_1 = str1 == '' ? '' : '<p class="clear time_pstyle"><b>上午</b></p>'+str1;
			var str_2 = str2 == '' ? '' : '<p class="clear time_pstyle"><b>下午</b></p>'+str2;
			var str_3 = str3 == '' ? '' : '<p class="clear time_pstyle"><b>晚上</b></p>'+str3;
			$('#TimeTrue').html(str_1+str_2+str_3+'<div class="clear"></div>')
			$('#TimeTrue li').click(function(){
				$('#confirmBut').attr('disabled',false)
		      if( ! $(this).hasClass('gray') ){
		        $(this).toggleClass('cur').siblings().removeClass('cur');
		        if( $(this).hasClass('cur') ){
		        	$('#todayTime').html( $(this).find('span').html() )
		        }else{
		        	$('#todayTime').html('')
		        }

		      }else{
		      	$('#todayTime').html('')
		      }

		    })
		}else{
    		opCityTip(result.Data.msg)
    	}
	},doctorId,visit_date)

	$('#confirmBut').click(function(){
		console.log(1211);
		$(this).attr('disabled',true)
		$('.opcitybox').show();
		$('.opcitybox span').html('正在预约中').css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
		var todayTime =  $('#todayTime').text();
		var doctor_id = doctorId,
			invite_code = sessionStorage.getItem('company_code') || '', 
			is_self = sessionStorage.getItem('is_self') || '',
			patient_name =sessionStorage.getItem('patient_name') || '',
			contact_tel = sessionStorage.getItem('phone') || '',
			clinic_id = sessionStorage.getItem('clinicId') || '',
			clinic_name = sessionStorage.getItem('clinicnName') || '',
			visit_time = visit_date+' '+todayTime,
			project_name = sessionStorage.getItem('service_name') || '',
			service_id = serviceId,
			is_return = sessionStorage.getItem('is_return') || '',//是否是复诊 必须 1为是0为否
			visit_people = sessionStorage.getItem('otherinfo') || '' ;
			//console.log(todayTime)
			if(todayTime==''){
				opCityTip('请选择具体时间')
			}else{
				//console.log(is_return)
				//console.log(invite_code,is_self,patient_name,contact_tel,clinic_id,clinic_name,visit_time,project_name,service_id,is_return,visit_people)
				//console.log(visit_people)
				Ajax.Appointmentadd(function(result){
					if(result.Data.code ==1){
						//opCityTip('预约成功')
						location.href='http://'+location.host+"/mintwx/html/order/chooseproSuccess.html";
					}else{
						location.href='http://'+location.host+"/mintwx/html/order/chooseproWrong.html";
					}
				},doctor_id,invite_code,is_self,patient_name,contact_tel,clinic_id,clinic_name,visit_time,project_name,service_id,is_return,visit_people)
			
			}


	})
	$('.step2').click(function(){
		window.history.go(-1)
	})
	$('.step1').click(function(){
		location.href='http://'+location.host+"/mintwx/html/order/chooseproTime.html?id="+serviceId
	})
})

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
