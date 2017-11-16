$(function(){

	Discountindex();
	/*点击新建按钮*/
	$('#add-but').click(function(){
		$('#role-dialog').show();
		$('#confirm-but').die().live('click',function(){
			var discount = $('#discountVal').val(),
			    is_use = $('#is_use input:checked').val(),
			    sort = $('#sort').val();
			    //alert(is_use)
			    if(discount == ''){
					$('#discountVal').css({'border':'red 1px solid'})
					$('#discountVal').siblings('p').html('折扣额度不能为空')
				}else{
					AjaxObj.Discountadd(function(result){
						if(result.Data.code == 1 ){
							$('#discountVal').val('')
							$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
	                        $('.opacity-tip p').html('<span class="success">添加成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
	                        setTimeout(function(){
	                            location.reload()
	                        },600);
							$("#is_use input[type='radio']:checked").attr('checked',false)
						}else{
							$('#discountVal').css({'border':'red 1px solid'})
							$('#discountVal').siblings('p').html(result.Data.msg)
							OpacityFun(result.Data.msg)
						}
					},discount,is_use,sort)
			    }
			
		})
	})

	

	/*点击修改按钮*/
	$('#edit-but').click(function(){
		if($('#discountTable input[type="radio"]').is(":checked")){
			$('#role-dialog').show();
			id = $('#discountTable input[type="radio"]:checked').val();
			AjaxObj.DiscountgetOne(function(result){
				if(result.Data.code == 1){
					$('#discountVal').val(result.Data.data.discount);
					$('#sort').val(result.Data.data.sort)
					$('#is_use input[value="'+result.Data.data.is_use+'"]').attr('checked',true);
					$('#confirm-but').die().live('click',function(){
						var discount = $('#discountVal').val(),
						    is_use = $('#is_use input:checked').val(),
						    sort = $('#sort').val();
						    if(discount == ''){
								$('#discountVal').css({'border':'red 1px solid'})
								$('#discountVal').siblings('p').html('折扣额度不能为空')
							}else{
								AjaxObj.Discountsave(function(result){
									if(result.Data.code == 1 ){
										$('#discountVal').val('')
										$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
				                        $('.opacity-tip p').html('<span class="success">修改成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
				                        setTimeout(function(){
				                            location.reload()
				                        },600);
									}else{
										$('#discountVal').css({'border':'red 1px solid'})
										$('#discountVal').siblings('p').html(result.Data.msg)
										OpacityFun(result.Data.msg)
									}
								},id,discount,is_use,sort)
						    }
						
					})
				}else{
					OpacityFun(result.Data.msg)
				}
			},id)
		}else{
			OpacityFun('请先选择列表中的某一折扣')
		}
		
	})

	/*点击删除按钮*/
	$('#delete-but').click(function(){
		if($('#discountTable input[type="radio"]').is(":checked")){
			$('.delete-tipbox').show();
			var id=$("#discountTable input[type='radio']:checked").val()
			$('#deletetipBox').die().live('click',function(){
				AjaxObj.Discountdelete(function(result){
					if(result.Data.code==1){
						location.reload()
						$('.delete-tipbox').hide();
					}else{
						OpacityFun(result.Data.msg)
					}
				},id)
			})
		}else{
			OpacityFun('请先选择列表中的某一折扣')
		}	
	})

	/*点击搜索*/
	$('#search').click(function(){
		var discount = $('#sort-name').val();
		Discountindex(discount)
	})

	$(document).keydown(function(e) {
		if (e.keyCode == 13) {
			var discount = $('#sort-name').val();
			Discountindex(discount)
		}
	});




})

function Discountindex(discount){
	var discount=$('#discount').val();
		AjaxObj.Discountindex(function(result){
			if(result.Data.code == 1 ){
				if(result.Data.data==''){
					$('#discountTable').html('<tr><td colspan="5">暂时没有相关数据</td></tr>')
				}else{
					var html='';

					for(var i=0;i<result.Data.data.length;i++){
						 	html+='<tr>'
		                    html+='<td><span class="radio-span"><input type="radio" class="radio radio2" name="radio" id="radioInput'+i+'" value="'+result.Data.data[i].id+'"><label for="radioInput'+i+'"></label></span></td>'
		                    html+='<td><span>'+parseInt(result.Data.data[i].discount)+'%</span></td>'
		                    if(result.Data.data[i].is_use ==1){
		                    	html+='<td>启用</td>'
		                    }else if(result.Data.data[i].is_use ==2){
		                    	html+='<td>未启用</td>'
		                    }
		                    
		                    html+='<td><span>'+result.Data.data[i].create_time+'</span></td>'
		                	html+='</tr>'
					}
					$('#discountTable').html(html)
				}
			}else{
				if(result.Data.msg=='没有数据！'){
					$('#discountTable').html('<tr><td colspan="5">暂时没有相关数据</td></tr>')
				}else{
					$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
		            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
				}
					
			}
		},discount)
}

function OpacityFun(text){
	$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
	$('.opacity-tip p').html(text).css({'margin-left':-($('.opacity-tip p').width()/2)})
}