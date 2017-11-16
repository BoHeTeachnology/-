$(function(){
	var inviterUserIid=transform(window.location.search);
	var id=decodeURI(inviterUserIid.id);
	var nowDate = new Date();
	var year = nowDate.getFullYear();
	var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1): nowDate.getMonth() + 1;
	var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
	var dateStr = year + "-" + month + "-" + day;
  
	Ajax.AppointmentgetOne(function(result){
		if(result.Data.code == 1 ){
			if( result.Data.data.project_name == '' || result.Data.data.project_name==null){
				$('#project_box').hide()
			}else{
				$('#project_box').show()
			}
			if(result.Data.data.company_name=='' || result.Data.data.company_name==null){
				$('#company_box').hide()
			}else{
				$('#company_box').show()
			}
			$('#patient_name').html(result.Data.data.visit_name)
			$('#reserve_number').html(result.Data.data.reserve_number)
			$('#contact_tel').html(result.Data.data.contact_tel)
			$('#visit_time').html(result.Data.data.visit_time)
			$('#company_name').html(result.Data.data.company_name)
			$('#doctor_name').html(result.Data.data.doctor_name)
			$('#clinic_name').html(result.Data.data.clinic_name)
			if(result.Data.data.is_return == 0){
				$('#project_name').html(result.Data.data.project_name)
			}else{
				$('#project_name').html(result.Data.data.project_name+' - 复诊')
			}
			
			$('#remark').html(result.Data.data.remark)
			$('#clinic_address').html(result.Data.data.clinic_address)
			if(result.Data.data.status == 1){
				$('#status').html('已预约').attr('class','yuyuehzong')
				//$('#yiQueren').show();
				if(sessionStorage.getItem('statuPoint') == 1){
				  	$('#yiQueren').hide();
				}else{
				  	$('#yiQueren').show();
				}
			}else if(result.Data.data.status == 2){
				$('#status').html('已完成').attr('class','wancheng')
				$('#yiQueren').hide();
			}else if(result.Data.data.status == 3){
				$('#status').html('已过期').attr('class','guoqi')
				$('#yiQueren').hide();
			}else if(result.Data.data.status == 4){
				$('#status').html('已取消').attr('class','quxiao')
				$('#yiQueren').hide();
			}

		}else{
			alert(result.Data.msg)
		}
	},id)

	var re_time='';
	$('#date').calendar({
	    minDate:dateStr,
	    onChange:function(){
	    	$('.reFutimebox ul li').addClass('gray');
	    	
	    }
	})


	$('.reFutimebox ul li').click(function(){
		$(this).toggleClass('cur').siblings().removeClass('cur');
		var that = $(this);
		if( $('.checkBdiv input').is(':checked') ){
			if($('.reFutimebox ul li').hasClass('cur')){
				$('#otherTime').hide();
				re_time = that.attr('data-val');
			}else{
				$('#otherTime').show();
				re_time = '';
			}
		}

	})
	$('.checkBdiv input').change(function(){
		if( $('.checkBdiv input').is(':checked') ){
			$('.reFutimebox').show();
		}else{
			$('.reFutimebox').hide();
		}
		$('#otherTime').show();
		$('.reFutimebox ul li').removeClass('cur')
		$('.reFutimebox ul li').removeClass('gray')
		$('#date').val('')
		re_time='';
	})

	$('#date').change(function(){
		re_time=$(this).val();
	})
	$('#submitBill').click(function(){
		var remark = $('#remark').val();
		if( $('.checkBdiv input').is(':checked') ){
			console.log(re_time)
			if(re_time ==''){
				opCityTip('请选择复诊时间')
			}else{
				Ajax.AppointmentgetOne(function(result){
					if(result.Data.code == 1 ){
						var patient_id = result.Data.data.patient_id;
						Ajax.sendReturnMsg(function(mode){
							if(mode.Data.code == 1){
								$('#toast').fadeIn(500).delay(1000).fadeOut();
								sessionStorage.setItem('statuPoint',1)
								setTimeout(function(){
									location.href='http://'+location.host+"/mintwx/html/price.html?user_id="+id;
								},1000); 
								
							}else{
								opCityTip(mode.Data.msg)
							}
						},id,patient_id,re_time,remark)
					}else{
						alert(result.Data.msg)
					}
				},id)
						
			}
			
		}else{
			//console.log('b')
			location.href='http://'+location.host+"/mintwx/html/price.html?user_id="+id;
		}
		
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
