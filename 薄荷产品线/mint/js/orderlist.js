$(function(){
    jeDate({
        dateCell:"#timeStart",//isinitVal:true,
        format:"YYYY-MM-DD",
        isTime:false, //isClear:false,
    })
    jeDate({
        dateCell:"#timeEnd",//isinitVal:true,
        format:"YYYY-MM-DD",
        isTime:false, //isClear:false,
    })
    sessionStorage.removeItem('reserve_number');
    sessionStorage.removeItem('patient_name');
    sessionStorage.removeItem('timeStart');
    sessionStorage.removeItem('timeEnd');
    sessionStorage.removeItem('company_name');
    sessionStorage.removeItem('doctor_name');
    sessionStorage.removeItem('clinic_name');
    sessionStorage.removeItem('project_name');

    $('.moreButspan').click(function(){
        $('.moreboxhide').slideToggle();
    })
     //医生查找 //诊所查找
    AjaxObj.AppointmentUserLst(function(result){
        if(result.Data.code == 1){
            var html='';
            for(var i=0;i<result.Data.data.length;i++){
                html+='<li class="filter-item items" data-filter="'+result.Data.data[i].name+'" data-value="'+result.Data.data[i].id+'">'+result.Data.data[i].name+'</li>'
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

    sessionStorage.removeItem('patient_name')
    if(sessionStorage.getItem("jumpid")){
        var jump = sessionStorage.getItem("jumpid");
        AppointmentIndex('','','','','','','','',jump,10)
    }else{
        AppointmentIndex('','','','','','','','',1,10)
    }
	$('#edit').click(function(){
		if($('#AppointmentTable input[type="radio"]').is(":checked")){
			location.href="/mint/html/orderlist/edit.html#Appointment";
			var id = $("#AppointmentTable input[type='radio']:checked").val();
			//console.log(id)
			sessionStorage.setItem('appointment_id',id)
		}else{
			opCityTip('请先选择列表中的某一预约项')
		}
	})
	/*点击删除按钮*/
	$('#delete').click(function(){
		if($('#AppointmentTable input[type="radio"]').is(":checked")){
			$('.delete-tipbox').show();
			var appointment_id=$("#AppointmentTable input[type='radio']:checked").val()
			$('#deletetipBox').die().live('click',function(){
				AjaxObj.Appointmentdelete(function(result){
					if(result.Data.code==1){
						$('.delete-tipbox').hide();
						$("input[type='radio']:checked").parents('tr').remove();
						location.reload();
					}else{
						opCityTip(result.Data.msg)
					}
				},appointment_id)
			})
			
		}else{
			opCityTip('请先选择列表中的某一预约项')
		}	
	})

	$('#search').click(function(){
		var reserve_number = $('#reserve_number').val(),
            patient_name = $('#patient_name').val(),
            timeStart = $('#timeStart').val(),
            timeEnd = $('#timeEnd').val(),
            project_name = $('#project_name').val(),
            doctor_name = $('#DocInputbox .text').html(),
            clinic_name = $('#ClinkBox .text').html(),
            company_name = $('#company_name').val();
			sessionStorage.removeItem('jumpid');
	        sessionStorage.setItem('patient_name',patient_name);
            sessionStorage.setItem('timeStart',timeStart);
            sessionStorage.setItem('timeEnd',timeEnd);
            sessionStorage.setItem('company_name',company_name);
            sessionStorage.setItem('doctor_name',doctor_name);
            sessionStorage.setItem('clinic_name',clinic_name);
            sessionStorage.setItem('project_name',project_name);
            sessionStorage.setItem('reserve_number',reserve_number);
			AppointmentIndex(reserve_number,patient_name,project_name,doctor_name,clinic_name,company_name,timeStart,timeEnd,1,10);
	})
	$(document).keydown(function(e) {
		if (e.keyCode == 13) {
			var reserve_number = $('#reserve_number').val(),
                patient_name = $('#patient_name').val(),
                timeStart = $('#timeStart').val(),
                timeEnd = $('#timeEnd').val(),
                project_name = $('#project_name').val(),
                doctor_name = $('#DocInputbox .text').html() || '',
                clinic_name = $('#ClinkBox .text').html() || '',
                company_name = $('#company_name').val();
                sessionStorage.removeItem('jumpid');
                sessionStorage.setItem('patient_name',patient_name);
                sessionStorage.setItem('timeStart',timeStart);
                sessionStorage.setItem('timeEnd',timeEnd);
                sessionStorage.setItem('company_name',company_name);
                sessionStorage.setItem('doctor_name',doctor_name);
                sessionStorage.setItem('clinic_name',clinic_name);
                sessionStorage.setItem('project_name',project_name);
                sessionStorage.setItem('reserve_number',reserve_number);
                AppointmentIndex(reserve_number,patient_name,project_name,doctor_name,clinic_name,company_name,timeStart,timeEnd,1,10);
		}
	});

    $('.go').click(function(){
        sessionStorage.setItem("jumpid",$('.numPage').val());
        var b = sessionStorage.getItem("pcount"),
            num=$('.numPage').val(),
            showCount =10,
            pageNum=Math.ceil(b/showCount);
        if(num<=pageNum && num>0){
            var reserve_number = sessionStorage.getItem('reserve_number'),
                patient_name = sessionStorage.getItem('patient_name'),
                project_name = sessionStorage.getItem('project_name'),
                doctor_name = sessionStorage.getItem('doctor_name'),
                clinic_name = sessionStorage.getItem('clinic_name'),
                company_name = sessionStorage.getItem('company_name'),
                timeStart = sessionStorage.getItem('timeStart'),
                timeEnd = sessionStorage.getItem('timeEnd');
                console.log(doctor_name,clinic_name)
            AppointmentIndex(reserve_number,patient_name,project_name,doctor_name,clinic_name,company_name,timeStart,timeEnd,num,showCount)
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
function AppointmentIndex(reserve_number,patient_name,project_name,doctor_name,clinic_name,company_name,start,end,p,p_len){
	AjaxObj.AppointmentIndex(function(result){
		if(result.Data.code == 1 ){
			var html='';
			if(result.Data.data == '' || result.Data.data == null ){
				$('#AppointmentTable').html('<tr><td colspan="12">暂时没有相关数据</td></tr>')
				$('#Pagination-box').hide();
			}else{
				for(var i = 0 ; i < result.Data.data.length; i++ ){
                    var doctor_name = result.Data.data[i].doctor_name == null ? '' : result.Data.data[i].doctor_name;
                    var clinic_name = result.Data.data[i].clinic_name == null ? '' : result.Data.data[i].clinic_name ;
					var visit_name = result.Data.data[i].visit_name ==null ?result.Data.data[i].patient_name:result.Data.data[i].visit_name;
                    var company_name = result.Data.data[i].company_name ==null ? '' : result.Data.data[i].company_name;
                    html+='<tr>'
	                html+='<td><span class="radio-span"><input type="radio" class="radio" name="radio" id="radioInputa_'+i+'" value="'+result.Data.data[i].id+'"><label for="radioInputa_'+i+'"></label></span></td>'
					html+='<td><span style="padding-right:5px">'+result.Data.data[i].reserve_number+'</span></td>'
                    html+='<td><span class="spanName" id="goSee" data-id="'+result.Data.data[i].id+'">'+visit_name+'</span></td>'
					html+='<td class="W110"><span>'+result.Data.data[i].visit_time+'</span></td>'
                    /*html+='<td class="W110"><span>'+result.Data.data[i].create_time+'</span></td>'*/
					html+='<td class="W150"><span>'+company_name+'</span></td>'
					html+='<td><span class="doctor_name">'+doctor_name+'</span></td>'
					html+='<td class="W110"><span>'+clinic_name+'</span></td>'
					html+='<td><span>'+result.Data.data[i].project_name+'</span></td>'
                    if(result.Data.data[i].status  == 1 ){
                        html+='<td><span>预约中</span></td>'
                    }else if(result.Data.data[i].status  == 2){
                        html+='<td><span>已完成</span></td>'
                    }else if(result.Data.data[i].status  == 3){
                        html+='<td><span>已过期</span></td>'
                    }else if(result.Data.data[i].status  == 4){
                        html+='<td><span>已取消</span></td>'
                    }else{
                         html+='<td><span></span></td>'
                    }
					html+='<td><span>'+result.Data.data[i].contact_tel+'</span></td>'
                    if(result.Data.data[i].is_self == 1 ){
                        html+='<td><span>是</span></td>'
                    }else if(result.Data.data[i].is_self == 2){
                        html+='<td><span>否</span></td>'
                    }else{
                         html+='<td><span></span></td>'
                    }
					html+='<td class="W100"><span>'+result.Data.data[i].remark+'</span></td>'
					html+='</tr>'
				}
				$('#AppointmentTable').html(html)
				$('#AppointmentTable td #goSee').click(function(){
                    var idSee=$(this).attr('data-id')
                    location.href="/mint/html/orderlist/see.html#Appointment";
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
			//alert(result.Data.msg)
		}
	},reserve_number,patient_name,project_name,doctor_name,clinic_name,company_name,start,end,p,p_len)
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
        var reserve_number = sessionStorage.getItem('reserve_number') || '',
            patient_name = sessionStorage.getItem('patient_name') || '',
            project_name = sessionStorage.getItem('project_name') || '',
            doctor_name = sessionStorage.getItem('doctor_name') =='undefined'? '' : sessionStorage.getItem('doctor_name'),
            clinic_name = sessionStorage.getItem('clinic_name') =='undefined'? '' : sessionStorage.getItem('clinic_name'),
            company_name = sessionStorage.getItem('company_name') || '',
            timeStart = sessionStorage.getItem('timeStart') || '',
            timeEnd = sessionStorage.getItem('timeEnd') || '';
            console.log(doctor_name,clinic_name)
        AppointmentIndex(reserve_number,patient_name,project_name,doctor_name,clinic_name,company_name,timeStart,timeEnd,page,showCount);
        sessionStorage.setItem("jumpid",page);
}

function opCityTip(tipText){
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html(tipText).css({'margin-left':-($('.opacity-tip p').width()/2)})
}