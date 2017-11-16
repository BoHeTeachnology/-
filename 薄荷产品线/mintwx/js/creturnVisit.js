$(function(){

	//$('#choseBoxtop1').show();
	
	var inviterUserIid=transform(window.location.search);
	var app_id=decodeURI(inviterUserIid.app_id);
	Ajax.AppointmentgetOne(function(result){
		if(result.Data.code ==1){
			sessionStorage.setItem('company_code',result.Data.data.invite_code)
			sessionStorage.setItem('phone',result.Data.data.contact_tel)

			if( result.Data.data.relations == '' ){
				$('#name').html(result.Data.data.patient_name);
				$('#phone').html(result.Data.data.patient_phone)
				sessionStorage.setItem('is_self',1)
				sessionStorage.setItem('relations','')
				sessionStorage.setItem('patient_name',result.Data.data.patient_name )
			}else{
				$('#name').html(result.Data.data.patient_name);
				$('#phone').html(result.Data.data.relations)
				sessionStorage.setItem('is_self',2)
				sessionStorage.setItem('relations',result.Data.data.relations )
				sessionStorage.setItem('patient_name',result.Data.data.patient_name )
			}
		}else{
			opCityTip(result.Data.msg)
		}
	},app_id)

	//alert(app_id)
	/*$('.reOrderCancel').click(function(){
		//WeixinJSBridge.call('closeWindow');
		WeixinJSBridge.invoke('closeWindow');
	})
	$('.wantReorder').click(function(){
		sessionStorage.setItem('tipboxcloseVal',1)
		$('.opacityTipbox').hide();
	})*/
 	/*if( sessionStorage.getItem('tipboxcloseVal') ){
		$('.opacityTipbox').hide();
	}else{
		$('.opacityTipbox').show();
	}*/

/*	$('#forOtherBtn_cancel').click(function(){
		sessionStorage.removeItem('otherName');
		sessionStorage.removeItem('guanxi')
		$('#choseBoxtop1').show();
		$('#choseBoxtop2').hide();
		UsergetInfo();
	})*/
	/*查询预约项目*/
	Ajax.DoctorserviceLst(function(result){
		if(result.Data.code == 1){
			var html='';
			for(var i=0; i<result.Data.data.length; i++){
				html+='<dl data-id="'+result.Data.data[i].id+'" data-name="'+result.Data.data[i].service_name+'">'
				html+='<dt><img src="'+result.Data.data[i].logo_url+'" alt=""></dt>'
				html+='<dd>'+result.Data.data[i].service_name+'-复诊</dd>'
				html+='</dl>'
			}
			$('#chooseProjboxdl').html(html+'<div class="clear"></div>')
			$('#chooseProjboxdl dl').click(function(){
				var id=$(this).attr('data-id');
				var service_name=$(this).attr('data-name');
				sessionStorage.setItem('service_name',service_name);
				sessionStorage.setItem('is_return',1)
				location.href='http://'+location.host+"/mintwx/html/order/chooseproTime.html?id="+id+'&app_id='+app_id;
			})
		}else{
			opCityTip(result.Data.msg)
		}
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
