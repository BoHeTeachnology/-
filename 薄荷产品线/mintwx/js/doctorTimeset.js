$(function(){
	/*诊所查询*/
	Ajax.DoctorclinicLst(function(result){
		if(result.Data.code == 1){
			var html='';
			for(var i=0; i<result.Data.data.length; i++){
				html+='<option value="'+result.Data.data[i].id+'">'+result.Data.data[i].clinic_name+'</option>'
			}
			$('#clinic').html('<option value="">请选择</option>'+html)			
		}else{
			opCityTip(result.Data.msg)
		}
		
	})
   /* 获取本月日期*/
    var dataArray = new Array();
    var TMonth = ((new Date()).getMonth()+1) <10? '0'+((new Date()).getMonth()+1) : ((new Date()).getMonth()+1) ;
    var TodayD = (new Date()).getFullYear()+'-'+TMonth;
    Ajax.visitDateQuery(function(model){
        var next_Month_date = model.Data.nex_date || '';
         /*日历数据设置*/
            $("#inline-calendar").calendar({
                container: "#inline-calendar",
                input: "#date",
                minDate:'',
                maxDate:next_Month_date,
                multiple:true,
                value:'',
                onChange:function(p, values, displayValues){
                },  
                onMonthYearChangeEnd:function(p,year,month){
                    if((parseInt(month)+1)<10){
                        var thisMonth = year+'-0'+(parseInt(month)+1);
                    }else{
                        var thisMonth = year+'-'+(parseInt(month)+1);
                    }
                    Ajax.visitDateQuery(function(model){
                        if(model.Data.code == 1){
                            if(model.Data.data =='' && model.Data.is_befor == 0 ){
                                $('#clinic option[value=""]').attr('selected',true);
                                $('#clinic').attr('disabled',true)
                            }else if(model.Data.data =='' && model.Data.is_befor == 1){
                                $('#confirmbtnbox').show();
                                $('#clinic').attr('disabled',false)
                            }else{
                                $('#confirmbtnbox').hide();
                                $('#clinic').attr('disabled',true)
                                $('#clinic option[value="'+model.Data.data[0].clinic_id+'"]').attr('selected',true);
                                var valueDate = new Array();
                                for(var n=0; n<model.Data.data.length; n++){
                                    var visit_dateVal = model.Data.data[n].visit_date;
                                        valueDate.push(visit_dateVal)
                                }
                                console.log('valueDate',valueDate)
                                $("#inline-calendar").calendar('setValue',valueDate);
                            }
                        }else{
                            opCityTip(model.Data.msg)
                        }
                    },thisMonth) 
                },
                onDayClick:function(p, dayContainer, year, month, day){
                    /*获取具体时间*/
                      var Monthdate = (parseInt(month)+1) < 10 ? "0" + (parseInt(month)+1): (parseInt(month)+1);
                      var Datdate = day < 10 ? "0" + day : day;
                      var visit_date = year + "-" + Monthdate + "-" + Datdate;
                    /*if((parseInt(month)+1)<10){
                        if(day<10){
                            var visit_date = year+'-0'+(parseInt(month)+1)+'-0'+day;
                        }else{
                            var visit_date = year+'-0'+(parseInt(month)+1)+'-'+day;
                        }
                    }else{
                        if(day<10){
                            var visit_date = year+'-'+(parseInt(month)+1)+'-0'+day
                        }else{
                            var visit_date = year+'-'+(parseInt(month)+1)+'-'+day
                        }
                    }*/
                    //dayContainer.attr('class','pickerCalendar-day')
                    //console.log(dayContainer.attr('class'))
                    var thisMonth = year + "" + Monthdate;
                    /*if((parseInt(month)+1)<10){
                        var thisMonth = year+'0'+(parseInt(month)+1);
                    }else{
                        var thisMonth = year+''+(parseInt(month)+1);
                    }*/
                    var Month = (new Date()).getMonth();
                    if( (Month+1) >= 12 ){
                        var nextMonth = (parseInt(year)+1)+'01';
                    }else{
                        if( (Month+2) <10 ){
                            var nextMonth = year+'0'+(Month+2);
                        }else{
                            var nextMonth = year+''+(Month+2);
                        }
                    }
                    $('#chuTime').html(year+'年'+(parseInt(month)+1)+'月'+day+'日')
                    //console.log(thisMonth,nextMonth)
                    if(thisMonth == nextMonth){//判断如果是9月份
                        
                        var start_time ='09:00',
                            end_time =  '17:30';
                        if( !dayContainer.hasClass('picker-calendar-day-selected') ){//添加日
                            timeDatapre(1)
                            var obj={
                                clinic_id : $('#clinic option:selected').val(),
                                visit_date:visit_date,
                                start_time:start_time,
                                end_time:end_time,
                                time_span:'15',
                                type : '1'
                            }
                            $('#start_time').change(function(){
                                //console.log($(this).val())
                                start_time = $(this).val();
                                if( start_time.replace(":", "") >= end_time.replace(":", "") ){
                                    opCityTip('初始时间不能大于结束时间')
                                    $('#start_time option[value="09:00"]').attr('selected',true)
                                }else{
                                    obj.end_time=end_time
                                }
                                obj.start_time=start_time
                            })
                            $('#end_time').change(function(){
                                //console.log($(this).val())
                                end_time = $(this).val();
                                if( start_time.replace(":", "") >= end_time.replace(":", "") ){
                                    opCityTip('初始时间不能大于结束时间')
                                    $('#end_time option[value="17:30"]').attr('selected',true)
                                }else{
                                    obj.end_time=end_time
                                }
                                
                            })
                            
                            dataArray.push(obj)

                        }else{//取消日
                            timeDatapre(2)
                            //console.log(dataArray)
                            for(i=0; i<dataArray.length; i++){
                                if(visit_date == dataArray[i].visit_date){
                                    dataArray.splice(i,1)
                                    console.log(dataArray)
                                }
                            }
                        }
                        //console.log(dayContainer.attr('data-date'))
                    }else{
                        //console.log(p.wrapper.find('.picker-calendar-day-selected'))
                        p.wrapper.find('.picker-calendar-day-selected').removeClass('picker-calendar-day-selected');
                        p.wrapper.find('.picker-calendar-day').removeClass('picker-calendar-day-selected');
                        opCityTip('本月时间设置无效')

                    }

                    /*点击查询到的天*/
                    if( !dayContainer.hasClass('picker-calendar-day-selected') ){
                       // console.log('a')
                    }else{
                        console.log(visit_date)
                        Ajax.visitDateQuery(function(model){
                            if(model.Data.code == 1){
                                if(model.Data.data != '' ){
                                    timeDatapre('1')
                                    $('#start_time option[value="'+model.Data.data[0].start_time+'"]').attr('selected',true)
                                    $('#end_time option[value="'+model.Data.data[0].end_time+'"]').attr('selected',true)
                                }
                                    
                            }else{
                                opCityTip(model.Data.msg)
                            }
                        },visit_date) 
                    }
                }
            });
        if(model.Data.code == 1){
            if(model.Data.data =='' && model.Data.is_befor == 0){
                $('#clinic option[value=""]').attr('selected',true);
                $('#clinic').attr('disabled',true)
            }else if(model.Data.data =='' && model.Data.is_befor == 1){
                $('#confirmbtnbox').show();
                $('#clinic').attr('disabled',false)
            }else{
                $('#confirmbtnbox').hide();
                $('#clinic').attr('disabled',true)
                $('#clinic option[value="'+model.Data.data[0].clinic_id+'"]').attr('selected',true);
                var valueDate = new Array();
                for(var n=0; n<model.Data.data.length; n++){
                    var visit_dateVal = model.Data.data[n].visit_date;
                        valueDate.push(visit_dateVal)
                }
                console.log('valueDate',valueDate)
                $("#inline-calendar").calendar('setValue',valueDate);
            }
        }else{
            opCityTip(model.Data.msg)
        }
    },TodayD) 
	//var DataVal= ['2016-08-10','2016-08-12','2016-08-14','2016-08-16'];

    
	/*点击确认按钮提交数据*/
	$('#confirmbtn').click(function(){
		var clinic_id = $('#clinic option:selected').val();
		console.log(clinic_id,dataArray)
        if(clinic_id == ''){
            opCityTip('请选择您的出诊诊所')
        }else if(dataArray==''){
            opCityTip('请选择您的出诊时间')
        }else{
            for(var i=0; i<dataArray.length; i++){
                dataArray[i].clinic_id = clinic_id;
            }
            console.log(dataArray)
            Ajax.visitDateAdd(function(result){
                if(result.Data.code == 1){
                    $('#toast').fadeIn(500).delay(1000).fadeOut();
                    setTimeout(function(){
                        location.href='http://'+location.host+"/mintwx/html/doctorCenter.html";
                    },1000); 
                }else{
                    opCityTip(result.Data.msg)
                }
            },dataArray)
        }
	})
		
})


