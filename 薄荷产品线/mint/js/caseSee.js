$(function(){
	var idSee = sessionStorage.getItem('idSee')
	AjaxObj.ClinicGetOne(function(result){
		if(result.Data.code == 1){
			$('#clinic_brand').html(result.Data.data.clinic_brand);
			$('#clinic_name').html(result.Data.data.clinic_name);
			$('#chair_nums').html(result.Data.data.chair_nums);
			$('#clinic_address').html(result.Data.data.clinic_address);
			$('#clinic_head_name').html(result.Data.data.clinic_head_name);
			$('#mint_head_name').html(result.Data.data.mint_head_name);
			$('#clinic_head_phone').html(result.Data.data.clinic_head_phone);
			$('#mint_head_phone').html(result.Data.data.mint_head_phone);
			$('#account').html(result.Data.data.account);
			$('#set_date').html(result.Data.data.set_date);
			$('#staff_nums').html(result.Data.data.staff_nums);
			$('#clinic_pic img').attr('src',result.Data.data.clinic_pic);
			$('#around_pic img').attr('src',result.Data.data.around_pic);
			$('#bus_line').html(result.Data.data.bus_line);
            $('#told_word').html(result.Data.data.told_word);
			if( result.Data.data.is_show ==1 ){
				$('#is_show').html('是');
			}else if( result.Data.data.is_show ==2 ){
				$('#is_show').html('否');
			}
		}else{
			opCityTip(result.Data.msg)
		}
	},idSee)

	$('#edit-but').click(function(){
        location.href="/mint/html/caseList/edit.html#Clinic";
        sessionStorage.setItem('clinic_id',idSee)
    })
})
function opCityTip(tipText){
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html('<span class="wrong">'+tipText+'<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
}