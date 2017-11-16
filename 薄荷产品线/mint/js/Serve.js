$(function(){
	upPic();

	Categoryindex();
	/*点击新建按钮*/
	$('#add-but').click(function(){
		$('#role-dialog').show();
		$('#logowrongTip').html('')
		$('#is_use input[value="1"]').attr('checked',true)
		$('#logo img').attr('src','../images/nonepic.png')
		$('#confirm-but').die().live('click',function(){
			var name_reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,
			    service_name = $('#service_name').val(),
			    logo = $('#logo img').attr('src') == '../images/nonepic.png' ? '' : $('#logo img').attr('src'),
			    is_use = $('#is_use input:checked').val(),
			    sort = $('#sort').val();
			    //alert(is_use)
			    if(service_name == ''){
					$('#service_name').css({'border':'red 1px solid'})
					$('#service_name').siblings('p').html('项目名称不能为空')
				}else if(!name_reg.test(service_name)){
					$('#service_name').css({'border':'red 1px solid'})
					$('#service_name').siblings('p').html('项目名称只含有汉字、数字、字母、下划线')
				}else if(logo == ''){
					$('#logowrongTip').html('请上传图片')
				}else{
					AjaxObj.Serviceadd(function(result){
						if(result.Data.code == 1 ){
							$('#service_name').val('')
							$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
	                        $('.opacity-tip p').html('<span class="success">添加成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
	                        setTimeout(function(){
	                            location.reload()
	                        },600);
							$("#is_use input[type='radio']:checked").attr('checked',false)
						}else{
							$('#service_name').css({'border':'red 1px solid'})
							$('#service_name').siblings('p').html(result.Data.msg)
						}
					},service_name,logo,is_use,sort)
			    }
			
		})
	})

	

	/*点击修改按钮*/
	$('#edit-but').click(function(){
		if($('#sortTable input[type="radio"]').is(":checked")){
			$('#role-dialog').show();
			$('#logowrongTip').html('')
			$('#logo img').attr('src','../images/nonepic.png')
			id = $('#sortTable input[type="radio"]:checked').val();
			AjaxObj.ServicegetOne(function(result){
				if(result.Data.code == 1){
					$('#service_name').val(result.Data.data.service_name);
					$('#logo img').attr('src',result.Data.data.logo_url);
					$('#sort').val(result.Data.data.sort)
					$('#is_use input[value="'+result.Data.data.is_use+'"]').attr('checked',true);
					$('#confirm-but').die().live('click',function(){
						var name_reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,
						    service_name = $('#service_name').val(),
			    			logo = $('#logo img').attr('src') == '../images/nonepic.png' ? '' : $('#logo img').attr('src'),
			    			is_use = $('#is_use input:checked').val(),
			    			sort = $('#sort').val();
						    if(service_name == ''){
								$('#service_name').css({'border':'red 1px solid'})
								$('#service_name').siblings('p').html('项目名称不能为空')
							}else if(!name_reg.test(service_name)){
								$('#service_name').css({'border':'red 1px solid'})
								$('#service_name').siblings('p').html('项目名称只含有汉字、数字、字母、下划线')
							}else if(logo == ''){
								$('#logowrongTip').html('请上传图片')
							}else{
								AjaxObj.Servicesave(function(result){
									if(result.Data.code == 1 ){
										$('#service_name').val('')
										$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
				                        $('.opacity-tip p').html('<span class="success">修改成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
				                        setTimeout(function(){
				                            location.reload()
				                        },600);
									}else{
										$('#service_name').css({'border':'red 1px solid'})
										$('#service_name').siblings('p').html(result.Data.msg)
									}
								},id,service_name,logo,is_use,sort)
						    }
						
					})
				}else{
					$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                    $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
				}
			},id)
		}else{
			$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
			$('.opacity-tip p').html('请先选择列表中的某一分类').css({'margin-left':-($('.opacity-tip p').width()/2)})
		}
		
	})

	/*点击删除按钮*/
	$('#delete-but').click(function(){
		if($('#sortTable input[type="radio"]').is(":checked")){
			$('.delete-tipbox').show();
			var id=$("#sortTable input[type='radio']:checked").val()
			$('#deletetipBox').die().live('click',function(){
				AjaxObj.Servicedelete(function(result){
					if(result.Data.code==1){
						location.reload()
						$('.delete-tipbox').hide();
					}else{
						$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
						$('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
					}
				},id)
			})
		}else{
			$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
			$('.opacity-tip p').html('请先选择列表中的某一分类').css({'margin-left':-($('.opacity-tip p').width()/2)})
		}	
	})

	/*点击搜索*/
	$('#search').click(function(){
		var sort_name = $('#sort-name').val();
		Categoryindex(sort_name)
	})

	$(document).keydown(function(e) {
		if (e.keyCode == 13) {
			var sort_name = $('#sort-name').val();
			Categoryindex(sort_name)
		}
	});




})

function Categoryindex(service_name){
	var sort_name=$('#sort-name').val();
		AjaxObj.Serviceindex(function(result){
			if(result.Data.code == 1 ){
				if(result.Data.data==''){
					$('#sortTable').html('<tr><td colspan="5">暂时没有相关数据</td></tr>')
				}else{
					var html='';
					for(var i=0;i<result.Data.data.length;i++){
						 var logo_url = result.Data.data[i].logo_url == null || result.Data.data[i].logo_url == ''? '<img src="../images/nonepic.png" alt="" />' : '<img src="'+result.Data.data[i].logo_url+'" alt="">'
							html+='<tr>'
		                    html+='<td><span class="radio-span"><input type="radio" class="radio" name="radio" id="radioInput'+i+'" value="'+result.Data.data[i].id+'"><label for="radioInput'+i+'"></label></span></td>'
		                    html+='<td><span>'+result.Data.data[i].service_name+'</span></td>'
		                    html+='<td><span class="user-pic">'+logo_url+'</span></td>'
		                    html+='<td><span>'+result.Data.data[i].create_time+'</span></td>'
		                	html+='</tr>'
					}
					$('#sortTable').html(html)
				}
			}else{
				$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
	            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
			}
		},service_name)
}



function upPic(){
	    /*图片头像上传*/
    var options =
    {
        thumbBox: '.thumbBox',
        spinner: '.spinner',
        imgSrc: '/mint/images/nonepic.png'
    }
    var cropper = $('.imageBox').cropbox(options);
    $('#file,#file2').on('change', function(){
        $('#upPictipbox').show()
        $('#logowrongTip').html('')
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
                $('#upPictipbox').hide()
                $('#logo img').attr('src',result.Data.photo_path)
            }else{
                $('#logowrongTip').html(result.Data.msg).show()
            }
        },img)
    })
    $('#btnZoomIn').on('click', function(){
        cropper.zoomIn();
    })
    $('#btnZoomOut').on('click', function(){
        cropper.zoomOut();
    })
    /*------图片头像上传结束----*/

}