$(function(){
	
    sessionStorage.removeItem('company_name')
    sessionStorage.removeItem('company_code')
    if(sessionStorage.getItem("jumpid")){
        var jump = sessionStorage.getItem("jumpid");
        	CompanyIndex('','',jump,10)
    }else{
        	CompanyIndex('','',1,10)
    }
	$('#edit').click(function(){
		if($('#companyTable input[type="radio"]').is(":checked")){
			location.href="/mint/html/company/edit.html#Company";
			var id = $("#companyTable input[type='radio']:checked").val();
			sessionStorage.setItem('company_id',id)
		}else{
			opCityTip('请先选择列表中的某一企业')
		}
	})
	/*点击删除按钮*/
	$('#delete').click(function(){
		if($('#companyTable input[type="radio"]').is(":checked")){
			$('.delete-tipbox').show();
			var company_id=$("#companyTable input[type='radio']:checked").val()
			$('#deletetipBox').die().live('click',function(){
				AjaxObj.Companydelete(function(result){
					if(result.Data.code==1){
						$('.delete-tipbox').hide();
						$("input[type='radio']:checked").parents('tr').remove();
						location.reload();
					}else{
						opCityTip(result.Data.msg)
					}
				},company_id)
			})
			
		}else{
			opCityTip('请先选择列表中的某一企业')
		}	
	})

	$('#search').click(function(){
		var company_name = $('#company_name').val();
		var company_code = $('#company_code').val();
			sessionStorage.removeItem('jumpid')
			sessionStorage.setItem('company_name',company_name)
			sessionStorage.setItem('company_code',company_code)
			CompanyIndex(company_name,company_code,1,10)
	})
	$(document).keydown(function(e) {
		if (e.keyCode == 13) {
			var company_name = $('#company_name').val();
			var company_code = $('#company_code').val();
			    sessionStorage.removeItem('jumpid')
				sessionStorage.setItem('company_name',company_name)
				sessionStorage.setItem('company_code',company_code)
				CompanyIndex(company_name,company_code,1,10)
		}
	});

	$('.go').click(function(){
        sessionStorage.setItem("jumpid",$('.numPage').val());
        var b = sessionStorage.getItem("pcount"),
            num=$('.numPage').val(),
            showCount =10,
            pageNum=Math.ceil(b/showCount);
        if(num<=pageNum && num>0){
            var company_name = sessionStorage.getItem('company_name');
            var company_code = sessionStorage.getItem('company_code');
            CompanyIndex(company_name,company_code,num,showCount)
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
function CompanyIndex(company_name,company_code,p,p_len){
	AjaxObj.CompanyIndex(function(result){
		if(result.Data.code == 1 ){
			var html='';
			if(result.Data.data == '' || result.Data.data == null ){
				$('#companyTable').html('<tr><td colspan="10">暂时没有相关数据</td></tr>')
				$('#Pagination-box').hide();
			}else{
				for(var i = 0 ; i < result.Data.data.length; i++ ){
					var company_head_phone = result.Data.data[i].company_head_phone == null ? '' : result.Data.data[i].company_head_phone;
					var mint_head_phone = result.Data.data[i].mint_head_phone == null ? '' : result.Data.data[i].mint_head_phone;
					html+='<tr>'
	                html+='<td><span class="radio-span"><input type="radio" class="radio" name="radio" id="radioInputa_'+i+'" value="'+result.Data.data[i].id+'"><label for="radioInputa_'+i+'"></label></span></td>'
					html+='<td class="W200"><span class="spanName" id="goSee" data-id="'+result.Data.data[i].id+'">'+result.Data.data[i].company_name+'</span></td>'
					html+='<td><span>'+result.Data.data[i].staff_nums+'</span></td>'
					html+='<td class="W200"><span>'+result.Data.data[i].company_address+'</span></td>'
					html+='<td><span>'+result.Data.data[i].company_head_name+'</span></td>'
					html+='<td><span>'+company_head_phone+'</span></td>'
					html+='<td><span>'+result.Data.data[i].mint_head_name+'</span></td>'
					html+='<td><span>'+mint_head_phone+'</span></td>'
					html+='<td><span>'+result.Data.data[i].company_code+'</span></td>'
					html+='</tr>'
				}
				$('#companyTable').html(html)
				$('#companyTable td #goSee').click(function(){
                    var idSee=$(this).attr('data-id')
                    location.href="/mint/html/company/see.html#Company";
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
	},company_name,company_code,p,p_len)
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
    var widthP=$('#go-nextBox').width() + $('#Pagination').width() + 20;
        $('#Pagination-box').css({
            'width':widthP
        }) 
}
function pageselectCallback(page_index, jq){
    var page=page_index+1;
        var company_name = sessionStorage.getItem('company_name') || '';
        var company_code = sessionStorage.getItem('company_code') || '';
        CompanyIndex(company_name,company_code,page,showCount)
        sessionStorage.setItem("jumpid",page);
}

function opCityTip(tipText){
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html(tipText).css({'margin-left':-($('.opacity-tip p').width()/2)})
}