$(function(){

	$('#choseBoxtop1').show();
	if( sessionStorage.getItem('otherinfo') ){
		$('#choseBoxtop2').show();
		$('#choseBoxtop1').hide();
	}else{
		$('#choseBoxtop1').show();
		$('#choseBoxtop2').hide();
	}
	UsergetInfo();
	$('#forOtherBtn_cancel').click(function(){
		sessionStorage.removeItem('otherinfo');
		$('#choseBoxtop1').show();
		$('#choseBoxtop2').hide();
		UsergetInfo();
	})
	/*查询预约项目*/
	Ajax.DoctorserviceLst(function(result){
		if(result.Data.code == 1){
			var html='';
			for(var i=0; i<result.Data.data.length; i++){
				html+='<dl data-id="'+result.Data.data[i].id+'" data-name="'+result.Data.data[i].service_name+'">'
				html+='<dt><img src="'+result.Data.data[i].logo_url+'" alt=""></dt>'
				html+='<dd>'+result.Data.data[i].service_name+'</dd>'
				html+='</dl>'
			}
			$('#chooseProjboxdl').html(html+'<div class="clear"></div>')
			$('#chooseProjboxdl dl').click(function(){
				var id=$(this).attr('data-id');
				var service_name=$(this).attr('data-name');
				sessionStorage.setItem('service_name',service_name)
				sessionStorage.setItem('is_return',0)
				console.log(sessionStorage.getItem('is_self'))
				location.href='http://'+location.host+"/mintwx/html/order/chooseproTime.html?id="+id;
			})
		}else{
			opCityTip(result.Data.msg)
		}
	})	
	$('#forOtherBtn').click(function(){
		$('#phone').html();
		sessionStorage.setItem('headerPhone',$('#phone').html());
	})	
})
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(1000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}
function UsergetInfo(){
	Ajax.UsergetInfo(function(result){
		if(result.Data.code == 1){
			if(result.Data.data.name == '' ){
				$('#name').html(result.Data.data.real_name);
			}else{
				$('#name').html(result.Data.data.name);
			}
			
			$('#phone').html(result.Data.data.phone)
			var result_name = result.Data.data.name ==''?result.Data.data.real_name:result.Data.data.name,
				result_company_code = result.Data.data.company_code,
				result_phone = result.Data.data.phone;
			if( result.Data.data.name =='' || result.Data.data.company_code=='' || result.Data.data.sex == '' || result.Data.data.phone =='' ){
				opCityTip('请先去完善个人信息')
				setTimeout(function(){
					location.href='http://'+location.host+"/mintwx/html/personmsg.html?mine=1";			
				},1000); 
			}else{
				Ajax.shiyueCount(function(modal){
				    if(modal.Data.code ==1){
				      if(modal.Data.count >= 3){
				        opCityTip('您已爽约超过3次 <br /> 三个月内无法预约')
				      }else{
						if( sessionStorage.getItem('otherinfo') ){
							$('#choseBoxtop2').show();
							$('#choseBoxtop1').hide();
							$('#name2').html(JSON.parse(sessionStorage.getItem('otherinfo')).real_name);
							$('#phone2').html(JSON.parse(sessionStorage.getItem('otherinfo')).phone)
							sessionStorage.setItem('is_self',2)
							sessionStorage.setItem('otherinfo',sessionStorage.getItem('otherinfo'))
						}else{
							$('#choseBoxtop1').show();
							$('#choseBoxtop2').hide();
							sessionStorage.setItem('is_self',1)
							sessionStorage.setItem('otherinfo','')
						}
						sessionStorage.setItem('patient_name',result_name)
						sessionStorage.setItem('company_code',result_company_code)
						sessionStorage.setItem('phone',result_phone)
				      }
				    }else{
				      console.log(modal.Data.msg)
				    }
				})	
			}	
		}else{
			opCityTip(result.Data.msg)
		}
	}) 
}