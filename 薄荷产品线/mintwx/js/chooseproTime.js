$(function(){
	var inviterUserIid=transform(window.location.search);
	var service_id=decodeURI(inviterUserIid.id);
  var app_id=decodeURI(inviterUserIid.app_id);
	var visit_date = '';
	var thisYear = (new Date()).getFullYear(),
      thisMonth = (new Date()).getMonth()+1,
      thisDay = (new Date()).getDate();
        if(thisMonth<10){
            var This_month = thisYear+'-0'+thisMonth
            if(thisDay<10){
                var TodayDate = thisYear+'-0'+thisMonth+'-0'+thisDay;
            }else{
                var TodayDate = thisYear+'-0'+thisMonth+'-'+thisDay;
            }
        }else{
            var This_month = thisYear+'-'+thisMonth;
            if(thisDay<10){
                var TodayDate = thisYear+'-0'+thisMonth+'-0'+thisDay
            }else{
                var TodayDate = thisYear+'-'+thisMonth+'-'+thisDay
            }
        }

  var arr = TodayDate.split('-');
  var year = arr[0]; //获取当前日期的年份
  var month = arr[1]; //获取当前日期的月份
  var year2 = year;
  var month2 = parseInt(month) + 1;
  if (month2 == 13) {
      year2 = parseInt(year2) + 1;
      month2 = 1;
  }
  month2 = month2<10 ? '0' + month2 : month2;
  var nextMonth = year2 + '-' + month2; //获取下个月的日期
  opCityTip('加载中')
  //根据返回的值判断获取本月或者下月的最后一天。
  var nextDataArray = new Array();
  var dataArray = new Array();
  Ajax.getDayStatus(function(result){
    var lastMothDate ='';//下个月或者本月的最后一天
    if(result.Data.code ==1){
      var this_month_day = result.Data.data[result.Data.data.length-1].day_time; //本月最后一天
      for(var i=0; i<result.Data.data.length; i++){
        if(result.Data.data[i].status!=0){
          var day_time = result.Data.data[i].day_time;
          dataArray.push(day_time)
        }
        if( result.Data.data[i].day_time == TodayDate){
          dataArray.splice(0,i);
        }
      }
        Ajax.getDayStatus(function(modal){
          if(modal.Data.code ==1){
            for(var i=0; i<modal.Data.data.length; i++){
              if(modal.Data.data[i].status!=0){
                var day_time = modal.Data.data[i].day_time;
                nextDataArray.push(day_time)
              }
            }
            console.log(nextDataArray)
            if( nextDataArray == '' || nextDataArray ==[]){
              lastMothDate = this_month_day;
            }else{
              lastMothDate =  modal.Data.data[modal.Data.data.length-1].day_time;
            }
            console.log(lastMothDate)
            
              $("#inline-calendar").calendar({
                  container: "#inline-calendar",
                  input: "#date",
                  minDate:TodayDate,
                  maxDate:lastMothDate,
                  touchMove:true,
                  value:'',
                  onMonthYearChangeEnd:function(p,year,month){
                    $('.opcitybox').show();
                    $('.opcitybox span').html('加载中').css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
                    if( (month+1)<10 ){
                      var this_month = year+'-'+'0'+(month+1);
                    }else{
                      var this_month = year+'-'+(month+1);
                    }
                    //console.log(this_month)
                    var disable_array = new Array();
                    Ajax.getDayStatus(function(modal){
                      if(modal.Data.code ==1){
                        $('.opcitybox').hide();
                        for(var i=0; i<modal.Data.data.length; i++){
                          if(modal.Data.data[i].status!=0){
                            var day_time = modal.Data.data[i].day_time;
                            disable_array.push(day_time)
                          }
                          if( modal.Data.data[i].day_time == TodayDate){
                            console.log(modal.Data.data[i].day_time ,TodayDate)
                            console.log(i)
                            disable_array.splice(0,i);
                          }
                        }
                        //console.log(disable_array)
                        var rowslength = $('.picker-calendar-month .picker-calendar-row').length;
                        var disable = disable_array;
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

                      }else{
                        opCityTip(modal.Data.msg)
                      }
                    },service_id,this_month)

                        
                  },
                  onDayClick:function(p, dayContainer, year, month, day){
                    if((parseInt(month)+1)<10){
                      if( (parseInt(day)+1)<10 ){
                        visit_date = year+'-0'+(parseInt(month)+1)+'-0'+day;
                      }else{
                        visit_date = year+'-0'+(parseInt(month)+1)+'-'+day;
                      }
                        
                    }else{
                      if( (parseInt(day)+1)<10 ){
                        visit_date = year+'-'+(parseInt(month)+1)+'-0'+day;
                      }else{
                        visit_date = year+'-'+(parseInt(month)+1)+'-'+day;
                      }
                        
                    }
                    
                    Ajax.getDoctorLst(function(result){
                      if(result.Data.code == 1){
                        
                      }else{
                          opCityTip(result.Data.msg)
                      }
                    },visit_date,service_id)

                  }
              });
              $("#inline-calendar").calendar('setValue','');
              var rowslength = $('.picker-calendar-month .picker-calendar-row').length;
              var disable = dataArray;
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
          }else{
            opCityTip(modal.Data.msg)
          }
        },service_id,nextMonth)
    }else{
      opCityTip(result.Data.msg)
    }
  },service_id,This_month)
  	
	var name = sessionStorage.getItem('otherName'),
		  guanxi = sessionStorage.getItem('guanxi');

	$('#nextBtn').click(function(){
    console.log(visit_date)
    if( visit_date == '' ){
      opCityTip('请选择您的预约日期')
    }else{
        Ajax.getDoctorLst(function(result){
          if(result.Data.code == 1){
            location.href='http://'+location.host+"/mintwx/html/order/chooseproDoctor.html?visit_date="+visit_date+'&service_id='+service_id+'&app_id='+app_id;
          }else{
            opCityTip(result.Data.msg)
          }
        },visit_date,service_id)
    }
    
	})

	$('#reOrder,#reOrder2').click(function(){
		$('.opacityTipbox').hide();
	})
})

function calendar(TodayDate,visit_date,service_id,lastMothDate,This_month){

  
}
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(1000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}
function transform(urlstr){
  var obj = {};
     if (urlstr) {
         urlstr = urlstr.substr(1);
         var strArr = urlstr.split('&');
         for (var i = 0; i < strArr.length; i++) {
             var temArr = strArr[i].split('=');
             obj[temArr[0]] = temArr[1]
         }

        return obj;
     } else {
        return obj={};
     }
    
}