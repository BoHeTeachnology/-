$(function(){
	var inviterUserIid=transform(window.location.search);
	
	if(decodeURI(inviterUserIid.val) == undefined || decodeURI(inviterUserIid.val) == 'undefined'){
		var searchVal= sessionStorage.getItem('searchValset');
		$('#search_input').val(searchVal)
	}else{
		var searchVal=decodeURI(inviterUserIid.val);
		$('#search_input').val(searchVal)
	}
	console.log(searchVal)
	RecordgetPatient(searchVal,1,15)

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
									html+='<a class="weui_cell" href="doctorCaselist.html?id='+result.Data.data[i].patient_id+'"">'
									html+='<div class="weui_cell_hd">'
									html+='<p>'+result.Data.data[i].patient_name+'</p>'
									html+='<span id="name"></span>'
									html+='</div>'
									html+='<span class="weui_cell_ft"></span>'
									html+='</a>'
									html+='</div>'
								}
								$('#myCaseListbox').append(html)
								loading = false;
							}
							
						}else{
							console.log(result.Data.msg)
						}
					},result2.Data.data.id,searchVal,n,10)
				}else{
					console.log(result2.Data.msg)
				}
			})

	    },1000);
        
	        
    });
		
	
  $(document).on("click", ".weui_search_bar label", function(e) {
    $(e.target).parents(".weui_search_bar").addClass("weui_search_focusing");
  }).on("click", ".weui_search_cancel", function(e) {
    var $input = $(e.target).parents(".weui_search_bar").removeClass("weui_search_focusing").find(".weui_search_input").val("").blur();
  })
  .on("click", ".weui_icon_clear", function(e) {
    var $input = $(e.target).parents(".weui_search_bar").find(".weui_search_input").val("").focus();
  });

	$('#search_input').keydown(function(){
		if( $(this).val() == '' ){
			$('#search_cancel').show();
			$('#search_But').hide();
		}else{
			$('#search_cancel').hide();
			$('#search_But').show();
		}
		//RecordgetPatient($(this).val(),1,15)
	})
	$('#search_But').click(function(){
		RecordgetPatient($('#search_input').val(),1,15)
	})
	$(document).keydown(function(e) {
		if (e.keyCode == 13) {
			sessionStorage.setItem('searchValset',$('#search_input').val() )
			RecordgetPatient($('#search_input').val(),1,15)
		}
	})
	$('#search_cancel').click(function(event){
		location.href='http://' + location.host + "/mintwx/html/doctorBill.html";
		event.stopPropagation();
	})

})

function RecordgetPatient(patient_name,p,p_len){
	Ajax.UsergetInfo(function(result2){
		if( result2.Data.code ==1 ){
			Ajax.BillgetPatient(function(result){
				if(result.Data.code == 1 ){
					sessionStorage.setItem('timenum',result.Data.count)
					if(result.Data.data == ''){
						$('#myCaseListbox').html('<p class="nodatamainbox">没有查找出“<span class="reds">'+patient_name+'</span>”</p>')
					}else{
						var html='';
						for(var i=0; i<result.Data.data.length; i++){
							html+='<div class="weui_cells weui_cells_access">'
							html+='<a class="weui_cell" href="doctorCaselist.html?id='+result.Data.data[i].patient_id+'"">'
							html+='<div class="weui_cell_hd">'
							html+='<p>'+result.Data.data[i].patient_name+'</p>'
							html+='<span id="name"></span>'
							html+='</div>'
							html+='<span class="weui_cell_ft"></span>'
							html+='</a>'
							html+='</div>'
						}
						$('#myCaseListbox').html(html)

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