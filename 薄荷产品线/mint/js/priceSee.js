$(function(){
	var idSee = sessionStorage.getItem('idSee')
	
	AjaxObj.ProjectgetOne(function(model){
		if(model.Data.code == 1){
			var imgPic =model.Data.data.pic =='' ? '../../images/nonepic.png':model.Data.data.pic;
				$('#project_name').html(model.Data.data.project_name);
				$('#price').html(model.Data.data.price);
				$('#unit').html(model.Data.data.unit);
				$('#cat_name').html(model.Data.data.cat_name);
				$('#cat_name2').html(model.Data.data.u_cat_name);
				$('#remark').html(model.Data.data.remark.split("\n").join("<br />"));
				$('#order').html(model.Data.data.order);
				$('#order1').html(model.Data.data.order1);
				$('#pic img').attr('src',imgPic);
				$('#content_link').html(model.Data.data.content_link);
		}else{
			opCityTip('',result.Data.msg)
		}
	},idSee)
	$('#edit-but').click(function(){
        location.href="/mint/html/priceList/edit.html#Project";
        sessionStorage.setItem('project_id',idSee)
    })
})

function opCityTip(selector,tipText){
	$('#'+selector+'').siblings('p').html(tipText).show()
    $('#'+selector+'').css({'border':'solid 1px red'})
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html('<span class="wrong">'+tipText+'<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
}