$(function(){

	AjaxObj.roleIndex(function(result){
		if(result.Data.code==1){
			if(result.Data.data == '' || result.Data.data == null ){
                $('#roleTable').html('<tr><td colspan="4">暂时没有相关数据</td></tr>')
            }else{
            	var html="";
				for(var i=0;i<result.Data.data.length;i++){
					html+='<tr class="parent_tr">'
					html+='<td><span class="radio-span"><input type="radio" class="radio radio2" name="radio" id="radioInput'+i+'" value="'+result.Data.data[i].id+'"><label for="radioInput'+i+'"></label></span></td>'
					html+='<td><span>'+(i+1)+'</span></td>'
					html+='<td><span>'+result.Data.data[i].role_name+'</span></td>'
					html+='<td><span>'+result.Data.data[i].role_remark+'</span></td>'
					html+='</tr>'
				}
				$('#roleTable').html(html)
            }
			
		}else{
			console.log(result.Data.msg)
		}
	})
	$('#add-but').click(function(){
		$('#role-dialog').show();
		$('#role-dialog .toph4 b').html('新建');
		AjaxObj.roleGetAllApp(function(result){
 			if(result.Data.code == 1){
 				var str='';
 				for(var i=0; i<result.Data.data.length; i++){
 					if(result.Data.data[i].children.length == 0){
 						str+='<div class="checkboxPre">'
		                str+='<span class="parentCB"><input type="checkbox" class="checkbox" id="checkAll'+i+'" value="'+result.Data.data[i].id+'"><label for="checkAll'+i+'"></label>'+result.Data.data[i].app_name+'</span>'
		                str+='</div>'
 					}else{
 						str+='<div class="checkboxPre">'
 						str+='<div class="clear"></div>'
	                    str+='<span class="parentCB"><input type="checkbox" class="checkbox" id="checkAll'+i+'" value="'+result.Data.data[i].id+'"><label for="checkAll'+i+'"></label>'+result.Data.data[i].app_name+'</span>'
	                    str+='<div class="clear"></div>'
	                    str+='<div class="child_radio PL15">'
	                    for(var m=0; m<result.Data.data[i].children.length; m++){
	                    	str+='<span><input type="checkbox" class="checkbox" id="checkbox'+i+'_'+m+'" value="'+result.Data.data[i].children[m].id+'"><label for="checkbox'+i+'_'+m+'"></label>'+result.Data.data[i].children[m].app_name+'</span>'
	                    }
	                    str+='<div class="clear"></div>'
	                    str+='</div>'
	                    str+='</div>'
 					}	
 				}
 				$('#app_id').html(str)
 				$('#app_id .parentCB input').click(function(){
 					if( $(this).is(':checked') ){
 						$(this).parents('.checkboxPre').find('.child_radio input').attr('checked',true)
 					}else{
 						$(this).parents('.checkboxPre').find('.child_radio input').attr('checked',false)
 					}
 				})
 				$('#app_id .child_radio input').click(function(){
 					var checked_num = $(this).parents('.child_radio').find('input:checked').length;
 					if( checked_num ==0 ){
 						$(this).parents('.checkboxPre').find('input').attr('checked',false)
 					}else{
 						$(this).parents('.checkboxPre').find('.parentCB input').attr('checked',true)
 					}
 				})
 				$('#role-dialog .new-create-bj').css({ 'margin-top' : -($('.new-create-bj').height()/2)+'px' })

				//确认提交
				$('#confirm-but').die().live('click',function(){
					var role_name=$('#role_name').val();
					var role_remark=$('#remark').val();
					var app_id=new Array();
					var str='';
				 	$("#app_id input[type='checkbox']:checked").each(function(){ 
				 		var checkboxVal=parseInt($(this).val());
						app_id.push(checkboxVal)
						
					}) 
					if(role_name == ''){
						$('#role_name').css({'border':'red 1px solid'})
						$('#role_name').siblings('p').html('角色名称不能为空')
					}else{
						AjaxObj.roleAdd(function(result){
							if(result.Data.code==1){
								$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
		                        $('.opacity-tip p').html('<span class="success">添加成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
		                        setTimeout(function(){
		                           location.reload()
		                        },600);
							}else{
								$('#app_id').siblings('p').html(result.Data.msg)
							}
						},role_name,role_remark,app_id)
					}
				})

 			}else{
 				console.log(result.Data.msg)
 			}
 		})
	})

	/*点击编辑按钮*/
	$('#edit-but').click(function(){
		if($('#roleTable input[type="radio"]').is(":checked")){
			var role_id=$("input[type='radio']:checked").val();
			AjaxObj.roleGetOne(function(result){
				if(result.Data.code == 1 ){
					$('#role_name').val(result.Data.data.role_name);
					$('#remark').val(result.Data.data.role_remark)
					var str='';
	 				for(var i=0; i<result.Data.app.length; i++){
	 					//console.log(result.Data.app[i].children.length)
	 					if(result.Data.app[i].children.length == 0){
	 						str+='<div class="checkboxPre">'
	 						if(result.Data.app[i].have == 1){
		                    	str+='<span class="parentCB"><input type="checkbox" class="checkbox" id="checkAll'+i+'" value="'+result.Data.app[i].id+'" checked><label for="checkAll'+i+'"></label>'+result.Data.app[i].app_name+'</span>'
		                    }else{
		                    	str+='<span class="parentCB"><input type="checkbox" class="checkbox" id="checkAll'+i+'" value="'+result.Data.app[i].id+'"><label for="checkAll'+i+'"></label>'+result.Data.app[i].app_name+'</span>'
		                    }
		                    str+='</div>'
	 					}else{
	 						str+='<div class="checkboxPre">'
	 						str+='<div class="clear"></div>'
	 						if(result.Data.app[i].have == 1){
		                    	str+='<span class="parentCB"><input type="checkbox" class="checkbox" id="checkAll'+i+'" value="'+result.Data.app[i].id+'" checked><label for="checkAll'+i+'"></label>'+result.Data.app[i].app_name+'</span>'
		                    }else{
		                    	str+='<span class="parentCB"><input type="checkbox" class="checkbox" id="checkAll'+i+'" value="'+result.Data.app[i].id+'"><label for="checkAll'+i+'"></label>'+result.Data.app[i].app_name+'</span>'
		                    }
		                    str+='<div class="clear"></div>'
		                    str+='<div class="child_radio PL15">'
		                    for(var m=0; m<result.Data.app[i].children.length; m++){
		                    	if(result.Data.app[i].children[m].have == 1){
		                    		str+='<span><input type="checkbox" class="checkbox" id="checkbox'+i+'_'+m+'" value="'+result.Data.app[i].children[m].id+'" checked><label for="checkbox'+i+'_'+m+'"></label>'+result.Data.app[i].children[m].app_name+'</span>'
		                    	}else{
		                    		str+='<span><input type="checkbox" class="checkbox" id="checkbox'+i+'_'+m+'" value="'+result.Data.app[i].children[m].id+'"><label for="checkbox'+i+'_'+m+'"></label>'+result.Data.app[i].children[m].app_name+'</span>'
		                    	}
		                    }
		                    str+='<div class="clear"></div>'
		                    str+='</div>'
		                    str+='</div>'
	 					}
						
	 				}
	 				$('#app_id').html(str);
	 				$('#app_id .parentCB input').click(function(){
	 					if( $(this).is(':checked') ){
	 						$(this).parents('.checkboxPre').find('.child_radio input').attr('checked',true)
	 					}else{
	 						$(this).parents('.checkboxPre').find('.child_radio input').attr('checked',false)
	 					}
	 				})
	 				$('#app_id .child_radio input').click(function(){
	 					var checked_num = $(this).parents('.child_radio').find('input:checked').length;
	 					if( checked_num ==0 ){
	 						$(this).parents('.checkboxPre').find('input').attr('checked',false)
	 					}else{
	 						$(this).parents('.checkboxPre').find('.parentCB input').attr('checked',true)
	 					}
	 				})
	 				$('#role-dialog .new-create-bj').css({ 'margin-top' : -($('.new-create-bj').height()/2)+'px' })
				}else{
					$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                    $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
				}
			},role_id)
			$('#role-dialog').show();
			$('#role-dialog .toph4 b').html('编辑');
			/*编辑保存*/
			$('#confirm-but').die().live('click',function(e){
				var role_name=$('#role_name').val();
				var role_remark=$('#remark').val();
				var app_id=new Array();
				var str='';
			 	$("#app_id input[type='checkbox']:checked").each(function(){ 
			 		var checkboxVal=parseInt($(this).val());
					app_id.push(checkboxVal)
				}) 
				if(role_name == ''){
					$('#role_name').css({'border':'red 1px solid'})
					$('#role_name').siblings('p').html('角色名称不能为空')
				}else{
					AjaxObj.roleSave(function(result){
						if(result.Data.code==1){
							$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
	                        $('.opacity-tip p').html('<span class="success">修改成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
	                        setTimeout(function(){
	                            location.reload()
	                        },600);
						}else{
							$('#app_id').siblings('p').html(result.Data.msg)
						}
					},role_id,role_name,role_remark,app_id)
				}
			})
		}else{
			$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
			$('.opacity-tip p').css({'margin-left':-($('.opacity-tip p').width()/2)})
		}
	})
	

	/*点击删除按钮*/
	$('#delete-but').click(function(){
		if($('#roleTable input[type="radio"]').is(":checked")){
			$('.delete-tipbox').show();
			var role_id=$("input[type='radio']:checked").val()
			$('#deletetipBox').die().live('click',function(){
				AjaxObj.roleDelete(function(result){
					if(result.Data.code==1){
						location.reload();
						$('.delete-tipbox').hide();
					}else{
						$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
						$('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
					}
				},role_id)
			})
		}else{
			$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
			$('.opacity-tip p').css({'margin-left':-($('.opacity-tip p').width()/2)})
		}	
	})

		/*点击搜索*/
	$('#search').click(function(){
		searchFun()
	})

	$(document).keydown(function(e) {
		if (e.keyCode == 13) {
			searchFun()
		}
	});
})


function searchFun(){
	var role_name=$('#role-name').val();
	AjaxObj.roleIndex(function(result){
		if(result.Data.code==1){
			if(result.Data.data == '' || result.Data.data == null ){
                $('#roleTable').html('<tr><td colspan="4">暂时没有相关数据</td></tr>')
            }else{
            	var html="";
				for(var i=0;i<result.Data.data.length;i++){
					html+='<tr class="parent_tr">'
					html+='<td><span>'+(i+1)+'</span></td>'
					html+='<td><span class="radio-span"><input type="radio" class="radio radio2" name="radio" id="radioInput'+i+'" value="'+result.Data.data[i].id+'"><label for="radioInput'+i+'"></label></span></td>'
					html+='<td><span>'+result.Data.data[i].role_name+'</span></td>'
					html+='<td><span>'+result.Data.data[i].role_remark+'</span></td>'
					html+='</tr>'
				}
				$('#roleTable').html(html)
            }
			
		}else{
			console.log(result.Data.msg)
		}
	},role_name)
}