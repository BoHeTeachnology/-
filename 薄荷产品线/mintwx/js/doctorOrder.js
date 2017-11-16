$(function(){
	sessionStorage.removeItem('statuPoint');
	sessionStorage.removeItem('sessPoint');
	doctorList('',1,10)
	var loading = false;
    var n=1;
    $(document.body).infinite().on("infinite", function() {
	    if(loading) return;
	    loading = true;
	    console.log($('.nodata').is(':visible'))
	    if( $('.nodata').is(':visible') == true ){
	    	$('#loading').hide()
	    }else{
	    	$('#loading').show()
	    }
		setTimeout(function() {
	    	n++;
    		Ajax.doctorList(function(result){
				if(result.Data.code ==1 ){
					if( result.Data.data=='' || result.Data.data == null ){
						$('.nodata').show();
						$('#loading').hide();
						loading = false;
					}else{
						var html='';

						for(var i=0; i<result.Data.data.length; i++){
							var nameUser = result.Data.data[i].visit_name == '' || result.Data.data[i].visit_name == null ? result.Data.data[i].patient_name : result.Data.data[i].visit_name;
							html+='<div class="weui_cells weui_cells_access">'
						    html+='<a class="weui_cell" href="doctorOrderInfo.html?id='+result.Data.data[i].id+'">'
						    html+='<div class="weui_cell_hd">'
						    html+='<p>'
					    	if(result.Data.data[i].is_return ==0){
					    		if( result.Data.data[i].service_name == '默认' ){
					    			html+='<b>'+nameUser+'</b>'
					    		}else{
					    			html+='<b>'+nameUser+'<em>'+result.Data.data[i].service_name+'</em></b>'
					    		}
						    	
						    }else{
						    	if( result.Data.data[i].service_name == '默认' ){
						    		html+='<b>'+nameUser+'<em>复诊</em></b>'
						    	}else{
						    		html+='<b>'+nameUser+'<em>'+result.Data.data[i].service_name+' - 复诊</em></b>'
						    	}
						    	
						    }

			                
			                html+='<label>预约编号：'+result.Data.data[i].reserve_number+'</label>'
			                html+='<label>就诊时间：<span>'+result.Data.data[i].visit_time+'</span></label>'
			                html+='</p>'
			                if(result.Data.data[i].status == 1){
								html+='<i class="yuyuezhong">已预约</i>'
							}else if(result.Data.data[i].status == 2){
								html+='<i class="wanchen">已完成</i>'
							}else if(result.Data.data[i].status == 3){
								html+='<i class="guoqi">已过期</i>'
							}else if(result.Data.data[i].status == 4){
								html+='<i class="quxiao">已取消</i>'
							}
				            html+='</div>'
				            html+='<span class="weui_cell_ft"></span>'
					        html+='</a>'
						    html+='</div>'	
						}
						$('#orderList').append(html)
						loading = false;
						
					}
				}else{
					console.log(result.Data.msg)
				}
			},'',n,10)

	    },1000);
        
	        
    });

})

function doctorList(patient_name,p,p_len){
	Ajax.doctorList(function(result){
		if(result.Data.code == 1 ){
			if(result.Data.data == ''){
				$('#noDatabox').show();
				$('#orderList').hide();
			}else{
				$('#noDatabox').hide();
				$('#orderList').show();
				var html='';
				//console.log(result.Data.data.length)
				for(var i=0; i<result.Data.data.length; i++){
					html+='<div class="weui_cells weui_cells_access">'
				    html+='<a class="weui_cell" href="doctorOrderInfo.html?id='+result.Data.data[i].id+'">'
				    html+='<div class="weui_cell_hd">'
				    html+='<p>'
	                if(result.Data.data[i].is_return ==0){
	                	if( result.Data.data[i].service_name == '默认' ){
			    			html+='<b>'+result.Data.data[i].visit_name+'</b>'
			    		}else{
			    			html+='<b>'+result.Data.data[i].visit_name+'<em>'+result.Data.data[i].service_name+'</em></b>'
			    		}
				    }else{
				    	if( result.Data.data[i].service_name == '默认' ){
				    		html+='<b>'+result.Data.data[i].visit_name+'<em>复诊</em></b>'
				    	}else{
				    		html+='<b>'+result.Data.data[i].visit_name+'<em>'+result.Data.data[i].service_name+' - 复诊</em></b>'
				    	}
				    }
	                html+='<label>预约编号：'+result.Data.data[i].reserve_number+'</label>'
	                html+='<label>就诊时间：<span>'+result.Data.data[i].visit_time+'</span></label>'
	                html+='</p>'
	                if(result.Data.data[i].status == 1){
						html+='<i class="yuyuezhong">已预约</i>'
					}else if(result.Data.data[i].status == 2){
						html+='<i class="wanchen">已完成</i>'
					}else if(result.Data.data[i].status == 3){
						html+='<i class="guoqi">已过期</i>'
					}else if(result.Data.data[i].status == 4){
						html+='<i class="quxiao">已取消</i>'
					}
		            html+='</div>'
		            html+='<span class="weui_cell_ft"></span>'
			        html+='</a>'
				    html+='</div>'
					
				}
				$('#orderList').html(html)

			}
		}else{
			console.log(result.Data.msg)
		}
	},patient_name,p,p_len)
}