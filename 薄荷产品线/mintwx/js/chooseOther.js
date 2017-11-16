$(function(){
	sessionStorage.removeItem('other_id');
	var otherinfo,otherId='';
	clearNumFun();
	var currYear = (new Date()).getFullYear();  
	$("#birth").scroller(
		$.extend(
			{preset : 'date'}, 
			{ 
				theme: 'android-ics light', 
				dateFormat : "yy-mm-dd",
				dateOrder: 'yymmdd',
		        yearText: '年',
		        lang: 'zh',
		        nowText: "今天",
		        setText: '确定',
		        cancelText: '取消',
		        startYear: currYear - 100, //开始年份
        		endYear: currYear //结束年份
			}
		)
	)
	$('#userphone').val(sessionStorage.getItem('headerPhone'))
	seeFun();
	$('#quxiao').click(function(){
		$('.opacityTipbox').hide();
	})
	$('#confirm').click(function(){
		var otherName = $('#otherName').val(),
			guanxi = $('#guanxi').val(),
			birth = $('#birth').val(),
			userphone = $('#userphone').val();
			if(sessionStorage.getItem('other_id')){
				otherId = sessionStorage.getItem('other_id');
			}else{
				otherId = '';
			}
			console.log(otherId)
		if( !checkFun(otherName,guanxi,birth,userphone) ){
			return false;
		}else{	
			otherinfo = {
				'id':otherId,
				'real_name':otherName,
				'relation':guanxi,
				'birth':birth,
				'phone':userphone
			}
			console.log(otherinfo)
			sessionStorage.setItem('otherinfo',JSON.stringify(otherinfo) )
			opCityTip('已确认')
			setTimeout(function(){
				window.history.go(-1)
			},1000); 
		}
	})
		
	$('#calcel').click(function(){
		window.history.go(-1);
	})
})
function seeFun(){
	Ajax.getRelationIndex(function(result){
		var html='';
		if(result.Data.code ==1){
			if(result.Data.data==''){
				$('#otherShow').hide();
			}else{
				$('#otherShow').show();
				for(var i=0; i<result.Data.data.length;i++){
					if(result.Data.data[i].is_own ==1 ){
						html+='<li class="grayli" data-id="'+result.Data.data[i].id+'"><span>'+result.Data.data[i].real_name+'(独立账户，不能编辑)</span><i class="deleteli"></i></li>';
					}else{
						html+='<li data-id="'+result.Data.data[i].id+'" data-birth="'+result.Data.data[i].birth+'" data-relation="'+result.Data.data[i].relation+'" data-phone="'+result.Data.data[i].phone+'">'
						html+='<span>'+result.Data.data[i].real_name+'</span><i class="deleteli"></i>'
						html+='</li>';
					}
				}
				$('#get_relation').html(html)
				$('#get_relation li').click(function(){
					if( !$(this).hasClass('grayli')){
						sessionStorage.setItem('other_id',$(this).attr('data-id'));
						$('#otherName').val( $(this).find('span').html() );
						$('#guanxi').val( $(this).attr('data-relation') );
						$('#birth').val( $(this).attr('data-birth') );
						$('#userphone').val( $(this).attr('data-phone') );
						$(this).addClass('activeli').siblings().removeClass('activeli');
					}
				})
				
				$('#get_relation li i.deleteli').click(function(){
					$('.opacityTipbox').show();
					var li_id = $(this).parent().attr('data-id');
					$('#queren').on('click',function(){
						Ajax.deleteRelation(function(modal){
							if(modal.Data.code==1){
								$('.opacityTipbox').hide();
								opCityTip('删除成功');
								seeFun();
							}else{
								opCityTip(modal.Data.msg)
							}
						},li_id)
					})
						
				})
			}
		}else{
			opCityTip(result.Data.msg)
		}
	})
}
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(1000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2),'top':'0','margin-top':'150px'})
}
function clearNumFun(){
  /*一键删除按钮*/
  $('#forOther input').keyup(function(){
    if( $(this).val() == '' ){
      $(this).siblings('.clear_num').hide();
    }else{
      $(this).siblings('.clear_num').show();
    }
  })
   $('#forOther .clear_num').click(function(){
    $(this).siblings('input').val('');
    $(this).hide();
  })
  $('#forOther input').focus(function(){
    if( $(this).val() == '' ){
      $(this).siblings('.clear_num').hide();
    }else{
      $(this).siblings('.clear_num').show();
    }
  })
  $('#forOther input').blur(function(){
  	var that=$(this);
    setTimeout(function(){
      that.siblings('.clear_num').hide();
    },100)
  })
}
function checkFun(otherName,guanxi,birth,userphone){
	var mobile_reg=/^1[3|4|5|7|8][0-9]\d{8}$/; //匹配手机正则
	if( otherName ==''){
			opCityTip('姓名不能为空')
			return false;
		}else if( guanxi ==''){
			opCityTip('关系不能为空')
			return false;
		}else if(birth==''){
			opCityTip('请选择出生日期')
			return false;
		}else if(userphone==''){
			opCityTip('联系方式不能为空')
			return false;
		}else if(!mobile_reg . test( userphone )){
			opCityTip('联系方式格式不正确')
			return false;
		}else{
			return true;
		}
}