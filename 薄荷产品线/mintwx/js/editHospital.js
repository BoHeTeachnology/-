$(function(){
	Ajax.UsergetInfo(function(result){
		if(result.Data.code == 1){
			$('#hospital').val(result.Data.data.hospital)
		}else{
			opCityTip(result.Data.msg)
		}
	})
	$('#save').click(function(){
		var hospital = $('#hospital').val();
		if(hospital != ''){
			Ajax.UsermodifyInfo2(function(result){
				if(result.Data.code == 1 ){
					$('#toast').fadeIn(500).delay(1000).fadeOut()
					setTimeout(function(){
						location.href='http://'+location.host+"/mintwx/html/doctorInfo.html";
					},1000)
				}else{
					opCityTip(result.Data.msg)
				}
			},'','','','',hospital)
		}
	})
	/*一键删除按钮*/
	$('#hospital').keyup(function(){
		if( $(this).val() == '' ){
			$('.clear_num').hide();
		}else{
			$('.clear_num').show();
		}
	})
	$('.clear_num').click(function(){
		$('#hospital').val('');
		$(this).hide();
	})
	$('#hospital').focus(function(){
		if( $(this).val() == '' ){
			$('.clear_num').hide();
		}else{
			$('.clear_num').show();
		}
	})
	$('#hospital').blur(function(){
		setTimeout(function(){
			$('.clear_num').hide();
		},100)
	})
})
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(2000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2),'top':'0','margin-top':'150px'})
}
