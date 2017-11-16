$(function(){
	Suggestionindex('','',1,10)
	/*点击删除按钮*/
	$('#delete').click(function(){
		if($('#suggTable input[type="radio"]').is(":checked")){
			$('.delete-tipbox').show();
			var suggestion_id=$("#suggTable input[type='radio']:checked").val()
			$('#deletetipBox').die().live('click',function(){
				AjaxObj.Suggestiondelete(function(result){
					if(result.Data.code==1){
						$('.delete-tipbox').hide();
						$("input[type='radio']:checked").parents('tr').remove();
						location.reload();
					}else{
						opCityTip(result.Data.msg)
					}
				},suggestion_id)
			})
			
		}else{
			opCityTip('请先选择列表中的某一反馈')
		}	
	})
	$('.go').click(function(){
        sessionStorage.setItem("jumpid",$('.numPage').val());
        var b = sessionStorage.getItem("pcount"),
            num=$('.numPage').val(),
            showCount =10,
            pageNum=Math.ceil(b/showCount);
        if(num<=pageNum && num>0){
            Suggestionindex('','',num,showCount)
            $("#Pagination").pagination(b, {
                callback: pageselectCallback,
                prev_text: " <<",
                next_text: " >> ",
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

function Suggestionindex(user_account,content,p,p_len){
	AjaxObj.Suggestionindex(function(result){
		if(result.Data.code == 1){
			var html='';
			if(result.Data.data == '' || result.Data.data == null ){
				$('#suggTable').html('<tr><td colspan="5">暂时没有相关数据</td></tr>')
				$('#Pagination-box').hide();
			}else{
				for(var i = 0 ; i < result.Data.data.length; i++ ){
					html+='<tr>'
	                html+='<td><span class="radio-span"><input type="radio" class="radio" name="radio" id="radioInputa_'+i+'" value="'+result.Data.data[i].id+'"><label for="radioInputa_'+i+'"></label></span></td>'
					html+='<td><span class="suggestion_content" style="text-align:left">'+result.Data.data[i].content+'</span></td>'
					html+='<td><span>'+result.Data.data[i].create_time+'</span></td>'
                    if( result.Data.data[i].type ==1 ){
                        html+='<td><span>'+result.Data.data[i].name+'</span></td>'
                        html+='<td><span>用户</span></td>'
                    }else{
                        html+='<td><span>'+result.Data.data[i].clinic_name+'</span></td>'
                        html+='<td><span>诊所</span></td>'
                    }
                    html+='<td><span>'+result.Data.data[i].user_account+'</span></td>'
					html+='</tr>'
				}
				$('#suggTable').html(html)
				
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
			opCityTip(result.Data.msg)
		}
	},user_account,content,p,p_len)
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
        Suggestionindex('','',page,showCount)
        sessionStorage.setItem("jumpid",page);
}

function opCityTip(tipText){
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html(tipText).css({'margin-left':-($('.opacity-tip p').width()/2)})
}