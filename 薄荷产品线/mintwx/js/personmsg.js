$(function(){
var inviterUserIid=transform(window.location.search);
var mine=decodeURI(inviterUserIid.mine);
if( mine == 1){
	$('#btnbox').show();
}else{
	$('#btnbox').hide();
}

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
			if(result.Data.data.photo == '/mintAdmin/up/images/m.jpg'){
				$('#doctorPic').html('<img src="'+result.Data.data.headimgurl+'" alt="">')
			}else{
				$('#doctorPic').html('<img src="'+result.Data.data.photo+'" alt="">')
			}
			
			$('#userName').html(result.Data.data.nickname);
			$('#name').val(result.Data.data.name);
			if(result.Data.data.company_code == '222229'){
				$('#invite_code').val('')
			}else{
				$('#invite_code').val(result.Data.data.company_code)
			}
			
			sessionStorage.setItem('company_code',result.Data.data.company_code)
			if(result.Data.data.birth == '' || result.Data.data.birth ==null){
				$('#appDate').val('1985-01-01')
			}else{
				$('#birth').html(result.Data.data.birth)
				$('#appDate').val(result.Data.data.birth)
			}
			
			$('#sexSelect option[value="'+result.Data.data.sex+'"]').attr('selected',true)
			if(result.Data.data.sex ==1){
				$('#sex').html('男')
			}else if(result.Data.data.sex ==2){
				$('#sex').html('女')
			}
			$('#phone').val(result.Data.data.phone)
			// $("#sex").html(result.Data.data.sex);
			gray()
		}else{
			opCityTip(result.Data.msg)
		}
	}) 
	$('#nextbtn').click(function(){
		var name =$('#name').val();
		var sex = $('#sexSelect option:selected').val();
		var company_code =$('#invite_code').val();
		//console.log(name,sex,company_code)
		if(name == '' || sex == '' || company_code==''){
			opCityTip('请完善个人信息')
		}else{
			location.href="http://"+location.host+'/mintwx/html/order/chooseproj.html';
		}
	})

	$('#appDate').change(function(){
		var birth = $(this).val();
		$('#birth').html(birth)
	})
	/*修改性别  */
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
		$('#sex').html(sex)
		gray();
	})
	
	$('#name,#invite_code,#phone').keyup(function(){
		gray()
	})
	$('#saveBtn').click(function(){
		var name = $('#name').val(),
			name_reg = /^[A-z]+$|^[\u4E00-\u9FA5]+$/,
			birth = $('#appDate').val(),
			sex = $('#sex').html() == '男'? 1:2,
			company_code = $('#invite_code').val() ==''? '222229':$('#invite_code').val(),
			phone = $('#phone').val(),
			mobile_reg=/^1[3|4|5|7|8][0-9]\d{8}$/; //匹配手机正则;

			console.log(name,birth,sex,company_code,phone)
			if(name == ''){
				opCityTip('请输入姓名')
				$('#name').focus().val('');
			}else if( !name_reg.test(name) ){
				opCityTip('只支持汉字或英文')
				$('#name').focus().val('');
			}else if(sex == ''){
				opCityTip('请选择性别')
			}else if(company_code == ''){
				opCityTip('请输入邀请码')
				$('#company_code').focus().val('');
			}else if(phone == ''){
				opCityTip('请输入您的联系电话')
				$('#phone').focus().val('');
			}else if(!mobile_reg.test(phone) ){
				opCityTip('请输入您的联系电话')
				$('#phone').focus().val('');
			}else{
				if(mine==1){
					Ajax.UsermodifyInfo(function(result){
						if(result.Data.code == 1){
							$('#toast').fadeIn(500).delay(1000).fadeOut()
							setTimeout(function(){
				                location.href='http://'+location.host+"/mintwx/html/order/chooseproj.html";
				            },1000)
						}else{
							opCityTip(result.Data.msg)
						}
					},name,birth,sex,phone,company_code)
					
				}else{
					Ajax.UsermodifyInfo(function(result){
						if(result.Data.code == 1){
							$('#toast').fadeIn(500).delay(1000).fadeOut()
							setTimeout(function(){
								location.href='http://'+location.host+"//mintwx/html/mine.html";
				                
				            },1000)
						}else{
							opCityTip(result.Data.msg)
						}
					},name,birth,sex,phone,company_code)
				}
					
			}
	})

	$('#calselbtn').click(function(){
		window.history.go(-1);	
	})

	/*一键删除按钮*/
	$('.myinputPad input').keyup(function(){
		if( $(this).val() == '' ){
			$(this).parents('.weui_cell_hd').siblings('.clear_num').hide();
		}else{
			$(this).parents('.weui_cell_hd').siblings('.clear_num').show();
		}
	})
	$('.myinputPad .clear_num').click(function(){
		$(this).siblings('.weui_cell_hd').find('input').val('');
		$(this).hide();
	})
	$('.myinputPad input').focus(function(){
		if( $(this).val() == '' ){
			$(this).parents('.weui_cell_hd').siblings('.clear_num').hide();
		}else{
			$(this).parents('.weui_cell_hd').siblings('.clear_num').show();
		}
	})
	$('.myinputPad input').blur(function(){
		var that = $(this);
		setTimeout(function(){
			that.parents('.weui_cell_hd').siblings('.clear_num').hide();
		},100)
	})

	
})
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

function gray(){
	var name = $('#name').val(),
		appDate = $('#appDate').val(),
		sex = $('#sex').html(),
		invite_code = $('#invite_code').val(),
		phone = $('#phone').val();
		
	if( name == '' && sex == '' && invite_code == '' && phone == '' ){
		$('#saveBtn').addClass('addgray').prop('disabled',true)
	}else{
		$('#saveBtn').removeClass('addgray').prop('disabled',false)
	}
}