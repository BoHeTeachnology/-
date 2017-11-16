$(function(){
	$("#inline-calendar").calendar({
        container: "#inline-calendar",
        input: "#date",
        onDayClick:function(p, dayContainer, year, month, day){
         /*获取具体时间*/
          var Monthdate = (parseInt(month)+1) < 10 ? "0" + (parseInt(month)+1): (parseInt(month)+1);
          var Datdate = day < 10 ? "0" + day : day;
          var visit_date_juti = year + "-" + Monthdate + "-" + Datdate; 
          viewAll(visit_date_juti);
        }
    }); 
})


	/*初始化获取当前时间*/
	var today = new Date();
	var todayMonth = today.getMonth()+1;
	var todayDay = today.getDate();
	if(todayMonth<10){
		todayMonth = "0" + todayMonth;
	}
	if(todayDay <10){
		todayDay = "0" + todayDay;
	}
	var toadyDate = today.getFullYear()+'-'+todayMonth+'-'+todayDay;
	viewAll(toadyDate);

	/*适配整个页面*/
	function viewAll(date){

		AjaxObj.indexView(function(data){
			todayView(data.Data);
			doctorListView(data.Data);
			yuyue(data.Data);
			serviceDataView(data.Data);
		},date);

	}
	/*适配三个圈数据*/
	function todayView(n){
		$(".circlepre .bodOrange b").html(n.total_money);
		$(".circlepre .bodGreen b").html(n.arrival_money);
		$(".circlepre .boxBlue b").html(n.count);
	}

	/*适配医生列表数据*/
	function doctorListView(n){
		$(".doctorListshow").children().remove();
		for(var i = 0 ; i<n.doctor_data.length ; i++){
			var photo = n.doctor_data[i].photo ==''? '../images/userPic.png' : n.doctor_data[i].photo;
			var str = '<dt><img src="'+photo+'"></dt>';
			str += '<dd><h4>'+n.doctor_data[i].name+'</h4>'+n.doctor_data[i].position+'</p></dd>';
			if(n.doctor_data[i].count==0){
				str += '<label class="off"></label>';
			}else{
				str += '<label class="on"></label>';
			}
			$(".doctorListshow")
				.append('<dl>'+str+'</dl>');
		}
	}

	/*适配序号，客户姓名，....数据*/
	function yuyue(n){
		arr = ['','预约中','已完成','已过期','已取消'];
		$('.rightTablebox table tbody').children().remove();
		if(n.data.length == 0){
			$('.rightTablebox table tbody').append('<tr><td colspan="7">暂时没有相关数据</td></tr>');
		}else{
			for(var i = 0 ; i<n.data.length ; i++){
				var str = '<td>'+n.data[i].id+'</td>';
				str += '<td>'+n.data[i].time+'</td>';
				str += '<td>'+arr[n.data[i].status]+'</td>';
				str += '<td>'+n.data[i].patient_name+'</td>';
				str += '<td>'+n.data[i].name+'</td>';
				str += '<td>'+n.data[i].service_name+'</td>';
				str += '<td>'+n.data[i].phone+'</td>';
				$('.rightTablebox table tbody').append('<tr>'+str+'</tr>');
			}
		}
		
	}

	/*适配当天预约统计*/
	function serviceDataView(n){
		$(".leftprebox .tongjiproj ul").children().remove();
		var li='';
		for(var i =0 ;i<n.service_data.length;i++){
			li+='<li><b>'+n.service_data[i].service_name+'<i>'+n.service_data[i].count+'</i></b><span style="width:'+((n.service_data[i].count*2)+2)+'%"></span></li>'
		}
		$(".leftprebox .tongjiproj ul").html(li);
	}
