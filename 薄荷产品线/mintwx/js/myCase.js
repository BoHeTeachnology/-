$(function(){
	var inviterUserIid=transform(window.location.search);
	var user_id=decodeURI(inviterUserIid.user_id);
	RecordnewIndex(1,10)
	var loading = false;
    var n=1;
    /*加载功能*/
    $(document.body).infinite().on("infinite", function() {
	    if(loading) return;
	    loading = true;
	    if(sessionStorage.getItem('count')<10){
	    	$('#loading').hide()
	    }else{
	    	if( $('.nodata').is(':visible') == true){
		    	$('#loading').hide()
		    }else{
		    	$('#loading').show()
		    }
	    }		    
		setTimeout(function() {
			n++;
			Ajax.RecordnewIndex(function(result){
				if(result.Data.code == 1 ){
					if(result.Data.data == '' || result.Data.data == null){
						if( result.Data.count < 10 ){
					    	$('.nodata').hide();
					    }else{
					    	$('.nodata').show();
					    }
						$('#loading').hide();
						loading = false;
					}else{
						$('#caselist').show();
						var html='';
						for(var i=0; i<result.Data.data.length; i++){
							var relation = result.Data.data[i].relation =='' || result.Data.data[i].relation == null ? '' : ' ('+result.Data.data[i].relation+')'
							html+='<div class="weui_cells weui_cells_access">'
							html+='<a class="weui_cell" href="/mintwx/html/casedesc.html?type=user&id='+result.Data.data[i].id+'">'
				            html+='<div class="weui_cell_hd">'
			                html+='<p>'
			                html+='<b>'+result.Data.data[i].cat_name+' - '+result.Data.data[i].patient_name+relation+'</b>'
			                html+='<label>'+result.Data.data[i].visit_time+'</label>'
			                html+='</p>'
							if( result.Data.data[i].type ==1 ){
								html+='<i class="tipsign">初诊</i>'
							}else if(result.Data.data[i].type ==2){
								html+='<i class="tipsign">复诊</i>'
							}
				            html+='</div>'
				            html+='<span class="weui_cell_ft"></span>'
					        html+='</a>'
					        html+='</div>'
						}
						$('#caselist').append(html)
						if(result.Data.data.length < 10){
							$('#chushai').show()
						}
						loading = false;
					}	
				}else{
					opCityTip(result.Data.msg)
				}
			},n,3)
		},1000);
        
    });

/*	$('#caseDetailtab').click(function(){
		location.href="casedesc.html?id="+id;
	})*/

})
function RecordnewIndex(p,p_len){
	Ajax.RecordnewIndex(function(result){
		if(result.Data.code == 1 ){
			if(result.Data.record_count1 >0){
				$('#record_count1').show();
			}
			if(result.Data.record_count2 >0){
				$('#record_count2').show();
			}
			if(result.Data.count == 0){
				if(result.Data.record_count1 ==0 &&　result.Data.record_count2 ==0){
					$('#noDatabox').show();
					$('#myCaseList').hide();
				}else{
					$('#noDatabox').hide();	
				}
			}else{
				sessionStorage.setItem('count',result.Data.count)
				if(result.Data.count<=10){
					$('#chushai').show();
				}else{
					$('#chushai').hide();
				}
				$('#caselist').show();
				var html='';
				for(var i=0; i<result.Data.data.length; i++){
					var relation = result.Data.data[i].relation =='' || result.Data.data[i].relation == null ? '' : ' ('+result.Data.data[i].relation+')'
					html+='<div class="weui_cells weui_cells_access">'
					html+='<a class="weui_cell" href="/mintwx/html/casedesc.html?type=user&id='+result.Data.data[i].id+'">'
		            html+='<div class="weui_cell_hd">'
	                html+='<p>'
	                html+='<b>'+result.Data.data[i].cat_name+' - '+result.Data.data[i].patient_name+relation+'</b>'
	                html+='<label>'+result.Data.data[i].visit_time+'</label>'
	                html+='</p>'
					if( result.Data.data[i].type ==1 ){
						html+='<i class="tipsign">初诊</i>'
					}else if(result.Data.data[i].type ==2){
						html+='<i class="tipsign">复诊</i>'
					}
		            html+='</div>'
		            html+='<span class="weui_cell_ft"></span>'
			        html+='</a>'
			        html+='</div>'
				}
				$('#caselist').html(html)
			}
			
		}else{
			opCityTip(result.Data.msg)
		}
	},p,p_len)
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
