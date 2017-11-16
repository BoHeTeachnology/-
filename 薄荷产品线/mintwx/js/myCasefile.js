$(function(){
	var inviterUserIid=transform(window.location.search);
	var id=decodeURI(inviterUserIid.id);
	Ajax.RecordgetOne(function(result){
		if(result.Data.code == 1 ){
			html='';
			if(result.Data.data.file_data == ''){
				$('#noDatabox').show();
				$('#caseFileList').hide();
			}else{
				$('#noDatabox').hide();
				$('#caseFileList').show();
				for(var i=0; i<result.Data.data.file_data.length;i++){
					html+='<p><a href="'+result.Data.data.file_data[i].file_path+'">'+result.Data.data.file_data[i].file_name+'</a></p>'
				}
				$('#caseFileList').html(html)
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
