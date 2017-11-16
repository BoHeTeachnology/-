$(function(){
    $('#routeUl li').eq(4).show();
	sessionStorage.removeItem('jump_li_past')
	$('.userContain').height( $(window).height()-190 )
    window.onresize=function(){
        $('.userContain').height( $(window).height()-190 )
    }
	var user_id = sessionStorage.getItem('user_id')
	if(sessionStorage.getItem('create_time_past')){
		SeeFun(user_id);
	}
	
	jeDate({
        dateCell:"#time1",//isinitVal:true,
        format:"YYYY-MM-DD",
        isTime:false, //isClear:false,
        choosefun:function(val){sessionStorage.setItem('jump_li_past',1)}
    })
    jeDate({
        dateCell:"#time2",//isinitVal:true,
        format:"YYYY-MM-DD",
        isTime:false, //isClear:false,
        choosefun:function(val){sessionStorage.setItem('jump_li_past',1)}
    })
	$('#surgery span input[type="checkbox"],#allergy span input[type="checkbox"],#infection span input[type="checkbox"]').change(function(){
		if( $(this).is(':checked') ){
			if( $(this).attr('data') == 'text' ){
				$(this).siblings('input').show();
			}
		}else{
			$(this).siblings('input').val('').hide();
		}
	})
	//查看，判断盒子是否显示
    if( sessionStorage.getItem('pastsee_show') =='1' ){
        $('#pastbox_see,#edit_but_see').show();
        $('#pastbox_add,#save-but').hide();
    }else{
        $('#pastbox_add,#save-but').show();
        $('#pastbox_see,#edit_but_see').hide();
    }
    //点击编辑按钮，展示出可编辑状态
    $('#edit_but_see').click(function(){
        sessionStorage.removeItem('pastsee_show')
        $('#pastbox_see,#edit_but_see').hide();
        $('#pastbox_add,#save-but').show();
    })

	$('#save-but').click(function(){
		sessionStorage.setItem('jump_li_past',0)
        addFun(user_id,function(){
        	SeeFun(user_id);
        	$('#pastbox_add,#save-but').hide();
        	$('#pastbox_see,#edit_but_see').show();
        })  
	})
	$('#backs').click(function(){
		if( sessionStorage.getItem('jump_li_past') ==1 ){
            $('#warmTipbox').show();
            $('#no_save').die().live('click',function(){
                sessionStorage.setItem('jump_li_past',0)
                $('#warmTipbox').hide();
                location.href="/mint/index.html#User";
            })
            $('#save_btn').die().live('click',function(){
                sessionStorage.setItem('jump_li_past',0)
                $('#warmTipbox').hide();
                addFun(user_id,function(){
                    setTimeout(function(){
                        location.href="/mint/index.html#User";
                    },1000)
                });
            })
        }else{
            location.href="/mint/index.html#User";
        }
	})
    /*点击跳转，判断值是否发生是那个改变*/
    $('#routeUl li a').click(function(){
        var href_data = $(this).attr('data-href');
        if( sessionStorage.getItem('jump_li_past') ==1 ){
            $('#warmTipbox').show();
            $('#no_save').die().live('click',function(){
                sessionStorage.setItem('jump_li_past',0)
                $('#warmTipbox').hide();
                location.href="/mint/html/user/"+href_data;
            })
            $('#save_btn').die().live('click',function(){
                sessionStorage.setItem('jump_li_past',0)
                $('#warmTipbox').hide();
                addFun(user_id,function(){
                    location.href="/mint/html/user/"+href_data;
                });
            })
        }else{
            location.href="/mint/html/user/"+href_data;
        }
    })
    $('#change input').change(function(){
        sessionStorage.setItem('jump_li_past',1)
    })
    $('.close_x').click(function(){
        $('#warmTipbox').hide();
    })
})

