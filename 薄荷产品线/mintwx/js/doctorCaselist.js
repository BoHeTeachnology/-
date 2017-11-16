$(function(){
	var inviterUserIid=transform(window.location.search);
	var id=decodeURI(inviterUserIid.id);
	
	Ajax.RecordgetPatientCase(function(result){
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
				$('#myCaseList').show();
				var html='';
				for(var i=0; i<result.Data.data.length; i++){
					var relation = result.Data.data[i].relation =='' || result.Data.data[i].relation == null ? '' : ' ('+result.Data.data[i].relation+')'
					html+='<div class="weui_cells weui_cells_access">'
					html+='<a class="weui_cell" href="/mintwx/html/casedesc.html?type=doc&id='+result.Data.data[i].id+'">'
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
				$('#myCaseList').html(html)
			}
		}else{
			opCityTip(result.Data.msg)
		}
	},id,1,1000)

	
	$('#record_count1').click(function(){
		location.href='http://'+location.host+"/mintwx/html/doctorCasereportlist.html?type=1&id="+id;
	})
	$('#record_count2').click(function(){
		location.href='http://'+location.host+"/mintwx/html/doctorCasereportlist.html?type=2&id="+id;
	})
})

function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(2000).fadeOut()
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