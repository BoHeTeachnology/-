$(function(){
	Ajax.UsergetInfo(function(result){
		if(result.Data.code == 1){
			$('#field').val(result.Data.data.field)
		}else{
			opCityTip(result.Data.msg)
		}
	})
	$('#save').click(function(){
		var field = $('#field').val();
		if(field != ''){
			Ajax.UsermodifyInfo2(function(result){
				if(result.Data.code == 1 ){
					$('#toast').fadeIn(500).delay(1000).fadeOut()
					setTimeout(function(){
						location.href='http://'+location.host+"/mintwx/html/doctorInfo.html";
					},1000)
				}else{
					opCityTip(result.Data.msg)
				}
			},'',field,'','','')
		}
	})
	$('.clear_num').click(function(){
		$('#field').val('')
	})
})
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(2000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2),'top':'0','margin-top':'150px'})
}
