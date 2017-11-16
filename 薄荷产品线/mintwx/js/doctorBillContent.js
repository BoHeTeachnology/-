$(function(){
	var inviterUserIid=transform(window.location.search);
	var id=decodeURI(inviterUserIid.id);
	Ajax.BillgetOne(function(result){
		if(result.Data.code == 1 ){
			$('#patient_name').html(result.Data.data.patient_name)
			$('#bill_number').html(result.Data.data.bill_number)
			$('#time').html(result.Data.data.visit_time)
			$('#project_name').html(result.Data.data.project_name)
			$('#doctor_name').html(result.Data.data.doctor_name)
			$('#pay_way').html(result.Data.data.pay_method)
			if(result.Data.data.clinic_name =='' || result.Data.data.clinic_name == null){
				$('#clinicDiv,#clinicDiv2').hide();
			}else{
				$('#clinicDiv,#clinicDiv2').show();
				$('#clinic_name').html(result.Data.data.clinic_name)
				$('#clinic_address').html(result.Data.data.clinic_address)
			}
			if(result.Data.data.status == 1){
				$('#payMethod').show();
				$('.billstatus label.zhifu').show();
				
			}else if(result.Data.data.status == 0){
				$('#payMethod').hide();
				$('.billstatus label.nozhifu').show();
				
			}
			/*if(result.Data.data.is_confirm == 1){
				$('#is_confirm').html('已确认').attr('class','queren')
			}else if(result.Data.data.is_confirm == 0){
				$('#is_confirm').html('待确认').attr('class','noqueren')
			}
*/			
			Ajax.billDetail(function(model){
				if( model.Data.code == 1 ){
					var html='';
					for (var i = 0; i<model.Data.data.bill_detail.length; i++) {
						html+='<li data-id="'+model.Data.data.bill_detail[i].project_id+'">'
						html+='<p><b class="project_name">'+model.Data.data.bill_detail[i].project_name+'</b><span>数量：'+model.Data.data.bill_detail[i].number+'</span></p>'
						if(model.Data.data.bill_detail[i].count_price == model.Data.data.bill_detail[i].count_actual_price){
							html+='<label><font class="brfore_price" style="display:none">￥ <b>'+model.Data.data.bill_detail[i].count_price.toFixed(2)+'</b></font><br />'
						}else{
							html+='<label><font class="brfore_price">￥ <b>'+model.Data.data.bill_detail[i].count_price.toFixed(2)+'</b></font><br />'
						}
							
						html+='<font class="after_price">￥ <b>'+model.Data.data.bill_detail[i].count_actual_price.toFixed(2)+'</b></font></label>'
						if(model.Data.data.bill_detail[i].project_discount!=1){
							html+='<p class="selectP">折扣：<code>'+(model.Data.data.bill_detail[i].project_discount*10).toFixed(1)+'折</code></p>'
						}
						
						html+='</li>'
					}
					$('#AllbillTotal').html(html)
					$('#Alltotal_after').html('￥'+model.Data.data.actual_money)
					if(model.Data.data.actual_money==model.Data.data.pay_money){
						$('.actural_boxp').hide();
						$('#Alltotal_brfore').html('￥'+model.Data.data.pay_money).css({'color':'#ff7800','text-decoration':'none'})
					}else{
						$('.actural_boxp').show();
						$('#Alltotal_brfore').html('￥'+model.Data.data.pay_money)
					}
					if(model.Data.data.bill_discount ==1){
						$('#all_bill_discount').hide();
					}else{
						$('#all_bill_discount').show();
						//$('#bill_discount').html(model.Data.data.bill_discount*10)
						$('#bill_discount').html((model.Data.data.bill_discount*10).toFixed(1) )
					}
					sessionStorage.setItem('pay_money_sucess',model.Data.data.actual_money)
				}else{
					console.log(model.Data.msg)
				}
			},result.Data.data.id)

		}else{
			console.log(result.Data.msg)
		}
	},id)


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
