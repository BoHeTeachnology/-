
// $(function(){

// $(function(){

	var clinicId = sessionStorage.getItem('clinic_id');
	/*适配诊所名称*/
	AjaxObj.ClinicgetOne(function(result){
		if(result.Data.code ==1){
	      $('#clinicNameId').html( result.Data.data.clinic_name );
	    }else{
	    	opCityTip(result.Data.msg)
	    }
	},clinicId)

	function clinicID(n){
		
		$("#clinicNameId").text(n);
	}
// })
	
	function get_clinic_id(){

		var clinicId = sessionStorage.getItem('clinic_id');
		/*适配诊所名称*/
		AjaxObj.ClinicgetOne(function(result){

			if(result.Data.code ==1){
		      $('#clinicNameId').html( result.Data.data.clinic_name );
		    }else{
		    	opCityTip(result.Data.msg)
		    }
		},clinicId)

		function clinicID(n){
			
			$("#clinicNameId").text(n);
		}
	}

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
	viewAll(toadyDate,clinicId);

	/*适配整个页面*/
	function viewAll(date,clinicId){

		AjaxObj.indexView(function(data){
			todayView(data.Data);
			doctorListView(data.Data);
			yuyue(data.Data);
			serviceDataView(data.Data);

		},date,clinicId);

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
			var str = '<dt><img src="'+n.doctor_data[i].photo+'"></dt>';
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
		for(var i =0 ;i<n.service_data.length;i++){

			$(".leftprebox .tongjiproj ul")
				.append('<li><b>'+n.service_data[i].service_name+'<i>'+n.service_data[i].count+'</i></b><span style="width:'+((n.service_data[i].count*2)+2)+'%"></span></li>');
			}
	}
	function opCityTip(tipText){
	    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut();
	    $('.opacity-tip p').html(tipText).css({'margin-left':-($('.opacity-tip p').width()/2)})
	}
