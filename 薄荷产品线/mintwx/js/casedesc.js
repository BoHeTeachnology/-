$(function(){
	var inviterUserIid=transform(window.location.search);
	var case_id=decodeURI(inviterUserIid.id);
	var type=decodeURI(inviterUserIid.type);
	if(type=='user'){
		$('#userbox').show();
	}else if(type=='doc'){
		$('#docbox,#userbox').show();
	}
	Ajax.RecordgetCatLst(function(results){
		if(results.Data.code ==1){
			var CatLst = results.Data.data;
			Ajax.RecordnewGetOne(function(result){
				if(result.Data.code ==1){
					RecordqueryHistory(result.Data.data.patient_id)
					if(result.Data.data.type==1){
						$('#record_type').html('初诊-'+result.Data.data.cat_name)
					}else if(result.Data.data.type==2){
						$('#record_type').html('复诊-'+result.Data.data.cat_name)
					}
					$('#patient_name').html(result.Data.data.patient_name)
					$('#record_time').html(result.Data.data.visit_time)
					$('#record_doctor').html(result.Data.data.doctor_name)
					if(result.Data.data.clinic_name =='' || result.Data.data.clinic_name==null){
						$('#clinicDiv').hide();
					}else{
						$('#clinicDiv').show();
						$('#record_clinic').html(result.Data.data.clinic_name)
					}  
					var content=[];//定义一个数组用来接受value  
					for(var key in result.Data.data.content){   
					    content.push(result.Data.data.content[key]);//取得value   
					}  
					var checkhtml='',curehtml='',zhusuMain='',currentill='',diagnoseMain='';
					//console.log(content)

					for(var i=0;i<content.length; i++){
						if( !(content[i].check == undefined || content[i].check=='') ){
							checkhtml+='<p class="weui_media_descs case_desc_pl" id=""><i class="blue_pots">·</i>'+content[i].check.replace(/\n/g,"<br/>")+'</p>'
						}
						if( !(content[i].cure == undefined || content[i].cure=='') ){
							curehtml+='<p class="weui_media_descs case_desc_pl" id=""><i class="blue_pots">·</i>'+content[i].cure.replace(/\n/g,"<br/>")+'</p>'
						}
						if( !(content[i].main == undefined || content[i].main=='') ){
							zhusuMain+='<p class="weui_media_descs case_desc_pl" id=""><i class="blue_pots">·</i>'+content[i].main.replace(/\n/g,"<br/>")+'</p>'
						}
						if( !(content[i].currentill == undefined || content[i].currentill=='') ){
							currentill+='<p class="weui_media_descs case_desc_pl" id=""><i class="blue_pots">·</i>'+content[i].currentill.replace(/\n/g,"<br/>")+'</p>'
						}
						//console.log(content[i].check_teeth)
						if( !(content[i].check_teeth == undefined || content[i].check_teeth=='') ){
							var strProj='';
							//console.log(content[i].index)
							for(var str in content[i].index){
								if( !(content[i].index[str].id==undefined) ){
									//console.log(content[i].index[str].id)
									for(var x=0; x<CatLst.length; x++){
										if(CatLst[x].id == content[i].index[str].id){
											if(str == 'category'){
												strProj+='&nbsp;&nbsp;'+CatLst[x].cat_name;
											}else if(str == 'subcategory'){
												strProj+='&nbsp;&nbsp;'+CatLst[x].cat_name;
											}
											
										}
									}
									
								}
							}
							diagnoseMain+='<p class="weui_media_descs case_desc_pl" id=""><i class="blue_pots">·</i>'+content[i].check_teeth+strProj+'</p>'
						}else{
							var strProj='';
							//console.log(content[i].index)
							for(var str in content[i].index){
								if( !(content[i].index[str].id==undefined) ){
									//console.log(content[i].index[str].id)
									for(var x=0; x<CatLst.length; x++){
											
										if(CatLst[x].id == content[i].index[str].id){
											console.log(str)
											if(str == 'category'){
												strProj+=CatLst[x].cat_name+'&nbsp;&nbsp;';
											}else if(str == 'subcategory'){
												strProj+=CatLst[x].cat_name+'&nbsp;&nbsp;';
											}
											
										}
									}
									
								}
							}
							if( content[i].index !=undefined){
								diagnoseMain+='<p class="weui_media_descs case_desc_pl" id=""><i class="blue_pots">·</i>'+strProj+'</p>'
							}
							
						
						}						
						
					}
					$('#checkMain').html(checkhtml) //检查
					$('#cureMain').html(curehtml) //治疗
					$('#zhusuMain').html(zhusuMain) //主诉
					$('#currentill').html(currentill) //现病史
					if(result.Data.data.content.advice != undefined){
						$('#suggestion').html( result.Data.data.content.advice.replace(/\n/g,"<br/>") ) //医嘱
					}
					$('#diagnoseMain').html(diagnoseMain) //现病史
				}else{
					opCityTip(result.Data.msg)
				}
			},case_id)

		}else{
			opCityTip(results.Data.msg)
		}
	})
			
})
function RecordqueryHistory(user_id){
	Ajax.RecordqueryHistory(function(result){
		if(result.Data.code ==1){
			forFun(result.Data.data.body_condition); //全身情况
	        forFun(result.Data.data.family_history); //家族史
	        forFun(result.Data.data.medicine) //用药史
	        forFun(result.Data.data.surgery) //手术史
	        forFun(result.Data.data.allergy) //过敏情况
	        forFun(result.Data.data.infection) //传染病
			function forFun(resultData){
				var array=[];
	            var spanStr='';
	            for(var i=0; i<resultData.length;i++){
	                if( resultData[i].state == 1 ){
	                    array.push(resultData[i])
	                }else{
	                    if( resultData[i].date !=''){
	                        array.push(resultData[i])
	                    }
	                }    
	            }
	            //console.log(array)
	            var strp = '';
	            var pot = '';
	            var Arraybox = [];
	            for(var m=0; m<array.length; m++){
	            	if( m==(array.length-1) ){
	            		pot='';
	            	}else{
	            		pot='，';
	            	}
            		if(array[m].state == 1){

            			if( array[m].date !='' && (array[m].name == '定期体检' || array[m].name == '近期体检') ){
	                        strp+='最近一次体检日期：'+array[m].date+pot
	                    }else if(array[m].date !='' && (array[m].name == '定期洗牙' ||　array[m].name == '近期洗牙') ){
	                        strp+='最近一次洗牙日期：'+array[m].date+pot
	                    }else if(array[m].date !=''){
	                    	strp+=array[m].date
	                    }else{
	                    	
	                    	strp+=array[m].name+pot;
	                    }
            		}else{
            			if( array[m].date !='' && (array[m].name == '定期体检' || array[m].name == '近期体检')　){
	                        strp+='最近一次体检日期：'+array[m].date+pot
	                    }else if(array[m].date !='' && (array[m].name == '定期洗牙' ||　array[m].name == '近期洗牙')　){
	                        strp+='最近一次洗牙日期：'+array[m].date+pot
	                    }
            		}
	            }
	            Arraybox.push(strp)
	            console.log(strp)
	            if(strp!=''){
	            	var tab_p_html = '<p class="weui_media_descs case_desc_pl" id=""><i class="blue_pots">·</i>'+strp+'</p>'
	            }
	            $('#jiwangshi').append(tab_p_html);
	        }
			$('#pastillbox').show();
		}else{
			opCityTip(result.Data.msg)
		}
	},user_id)
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
function diagnose(meta_data,case_index){
    /*var ui=[];
    for(var template_id in meta_data){
    	let { project, category, subcategory} = get_index(meta_data,template_id,case_index)
        ui.push(<span>{ (meta_data[template_id].check_teeth?meta_data[template_id].check_teeth.toString():'')+' '+ (category?category:'')+' '+(subcategory?subcategory:'')}</span>)
    }
    return ui;*/
}