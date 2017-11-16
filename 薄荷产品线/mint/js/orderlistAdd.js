$(function(){
	sessionStorage.removeItem('get_month');
	var serviceId='';
	var TMonth = ((new Date()).getMonth()+1) <10? '0'+((new Date()).getMonth()+1) : ((new Date()).getMonth()+1) ;
	var TDay = (new Date()).getDate()<10? '0'+ (new Date()).getDate() : (new Date()).getDate();
    var TodayD = (new Date()).getFullYear()+'-'+TMonth+'-'+TDay;
    var thisMonth = (new Date()).getFullYear()+'-'+TMonth;

    var arr = TodayD.split('-');
	var year = arr[0]; //获取当前日期的年份
	var month = arr[1]; //获取当前日期的月份
	var year2 =year;
	var month2 = parseInt(month) + 1;
	if (month2 == 13) {
	    year2 = parseInt(year2) + 1;
	    month2 = 1;
	}
	console.log(year2)
	month2 = month2<10 ? '0' + month2 : month2;
	var nextMonth = year2 + '-' + month2; //获取下个月的日期
	/*用户查找*/
	AjaxObj.IndexuserLst(function(result){
    	if(result.Data.code == 1){
    		var html='';
    		for(var i=0;i<result.Data.data.length;i++){
    			var accountPhone =result.Data.data[i].account=='' ? '' : '&nbsp;&nbsp;('+result.Data.data[i].account+')';
    			var listname = result.Data.data[i].name ==''? '' : result.Data.data[i].name+'&nbsp;&nbsp;';
                html+='<li class="filter-item items" data-filter="'+listname+result.Data.data[i].phone+'('+result.Data.data[i].account+')'+'" data-value="'+result.Data.data[i].id+'" data-name="'+result.Data.data[i].name+'" data-phone="'+result.Data.data[i].phone+'"><span>'+listname+'</span>'+result.Data.data[i].phone+accountPhone+'</li>'
    		}
    		$('#patient_id').append(html)
            $('body').append('<script src="/mint/fillter/tabcomplete.min.js"></script><script src="/mint/fillter/livefilter.min.js"></script><script src="/mint/fillter/src/bootstrap-select.js"></script>');
    	    $('#patient_id li').click(function(){
    	    	$('#save-but').attr('disabled',false)
                var dataVal = $(this).attr('data-value');
                var dataName = $(this).attr('data-name')
                $('#PatInputbox .text').attr('data-val',dataVal);
                $('#PatInputbox .text').attr('data-name',dataName)
                
                AjaxObj.getAppointmentInfo(function(modal){
                	if(modal.Data.code ==1){
                		if( modal.Data.data.is_self == 1){//是本人
                			$('.input_box_choose').show();
                			$('#guanxi').hide();
                			$('#patient_name').val(modal.Data.data.patient_name);
                			$('#patient_name').attr('data_id',modal.Data.data.patient_id)
                			$('#is_self').val('是');
                			$('#relations').val('');
                			$('#contact_tel').val(modal.Data.data.contact_tel);
                		}else{
                			$('.input_box_choose,#guanxi').show();
                			$('#patient_name').val(modal.Data.data.patient_name);
                			$('#patient_name').attr('data_id',modal.Data.data.patient_id)
                			$('#is_self').val('否');
                			$('#relations').val(modal.Data.data.relation);
                			$('#contact_tel').val(modal.Data.data.contact_tel);
                		}
                	}else{
                		$('.input_box_choose').hide();
                		$('#PatInputbox .text').html('请选择就诊人');
                		$('#PatInputbox .text').attr('data-val','');
                		$('#PatInputbox .text').attr('id','PatVal');
                		$('#patient_name').val('');
            			$('#patient_name').attr('data_id','')
            			$('#is_self').val('否');
            			$('#relations').val('');
            			$('#contact_tel').val('');
                		opCityTip('',modal.Data.msg)
                	}
                },dataVal)
            })
        }else{
    		$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
    	}
    },1)
console.log('aaaaaa')
	//服务项目查找
	AjaxObj.AppointmentserviceLst(function(result){
    	if(result.Data.code == 1){
    		var html='';
    		for(var i=0;i<result.Data.data.length;i++){
    			html+='<option value="'+result.Data.data[i].id+'">'+result.Data.data[i].service_name+'</option>'
    		}
    		$('#service_id').append(html)
    		serviceId = $('#service_id option:selected').val();
    		getDayStatus(serviceId,thisMonth,nextMonth,TodayD)
        }else{
    		$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
    	}
    })
	//所属公司查找
	AjaxObj.AppointmentcompanyLst(function(result){
    	if(result.Data.code == 1){
    		var html='';
    		for(var i=0;i<result.Data.data.length;i++){
    			html+='<option value="'+result.Data.data[i].company_code+'">'+result.Data.data[i].company_name+'</option>'
    		}
    		$('#company_name').append(html)
        }else{
    		$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
    	}
    })
	$('#service_id').change(function(){
		serviceId = $(this).val();
		getDayStatus(serviceId,thisMonth,nextMonth,TodayD)
	})
    

    /*日历插件*/
<<<<<<< .mine
	jeDate({
		dateCell:"#visit_time",//isinitVal:true,
		format:"YYYY-MM-DD",
		isTime:false, //isClear:false,
		minDate:TodayD,
		choosefun:function(visit_date){
			var service_id = $('#service_id option:selected').val();
			//console.log(visit_date,service_id)
			$('#timeArry').html('')
			//查找医生
		    AjaxObj.getDoctorLst(function(result){
		    	if(result.Data.code == 1){
						console.log(result.Data.data)
		    		var html='';
		    		if( result.Data.data == null || result.Data.data == ''){
		    			if(result.Data.is_this_month ==0){
		    				opCityTip('visit_time','该日期还未有出诊医生信息')
		    			}else{
		    				opCityTip('visit_time','您预约的日期已约满')
		    			}
		    			$('#doctor_id').html('<option value="">请选择</option>')
		    			$('#clink').val('');
		    		}else{
		    			for(var i=0;i<result.Data.data.length;i++){
			                html+='<option value="'+result.Data.data[i].id+'" clinic_name="'+result.Data.data[i].clinic_name+'" clinic_id="'+result.Data.data[i].clinic_id+'">'+result.Data.data[i].name+'</option>'
			            }
			    		$('#doctor_id').html('<option value="">请选择</option>'+html)
			    		$('#doctor_id').die().live('change',function(){
			    			$('#save-but').attr('disabled',false)
			    			var docid = $(this).val();
			    			$('#clink').val( $(this).find('option:selected').attr('clinic_name') )
			    			AjaxObj.getOneVisitData(function(mode){
			    				if(mode.Data.code==1){
			    					if(mode.Data.data != null || mode.Data.data != '' ){
				    					var str1 ='',str2 ='',str3 ='';
											console.log('00000')
											console.log(mode.Data.data.time_arr);
				    					for(var n=0; n<mode.Data.data.time_arr.length; n++){
				    						var timeParseInt = parseInt(mode.Data.data.time_arr[n].visit_time);

				    						if(mode.Data.data.time_arr[n].is_have ==1){
				    							if(timeParseInt>=9 && timeParseInt<13){
														console.log(11111)
			    									str1+='<li class="gray"><span>'+mode.Data.data.time_arr[n].visit_time+'</span></li>'
			    								}else if(timeParseInt>=13 && timeParseInt<18){
														console.log(222222)

			    									str2+='<li class="gray"><span>'+mode.Data.data.time_arr[n].visit_time+'</span></li>'
			    								}else if(timeParseInt>=19 && timeParseInt<=21){
														console.log(33333)

			    									str3+='<li class="gray"><span>'+mode.Data.data.time_arr[n].visit_time+'</span></li>'
			    								}

				    						}else{
				    							if(timeParseInt>=9 && timeParseInt<13){
														console.log(4444)

			    									str1+='<li><span>'+mode.Data.data.time_arr[n].visit_time+'</span></li>'
			    								}else if(timeParseInt>=13 && timeParseInt<18){
														console.log(5555)

			    									str2+='<li><span>'+mode.Data.data.time_arr[n].visit_time+'</span></li>'
			    								}else if(timeParseInt>=19 && timeParseInt<=21){
														console.log(6666)

			    									str3+='<li><span>'+mode.Data.data.time_arr[n].visit_time+'</span></li>'
			    								}

				    						}
				    					}
				    					var h2str1 = str1 =='' ? '<h2 class="timeh2" style="display:none">上午</h2>' : '<h2 class="timeh2">上午</h2>';
					    				var h2str2 = str2 =='' ? '<h2 class="timeh2" style="display:none">下午</h2>' : '<h2 class="timeh2">下午</h2>';
					    				var h2str3 = str3 =='' ? '<h2 class="timeh2" style="display:none">晚诊</h2>' : '<h2 class="timeh2">晚诊</h2>';
					    				$('#timeArry').html(h2str1+str1+h2str2+str2+h2str3+str3)
				    					$('#timeArry li').click(function(){
				    						$('#save-but').attr('disabled',false)
										    if( ! $(this).hasClass('gray') ){
										        $(this).addClass('cur').siblings().removeClass('cur');
										    }else{
										    	$('#timeArry').siblings('p').html('')
										    }
									    })
									}
			    				}else{
			    					opCityTip('',mode.Data.msg)
			    				}
			    			},visit_date,docid)
			    		})
		    		}
		        }else{
		    		$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
		            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
		    	}
		    },visit_date,service_id)

		}
	})

=======
    $('#visit_time').click(function(event){
    	$(this).css('border','solid 1px #ccc');
    	$(this).siblings('p').html('')
    	$("#inline-calendar").show();
    	event.stopPropagation();
    })
    $(document).click(function(){
    	$("#inline-calendar").hide();
    })
    $("#inline-calendar").click(function(event){
    	event.stopPropagation();
    })
>>>>>>> .r14544
	$('#PatInputbox button').click(function(){
    	$(this).css({'border':'solid 1px #ccc'});
    	$(this).parents('.col-sm-8').siblings('p').html('')
    })
	$('#company_name').change(function(){
		$('#save-but').attr('disabled',false)
		$('.inviteCode').html('邀请码：<font id="invite_code">'+$(this).val()+'</font>')
	})
	$('#is_self input').change(function(){
		$('.errorTip').html('');
    	if($(this).val() == 2 ){
    		$('#guanxi').show();
    	}else{
    		$('#guanxi').hide();
    	}
    })
	$('.container-wrapper input').focus(function(){
		$('#save-but').attr('disabled',false)
	})
	$('#selectTime').change(function(){
		$('#timeArry li').removeClass('cur')
	})
	$('#save-but').click(function(){
		$(this).attr('disabled',true)
		//patient_name,patient_id,contact_tel,is_self,relations,invite_code,service_id,project_name,doctor_id,clinic_id,clinic_name,visit_time,remark,is_return
		var timedesc = $('#timeArry li.cur').eq(0).find('span').html() == undefined ? '': $('#timeArry li.cur').eq(0).find('span').html();
		var visitDate = $('#visit_time').val();
		var patient_name =$('#patient_name').val(),
			patient_id =  $('#patient_name').attr('data_id'),//预约人id
			contact_tel = $('#contact_tel').val(),
			is_self = $('#is_self').val()=='是'? '1':'2',
			relations = $('#relations').val() || '',
			invite_code = $('#invite_code').html() || '',
			service_id = $('#service_id option:selected').val(),
			project_name = $('#service_id option:selected').text(),
			doctor_id = $('#doctor_id option:selected').val(),
			clinic_id = $('#doctor_id option:selected').attr('clinic_id') || '',
			clinic_name = $('#doctor_id option:selected').attr('clinic_name') || '',
			visit_time =  visitDate+' '+ timedesc || '',
			remark = $('#remark').val(),
			visit_id =$('#PatInputbox .text').attr('data-val') || $('#PatVal').attr('data-val'),
			time_long = $('#selectTime option:selected').val(),
			is_return = 0;
			console.log(timedesc)
			//console.log(patient_id,':'+visit_id,patient_name)
			//console.log(patient_name,patient_id,contact_tel,is_self,relations,invite_code,service_id,project_name,doctor_id,clinic_id,clinic_name,visit_time,remark,is_return,visit_id)
			if( !ifFun(visit_id,invite_code,service_id,doctor_id,visit_time,timedesc,visitDate) ){
				return false;
			}else{
				AjaxObj.Appointmentadd(function(result){
					if( result.Data.code == 1 ){
						$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                        $('.opacity-tip p').html('<span class="success">添加成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                        setTimeout(function(){
                           location.href="/mint/html/orderlist/index.html#Appointment";
                        },500);
					}else{
						if(result.Data.msg == '邀请码不存在'){
							opCityTip('invite_code','邀请码不存在')
						}else{
							opCityTip('',result.Data.msg)
						}
						//console.log(result.Data.msg)
					}
<<<<<<< .mine
				},patient_name,patient_id,contact_tel,is_self,relations,invite_code,service_id,project_name,doctor_id,clinic_id,clinic_name,visit_time,remark,is_return,visit_id)

=======
				},patient_name,patient_id,contact_tel,is_self,relations,invite_code,service_id,project_name,doctor_id,clinic_id,clinic_name,visit_time,remark,is_return,visit_id,time_long)
>>>>>>> .r15509
			}
	})
})
function getDayStatus(service_id,thisMonth,nextMonth,TodayD){
    //根据返回的值判断获取本月或者下月的最后一天。
    var nextDataArray = new Array();
    var dataArray = new Array();
	AjaxObj.getDayStatus(function(result){
		var day1D = new Date(TodayD);
		day1D.setTime(day1D.getTime()-24*60*60*1000);
		var MonthDATE = (day1D.getMonth()+1)<10 ? '0'+(day1D.getMonth()+1) : (day1D.getMonth()+1);
		var DateDATE = day1D.getDate()<10 ? '0'+day1D.getDate() : day1D.getDate();
		var TodayBefore = day1D.getFullYear()+"-" + MonthDATE + "-" + DateDATE;
		var lastMothDate ='';//下个月或者本月的最后一天
		if(result.Data.code ==1){
		  var this_month_day = result.Data.data[result.Data.data.length-1].day_time; //本月最后一天
		  for(var i=0; i<result.Data.data.length; i++){
		    if(result.Data.data[i].status!=0){
		      var day_time = result.Data.data[i].day_time;
		      dataArray.push(day_time)
		    }
		    if( result.Data.data[i].day_time == TodayBefore){
		      dataArray.splice(0,i);
		    }
		  }
		    AjaxObj.getDayStatus(function(modal){
		      if(modal.Data.code ==1){
		        for(var i=0; i<modal.Data.data.length; i++){
		          if(modal.Data.data[i].status!=0){
		            var day_time = modal.Data.data[i].day_time;
		            nextDataArray.push(day_time)
		          }
		        }
		        //console.log(nextDataArray)
		        if( nextDataArray == '' || nextDataArray ==[]){
		          lastMothDate = this_month_day;
		        }else{
		          lastMothDate =  modal.Data.data[modal.Data.data.length-1].day_time;
		        }
		        //console.log(lastMothDate)
		        
		        $("#inline-calendar").calendar({
		              container: "#inline-calendar",
		              input: "#visit_time",
		              minDate:TodayBefore,
		              maxDate:lastMothDate,
		              touchMove:true,
		              value:'',
		            onMonthYearChangeEnd:function(p,year,month){
		                $('.opcitybox').show();
		                $('.opcitybox span').html('加载中').css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
		                if( (month+1)<10 ){
		                  var this_month = year+'-'+'0'+(month+1);
		                }else{
		                  var this_month = year+'-'+(month+1);
		                }
		                //console.log(this_month)
		                sessionStorage.setItem('get_month',this_month)
		                var disable_array = new Array();
		                var serviceidVal = $('#service_id option:selected').val();
		                AjaxObj.getDayStatus(function(modal){
		                  if(modal.Data.code ==1){
		                    $('.opcitybox').hide();
		                    for(var i=0; i<modal.Data.data.length; i++){
		                      if(modal.Data.data[i].status!=0){
		                        var day_time = modal.Data.data[i].day_time;
		                        disable_array.push(day_time)
		                      }
		                      if( modal.Data.data[i].day_time == TodayD){
		                        console.log(modal.Data.data[i].day_time ,TodayD)
		                        console.log(i)
		                        disable_array.splice(0,i);
		                      }
		                    }
		                    disableFun(disable_array)

		                  }else{
		                    opCityTip(modal.Data.msg)
		                  }
		                },serviceidVal,this_month)

		                    
		            },
		            onDayClick:function(p, dayContainer, year, month, day){
		            	$("#inline-calendar").hide();
		                if((parseInt(month)+1)<10){
		                  if( (parseInt(day)+1)<10 ){
		                    visit_date = year+'-0'+(parseInt(month)+1)+'-0'+day;
		                  }else{
		                    visit_date = year+'-0'+(parseInt(month)+1)+'-'+day;
		                  }
		                }else{
		                  if( (parseInt(day)+1)<10 ){
		                    visit_date = year+'-'+(parseInt(month)+1)+'-0'+day;
		                  }else{
		                    visit_date = year+'-'+(parseInt(month)+1)+'-'+day;
		                  }
		                    
		                }
						$('#timeArry').html('')
						//查找医生
						var serviceidVal = $('#service_id option:selected').val();
					    AjaxObj.getDoctorLst(function(result){
					    	if(result.Data.code == 1){
					    		var html='';
					    		if( result.Data.data == null || result.Data.data == ''){
					    			if(result.Data.is_this_month ==0){
					    				opCityTip('visit_time','该日期还未有出诊医生信息')
					    			}else{
					    				opCityTip('visit_time','您预约的日期已约满')
					    			}
					    			$('#doctor_id').html('<option value="">请选择</option>')
					    			$('#clink').val('');
					    		}else{
					    			for(var i=0;i<result.Data.data.length;i++){
						                html+='<option value="'+result.Data.data[i].id+'" clinic_name="'+result.Data.data[i].clinic_name+'" clinic_id="'+result.Data.data[i].clinic_id+'">'+result.Data.data[i].name+'</option>'
						            }
						    		$('#doctor_id').html('<option value="">请选择</option>'+html)
						    		$('#doctor_id').die().live('change',function(){
						    			$('#save-but').attr('disabled',false)
						    			var docid = $(this).val();
						    			$('#clink').val( $(this).find('option:selected').attr('clinic_name') )
						    			AjaxObj.getOneVisitData(function(mode){
						    				if(mode.Data.code==1){
						    					if(mode.Data.data != null || mode.Data.data != '' ){
						    						$('#timeMinute').html('时间间隔：'+mode.Data.data.time_span+'分钟')
							    					var str1 ='',str2 ='',str3 ='';
							    					for(var n=0; n<mode.Data.data.time_arr.length; n++){
							    						var timeParseInt = parseInt(mode.Data.data.time_arr[n].visit_time);
							    						if(mode.Data.data.time_arr[n].is_have ==1){
							    							if(timeParseInt>=9 && timeParseInt<13){
																console.log(1111);
						    									str1+='<li data-length="'+(n+1)+'" class="gray"><span>'+mode.Data.data.time_arr[n].visit_time+'</span></li>'
						    								}else if(timeParseInt>=13 && timeParseInt<18){
						    									str2+='<li data-length="'+(n+1)+'" class="gray"><span>'+mode.Data.data.time_arr[n].visit_time+'</span></li>'
						    								}else if(timeParseInt>=18 && timeParseInt<=21){
						    									str3+='<li data-length="'+(n+1)+'" class="gray"><span>'+mode.Data.data.time_arr[n].visit_time+'</span></li>'
						    								}
							    							
							    						}else{
							    							if(timeParseInt>=9 && timeParseInt<13){
																console.log(1111);
						    									str1+='<li data-length="'+(n+1)+'"><span>'+mode.Data.data.time_arr[n].visit_time+'</span></li>'
						    								}else if(timeParseInt>=13 && timeParseInt<18){
						    									str2+='<li data-length="'+(n+1)+'"><span>'+mode.Data.data.time_arr[n].visit_time+'</span></li>'
						    								}else if(timeParseInt>=18 && timeParseInt<=21){
						    									str3+='<li data-length="'+(n+1)+'"><span>'+mode.Data.data.time_arr[n].visit_time+'</span></li>'
						    								}
							    							
							    						}
							    					}
							    					var h2str1 = str1 =='' ? '<h2 class="timeh2" style="display:none">上午</h2>' : '<h2 class="timeh2">上午</h2>';
								    				var h2str2 = str2 =='' ? '<h2 class="timeh2" style="display:none">下午</h2>' : '<h2 class="timeh2">下午</h2>';
								    				var h2str3 = str3 =='' ? '<h2 class="timeh2" style="display:none">晚诊</h2>' : '<h2 class="timeh2">晚诊</h2>';
								    				$('#timeArry').html(h2str1+str1+h2str2+str2+h2str3+str3)
							    					$('#timeArry li').click(function(){
							    						$('#save-but').attr('disabled',false)
													    /*if( ! $(this).hasClass('gray') ){
													        $(this).addClass('cur').siblings().removeClass('cur');
													    }else{
													    	$('#timeArry').siblings('p').html('')
													    }*/

													    var selectedVal = $('#selectTime option:selected').val();
													    var currentLen = $(this).attr('data-length');
													    var nextGrayLen = 0;
													    if( $(this).nextAll('.gray').length ==0 ){
													    	nextGrayLen =parseInt($('#timeArry li').eq( ($('#timeArry li').length-1) ).attr('data-length'))+1 ;
													    }else{
													    	nextGrayLen = $(this).nextAll('.gray').attr('data-length');
													    }
													    var surplusMinute = (nextGrayLen-currentLen)*15
													    console.log(currentLen,nextGrayLen,surplusMinute)
													    if( ! $(this).hasClass('gray') ){
													    	if(surplusMinute < selectedVal){
													    		$('#timeArry li').removeClass('cur');
														    	//alert('时长间隔出现了已预约的时间点')
														    	opCityTip('','所选时间小于项目所需时长')
														    }else{
														    	$(this).addClass('cur').siblings().removeClass('cur');
														    	var len = selectedVal/15;
															    var len_end = parseInt(currentLen)+len;
															    for(var i=currentLen; i<len_end; i++){
															    	$('#timeArry li[data-length="'+i+'"]').addClass('cur');
															    }
														    }
													        
													    }else{
													    	$('#timeArry').siblings('p').html('')
													    }
												    })
												}
						    				}else{
						    					opCityTip('',mode.Data.msg)
						    				}
						    			},visit_date,docid)
						    		})
					    		}
					        }else{
					    		$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
					            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
					    	}
					    },visit_date,serviceidVal)

		            }
		        });
		        $("#inline-calendar").calendar('setValue','');
		        //console.log(sessionStorage.getItem('get_month') ,nextMonth)
		        if(sessionStorage.getItem('get_month') == nextMonth ){
		        	var disable = nextDataArray;
		        	disableFun(disable)
		        }else{
		        	var disable = dataArray;
		        	disableFun(disable)
		        }
		        function disableFun(disable){
		        	var rowslength = $('.picker-calendar-month .picker-calendar-row').length;
		        	for(var i =0;i<rowslength;i++){
			            var daylength = $('.picker-calendar-month .picker-calendar-row').eq(i).children().length;
			            for(var j=0;j<daylength;j++){
			              $('.picker-calendar-month .picker-calendar-row').eq(i).children().eq(j).addClass('picker-calendar-day picker-calendar-day-disabled');
			              for(var z =0 ; z<disable.length;z++){
			                if($('.picker-calendar-month .picker-calendar-row').eq(i).children().eq(j).attr('data_date') == disable[z]){
			                  $('.picker-calendar-month .picker-calendar-row').eq(i).children().eq(j).attr('data_date',disable[z]).removeClass('picker-calendar-day-disabled');
			                }
			              }

			            }
			        }
		        }
			        
		      }else{
		        opCityTip(modal.Data.msg)
		      }
		    },service_id,nextMonth)
		}else{
		  opCityTip(result.Data.msg)
		}
	},service_id,thisMonth)
}

function ifFun(patient_id,invite_code,service_id,doctor_id,visit_time,timedesc,visitDate){

	if( patient_id == '' ){
		$('#PatInputbox').siblings('p').html('请选择就诊人姓名').show()
        $('#PatInputbox button').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">请选择就诊人姓名</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
	}if( invite_code == '' ){
		opCityTip('company_name','请选择公司')
		return false;
	}else if( service_id == '' ){
		opCityTip('service_id','请选择服务项目')
        return false;
	}else if( visitDate == '' ){
		opCityTip('visit_time','请选择日期')
		return false;
	}else if( doctor_id == '' ){
		opCityTip('doctor_id','请选择医生')
        return false;
	}else if( timedesc == '' ){
		$('#timeArry').siblings('p').html('请选择具体时间').show()
	    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
	    $('.opacity-tip p').html('<span class="wrong">请选择具体时间<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
		return false;
	}else{
		return true;
	}
}
function opCityTip(selector,tipText){
	$('#'+selector+'').siblings('p').html(tipText).show()
    $('#'+selector+'').css({'border':'solid 1px red'})
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html('<span class="wrong">'+tipText+'<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
}
