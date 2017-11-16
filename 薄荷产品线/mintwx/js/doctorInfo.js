$(function(){
	var currYear = (new Date()).getFullYear();
    var opt={};
    opt.date = {preset : 'date'};
    opt.datetime = {preset : 'datetime'};
    opt.time = {preset : 'time'};
    opt.default = {
        theme: 'android-ics light', //皮肤样式
        display: 'modal', //显示方式
        mode: 'scroller', //日期选择模式
        dateFormat: 'yyyy-mm-dd',
        lang: 'zh',
        showNow: false,
        nowText: "今天",
        setText: '确定',
        cancelText: '取消',
        onSelect:function(value){
        	console.log($("#appDate"))
        },
        startYear: currYear - 100, //开始年份
        endYear: currYear + 50 //结束年份

    };
	$("#appDate").scroller(
		$.extend(
			{preset : 'date'},
			{
				theme: 'android-ics light',
				dateFormat : "yy-mm-dd",
				dateOrder: 'yymmdd',
				dayNames: ['周日', '周一;', '周二;', '周三', '周四', '周五', '周六'],
				dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
		        dayText: '日',
		        hourText: '时',
		        minuteText: '分',
		        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
		        monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		        monthText: '月',
		        secText: '秒',
		        timeFormat: 'HH:ii',
		        timeWheels: 'HHii',
		        yearText: '年',
		        lang: 'zh',
		        showNow: false,
		        nowText: "今天",
		        setText: '确定',
		        cancelText: '取消'
			}
		)
	)
	Ajax.UsergetInfo(function(result){
		if(result.Data.code == 1){
			console.log(result.Data);
			if( result.Data.data.photo == '' || result.Data.data.photo == null){
				$('#doctorPic').html('<img src="'+result.Data.data.headimgurl+'" alt="">')
			}else{
				$('#doctorPic').html('<img src="'+result.Data.data.photo+'" alt="">')
			}
			$('#userName').html(result.Data.data.nickname);
			$('#name').html(result.Data.data.name);
			if(result.Data.data.birth == '' || result.Data.data.birth ==null){
				$('#appDate').val('1985-01-01')
			}else{
				$('#birth').html(result.Data.data.birth)
				$('#appDate').val(result.Data.data.birth)
			}

			$('#sexSelect option[value="'+result.Data.data.sex+'"]').attr('selected',true)
			result.Data.data.sex == 1 ? $('#sex').html('男') : $('#sex').html('女');
			$('#phone').html(result.Data.data.phone)
			$('#position').html(result.Data.data.position)
			$('#field').html(result.Data.data.field)
			$('#context').html(result.Data.data.context)
			$('#job_age').html(result.Data.data.job_age)
			$('#hospital').html(result.Data.data.hospital)
			$('#invite_code').html(result.Data.data.invite_code)
			var service='';
			var severNamearry = result.Data.data.service_name_arr.slice(0, 3);
			for(var m=0; m<severNamearry.length; m++){
					if ( m == ( severNamearry.length-1) ){
						service+=result.Data.data.service_name_arr[m]
					}else{
						service+=result.Data.data.service_name_arr[m]+'、'
					}
			}
			$('#service_name').html(service);

			var str='';
			var labelArry = result.Data.data.label_arr.slice(0, 3);
			for(var m=0; m<labelArry.length; m++){
				if (m == (labelArry.length-1) ){
					str+=result.Data.data.label_arr[m]
				}else{
					str+=result.Data.data.label_arr[m]+'、'
				}

			}
			$('#label').html(str);

		}else{
			opCityTip(result.Data.msg)
		}
	})

	$('#appDate').change(function(){
		var birth = $(this).val();
		Ajax.UsermodifyInfo(function(result){
			if(result.Data.code == 1){
				$('#birth').html(birth)
			}else{
				opCityTip(result.Data.msg)
			}
		},'',birth,'','')
	})
 //    $('#sexSelect').change(function(){
	// 	var sex = $(this).find('option:selected').val();
	// 	Ajax.UsermodifyInfo(function(result){
	// 		if(result.Data.code == 1){
	// 			if(sex == 1){
	// 				$('#sex').html('男')
	// 			}else if(sex == 2){
	// 				$('#sex').html('女')
	// 			}

	// 		}else{
	// 			opCityTip(result.Data.msg)
	// 		}
	// 	},'','',sex,'')
	// })
	$(".meng").click(function(){
		$(this).hide();
	})
	$("#gender").click(function(){
		$(".meng").css("display","block");
		// console.log($(".meng .gender .man").css("height"));
		$(".meng .gender .man,.meng .gender .women").css("line-height",$(".meng .gender .man").css("height"));
		if($('#sex').html()=='男'){
			$(".man img").attr("src","../images/pro10.png");
			$(".women img").attr("src","../images/pro13.png");
			// $(".man img").css("display","block");
		}else{
			// $(".man img,.women img").css("display","none");
			// $(".women img").css("display","block");
			$(".man img").attr("src","../images/pro13.png");
			$(".women img").attr("src","../images/pro10.png");
		}
	})
    $('#man,#women').click(function(){
		var sex = $(this).children("span").html();
		console.log(sex);
		sex = sex == "男" ? 1 : 2;
		console.log(sex);
		Ajax.UsermodifyInfo(function(result){
			if(result.Data.code == 1){
				if(sex == 1){
					$('#sex').html('男')
					$('#toast').fadeIn(500).delay(1000).fadeOut()
				}else if(sex == 2){
					$('#sex').html('女')
					$('#toast').fadeIn(500).delay(1000).fadeOut()
				}

			}else{
				opCityTip(result.Data.msg)
			}
		},'','',sex,'');
		$(".meng").css("display","none");
	})
})
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(2000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}
