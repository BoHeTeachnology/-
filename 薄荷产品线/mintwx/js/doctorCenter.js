$(function(){

	$('#userImg').click(function(){
		window.location.href = "doctorInfo.html";
	})
	$('.a1,.a2,.chuzhen').click(function(){
		$(this).css("background-color",'#eee');
	})
	Ajax.UsergetInfo(function(result){
		if(result.Data.code == 1){
			if(result.Data.data.photo == '' || result.Data.data.photo == null){
				$('#userImg').html('<img src="'+result.Data.data.headimgurl+'" alt="">')
			}else{
				$('#userImg').html('<img src="'+result.Data.data.photo+'" alt="">')
			}

			if(result.Data.data.name == ''){
				$('#userName a').html('完善个人信息')
			}else{
				$('#userName a').html(result.Data.data.name)
			}
            console.log(result.Data.data.id);
            sessionStorage.setItem("doctor_id",result.Data.data.id);

		}else{
			opCityTip(result.Data.msg)
		}
	})
/*
	$('#tipmsg1 a,#about_us').click(function(){
		opCityTip('正在建设中')
	})*/
})
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(2000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}
