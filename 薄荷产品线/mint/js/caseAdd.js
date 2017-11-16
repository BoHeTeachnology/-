$(function(){
	jeDate({
		dateCell:"#set_date",//isinitVal:true,
		format:"YYYY-MM-DD",
		isTime:false //isClear:false,
	})
	upPicFun()
	$('#save-but').click(function(){
		var clinic_brand = $('#clinic_brand').val(),
			clinic_name = $('#clinic_name').val(),
			chair_nums = $('#chair_nums').val(),
			clinic_address = $('#clinic_address').val(),
			clinic_head_name = $('#clinic_head_name').val(),
			mint_head_name = $('#mint_head_name').val(),
			clinic_head_phone = $('#clinic_head_phone').val(),
			mint_head_phone = $('#mint_head_phone').val(),
			is_show = $('#is_show input:checked').val(),
			sort = $('#sort').val();
			account = $('#account').val(),
			password = $('#password').val(),
			set_date = $('#set_date').val(),
			staff_nums = $('#staff_nums').val(),
			clinic_pic =  $("#clinic_pic .fileBoxUl li").eq(0).attr('file_path') || '',
			around_pic =  $("#around_pic .fileBoxUl li").eq(0).attr('file_path') || '',
            bus_line = $('#bus_line').val(),
            told_word = $('#told_word').val();
			console.log(account,password,set_date,staff_nums,clinic_pic,around_pic)
			if( !ifFun(clinic_brand,clinic_name,chair_nums,clinic_address,clinic_head_name,mint_head_name,clinic_head_phone,mint_head_phone,account,password,set_date,staff_nums,clinic_pic,around_pic) ){
				return false;
			}else{
				AjaxObj.ClinicAdd(function(result){
					if( result.Data.code == 1 ){
						$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                        $('.opacity-tip p').html('<span class="success">添加成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                        setTimeout(function(){
                           location.href="/mint/html/caseList/index.html#Clinic";
                        },500);
					}else{
						opCityTip('',result.Data.msg)
					}
				},clinic_brand,clinic_name,chair_nums,clinic_address,clinic_head_name,mint_head_name,clinic_head_phone,mint_head_phone,sort,is_show,account,password,set_date,staff_nums,clinic_pic,around_pic,bus_line,told_word)
			}
	})
})

function ifFun(clinic_brand,clinic_name,chair_nums,clinic_address,clinic_head_name,mint_head_name,clinic_head_phone,mint_head_phone,account,password,set_date,staff_nums,clinic_pic,around_pic){
	var mobile_reg=/^1[3|4|5|7|8][0-9]\d{8}$/;
	if( clinic_brand == '' ){
		opCityTip('clinic_brand','诊所品牌不能为空')
        return false;
	}else if( clinic_name == '' ){
		opCityTip('clinic_name','诊所名称不能为空')
        return false;
	}else if( clinic_address == '' ){
		opCityTip('clinic_address','诊所地址不能为空')
        return false;
	}else if( chair_nums == '' ){
		opCityTip('chair_nums','牙椅数量不能为空')
        return false;
	}else if( clinic_head_phone !='' && !mobile_reg . test( clinic_head_phone) ){
		opCityTip('clinic_head_phone','手机号格式不正确')
        return false;
    }else if(mint_head_phone!='' && !mobile_reg . test( mint_head_phone)){
    	opCityTip('mint_head_phone','手机号格式不正确')
    }else if( set_date == '' ){
		opCityTip('set_date','成立时间不能为空')
        return false;
	}else if( staff_nums == '' ){
		opCityTip('staff_nums','员工人数不能为空')
        return false;
	}else if( account == '' ){
		opCityTip('account','账号不能为空')
        return false;
	}else if(account!='' && !mobile_reg . test( account)){
    	opCityTip('account','手机号格式不正确')
    }else if( password == '' ){
		opCityTip('password','密码不能为空')
        return false;
	}else if(password.length <6 || password.length > 20){
		opCityTip('password','请将密码长度保持在6到20个字符')
        return false;
	}else if( clinic_pic == '' ){
		$('.wrongfiletip1').html('诊所资质不能为空')
        return false;
	}else if( around_pic == '' ){
		$('.wrongfiletip2').html('环评资质不能为空')
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
function upPicFun(){
	/*上传文件---------------------------------------------*/

    $('#picUpfile1').diyUpload({
        url:'http://'+location.host+'/mintAdmin/index.php/Admin/Index/upFile',
        success:function( data ) {
            $('.wrongfiletip').html('')
            //console.log( data );
            var str = '<li id="fileBox" class="diyUploadHover" file_path="'+data.file_path+'"> \
                                <div class="viewThumb"><img src="'+data.file_path+'" alt="" /></div> \
                                <div class="diyCancel"></div> \
                                <div class="clear"></div> \
                            </li>';
            $('#clinic_pic .parentFileBox .fileBoxUl').html(str);
            $('#clinic_pic .parentFileBox .diyCancel').click(function(){
                $(this).parent().remove();
            })
        },
        error:function( err ) {
            console.log( err ); 
        },
        buttonText : '上传图片',
        buttonText : '上传图片',
        chunked:false,
        auto : true,
        // 分片大小
        chunkSize:1048576 * 15,
        //最大上传的文件数量, 总文件大小,单个文件大小(单位字节);
        fileNumLimit:1,
        fileSizeLimit:1048576 * 100,
        fileSingleSizeLimit:1048576 * 15,
        accept : {
            mimeTypes: 'image/*',
            extensions: 'gif,jpg,jpeg,png',
        }
      
    });

    $('#picUpfile2').diyUpload({
        url:'http://'+location.host+'/mintAdmin/index.php/Admin/Index/upFile',
        success:function( data ) {
            $('.wrongfiletip').html('')
            //console.log( data );
            var str = '<li id="fileBox" class="diyUploadHover" file_path="'+data.file_path+'"> \
                                <div class="viewThumb"><img src="'+data.file_path+'" alt="" /></div> \
                                <div class="diyCancel"></div> \
                                <div class="clear"></div> \
                            </li>';
            $('#around_pic .parentFileBox .fileBoxUl').html(str);
            $('#around_pic .parentFileBox .diyCancel').click(function(){
                $(this).parent().remove();
            })
        },
        error:function( err ) {
            console.log( err ); 
        },
        buttonText : '上传图片',
        buttonText : '上传图片',
        chunked:false,
        auto : true,
        // 分片大小
        chunkSize:1048576 * 15,
        //最大上传的文件数量, 总文件大小,单个文件大小(单位字节);
        fileNumLimit:1,
        fileSizeLimit:1048576 * 100,
        fileSingleSizeLimit:1048576 * 15,
        accept : {
            mimeTypes: 'image/*',
            extensions: '*',
        }
      
    });
    /*上传文件结束-----------------------------------*/

}