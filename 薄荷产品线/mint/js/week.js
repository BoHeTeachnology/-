

$(function(){

	// laydate({
	//     elem: '#week', //目标元素。由于laydate.js封装了一个轻量级的选择器引擎，因此elem还允许你传入class、tag但必须按照这种方式 '#id .class'
	//     event: 'click' //响应事件。如果没有传入event，则按照默认的click
	// });
	var vv = $("#clinic_brand").val();
	jeDate({
	    dateCell:"#week",
	    format:"YYYY-MM-DD",
	    isTime:false, 
	    minDate:"2014-09-19 00:00:00",
	    choosefun: function(val){
	    	week(vv,val);
	    }
	})

	// $("#week").focus(function(){

	// 	var date = $("#week").val();
	// 	// console.log(date);
	// 	// week(date);
	// })
	// .blur(function(){
	// 	setTimeout(function(){
	// 		var date2 = $("#week").val();
	// 		if(date != date2){
	// 			console.log(date2);
	// 		}
	// 		else{
	// 			console.log(111111);
	// 		}
	// 	},1000);

	// })
	// document.getElementById("week").fireEvent('onchange');
	// document.getElementById("week").onchange = function(){
	// 	console.log(22222);
	// }

	// document.attachEvent('onchange', function (event) {
	
	// 	alert(event.eventType);
	
	// });
// var obj = document.getElementById("week");
// 	if (obj.fireEvent) 
// 		{ 
// 		obj.fireEvent('onchange'); 
// 		} 
// 		else 
// 		{ 
// 		obj.onchange(); 
// 	}	 

	var date = getTodayDay();
	$("#week").val(date);
	var clinic_brand = '';
	week(clinic_brand,date);

	$("#search").click(function(){
		console.log($("#clinic_brand").val());
		week($("#clinic_brand").val(),date);
	})

	function day_week(str){
		var arr = str.split('-');
		var dd = new Date(arr[0]+'-'+arr[1]+'-'+arr[2]);
		var arr2 = ['周日','周一','周二','周三','周四','周五','周六'];
		return arr2[dd.getDay()];
	}

	function week(clinic_brand,date){

		AjaxObj.getWeek(function(data){
			$("#caseTable").html('');
			$(".ClinicTableMain .table-height4 thead tr").html('');
			var d = data.Data;
			$(".ClinicTableMain .table-height4 thead tr")
				.append('<th>诊所名称</th>')
				.append('<th>'+day_week(d.date[0].day)+'('+d.date[0].d+')</th>')
				.append('<th>'+day_week(d.date[1].day)+'('+d.date[1].d+')</th>')
				.append('<th>'+day_week(d.date[2].day)+'('+d.date[2].d+')</th>')
				.append('<th>'+day_week(d.date[3].day)+'('+d.date[3].d+')</th>')
				.append('<th>'+day_week(d.date[4].day)+'('+d.date[4].d+')</th>')
				.append('<th>'+day_week(d.date[5].day)+'('+d.date[5].d+')</th>')
				.append('<th>'+day_week(d.date[6].day)+'('+d.date[6].d+')</th>');

			var color = ['font_red','font_green'];
			for(var i =0;i<d.data.length;i++){
					
	           	var str = ''; 	
	            for(var j = 0;j<d.data[i].day_data.length;j++){
	            	if(d.data[i].day_data[j].full == 0){
	            	str += '<td><span><em class="'+color[1]+'">'+d.data[i].day_data[j].app_num+'</em>/<i>'+d.data[i].day_data[j].chair_num+'</i></span></td>'
	            	}else if(d.data[i].day_data[j].full == 1){
	            		str += '<td><span><em class="'+color[0]+'">'+d.data[i].day_data[j].app_num+'</em>/<i>'+d.data[i].day_data[j].chair_num+'</i></span></td>'
	            	}
	 				
	            }
	  			$("#caseTable").append('<tr><td><span class="clinic_name" data-id="'+d.data[i].id+'">'+d.data[i].clinic_name+'</span></td>'+str+'</tr>');
				
				$('.ClinicTableMain tr td span.clinic_name').click(function(){
				  location.href='http://'+location.host+'/mint/html/caseList/clinicIndex.html#ClinicSurvey';
				  sessionStorage.setItem('clinic_id',$(this).attr("data-id"));
				})

			}
			
			console.log(data.Data);
		},clinic_brand,date);
	}
	
	function getTodayDay(){

		var todayDate = new Date();
		var today_year = todayDate.getFullYear();
		var today_month = todayDate.getMonth()+1;
		var today_day = todayDate.getDate();
		if(today_month < 10 ){
			today_month = '0' + today_month;
		}
		if(today_day < 10 ){
			today_day = '0' + today_day;
		}
		return today_year + '-' + today_month + '-' + today_day;

	}



})