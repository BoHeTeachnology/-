$(function(){
	
    sessionStorage.removeItem('project_name')
    sessionStorage.removeItem('price')
    sessionStorage.removeItem('cat_name')
    if(sessionStorage.getItem("jumpid")){
        var jump = sessionStorage.getItem("jumpid");
        	Projectindex('','','',jump,10)
    }else{
        	Projectindex('','','',1,10)
    }
	$('#edit').click(function(){
		if($('#priceTable input[type="radio"]').is(":checked")){
			location.href="/mint/html/priceList/edit.html#Project";
			var id = $("#priceTable input[type='radio']:checked").val();
			sessionStorage.setItem('project_id',id)
		}else{
			opCityTip('请先选择列表中的某一企业')
		}
	})
	/*点击删除按钮*/
	$('#delete').click(function(){
		if($('#priceTable input[type="radio"]').is(":checked")){
			$('.delete-tipbox').show();
			var project_id=$("#priceTable input[type='radio']:checked").val()
			$('#deletetipBox').die().live('click',function(){
				AjaxObj.Projectdelete(function(result){
					if(result.Data.code==1){
						$('.delete-tipbox').hide();
						$("input[type='radio']:checked").parents('tr').remove();
						location.reload();
					}else{
						opCityTip(result.Data.msg)
					}
				},project_id)
			})
			
		}else{
			opCityTip('请先选择列表中的某一企业')
		}	
	})

	$('#search').click(function(){
		var project_name = $('#project_name').val();
		var price = $('#price').val();
		var cat_name = $('#cat_name').val();
			sessionStorage.removeItem('jumpid')
			sessionStorage.setItem('project_name',project_name)
			sessionStorage.setItem('price',price)
			sessionStorage.setItem('cat_name',cat_name)
			Projectindex(project_name,price,cat_name,1,10)
	})
	$(document).keydown(function(e) {
		if (e.keyCode == 13) {
			var project_name = $('#project_name').val();
			var price = $('#price').val();
			var cat_name = $('#cat_name').val();
				sessionStorage.removeItem('jumpid')
				sessionStorage.setItem('project_name',project_name)
				sessionStorage.setItem('price',price)
				sessionStorage.setItem('cat_name',cat_name)
				Projectindex(project_name,price,cat_name,1,10)
		}
	});

	$('.go').click(function(){
        sessionStorage.setItem("jumpid",$('.numPage').val());
        var b = sessionStorage.getItem("pcount"),
            num=$('.numPage').val(),
            showCount =10,
            pageNum=Math.ceil(b/showCount);
        if(num<=pageNum && num>0){
            var project_name = sessionStorage.getItem('project_name');
            var price = sessionStorage.getItem('price');
            var cat_name = sessionStorage.getItem('cat_name');
            Projectindex(project_name,price,cat_name,num,showCount)
            $("#Pagination").pagination(b, {
                callback: pageselectCallback,
                prev_text: " <<",
                next_text: " >>",
                items_per_page:showCount, 
                num_display_entries:3,
                current_page:(num-1), 
                num_edge_entries:3,
                ellipse_text:"...",
                link_to:"javascript:void(0)"
            });
        }
    })

})
function Projectindex(project_name,price,cat_name,p,p_len){
	AjaxObj.Projectindex(function(result){
		if(result.Data.code == 1 ){
			var html='';
			if(result.Data.data == '' || result.Data.data == null ){
				$('#priceTable').html('<tr><td colspan="10">暂时没有相关数据</td></tr>')
				$('#Pagination-box').hide();
			}else{
				for(var i = 0 ; i < result.Data.data.length; i++ ){
					var company_head_phone = result.Data.data[i].company_head_phone == null ? '' : result.Data.data[i].company_head_phone;
					var mint_head_phone = result.Data.data[i].mint_head_phone == null ? '' : result.Data.data[i].mint_head_phone;
					var pic =result.Data.data[i].pic == '' ? '' : '<img src="'+result.Data.data[i].pic+'" alt="">';
					html+='<tr>'
	                html+='<td><span class="radio-span"><input type="radio" class="radio" name="radio" id="radioInputa_'+i+'" value="'+result.Data.data[i].id+'"><label for="radioInputa_'+i+'"></label></span></td>'
					html+='<td><span class="user-pic">'+pic+'</span></td>'
					html+='<td style="text-indent:0"><span class="spanName" id="goSee" data-id="'+result.Data.data[i].id+'">'+result.Data.data[i].project_name+'</span></td>'
					html+='<td><span>'+result.Data.data[i].price+'</span></td>'
					html+='<td><span>'+result.Data.data[i].unit+'</span></td>'
					html+='<td><span>'+result.Data.data[i].cat_name+'</span></td>'
					html+='<td><span>'+(result.Data.data[i].u_cat_name ==null? '' : result.Data.data[i].u_cat_name)+'</span></td>'
					html+='<td class="Padright20"><span>'+result.Data.data[i].remark.split("\n").join("<br />")+'</span></td>'
					html+='</tr>'
				}
				$('#priceTable').html(html)
				$('#priceTable td #goSee').click(function(){
                    var idSee=$(this).attr('data-id')
                    location.href="/mint/html/priceList/see.html#Project";
                    sessionStorage.setItem('idSee',idSee)
                })
                if(result.Data.count<=10){
                    $('#Pagination-box').hide();
                }else{
                    $('#Pagination-box').show();
                    var pcount=result.Data.count;
                        showCount =10,
                        pageNum=Math.ceil(pcount/showCount);
                        $('.pageNum').html(pageNum)
                        $('#pcountNum').html(pcount)
                        fenyeFun(pcount,showCount)
                        sessionStorage.setItem("pcount",pcount);
                }

			}
		}else{
			//alert(result.Data.msg)
			opCityTip(result.Data.msg)
		}
	},project_name,price,cat_name,p,p_len)
}

function fenyeFun(pcount,showCount){
    var jump = sessionStorage.getItem("jumpid") || 1;
    $("#Pagination").pagination(pcount, {
        callback: pageselectCallback,//PageCallback() 为翻页调用次函数。
        prev_text: " <<",
        next_text: " >> ",
        items_per_page:showCount, //每页的数据个数
        num_display_entries:3, //两侧首尾分页条目数
        current_page:(jump-1),   //当前页码
        num_edge_entries:3, //连续分页主体部分分页条目数
        ellipse_text:"...",
        link_to:"javascript:void(0)"
    });
}
function pageselectCallback(page_index, jq){
    var page=page_index+1;
        var project_name = sessionStorage.getItem('project_name') || '';
        var price = sessionStorage.getItem('price') || '';
        var cat_name = sessionStorage.getItem('cat_name') || '';
        Projectindex(project_name,price,cat_name,page,showCount)
        sessionStorage.setItem("jumpid",page);
}

function opCityTip(tipText){
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html(tipText).css({'margin-left':-($('.opacity-tip p').width()/2)})
}