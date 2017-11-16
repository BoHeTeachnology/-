$(function(){
	var idSee = sessionStorage.getItem('idSee')
	AjaxObj.CompanygetOne(function(result){
		if(result.Data.code == 1){
			$('#company_name').html(result.Data.data.company_name);
			$('#staff_nums').html(result.Data.data.staff_nums);
			$('#company_address').html(result.Data.data.company_address);
			$('#company_head_name').html(result.Data.data.company_head_name);
			$('#mint_head_name').html(result.Data.data.mint_head_name);
			$('#company_head_phone').html(result.Data.data.company_head_phone);
			$('#mint_head_phone').html(result.Data.data.mint_head_phone);
			$('#company_code').html(result.Data.data.company_code);
		}else{
			opCityTip('',result.Data.msg)
			//alert(result.Data.msg)
		}
	},idSee)
	$('#edit-but').click(function(){
        location.href="/mint/html/company/edit.html#Company";
        sessionStorage.setItem('company_id',idSee)
    })

})

function opCityTip(tipText){
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html('<span class="wrong">'+tipText+'<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
}