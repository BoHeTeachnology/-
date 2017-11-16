$(function(){
	var company_id = sessionStorage.getItem('company_id')
	//console.log(company_id)
	AjaxObj.CompanygetOne(function(result){
		if(result.Data.code == 1){
			$('#company_name').val(result.Data.data.company_name);
			$('#staff_nums').val(result.Data.data.staff_nums);
			$('#company_address').val(result.Data.data.company_address);
			$('#company_head_name').val(result.Data.data.company_head_name);
			$('#mint_head_name').val(result.Data.data.mint_head_name);
			$('#company_head_phone').val(result.Data.data.company_head_phone);
			$('#mint_head_phone').val(result.Data.data.mint_head_phone);
			$('#company_code').val(result.Data.data.company_code);
		}else{
			opCityTip('',result.Data.msg)
			//alert(result.Data.msg)
		}
	},company_id)
	$('#save-but').click(function(){
		var company_name = $('#company_name').val(),
			staff_nums = $('#staff_nums').val(),
			company_address = $('#company_address').val(),
			company_head_name = $('#company_head_name').val(),
			mint_head_name = $('#mint_head_name').val(),
			company_head_phone = $('#company_head_phone').val(),
			mint_head_phone = $('#mint_head_phone').val();
			if( !ifFun(company_name,staff_nums,company_address,company_head_name,mint_head_name,company_head_phone,mint_head_phone) ){
				return false;
			}else{
				AjaxObj.Companyedit(function(result){
					if( result.Data.code == 1 ){
						$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                        $('.opacity-tip p').html('<span class="success">修改成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                        setTimeout(function(){
                        	history.go(-1);
                           //location.href="/mint/html/company/index.html#Company";
                        },500);
					}else{
						opCityTip('',result.Data.msg)
						//console.log(result.Data.msg)
					}
				},company_id,company_name,staff_nums,company_address,company_head_name,mint_head_name,company_head_phone,mint_head_phone)
			}
	})
})
function ifFun(company_name,staff_nums,company_address,company_head_name,mint_head_name,company_head_phone,mint_head_phone){
	var mobile_reg=/^1[3|4|5|7|8][0-9]\d{8}$/;
	if( company_name == '' ){
		opCityTip('company_name','诊所名称不能为空')
		return false;
	}else if( staff_nums == '' ){
		opCityTip('staff_nums','员工数量不能为空')
		return false;
	}else if( company_address == '' ){
		opCityTip('company_address','企业地址不能为空')
		return false;
	}else if( company_head_name == '' ){
		opCityTip('company_head_name','企业负责人不能为空')
		return false;
	}else if( company_head_phone == ''){
		opCityTip('company_head_phone','负责人电话不能为空')
		return false;
	}else if(!mobile_reg . test( company_head_phone)){
		opCityTip('company_head_phone','电话格式不正确')
		return false;
	}else if( mint_head_name == '' ){
		opCityTip('mint_head_name','薄荷对接人不能为空')
		return false;
	}else if( mint_head_phone == ''){
		opCityTip('mint_head_phone','对接人电话不能为空')
		return false;
	}else if(!mobile_reg . test( mint_head_phone)){
		opCityTip('mint_head_phone','电话格式不正确')
		return false;
	}else{
		return true;
	}
}
function opCityTip(selector,tipText){
	$('#'+selector+'').siblings('p').html(tipText).show()
    $('#'+selector+'').css({'border':'solid 1px red'})
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html('<span class="wrong">'+tipText+'<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
}