function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(2000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}

function timeDatapre(show){
	var str = '<div class="timeDatapre">\
            <h3>\
                <span>初诊：</span>\
                <p>\
                    <select name="" id="start_time">\
                        <option value="09:00">09:00</option>\
                        <option value="09:30">09:30</option>\
                        <option value="10:00">10:00</option>\
                        <option value="10:30">10:30</option>\
                        <option value="11:00">11:00</option>\
                        <option value="11:30">11:30</option>\
                        <option value="12:00">12:00</option>\
                        <option value="12:30">12:30</option>\
                        <option value="13:00">13:00</option>\
                        <option value="13:30">13:30</option>\
                        <option value="14:00">14:00</option>\
                        <option value="14:30">14:30</option>\
                        <option value="15:00">15:00</option>\
                        <option value="15:30">15:30</option>\
                        <option value="16:00">16:00</option>\
                        <option value="16:30">16:30</option>\
                        <option value="17:00">17:00</option>\
                        <option value="17:30">17:30</option>\
                    </select>\
                </p>\
            </h3>\
            <h3>\
                <span>终诊：</span>\
                <p>\
                    <select name="" id="end_time">\
                        <option value="09:00">09:00</option>\
                        <option value="09:30">09:30</option>\
                        <option value="10:00">10:00</option>\
                        <option value="10:30">10:30</option>\
                        <option value="11:00">11:00</option>\
                        <option value="11:30">11:30</option>\
                        <option value="12:00">12:00</option>\
                        <option value="12:30">12:30</option>\
                        <option value="13:00">13:00</option>\
                        <option value="13:30">13:30</option>\
                        <option value="14:00">14:00</option>\
                        <option value="14:30">14:30</option>\
                        <option value="15:00">15:00</option>\
                        <option value="15:30">15:30</option>\
                        <option value="16:00">16:00</option>\
                        <option value="16:30">16:30</option>\
                        <option value="17:00">17:00</option>\
                        <option value="17:30" selected>17:30</option>\
                    </select>\
                </p>\
            </h3>\
        </div>'
        if(show==1){
        	$('.timechoose').html(str)
        }else{
        	$('.timechoose').html('')
        }

        
}
