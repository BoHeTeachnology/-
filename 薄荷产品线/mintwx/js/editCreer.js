$(function(){
	Ajax.UsergetInfo(function(result){
		if(result.Data.code == 1){
			$('#position').val(result.Data.data.position)
		}else{
			opCityTip(result.Data.msg)
		}
	})
	$('#save').click(function(){
		var position = $('#position').val();
		if(position != ''){
			Ajax.UsermodifyInfo2(function(result){
				if(result.Data.code == 1 ){
					$('#toast').fadeIn(500).delay(1000).fadeOut()
					setTimeout(function(){
						location.href='http://'+location.host+"/mintwx/html/doctorInfo.html";
					},1000)
				}else{
					opCityTip(result.Data.msg)
				}
			},position,'','','','')
		}
	})
	/*一键删除按钮*/
	$('#position').keyup(function(){
		if( $(this).val() == '' ){
			$('.clear_num').hide();
		}else{
			$('.clear_num').show();
		}
	})
	$('.clear_num').click(function(){
		$('#position').val('');
		$(this).hide();
	})
	$('#position').focus(function(){
		if( $(this).val() == '' ){
			$('.clear_num').hide();
		}else{
			$('.clear_num').show();
		}
	})
	$('#position').blur(function(){
		setTimeout(function(){
			$('.clear_num').hide();
		},100)
	})
})
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(2000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2),'top':'0','margin-top':'150px'})
}
