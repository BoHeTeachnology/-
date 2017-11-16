$(function(){
	var inviterUserIid=transform(window.location.search);
	var type=decodeURI(inviterUserIid.type);

	Ajax.UsergetInfo(function(result){
		if(result.Data.code == 1){
				$('#phone').val(result.Data.data.phone)
		}else{
			opCityTip(result.Data.msg)
		}
	})
	$('#save').click(function(){
		var mobile_reg=/^1[3|4|5|7|8][0-9]\d{8}$/; //匹配手机正则
		var phone = $('#phone').val();
		if(phone == ''){
			opCityTip('请输入手机号')
		}else if(!mobile_reg . test( phone ) ){
			opCityTip('手机号格式错误')
		}else{
			Ajax.UsermodifyInfo(function(result){
				if(result.Data.code == 1 ){
					$('#toast').fadeIn(500).delay(1000).fadeOut()
					setTimeout(function(){
						if(type == 'doctor'){
							location.href='http://'+location.host+"/mintwx/html/doctorInfo.html";
						}else{
							location.href='http://'+location.host+"/mintwx/html/personmsg.html";
						}
					},1000)
				}else{
					opCityTip(result.Data.msg)
				}
			},'','','',phone)
		}
	})
	/*一键删除按钮*/
	$('#phone').keyup(function(){
		if( $(this).val() == '' ){
			$('.clear_num').hide();
		}else{
			$('.clear_num').show();
		}
	})
	$('.clear_num').click(function(){
		$('#phone').val('');
		$(this).hide();
	})
	$('#phone').focus(function(){
		if( $(this).val() == '' ){
			$('.clear_num').hide();
		}else{
			$('.clear_num').show();
		}
	})
	$('#phone').blur(function(){
		setTimeout(function(){
			$('.clear_num').hide();
		},100)
	})
})
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(2000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2),'top':'0','margin-top':'150px'})
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