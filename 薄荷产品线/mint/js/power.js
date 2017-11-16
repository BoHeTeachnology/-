$(function(){
	AjaxObj.quanxianApptop(function(result){
		if(result.Data.code==1){
			var html='';
			for(var i=0;i<result.Data.data.length;i++){
				html+='<option value="'+result.Data.data[i].id+'">'+result.Data.data[i].app_name+'</option>'
			}
			$('#parent_id').append(html)
		}else{
			console.log(result.Data.msg)
		}
	})
	AjaxObj.quanxianIndex(function(result){
		if(result.Data.code==1){
			if(result.Data.data == '' || result.Data.data == null ){
                $('#quanxianTable').html('<tr><td colspan="4">暂时没有相关数据</td></tr>')
            }else{
            	var html="";
				for(var i=0;i<result.Data.data.length;i++){
					html+='<tr class="parent_tr">'
					html+='<td><span class="radio-span"><input type="radio" class="radio radio2" name="radio" id="radioInput'+i+'" value="'+result.Data.data[i].id+'"><label for="radioInput'+i+'"></label></span></td>'
					html+='<td><span>'+(i+1)+'</span></td>'
					html+='<td><span>'+result.Data.data[i].app_name+'</span></td>'
					html+='<td><span>'+result.Data.data[i].app_uri+'</span></td>'
					html+='</tr>'
					for(var m=0; m<result.Data.data[i].children.length; m++){
						html+='<tr class="child_tr">'
						html+='<td><span class="radio-span"><input type="radio" class="radio radio2" name="radio" id="radioInputn'+(i+1)+'_'+(m+1)+'" value="'+result.Data.data[i].children[m].id+'"><label for="radioInputn'+(i+1)+'_'+(m+1)+'"></label></span></td>'
						html+='<td><span>'+(i+1)+'.'+(m+1)+'</span></td>'
						html+='<td><span>'+result.Data.data[i].children[m].app_name+'</span></td>'
						html+='<td><span>'+result.Data.data[i].children[m].app_uri+'</span></td>'
						html+='</tr>'
					}
				}
				$('#quanxianTable').html(html)
            }
			
		}else{
			console.log(result.Data.msg)
		}
	})

	$('#add-but').click(function(){
		$('#quanxian-dialog').show();
		$('#quanxian-dialog .new-create-bj').css({ 'margin-top' : -($('.new-create-bj').height()/2)+'px' })
		$('#quanxian-dialog .toph4 b').html('新建');

		$('#confirm-but').die().live('click',function(e){
			var app_name=$('#app_name').val();
			var parent_id = $('#parent_id option:selected').val();
			var app_uri=$('#app_uri').val();
			var app_url=$('#app_url').val();
			var sortVal=$('#sortVal').val();
			var number_reg =/^[1-9]\d*|0$/;
			if(app_name == ''){
				$('#app_name').css({'border':'red 1px solid'})
				$('#app_name').siblings('p').html('权限名称不能为空')
			}else if(app_uri == ''){
				$('#app_uri').css({'border':'red 1px solid'})
				$('#app_uri').siblings('p').html('URI不能为空')
			}else if(sortVal !='' && !number_reg . test( sortVal )){
				$('#sortVal').css({'border':'red 1px solid'})
				$('#sortVal').siblings('p').html('只能输入数字')
			}else{
				AjaxObj.quanxianAdd(function(result){
					if(result.Data.code==1){
						$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                        $('.opacity-tip p').html('<span class="success">添加成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                        setTimeout(function(){
                        	localStorage.removeItem('num')
                            location.reload()
                            $('input[type="text"]').val('');
							$('input[type="text"]').css({'border':'#ccc 1px solid'});
							$('.errorTip').html('')
                        },600);
						
					}else{
						localStorage.removeItem('num');
						$('#app_name').css({'border':'red 1px solid'})
						$('#app_name').siblings('p').html(result.Data.msg)
					}
				},parent_id,app_name,app_uri,app_url,sortVal)
			}	
			e.stopPropagation()
		})
	})


	/*点击编辑按钮*/
	$('#edit-but').click(function(e){
		if($('#quanxianTable input[type="radio"]').is(":checked")){
			var app_id=$("input[type='radio']:checked").val()
			AjaxObj.quanxianGetOne(function(result){
				if(result.Data.code == 1 ){
					$('#parent_id option[value="'+result.Data.data.parent_id+'"]').attr('selected',true);
					$('#app_name').val(result.Data.data.app_name);
					$('#app_uri').val(result.Data.data.app_uri)
					$('#app_url').val(result.Data.data.app_url)
					$('#sortVal').val(result.Data.data.sort)
				}else{
					$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                    $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
				}
			},app_id)
			$('#quanxian-dialog').show();
			$('#quanxian-dialog .new-create-bj').css({ 'margin-top' : -($('.new-create-bj').height()/2)+'px' })
			$('#quanxian-dialog .toph4 b').html('编辑');
			$('.tipLabel').show();
			/*编辑保存*/
			$('#confirm-but').die().live('click',function(e){
				var number_reg =/^[1-9]\d*|0$/;
				var parent_id = $('#parent_id option:selected').val();
				var app_name=$('#app_name').val();
				var app_uri=$('#app_uri').val();
				var app_url=$('#app_url').val();
				var sortVal=$('#sortVal').val();
				if(app_name == ''){
					$('#app_name').css({'border':'red 1px solid'})
					$('#app_name').siblings('p').html('权限名称不能为空')
				}else if(app_uri == ''){
					$('#app_uri').css({'border':'red 1px solid'})
					$('#app_uri').siblings('p').html('URI不能为空')
				}else if(sortVal !='' && !number_reg . test( sortVal )){
					$('#sortVal').css({'border':'red 1px solid'})
					$('#sortVal').siblings('p').html('只能输入数字')
				}else{
					AjaxObj.quanxianSave(function(result){
						if(result.Data.code==1){
							$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
	                        $('.opacity-tip p').html('<span class="success">修改成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
	                        setTimeout(function(){
	                        	localStorage.setItem('num','1')
	                            location.reload()
	                            $('input[type="text"]').val('');
								$('input[type="text"]').css({'border':'#ccc 1px solid'});
								$('.errorTip').html('')
	                        },600);
							
						}else{
							$('#app_name').css({'border':'red 1px solid'})
							$('#app_name').siblings('p').html(result.Data.msg)
						}
					},app_id,parent_id,app_name,app_uri,app_url,sortVal)
				}
				e.stopPropagation()	
			})
		}else{
			$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
			$('.opacity-tip p').css({'margin-left':-($('.opacity-tip p').width()/2)})
		}
		e.stopPropagation()	
	})
	

	/*点击删除按钮*/
	$('#delete-but').click(function(){
		if($('#quanxianTable input[type="radio"]').is(":checked")){
			$('.delete-tipbox').show();
			var app_id=$("input[type='radio']:checked").val()
			$('#deletetipBox').die().live('click',function(){
				AjaxObj.quanxianDelete(function(result){
					if(result.Data.code==1){
						localStorage.removeItem('num')
						location.reload();
						$('.delete-tipbox').hide();
						if( $('#quanxianTable tr').length == ''){
			                $('#quanxianTable').html('<tr><td colspan="4">没有相关数据了</td></tr>')
			            }
					}else{
						$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
						$('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
					}
				},app_id)
			})
		}else{
			$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
			$('.opacity-tip p').css({'margin-left':-($('.opacity-tip p').width()/2)})
		}	
	})
})