function addFun(user_id,callback){
	var body_condition =[],
			family_history =[],
			medicine =[],
			surgery =[],
			allergy =[],
			infection =[];
		objFun('body_condition',body_condition);//全身情况
		objFun('family_history',family_history)//家族史
		objFun('medicine',medicine)//用药史
		objFun('surgery',surgery)//手术史
		objFun('allergy',allergy)//过敏情况
		objFun('infection',infection)//传染病
		function objFun(idName,ArrayName){
			$('#'+idName+' span input[type="checkbox"]').each(function(){
				var thisDate =$(this).siblings('input').val() || '';
				if($(this).is(':checked')){
					var Obj = {
						"state":'1', //状态
						"name":$(this).val(), //名称
						"date":thisDate //日期
					}
				}else{
					var Obj = {
						"state":'0', //状态
						"name":$(this).val(), //名称
						"date":thisDate //日期
					}
				}
				ArrayName.push(Obj )
			})
		}
		//console.log( infection )
		//console.log(body_condition,family_history,medicine,surgery,allergy,infection)
		var pastObj={
			"body_condition":body_condition,
			"family_history":family_history,
			"medicine":medicine,
			"surgery":surgery,
			"allergy":allergy,
			"infection":infection
		}
		
		var pastObj_json = JSON.stringify(pastObj)
		console.log(pastObj_json)
		AjaxObj.UsereditArchives(function(result){
			if( result.Data.code == 1 ){
                $('.opacity-tip').fadeIn(500).delay(2000).fadeOut() //添加成功
                $('.opacity-tip p').html('<span class="success">保存成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                sessionStorage.setItem('pastsee_show','1')
                AjaxObj.UsersltDateRecords(function(model){
                	if(model.Data.code ==1){
                		sessionStorage.setItem('create_time_past',model.Data.data[0].create_time)
                		setTimeout(function(){
                			$('.opacity-tip').hide();
                			callback();
                		},1000)
                		
                	}
                },user_id,1)
                
            }else{
            	if( result.Data.msg == '缺少用户id！'){
            		$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
	                $('.opacity-tip p').html('请先去完善基础信息').css({'margin-left':-($('.opacity-tip p').width()/2)})
	                setTimeout(function(){
	                	location.href="/mint/html/user/add_info.html#User";
	                },1000)
            	}else{
	                $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
	                $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
	               }
            }
		},user_id,pastObj_json,1)
}

function SeeFun(user_id){
	AjaxObj.UsersltArchives(function(result){
		//console.log(result.Data)
		forFun('body_condition',result.Data.body_condition); //全身情况
		forFun('family_history',result.Data.family_history); //家族史
		forFun('medicine',result.Data.medicine) //用药史
		forFun('surgery',result.Data.surgery) //手术史
		forFun('allergy',result.Data.allergy) //过敏情况
		forFun('infection',result.Data.infection) //传染病
		function forFun(idName,resultData){
			for(var i=0; i<resultData.length;i++){
				$('#'+idName+' span input[value="'+result.Data.body_condition[i].name+'"]').siblings('input').val(result.Data.body_condition[i].date)
				if( resultData[i].state == 1 ){
					$('#'+idName+' span input[value="'+resultData[i].name+'"]').attr('checked',true)
					$('#'+idName+' span input[value="'+resultData[i].name+'"]').siblings('input').show().val(resultData[i].date);
				}
					
			}
		}

		forFun2('body_condition_desc_see',result.Data.body_condition,'暂时无相关数据'); //全身情况
        forFun2('family_history_desc_see',result.Data.family_history,'无家族史'); //家族史
        forFun2('medicine_desc_see',result.Data.medicine,'无用药史') //用药史
        forFun2('surgery_desc_see',result.Data.surgery,'无手术史') //手术史
        forFun2('allergy_desc_see',result.Data.allergy,'无过敏情况') //过敏情况
        forFun2('infection_desc_see',result.Data.infection,'无传染病') //传染病
        function forFun2(idName,resultData,desc_word){
            var html='';
            for(var i=0; i<resultData.length;i++){
                $('#'+idName+' span input[value="'+result.Data.body_condition[i].name+'"]').siblings('input').val(result.Data.body_condition[i].date)
                if( resultData[i].state == 1 ){
                    html+='<span>'+resultData[i].name+'</span>'
                    if( resultData[i].date !='' && (resultData[i].name == '定期体检' || resultData[i].name == '近期体检') ){
                        html+='<span>最近一次体检日期：'+resultData[i].date+'</span>'
                    }else if(resultData[i].date !='' && (resultData[i].name == '定期洗牙' || resultData[i].name == '近期洗牙') ){
                        html+='<span>最近一次洗牙日期：'+resultData[i].date+'</span>'
                    }else{
                        html+='<span>'+resultData[i].date+'</span>'
                    }
                    
                }else{
                    if( resultData[i].date !='' && (resultData[i].name == '定期体检' || resultData[i].name == '近期体检') ){
                        html+='<span>最近一次体检日期：'+resultData[i].date+'</span>'
                    }else if(resultData[i].date !='' &&　(resultData[i].name == '定期洗牙' || resultData[i].name == '近期洗牙') ){
                        html+='<span>最近一次洗牙日期：'+resultData[i].date+'</span>'
                    } 
                }    
            }
            $('#'+idName).html(html)
            if($('#'+idName+' span').length==0){
                $('#'+idName).html('<span>'+desc_word+'</span>');
            }
        }

	},user_id,sessionStorage.getItem('create_time_past'),1)
}