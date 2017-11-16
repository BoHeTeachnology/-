$(function(){
	var inviterUserIid=transform(window.location.search);
	var type=decodeURI(inviterUserIid.type);

	Ajax.UsergetInfo(function(result){
		if(result.Data.code == 1){
			$('#name').val(result.Data.data.name);
		}else{
			opCityTip(result.Data.msg)
		}
	})
	$('#save').click(function(){
		var name = $('#name').val(),
			name_reg = /^[A-z]+$|^[\u4E00-\u9FA5]+$/;
		if(name == ''){
			opCityTip('请输入姓名')
		}else if( !name_reg.test(name) ){
			opCityTip('只支持汉字或英文')
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
			},name,'','','')
		}
	})
	/*一键删除按钮*/
	$('#name').keyup(function(){
		if( $(this).val() == '' ){
			$('.clear_num').hide();
		}else{
			$('.clear_num').show();
		}
	})
	$('.clear_num').click(function(){
		$('#name').val('');
		$(this).hide();
	})
	$('#name').focus(function(){
		if( $(this).val() == '' ){
			$('.clear_num').hide();
		}else{
			$('.clear_num').show();
		}
	})
	$('#name').blur(function(){
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
