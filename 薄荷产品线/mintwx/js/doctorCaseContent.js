$(function(){
	var inviterUserIid=transform(window.location.search);
	var id=decodeURI(inviterUserIid.id);
	Ajax.RecordgetOne(function(result){
		if(result.Data.code == 1 ){
			$('#patient_name').html(result.Data.data.patient_name)
			$('#visit_time').html(result.Data.data.visit_time)
			$('#doctor_name').html(result.Data.data.doctor_name)
			if(result.Data.data.clinic_name =='' || result.Data.data.clinic_name==null ){
				$('#clinicDiv').hide();
			}else{
				$('#clinicDiv').show();
				$('#clinic_name').html(result.Data.data.clinic_name)
			}
			//$('#label').html(result.Data.data.label)
			//console.log( result.Data.data.record_content.split("\n").join("<br />") )
			$('#record_content').html(result.Data.data.record_content.replace(/\n/g,"<br/>") );
			$('#treatment').html(result.Data.data.treatment.replace(/\n/g,"<br/>"));
			$('#suggestion').html(result.Data.data.tooth_suggestion.replace(/\n/g,"<br/>"));
			if(result.Data.data.type == 1){
				$('#chuzhi').html('综合意见')
			}else if(result.Data.data.type == 2){
				$('#chuzhi').html('处置').css('width','60px');
			}else{
				$('#chuzhi').html('综合意见')
			}
			
		}else{
			alert(result.Data.msg)
		}
	},id)




})
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