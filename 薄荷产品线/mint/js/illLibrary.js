$(function(){
    jeDate({
        dateCell:"#visit_time",//isinitVal:true,
        format:"YYYY-MM-DD",
        isTime:false, //isClear:false,
    })
	sessionStorage.clear();
    if(sessionStorage.getItem("jumpid")){
        var jump = sessionStorage.getItem("jumpid");
        RecordIndex('','','','','','',jump,10)
    }else{
        RecordIndex('','','','','','',1,10)
    }
    $('.moreButspan').click(function(){
        $('.moreboxhide').slideToggle();
    })
     //医生查找 //诊所查找
    AjaxObj.AppointmentUserLst(function(result){
        if(result.Data.code == 1){
            var html='';
            for(var i=0;i<result.Data.data.length;i++){
                html+='<li class="filter-item items" data-filter="'+result.Data.data[i].name+result.Data.data[i].account+'" data-value="'+result.Data.data[i].id+'">'+result.Data.data[i].name +'('+result.Data.data[i].account+')</li>'
           
            }
            $('#doctor_id').append(html)
            //诊所查找
            AjaxObj.AppointmentClinicLst(function(result){
                if(result.Data.code == 1){
                    var html='';
                    for(var i=0;i<result.Data.data.length;i++){
                        html+='<li class="filter-item items" data-filter="'+result.Data.data[i].clinic_name+'" data-value="'+result.Data.data[i].id+'">'+result.Data.data[i].clinic_name+'</li>'
                    }
                    $('#clinic_id').append(html)
                    $('body').append('<script src="/mint/fillter/tabcomplete.min.js"></script><script src="/mint/fillter/livefilter.min.js"></script><script src="/mint/fillter/src/bootstrap-select.js"></script>');
                  
                    $('#doctor_id li').click(function(){
                        var dataVal = $(this).attr('data-value');
                        //localStorage.setItem('dataVal',dataVal)
                        $('#DocInputbox .text').attr('data-val',dataVal)
                    })
                    $('#clinic_id li').click(function(){
                        var dataVal = $(this).attr('data-value');
                        $('#ClinkBox .text').attr('data-val',dataVal)
                    })

                }else{
                    opCityTip('',result.Data.msg)
                }
            })
            //诊所查找结束
        }else{
            opCityTip('',result.Data.msg)
        }
    },2)

	$('#edit').click(function(){
		if($('#RecordTable input[type="radio"]').is(":checked")){
			location.href="/mint/html/illLibrary/edit.html#Record";
			var id = $("#RecordTable input[type='radio']:checked").val();
			//console.log(id)
			sessionStorage.setItem('record_id',id)
		}else{
			opCityTip('请先选择列表中的某一病历')
		}
	})
	/*点击删除按钮*/
	$('#delete').click(function(){
		if($('#RecordTable input[type="radio"]').is(":checked")){
			$('.delete-tipbox').show();
			var record_id=$("#RecordTable input[type='radio']:checked").val()
			$('#deletetipBox').die().live('click',function(){
				AjaxObj.Recorddelete(function(result){
					if(result.Data.code==1){
						$('.delete-tipbox').hide();
						$("input[type='radio']:checked").parents('tr').remove();
						location.reload();
					}else{
						opCityTip(result.Data.msg)
					}
				},record_id)
			})
			
		}else{
			opCityTip('请先选择列表中的某一病历')
		}	
	})

	$('#search').click(function(){
		var name = $('#name').val(),
            account = $('#account').val(),
            statue = $('#statue option:selected').val(),
            visit_time = $('#visit_time').val(),
            doctor_id = $('#DocInputbox .text').attr('data-val') || '',
            clinic_id = $('#ClinkBox .text').attr('data-val') || '';
		sessionStorage.removeItem('jumpid')
        sessionStorage.setItem('name',name)
        sessionStorage.setItem('statue',statue)
        sessionStorage.setItem('visit_time',visit_time)
        sessionStorage.setItem('doctor_id',doctor_id)
        sessionStorage.setItem('clinic_id',clinic_id)
        sessionStorage.setItem('account',account)
		RecordIndex(account,name,statue,visit_time,doctor_id,clinic_id,1,10)
	})
	$(document).keydown(function(e) {
		if (e.keyCode == 13) {
			var name = $('#name').val(),
                account = $('#account').val(),
                statue = $('#statue').val(),
                visit_time = $('#visit_time').val(),
                doctor_id = $('#DocInputbox .text').attr('data-val') || '',
                clinic_id = $('#ClinkBox .text').attr('data-val') || '';
                sessionStorage.removeItem('jumpid')
                sessionStorage.setItem('name',name)
                sessionStorage.setItem('statue',statue)
                sessionStorage.setItem('visit_time',visit_time)
                sessionStorage.setItem('doctor_id',doctor_id)
                sessionStorage.setItem('clinic_id',clinic_id)
                sessionStorage.setItem('account',account)
                RecordIndex(account,name,statue,visit_time,doctor_id,clinic_id,1,10)
		}
	});
	$('.go').click(function(){
        sessionStorage.setItem("jumpid",$('.numPage').val());
        var b = sessionStorage.getItem("pcount"),
            num=$('.numPage').val(),
            showCount =10,
            pageNum=Math.ceil(b/showCount);
        if(num<=pageNum && num>0){
            var name = sessionStorage.getItem('name'),
                statue = sessionStorage.getItem('statue'),
                visit_time = sessionStorage.getItem('visit_time'),
                doctor_id = sessionStorage.getItem('doctor_id'),
                clinic_id = sessionStorage.getItem('clinic_id');
                account = sessionStorage.getItem('account');
            RecordIndex(account,name,statue,visit_time,doctor_id,clinic_id,num,showCount)
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
function RecordIndex(account,user_name,statue,visit_time,doctor_id,clinic_id,p,p_len){
	AjaxObj.RecordIndex(function(result){
		if(result.Data.code == 1 ){
			var html='';
			if(result.Data.data == '' || result.Data.data == null ){
				$('#RecordTable').html('<tr><td colspan="9">暂时没有相关数据</td></tr>')
                $('#Pagination-box').hide();
			}else{
				for(var i = 0 ; i < result.Data.data.length; i++ ){
                    var doctor_name = result.Data.data[i].doctor_name ==null ? '' : result.Data.data[i].doctor_name ;
                    var clinic_name = result.Data.data[i].clinic_name ==null ? '' : result.Data.data[i].clinic_name ;
                    var patient_name = result.Data.data[i].patient_name =='' ? '无姓名' : result.Data.data[i].patient_name;
					html+='<tr>'
					html+='<td><span class="radio-span"><input type="radio" class="radio" name="radio" id="radioInputa_'+i+'" value="'+result.Data.data[i].id+'"><label for="radioInputa_'+i+'"></label></span></td>'
                    html+='<td class=""><span class="spanName" id="goSee" data-id="'+result.Data.data[i].id+'">'+patient_name+'</span></td>'
                    html+='<td class=""><span>'+result.Data.data[i].patient_phone+'</span></td>'
					html+='<td class=""><span>'+result.Data.data[i].visit_time+'</span></td>'
					html+='<td class="W250"><span>'+result.Data.data[i].record_content+'</span></td>'
					html+='<td class=""><span>'+doctor_name+'</span></td>'
					html+='<td class=""><span>'+clinic_name+'</span></td>'
                    html+='<td class=""><span>'+result.Data.data[i].doctor_account+'</span></td>'
                    if(result.Data.data[i].is_send =='0'){
                        html+='<td><span>待发送</span></td>'
                    }else{
                        html+='<td><span>已发送</span></td>'
                    }
                    
					html+='</tr>'
				}
				$('#RecordTable').html(html)
				$('#RecordTable td #goSee').click(function(){
                    var idSee=$(this).attr('data-id')
                    location.href="/mint/html/illLibrary/see.html#Record";
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
			opCityTip(result.Data.msg)
		}
	},account,user_name,statue,visit_time,doctor_id,clinic_id,p,p_len)
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
    var name = sessionStorage.getItem('name') || '' ;
        statue = sessionStorage.getItem('statue') || '' ,
        visit_time = sessionStorage.getItem('visit_time') || '' ,
        doctor_id = sessionStorage.getItem('doctor_id') || '' ,
        clinic_id = sessionStorage.getItem('clinic_id') || '' ;
        account = sessionStorage.getItem('account') || '' ;
        RecordIndex(account,name,statue,visit_time,doctor_id,clinic_id,page,showCount)
        sessionStorage.setItem("jumpid",page);
}

function opCityTip(tipText){
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html(tipText).css({'margin-left':-($('.opacity-tip p').width()/2)})
}