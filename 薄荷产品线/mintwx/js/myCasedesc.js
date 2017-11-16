$(function(){
	var inviterUserIid=transform(window.location.search);
	var id=decodeURI(inviterUserIid.id);
	var v1 = new Vue({
        el:'#app',
        data:{
            data_son:{

            },
            data_brother:{

            }
        }
    })
	Ajax.RecordgetOne(function(result){
		if(result.Data.code == 1 ){
			var patient_id=result.Data.data.patient_id;
			var type = result.Data.data.type == 1? '初筛报告' :'门诊病历';
			if(result.Data.data.type==1){
				$('#shai_report1').show();
				$('#shai_report2').hide();
				$('#chuzhi').html('综合意见')
			}else{
				$('#shai_report1').hide();
				$('#shai_report2').show();
				$('#chuzhi').html('处置').css('width','60px');
				$('#tooth_zhen_pic img').attr('src','/mintwx/images/ya5.png')
				$('#tooth_zhi_pic img').attr('src','/mintwx/images/ya6.png')
			}
			if( result.Data.data.clinic_name =='' || result.Data.data.clinic_name == null){
				$('#clinicDiv').hide();
			}else{
				$('#clinicDiv').show();
				$('#clinic_name').html(result.Data.data.clinic_name);
			}
			$('#patient_name').html(result.Data.data.patient_name);
			//$('#record_name').html(type);
			$('#record_time').html(result.Data.data.visit_time);
			$('#record_doctor').html(result.Data.data.doctor_name);
			$('#suggestion').html(result.Data.data.tooth_suggestion.replace(/\n/g,"<br/>"));
			$('#record_content').html(result.Data.data.record_content.replace(/\n/g,"<br/>"))
			$('#treatment').html(result.Data.data.treatment.replace(/\n/g,"<br/>"))
			console.log(result.Data.data.tooth_type,result.Data.data.tooth_square)
			if(result.Data.data.tooth_type=='1'){
				$('#tooth_around_pic img').attr('src','/mintwx/images/ya1.png')
				$('#tooth_around_title').html('牙周炎早期')
				$('#tooth_around_desc').html('牙龈炎或牙周炎早期，牙龈红肿，牙槽骨没有或刚刚开始少量流失')
			}else if(result.Data.data.tooth_type=='2'){
				$('#tooth_around_pic img').attr('src','/mintwx/images/ya2.png')
				$('#tooth_around_title').html('牙周炎中期')
				$('#tooth_around_desc').html('牙周炎中期，牙龈红肿，牙槽骨有明显流失，牙缝开始变大，消肿后牙龈退缩明显');
			}else if(result.Data.data.tooth_type=='3'){
				$('#tooth_around_pic img').attr('src','/mintwx/images/ya3.png')
				$('#tooth_around_title').html('牙周炎晚期')
				$('#tooth_around_desc').html('牙周炎晚期，开始变身“常牙怪”——牙槽骨流失进一步加重，牙龈退缩更明显，牙齿被动“变长”，并开始松动');
			}else if(result.Data.data.tooth_type=='4'){
				$('#tooth_around_pic img').attr('src','/mintwx/images/ya4.png')
				$('#tooth_around_title').html('医嘱')
				$('#tooth_around_desc').html('你可以去拔牙了！牙医已经不想和你说话，并向你扔来一把拔牙钳，和你摇摇欲坠的牙齿');
			}
			if(result.Data.data.tooth_square=='1'){
				$('#tooth_list_pic img').attr('src','/mintwx/images/yapic_02.png')
				$('#tooth_list_title').html('牙列基本整齐')
				$('#tooth_list_desc').html('牙列的整齐和口腔的卫生有利于牙周组织的健康，请继续保持。');
			}else if(result.Data.data.tooth_square=='2'){
				$('#tooth_list_pic img').attr('src','/mintwx/images/yapic_01.png')
				$('#tooth_list_title').html('牙列不齐')
				$('#tooth_list_desc').html('牙列不齐可能造成患者的咀嚼功能异常、影响牙周组织健康、影响面容美观。');
				
			}
			$('#relation').html(sessionStorage.getItem('relation'))
			if( result.Data.data.toothpic_id == '' || result.Data.data.toothpic_id == '0' ){
				$('#tooth_body_main').hide();
			}else{
				RecordgetTooth(result.Data.data.toothpic_id,v1)
			}
			
			
		}else{
			alert(result.Data.msg)
		}
	},id)




})
function RecordgetTooth(toothpic_id,v1){
	Ajax.RecordgetTooth(function(result){
		if(result.Data.code ==1){
			$('#tooth_body_main').show();
			v1.data_son = result.Data.data[0];
			console.log(v1.data_son)
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
		}else{
			$('#tooth_body_main').hide();
			//opCityTip(result.Data.msg)
		}
	},toothpic_id)
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
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(1000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}