$(function(){
    $('.wrapper1').height($(window).height() );
    $('.wrapper1').css('overflow-y','hidden')
	var v1 = new Vue({
        el:'#app',
        data:{
            data_son:{

            },
            data_brother:{

            }
        }
    })
    var record_id = sessionStorage.getItem('idSee')
	$('.userContain').height( $(window).height()-145 )
    window.onresize=function(){
        $('.userContain').height( $(window).height()-145 )
    }	


	AjaxObj.RecordgetOne(function(result){
		if(result.Data.code ==1 ){
            if(result.Data.data.date == ''){
                $('#tooth_pic_main').hide();
                $('#time_showbox').html('没有牙位图记录！')
            }else{
                getEarliestTooth(result.Data.data.patient_id,result.Data.data.date,v1);
            }
			
			var thisId = result.Data.data.patient_id;
            AjaxObj.getRelationUserParent(function(modal){
		    	if(modal.Data.code ==1){
		    		if(modal.Data.data !=''){
		    			$('#desc_tip').html('与 '+modal.Data.data.real_name+'&nbsp;的关系：'+modal.Data.data.relation)
		    		}
		    	}
		    },thisId)
            if(result.Data.data.is_send==1){
                $('#send-but').hide();
                $('#sent').show();
            }else{
                $('#send-but').show();
                $('#sent').hide();
            }
            if(result.Data.data.type==1){
                $('#types').html('初筛报告');
                $('#desc_span').html('综合意见：')
            } else if(result.Data.data.type==2){
                $('#types').html('门诊病历')
                $('#desc_span').html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;处置：')
            }
			$('#J-xl').html(result.Data.data.visit_time);
			$('#Valuser').html(result.Data.data.patient_name+'('+result.Data.data.patient_phone+')');
			$('#DovVal').html(result.Data.data.doctor_name+'('+result.Data.data.doctor_phone+')');
			$('#ClinkVal').html(result.Data.data.clinic_name);
			$('#record_content').html(result.Data.data.record_content.replace(/\n/g,"<br/>"));
			$('#tag_name').html(result.Data.data.label)
			$('#treatment').html(result.Data.data.treatment.replace(/\n/g,"<br/>"))
			$('#tooth_suggestion').html(result.Data.data.tooth_suggestion.replace(/\n/g,"<br/>"))
	        if(result.Data.data.file_data != ''){
	            var li='';
	            for(var i=0;i<result.Data.data.file_data.length; i++){
	                li+='<li><a href="'+result.Data.data.file_data[i].file_path+'" target="_Blank"><img src="'+result.Data.data.file_data[i].file_path+'" alt="" /></a></li>' 
	            }
	            $('#filePath').append( li )
	        }  
	        if(result.Data.data.tooth_type ==1){
	        	$('#tooth_type').html('早期')
	        }else if(result.Data.data.tooth_type ==2){
	        	$('#tooth_type').html('中期')
	        }else if(result.Data.data.tooth_type ==3){
	        	$('#tooth_type').html('晚期')
	        }else if(result.Data.data.tooth_type ==4){
	        	$('#tooth_type').html('医嘱')
	        }
	        if(result.Data.data.tooth_square ==1){
	        	$('#tooth_square').html('牙列基本整齐')
	        }else if(result.Data.data.tooth_square ==2){
	        	$('#tooth_square').html('牙列不齐')
	        }
		}else{
			opCityTip(result.Data.msg)
		}
	},record_id)
    $('#backs').click(function(){
        if(sessionStorage.getItem('fromTootnhtml') == '1' ){
            location.href="/mint/html/user/add_tooth.html#User";
        }else{
            window.history.go(-1)
        }
    })
	$('#edit-but').click(function(){
        location.href="/mint/html/illLibrary/edit.html#Record";
        sessionStorage.setItem('record_id',record_id)
    })
    $('#send-but').click(function(){
        AjaxObj.sendWeixinMsg(function(modal){
            if(modal.Data.code ==1){
                $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                $('.opacity-tip p').html('发送成功').css({'margin-left':-($('.opacity-tip p').width()/2)})
                $('#send-but').hide();
                $('#sent').show();
            }else{
                opCityTip(modal.Data.msg)
            }
        },record_id)
    })

})
function getEarliestTooth(user_id,creat_time,v1){
    AjaxObj.RecordsltArchives(function(result){
        if(result.Data.code ==1){
            sessionStorage.setItem('toothpic_id',result.Data.id)
            v1.data_son = result.Data.data[0];
            $('#tooth_pic_main').show();
            $('#time_showbox').html(result.Data.date);
            var flag = 1;
            for(var i=0;i<result.Data.data[0].teeth_arr.length;i++){
                if(result.Data.data[0].teeth_arr[i].content.length != 0){
                  flag =0;
                  break;
                }else{
                  continue;
                }
            }
            if(flag==1){
                var arr = []
                for(var i =0;i<result.Data.data[0].teeth_child_arr.length;i++){
                    if(result.Data.data[0].teeth_child_arr[i].content.length!=0){
                        var obj = {
                          name:result.Data.data[0].teeth_child_arr[i].name,
                          content:[]
                        }
                        for(var j =0;j<result.Data.data[0].teeth_child_arr[i].content.length;j++){
                          obj.content.push(result.Data.data[0].teeth_child_arr[i].content[j].name);
                        }
                        arr.push(obj);
                    }
                }
            }else{
                var arr = []
                for(var i =0;i<result.Data.data[0].teeth_arr.length;i++){
                if(result.Data.data[0].teeth_arr[i].content.length!=0){
                    var obj = {
                        name:result.Data.data[0].teeth_arr[i].name,
                        content:[]
                      }
                      for(var j =0;j<result.Data.data[0].teeth_arr[i].content.length;j++){
                        obj.content.push(result.Data.data[0].teeth_arr[i].content[j].name);
                      }
                      arr.push(obj);
                    }
                }
            }
            v1.data_brother=arr;
            $('#time_showbox,#tooth_pic_main').show();
            $('#time_showbox').html(creat_time)
        }else{
            toothpic_id = result.Data.id;
            $('#tooth_pic_main').hide();
            $('#time_showbox').html(result.Data.data);
        }
    },user_id,creat_time,3)
}
function opCityTip(tipText){
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html('<span class="wrong">'+tipText+'<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
}