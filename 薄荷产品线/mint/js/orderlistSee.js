$(function(){
	var idSee = sessionStorage.getItem('idSee')
	var thisYear = (new Date()).getFullYear(),
	    thisMonth = ((new Date()).getMonth()+1) <10 ? '0'+((new Date()).getMonth()+1) : ((new Date()).getMonth()+1),
	    thisDay = (new Date()).getDate()<10 ? '0'+(new Date()).getDate() : (new Date()).getDate() ;
	var TodayDate = thisYear +'-'+ thisMonth;
	//获取单个病历信息
	AjaxObj.AppointmentgetOne(function(result){
		if(result.Data.code ==1 ){
			var visit_name = result.Data.data.visit_name == null || result.Data.data.visit_name == '' ? result.Data.data.patient_name : result.Data.data.visit_name;
			$('#patient_name').html(visit_name);
			if(result.Data.data.appointment_name==''){
				$('#appointment_name').html(result.Data.data.contact_tel);
			}else{
				$('#appointment_name').html(result.Data.data.patient_name);
			}
			
			$('#contact_tel').html(result.Data.data.contact_tel);
			if(result.Data.data.is_self == 1 ){
				$('#is_self').html('是')
			}else if(result.Data.data.is_self == 2 ){
				$('#is_self').html('否')
			}	
			if(result.Data.data.company_name ==null){
				$('#company_name').html('');
			}else{
				$('#company_name').html(result.Data.data.company_name+' （邀请码：'+result.Data.data.invite_code+'）');
			}
			
			$('#visit_time').html(result.Data.data.visit_time);
			$('#DovVal').html(result.Data.data.doctor_name+'('+result.Data.data.doctor_phone+')');
			$('#ClinkVal').html(result.Data.data.clinic_name);
			$('#project_name').html(result.Data.data.project_name);
			$('#remark').html(result.Data.data.remark);
			$('#time_long').html(result.Data.data.time_long+'分钟');
			sessionStorage.setItem('gettime',TodayDate)
			sessionStorage.setItem('getdocId',result.Data.data.doctor_id)
			visitDateQuery(TodayDate,result.Data.data.doctor_id)
		}else{
			opCityTip(result.Data.msg)
		}
	},idSee)
	calendar(idSee)
	$('.checktimea').click(function(){
		$('.opacity-timetipbox').show();
	})
	$('.opacity-timetipbox').click(function(event){
		if(event.target==this){
			$('.opacity-timetipbox').hide();
		}
	})
	$('.close_dialog').click(function(){
		$('.opacity-timetipbox').hide();
	})
	$('#edit-but').click(function(){
        location.href="/mint/html/orderlist/edit.html#Appointment";
        sessionStorage.setItem('appointment_id',idSee)
    })

})
function opCityTip(tipText){
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html('<span class="wrong">'+tipText+'<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
}
function timeDatapre(show){
	var h =8,m=0,html='';
    for(var i=0 ; i<13; i++){
        h+=1;
        m=0;
        for(var a=0; a<4; a++){
            if( m==60 ){
                m=0;
            }
            var hour = h <10? '0'+h : h;
            var minute= m == 0?'00':m;
            if( !(h==21 && (m==15 || m==30 || m==45)) ){
                //if( !(h==12 || h==18) ){
	    			html+='<option value="'+hour+':'+minute+'">'+hour+':'+minute+'</option>'
	    		//}
                m+=15;
            }
            
        }   
    }
    var optionHtml = html;
	var str = '<div class="timeDatapre">\
            <h3>\
                <span>初诊：</span>\
                <p>\
                    <select name="" id="start_time">'+optionHtml+'</select>\
                </p>\
            </h3>\
            <h3>\
                <span>终诊：</span>\
                <p>\
                    <select name="" id="end_time">'+optionHtml+'</select>\
                </p>\
            </h3>\
        </div>'
        if(show==1){
        	$('.timechoose').html(str)
        }else{
        	$('.timechoose').html('')
        }        
}

function visitDateQuery(visitDate,doctorId){
	AjaxObj.visitDateQuery(function(model){
	    if(model.Data.code == 1){
	        if(model.Data.data =='' && model.Data.is_befor == 1){
	          
	        }else{
	            var valueDate = new Array();
	            for(var n=0; n<model.Data.data.length; n++){
	                var visit_dateVal = model.Data.data[n].visit_date;
	                if(model.Data.data[n].type == 1){
	                	valueDate.push(visit_dateVal)
	                }
	                    
	            }
	            console.log('valueDate',valueDate)
	            $("#inline-calendar").calendar('setValue',valueDate);
	            disableFun(valueDate)
	        }
	    }else{
	        opCityTip(model.Data.msg)
	    }
	},visitDate,doctorId) 
}

function calendar(idSee,TodayDate){
	//timeDatapre(2);
    $("#inline-calendar").calendar({
        container: "#inline-calendar",
        input: "#date",
        multiple:true,
        minDate:TodayDate,
        onMonthYearChangeEnd:function(p,year,month){
            if((parseInt(month)+1)<10){
                var thisMonth = year+'-0'+(parseInt(month)+1);
            }else{
                var thisMonth = year+'-'+(parseInt(month)+1);
            }
            AjaxObj.AppointmentgetOne(function(result){
            	if(result.Data.code == 1){
            		AjaxObj.visitDateQuery(function(model){
			                if(model.Data.code == 1){
			                    if(model.Data.data =='' && model.Data.is_befor == 1){
			                        $('#confirmbtnbox').show();
			                        $('#clinic').attr('disabled',false)
			                    }else{
			                        $('#confirmbtnbox').hide();
			                        $('#clinic').attr('disabled',true)
			                        var valueDate = new Array();
			                        for(var n=0; n<model.Data.data.length; n++){
			                            var visit_dateVal = model.Data.data[n].visit_date;
			                            if(model.Data.data[n].type == 1){
			                            	valueDate.push(visit_dateVal)
			                            }    
			                        }
			                        console.log('valueDate',valueDate)
			                        $("#inline-calendar").calendar('setValue',valueDate);
			                        disableFun(valueDate)
			                    }
			                }else{
			                    opCityTip(model.Data.msg)
			                }
			            },thisMonth,result.Data.data.doctor_id) 
		            
            	}else{
            		opCityTip(result.Data.msg)
            	}  
            },idSee)
        },
        onDayClick:function(p, dayContainer, year, month, day){
      	 /*获取具体时间*/
	        var Monthdate = (parseInt(month)+1) < 10 ? "0" + (parseInt(month)+1): (parseInt(month)+1);
	        var Datdate = day < 10 ? "0" + day : day;
	        var visit_date_juti = year + "-" + Monthdate + "-" + Datdate;
	        if( !dayContainer.hasClass('picker-calendar-day-selected') ){//添加日
	            timeDatapre('2')
	        }else{
	        	timeDatapre('2')
	        	AjaxObj.AppointmentgetOne(function(result){
	            	if(result.Data.code == 1){
	            		AjaxObj.visitDateQuery(function(model){
				                if(model.Data.code == 1){
				                	if(model.Data.data !=''){
				                		timeDatapre('1')
					                    $('#start_time option[value="'+model.Data.data[0].start_time+'"]').attr('selected',true)
					                    $('#end_time option[value="'+model.Data.data[0].end_time+'"]').attr('selected',true)
					                    $('#time_span option[value="'+model.Data.data[0].time_span+'"]').attr('selected',true)
				                	}
				                }else{
				                    opCityTip(model.Data.msg)
				                }
				            },visit_date_juti,result.Data.data.doctor_id) 
			            
	            	}else{
	            		opCityTip(result.Data.msg)
	            	}  
	            },idSee)
	        }
	          
	    }
    });	
}

function disableFun(disable){
	var rowslength = $('.picker-calendar-month .picker-calendar-row').length;
	for(var i =0;i<rowslength;i++){
        var daylength = $('.picker-calendar-month .picker-calendar-row').eq(i).children().length;
        for(var j=0;j<daylength;j++){
          $('.picker-calendar-month .picker-calendar-row').eq(i).children().eq(j).addClass('picker-calendar-day picker-calendar-day-disabled');
          for(var z =0 ; z<disable.length;z++){
            if($('.picker-calendar-month .picker-calendar-row').eq(i).children().eq(j).attr('data_date') == disable[z]){
              $('.picker-calendar-month .picker-calendar-row').eq(i).children().eq(j).attr('data_date',disable[z]).removeClass('picker-calendar-day-disabled');
            }
          }

        }
    }
}
