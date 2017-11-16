$(function(){
	Ajax.UsergetInfo(function(result){
		if(result.Data.code == 1){
			$('#context').val(result.Data.data.context)
		}else{
			opCityTip(result.Data.msg)
		}
	})
	$('#save').click(function(){
		var context = $('#context').val();
		if(context != ''){
			Ajax.UsermodifyInfo2(function(result){
				if(result.Data.code == 1 ){
					$('#toast').fadeIn(500).delay(1000).fadeOut()
					setTimeout(function(){
						location.href='http://'+location.host+"/mintwx/html/doctorInfo.html";
					},1000)
				}else{
					opCityTip(result.Data.msg)
				}
			},'','',context,'','')
		}
	})
	$('.clear_num').click(function(){
		$('#context').val('')
	})
})
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(2000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2),'top':'0','margin-top':'150px'})
}
