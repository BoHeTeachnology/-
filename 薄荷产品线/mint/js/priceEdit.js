$(function(){
	var project_id = sessionStorage.getItem('project_id')
	upPicFun();
	AjaxObj.ProjectcatLst(function(result){
		if( result.Data.code == 1 ){
			var html = '';
			for(var i=0; i<result.Data.data.length;i++){
				html+='<option value="'+result.Data.data[i].id+'">'+result.Data.data[i].cat_name+'</option>'
			}
			$('#cat_id').append(html)
			AjaxObj.ProjectgetOne(function(model){
				if(model.Data.code == 1){
					var imgPic =model.Data.data.pic =='' ? '../../images/nonepic.png':model.Data.data.pic;
						$('#project_name').val(model.Data.data.project_name),
						$('#price').val(model.Data.data.price),
						$('#unit').val(model.Data.data.unit),
						$('#remark').val(model.Data.data.remark);
						$('#order').val(model.Data.data.order)
						$('#order1').val(model.Data.data.order1)
						$('#cat_id option[value='+model.Data.data.cat_id+']').attr('selected',true)
						$('#pic img').attr('src',imgPic)
						$('#content_link').val(model.Data.data.content_link)
				}else{
					opCityTip('',result.Data.msg)
				}
			},project_id)
		}else{
			opCityTip('',result.Data.msg)
		}
	},1)

	AjaxObj.ProjectcatLst(function(result){
		if( result.Data.code == 1 ){
			var html = '';
			for(var i=0; i<result.Data.data.length;i++){
				html+='<option value="'+result.Data.data[i].id+'">'+result.Data.data[i].cat_name+'</option>'
			}
			$('#cat_id1').append(html)
			AjaxObj.ProjectgetOne(function(model){
				if(model.Data.code == 1){
					$('#cat_id1 option[value='+model.Data.data.cat_id1+']').attr('selected',true)
				}else{
					opCityTip('',result.Data.msg)
				}
			},project_id)
		}else{
			opCityTip('',result.Data.msg)
		}
	},2)
	$('#save-but').click(function(){
		var project_name = $('#project_name').val(),
			price = $('#price').val(),
			unit = $('#unit').val(),
			cat_id = $('#cat_id option:selected').val(),
			remark = $('#remark').val(),
			order = $('#order').val(),
			order1 = $('#order1').val(),
			pic = $('#pic img').attr('src') =='../../images/nonepic.png' ? '' : $('#pic img').attr('src') ,
			cat_id1 = $('#cat_id1 option:selected').val(),
			content_link = $('#content_link').val() ;
			if( !ifFun(project_name,price,unit,cat_id,cat_id1,pic) ){
				return false;
			}else{
				AjaxObj.Projectsave(function(result){
					if( result.Data.code == 1 ){
						$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                        $('.opacity-tip p').html('<span class="success">修改成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                        setTimeout(function(){
                           window.history.go(-1)
                        },500);
					}else{
						opCityTip('',result.Data.msg)
						//console.log(result.Data.msg)
					}
				},project_id,project_name,price,unit,cat_id,remark,order,order1,pic,cat_id1,content_link)
			}
	})
})
function upPicFun(){
    /*图片头像上传*/
    var options =
    {
        thumbBox: '.thumbBox',
        spinner: '.spinner',
        imgSrc: '/mint/images/user.png'
    }
    var cropper = $('.imageBox').cropbox(options);
    $('#file,#file2').on('change', function(){
    	$('#pic').siblings('p').html('')
        $('.new-create-opcity').show()
        var reader = new FileReader();
        reader.onload = function(e) {
            options.imgSrc = e.target.result;
            cropper = $('.imageBox').cropbox(options);
        }
        reader.readAsDataURL(this.files[0]);
        this.files = [];
    })
    $('#btnCrop').on('click', function(){
        var img = cropper.getDataURL();
        AjaxObj.imgBase64Up(function(result){
            if(result.Data.code == 1){
                $('.new-create-opcity').hide()
                $('#pic img').attr('src',result.Data.photo_path)
            }else{
                $('#pic').siblings('p').html(result.Data.msg).show()
            }
        },img)
    })
    $('#btnZoomIn').on('click', function(){
        cropper.zoomIn();
    })
    $('#btnZoomOut').on('click', function(){
        cropper.zoomOut();
    })
    $('.close_dialog').click(function(){
        $('.new-create-opcity').hide();
    })
    /*------图片头像上传结束----*/
}

function ifFun(project_name,price,unit,cat_id,cat_id1,pic){
	if( project_name == '' ){
		opCityTip('project_name','项目不能为空')
		return false;
	}else if( price == '' ){
		opCityTip('price','价格不能为空')
		return false;
	}else if( unit == '' ){
		opCityTip('unit','单位不能为空')
		return false;
	}else if( cat_id == '' ){
		opCityTip('cat_id','请选择医生端分类')
		return false;
	}else if(cat_id1 != '' && pic==''){
		$('#pic').siblings('p').html('请上传图片').show()
	    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
	    $('.opacity-tip p').html('<span class="wrong">请上传图片</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
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