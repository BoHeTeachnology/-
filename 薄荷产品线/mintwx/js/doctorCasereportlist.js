$(function(){
	var inviterUserIid=transform(window.location.search);
	var id=decodeURI(inviterUserIid.id),
		type=decodeURI(inviterUserIid.type);
		if(type==1){
			$('#bodytitle').html('初筛报告列表')
		}else{
			$('#bodytitle').html('门诊病历列表')
		}
	Ajax.Recordindex(function(result){
		if(result.Data.code == 1 ){
			if(result.Data.count == 0){
				$('#noDatabox').show();
			}else{
				$('#myCaseList').show();
				var html='';
				for(var i=0; i<result.Data.data.length; i++){
					var relation = result.Data.data[i].relation =='' || result.Data.data[i].relation == null ? '' : ' ('+result.Data.data[i].relation+')'
					html+='<div class="weui_cells weui_cells_access">'
					html+='<a class="weui_cell" href="/mintwx/html/doctorCaseContent.html?id='+result.Data.data[i].id+'">'
		            html+='<div class="weui_cell_hd">'
	                html+='<p>'
	                html+='<b>'+result.Data.data[i].label+' - '+result.Data.data[i].patient_name+relation+'</b>'
	                html+='<label>'+result.Data.data[i].visit_time+'</label>'
	                html+='</p>'
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
	},id,type,1,1000)
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