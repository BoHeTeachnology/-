
$(function(){
	RecordgetPatient('',1,15)

    var loading = false;
    var n=1;
    /*加载功能*/
    $(document.body).infinite().on("infinite", function() {
	    if(loading) return;
	    loading = true;
	    if(sessionStorage.getItem('timenum')<15){
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

	    	Ajax.UsergetInfo(function(result2){
				if( result2.Data.code ==1 ){
					Ajax.BillgetPatient(function(result){
						if(result.Data.code == 1 ){
							if(result.Data.data == '' || result.Data.data == null){
								if( result.Data.count < 15 ){
							    	$('.nodata').hide();
							    }else{
							    	$('.nodata').show();
							    }
								$('#loading').hide();
								loading = false;
							}else{
								var html='';
								for(var i=0; i<result.Data.data.length; i++){
									html+='<div class="weui_cells weui_cells_access">'
									html+='<a class="weui_cell" href="doctorBillList.html?id='+result.Data.data[i].patient_id+'"">'
									html+='<div class="weui_cell_hd">'
									html+='<p>'+result.Data.data[i].patient_name+'</p>'
									html+='<span id="name"></span>'
									html+='</div>'
									html+='<span class="weui_cell_ft"></span>'
									html+='</a>'
									html+='</div>'
								}
								$('#doctorBillbox').append(html)
								loading = false;
							}
							
						}else{
							console.log(result.Data.msg)
						}
					},result2.Data.data.id,'',n,10)
				}else{
					console.log(result2.Data.msg)
				}
			})

	    },1000);
        
	        
    });

$(document).keydown(function(e) {
	if (e.keyCode == 13) {
		var searchVal = $('#search_input').val();
		console.log(searchVal)
		location.href='http://' + location.host + "/mintwx/html/doctorBillSearch.html?val="+searchVal;
	}
})
	
})

function RecordgetPatient(patient_name,p,p_len){
	Ajax.UsergetInfo(function(result2){
		if( result2.Data.code ==1 ){
			Ajax.BillgetPatient(function(result){
				if(result.Data.code == 1 ){
					sessionStorage.setItem('timenum',result.Data.count)
					if(result.Data.data == ''){
						$('#noDatabox').show();
						$('#myCaselist').hide();
					}else{
						$('#noDatabox').hide();
						$('#myCaselist').show();
						var html='';
						for(var i=0; i<result.Data.data.length; i++){
							html+='<div class="weui_cells weui_cells_access">'
							html+='<a class="weui_cell" href="doctorBillList.html?id='+result.Data.data[i].patient_id+'"">'
							html+='<div class="weui_cell_hd">'
							html+='<p>'+result.Data.data[i].patient_name+'</p>'
							html+='<span id="name"></span>'
							html+='</div>'
							html+='<span class="weui_cell_ft"></span>'
							html+='</a>'
							html+='</div>'
						}
						$('#doctorBillbox').html(html)

					}
				}else{
					console.log(result.Data.msg)
				}
			},result2.Data.data.id,patient_name,p,p_len)
		}else{
			console.log(result2.Data.msg)
		}
	})
		
}