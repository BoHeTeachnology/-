$(function(){
	Ajax.UsergetInfo(function(result){
		if(result.Data.code == 1){
			var user_account = result.Data.data.account;
			$('#submit').click(function(){
				var content = $('#content').val();
				if(content == ''){
					opCityTip('请输入您的宝贵意见')
				}else{
					Ajax.Suggestionadd(function(result){
						if(result.Data.code == 1 ){
							$('#toast').fadeIn(500).delay(1000).fadeOut()
							setTimeout(function(){
								location.href='http://'+location.host+"/mintwx/html/mine.html";
							},1000)
						}else{
							opCityTip(result.Data.msg)
						}
					},user_account,content)
				}
			})
		}else{
			opCityTip(result.Data.msg)
		}
	})

})
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(2000).fadeOut();
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}