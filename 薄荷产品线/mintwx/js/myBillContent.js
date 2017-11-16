$(function(){
	var inviterUserIid=transform(window.location.search);
	var id=decodeURI(inviterUserIid.id);
	
	Ajax.BillgetOne(function(result){
		if(result.Data.code == 1 ){
			$('#patient_name').html(result.Data.data.patient_name)
			$('#project_name').html(result.Data.data.project_name)
			$('#bill_number').html(result.Data.data.bill_number)
			$('#visit_time').html(result.Data.data.visit_time)
			$('#doctor_name').html(result.Data.data.doctor_name)
			$('#visit_time').html(result.Data.data.visit_time)
			$('#pay_way').html(result.Data.data.pay_method)
			if(result.Data.data.clinic_name =='' || result.Data.data.clinic_name == null){
				$('#clinicDiv,#clinicDiv2').hide();
			}else{
				$('#clinicDiv,#clinicDiv2').show();
				$('#clinic_name').html(result.Data.data.clinic_name)
				$('#clinic_address').html(result.Data.data.clinic_address)
			}
			if(result.Data.data.status == 1){
				$('.zhifu').show();
				$('.footButposition').hide();
				$('#pay_method').show();
			}else if(result.Data.data.status == 0){
				$('.nozhifu').show();
				$('.footButposition').show();
				$('#pay_method').hide();
			}

			
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
						$('#bill_discount').html((model.Data.data.bill_discount*10).toFixed(1) )
					}
					sessionStorage.setItem('pay_money_sucess',model.Data.data.actual_money)
				}else{
					console.log(model.Data.msg)
				}
			},result.Data.data.id)
			var bill_id = result.Data.data.id;
			

			$('#confirmBut').die().live('click',function(){
				$('.opcitybox').fadeIn(500).delay(1000).fadeOut()
    			$('.opcitybox span').html('请稍候').css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
    			//alert(bill_id)
				Ajax.Wxexamplejsapi(function(modal){
					$('.opcitybox').hide();
					var wxreturnObj = modal.Data;
					//alert(JSON.stringify(wxreturnObj) )
					if (typeof WeixinJSBridge == "undefined"){
					   if( document.addEventListener ){
					       document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
					   }else if (document.attachEvent){
					       document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
					       document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
					   }
					}else{
					   onBridgeReady(wxreturnObj);
					}
				},bill_id)
					

			})
		}else{
			console.log(result.Data.msg)
		}
	},id)


})
function onBridgeReady(wxreturnObj){
   WeixinJSBridge.invoke('getBrandWCPayRequest',wxreturnObj /*{
           "appId" : "wx2421b1c4370ec43b",     //公众号名称，由商户传入     
           "timeStamp" : " 1395712654",         //时间戳，自1970年以来的秒数     
           "nonceStr" : "e61463f8efa94090b1f366cccfbbb444", //随机串     
           "package" : "prepay_id=u802345jgfjsdfgsdg888",     
           "signType" : "MD5",         //微信签名方式：     
           "paySign" : "70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名 
       }*/,
       function(res){ 
       //alert(res.err_msg)    
           if(res.err_msg == "get_brand_wcpay_request:ok" ) {// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
           		location.href='http://'+location.host+"/mintwx/html/paySuccess.html"
           }     
       }
   ); 
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
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(1000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}
