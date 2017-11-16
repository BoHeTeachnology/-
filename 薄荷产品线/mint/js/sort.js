$(function(){
	Categoryindex();
	
	
	$("#is_use input[type='radio']").change(function(){
		$('#is_use').siblings('p').html('')
	})
	/*点击新建按钮*/
	$('#add-but').click(function(){
		$('#role-dialog').show();
		$('#belong input[value="1"],#is_use input[value="1"]').attr('checked',true)
		$('#confirm-but').die().live('click',function(){
			var name_reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,
			    cat_name = $('#cat_name').val(),
			    is_use = $("#is_use input[type='radio']:checked").val() || '',
			    belong = $("#belong input[type='radio']:checked").val() || '',
			    order = $('#order').val();
			    //alert(name+'/'+is_use)
			    if(cat_name == ''){
					$('#cat_name').css({'border':'red 1px solid'})
					$('#cat_name').siblings('p').html('分类名称不能为空')
				}else if(!name_reg.test(cat_name)){
					$('#cat_name').css({'border':'red 1px solid'})
					$('#cat_name').siblings('p').html('分类名称只含有汉字、数字、字母、下划线')
				}else if(is_use == ''){
					$('#is_use').siblings('p').html('请选择状态')
				}else{
					AjaxObj.Categoryadd(function(result){
						if(result.Data.code == 1 ){
							$('#cat_name').val('')
							$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
	                        $('.opacity-tip p').html('<span class="success">添加成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
	                        setTimeout(function(){
	                            location.reload()
	                        },600);
							$("#is_use input[type='radio']:checked").attr('checked',false)
						}else{
							$('#cat_name').css({'border':'red 1px solid'})
							$('#cat_name').siblings('p').html(result.Data.msg)
						}
					},cat_name,is_use,belong,order)
			    }
			
		})
	})

	

	/*点击修改按钮*/
	$('#edit-but').click(function(){
		if($('#tableMain input[type="radio"]').is(":checked")){
			$('.new-create-opcity').show();
			id = $('#tableMain input[type="radio"]:checked').val();
			AjaxObj.CategorygetOne(function(result){
				if(result.Data.code == 1){
					$('#cat_name').val(result.Data.data.cat_name);
					$('#order').val(result.Data.data.order);
					if(result.Data.data.is_use == '1'){
						$("#is_use input[value='1']").attr('checked',true)
					}else{
						$("#is_use input[value='0']").attr('checked',true)
					}
					if(result.Data.data.belong == '1'){
						$("#belong input[value='1']").attr('checked',true)
					}else if(result.Data.data.belong == '2'){
						$("#belong input[value='2']").attr('checked',true)
					}

					$('#confirm-but').die().live('click',function(){
						var name_reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,
						    cat_name = $('#cat_name').val(),
						    is_use = $("#is_use input[type='radio']:checked").val() || '',
						    belong = $("#belong input[type='radio']:checked").val() || '',
			    			order = $('#order').val();;
						    //alert(name+'/'+is_use)
						    if(cat_name == ''){
								$('#cat_name').css({'border':'red 1px solid'})
								$('#cat_name').siblings('p').html('分类名称不能为空')
							}else if(!name_reg.test(cat_name)){
								$('#cat_name').css({'border':'red 1px solid'})
								$('#cat_name').siblings('p').html('分类名称只含有汉字、数字、字母、下划线')
							}else if(is_use == ''){
								$('#is_use').siblings('p').html('请选择状态')
							}else{
								AjaxObj.Categorysave(function(result){

									if(result.Data.code == 1 ){
										$('#cat_name').val('')
										$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
				                        $('.opacity-tip p').html('<span class="success">修改成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
				                        setTimeout(function(){
				                            location.reload()
				                        },600);
										$("#is_use input[type='radio']:checked").attr('checked',false)
									}else{
										$('#cat_name').css({'border':'red 1px solid'})
										$('#cat_name').siblings('p').html(result.Data.msg)
									}
								},id,cat_name,is_use,belong,order)
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
		if($('#tableMain input[type="radio"]').is(":checked")){
			$('.delete-tipbox').show();
			var id=$("#tableMain input[type='radio']:checked").val()
			$('#deletetipBox').die().live('click',function(){
				AjaxObj.Categorydelete(function(result){
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

function Categoryindex(cat_name){
	var sort_name=$('#sort-name').val();
		AjaxObj.Categoryindex(function(result){
			if(result.Data.code == 1 ){
				if(result.Data.doctor_data==''){
					$('#sortTable_doctor').html('<tr><td colspan="5">暂时没有相关数据</td></tr>')
				}else{
					var html='';
					for(var i=0;i<result.Data.doctor_data.length;i++){
						html+='<tr>'
		                    html+='<td><span class="radio-span"><input type="radio" class="radio radio2" name="radio" id="radioInput'+i+'" value="'+result.Data.doctor_data[i].id+'"><label for="radioInput'+i+'"></label></span></td>'
		                    html+='<td style="text-align:left"><span>'+result.Data.doctor_data[i].cat_name+'</span></td>'
		                    if(result.Data.doctor_data[i].is_use == 1){
		                    	html+='<td><span>启用</span></td>'
		                    }else{
		                    	html+='<td><span>未启用</span></td>'
		                    }
		                    
		                    html+='<td><span>'+result.Data.doctor_data[i].create_time+'</span></td>'
		                    html+='<td><span>'+result.Data.doctor_data[i].order+'</span></td>'
		                html+='</tr>'
					}
					$('#sortTable_doctor').html(html)
				}
				if(result.Data.patient_data==''){
					$('#sortTable_user').html('<tr><td colspan="5">暂时没有相关数据</td></tr>')
				}else{
					var html='';
					for(var i=0;i<result.Data.patient_data.length;i++){
						html+='<tr>'
		                    html+='<td><span class="radio-span"><input type="radio" class="radio radio2" name="radio" id="radioInput_'+i+'" value="'+result.Data.patient_data[i].id+'"><label for="radioInput_'+i+'"></label></span></td>'
		                    html+='<td style="text-align:left"><span>'+result.Data.patient_data[i].cat_name+'</span></td>'
		                    if(result.Data.patient_data[i].is_use == 1){
		                    	html+='<td><span>启用</span></td>'
		                    }else{
		                    	html+='<td><span>未启用</span></td>'
		                    }
		                    
		                    html+='<td><span>'+result.Data.patient_data[i].create_time+'</span></td>'
		                    html+='<td><span>'+result.Data.patient_data[i].order+'</span></td>'
		                html+='</tr>'
					}
					$('#sortTable_user').html(html)
				}
			}else{
				$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
	            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
			}
		},cat_name)
}

