$(function(){
	var inviterUserIid=transform(window.location.search);
	var service_id=decodeURI(inviterUserIid.service_id);
	var visit_date=decodeURI(inviterUserIid.visit_date);
	var app_id=decodeURI(inviterUserIid.app_id) || '' ;
	console.log(visit_date,service_id,app_id)
	if(app_id == '' || app_id == 'undefined' || app_id == undefined){
		getDoctorLst(visit_date,service_id)
	}else{
		Ajax.getChuIdgetChuId(function(modal){
			if( modal.Data.code == 1 ){
				var chu_id = modal.Data.chu_id;
				Ajax.getDoctorLst(function(result){
					if(result.Data.code == 1){
						var html='';
						var str = '';
						for(var i=0; i<result.Data.data.length; i++){
							console.log(chu_id,result.Data.data[i].id)
							var photo = result.Data.data[i].photo == '' ? '/mintwx/images/user_default.png' : result.Data.data[i].photo;

							if(chu_id == result.Data.data[i].id){
								str+='<a href="/mintwx/html/order/chooseproTrue.html?doctor_id='+result.Data.data[i].id+'&visit_date='+visit_date+'&service_id='+service_id+'" class="weui_media_box weui_media_appmsg">'
								str+='<div class="weui_media_hd">'
								str+='<img src="'+photo+'" alt="">'
								str+='</div>'
								str+='<div class="weui_media_bd">'
								str+='<h4 class="weui_media_title"><b>'+result.Data.data[i].name+'</b> <label>'+result.Data.data[i].job_age+'年</label></h4>'
								str+='<p class="weui_media_interest"><span>擅长领域：</span><label>'+result.Data.data[i].field+'</label></p>'
								str+='<p class="weui_media_interest"><span>所在诊所：</span><label>'+result.Data.data[i].clinic_name+'</label></p>'
								str+='</div>'
								str+='<span class="weui_cell_ft"></span>'
								str+='</a>'
							}else{
								html+='<a href="/mintwx/html/order/chooseproTrue.html?doctor_id='+result.Data.data[i].id+'&visit_date='+visit_date+'&service_id='+service_id+'" class="weui_media_box weui_media_appmsg">'
								html+='<div class="weui_media_hd">'
								html+='<img src="'+photo+'" alt="">'
								html+='</div>'
								html+='<div class="weui_media_bd">'
								html+='<h4 class="weui_media_title"><b>'+result.Data.data[i].name+'</b> <label>'+result.Data.data[i].job_age+'年</label></h4>'
								html+='<p class="weui_media_interest"><span>擅长领域：</span><label>'+result.Data.data[i].field+'</label></p>'
								html+='<p class="weui_media_interest"><span>所在诊所：</span><label>'+result.Data.data[i].clinic_name+'</label></p>'
								html+='</div>'
								html+='<span class="weui_cell_ft"></span>'
								html+='</a>'
							}
						}
						$('#chu_doctorList').html(str)
						$('#doctorList').html(html)
						if( $('.chu_doctor a').length ==0){
							$('.chu_doctor').hide();
						}else{
							$('.chu_doctor').show();
						}
						if( $('.no_chu_doctor a').length ==0){
							$('.no_chu_doctor').hide();
						}else{
							$('.no_chu_doctor').show();
							$('#chooseTitle2').html('选择其他医生')
						}
					}else{
			    		opCityTip(result.Data.msg)
			    	}
				},visit_date,service_id)
			}else{
				$('.chu_doctor').hide();
				getDoctorLst(visit_date,service_id)
			}
		},app_id)
	}

	$('.step1').click(function(){
		window.history.go(-1)
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
function getDoctorLst(visit_date,service_id){
	Ajax.getDoctorLst(function(result){
		if(result.Data.code == 1){
			var html='';
			for(var i=0; i<result.Data.data.length; i++){
				var photo = result.Data.data[i].photo == '' ? '/mintwx/images/user_default.png' : result.Data.data[i].photo;
				html+='<a href="/mintwx/html/order/chooseproTrue.html?doctor_id='+result.Data.data[i].id+'&visit_date='+visit_date+'&service_id='+service_id+'" class="weui_media_box weui_media_appmsg">'
				html+='<div class="weui_media_hd">'
				html+='<img src="'+photo+'" alt="">'
				html+='</div>'
				html+='<div class="weui_media_bd">'
				html+='<h4 class="weui_media_title"><b>'+result.Data.data[i].name+'</b> <label>'+result.Data.data[i].job_age+'年</label></h4>'
				html+='<p class="weui_media_interest"><span>擅长领域：</span><label>'+result.Data.data[i].field+'</label></p>'
				html+='<p class="weui_media_interest"><span>所在诊所：</span><label>'+result.Data.data[i].clinic_name+'</label></p>'
				html+='</div>'
				html+='<span class="weui_cell_ft"></span>'
				html+='</a>'
			}
			$('#doctorList').html(html)
			$('#chooseTitle2').html('选择您的医生')
		}else{
    		opCityTip(result.Data.msg)
    	}
	},visit_date,service_id)
}