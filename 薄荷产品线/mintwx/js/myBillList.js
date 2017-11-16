$(function(){
	UsergetInfo();
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
			Ajax.UsergetInfo(function(result2){
				if( result2.Data.code ==1 ){
					var patient_id = result2.Data.data.id;
					Ajax.Billindex(function(result){
						if(result.Data.code == 1){
							var html='';
							if( result.Data.data=='' || result.Data.data == null ){
								$('.nodata').show();
								$('#loading').hide()
								loading = false;
							}else{
								$('#noDatabox').hide();
								$('#myBilllist').show();
								for(var i=0; i<result.Data.data.length; i++){
									html+='<div class="weui_cells weui_cells_access">'
								        html+='<a class="weui_cell" href="myBillContent.html?id='+result.Data.data[i].id+'">'
								            html+='<div class="weui_cell_hd">'
								                html+='<p>'
								                  html+='<b>'+result.Data.data[i].patient_name+'<em>'+result.Data.data[i].project_name+'</em></b>'
								                  html+='<label>账单号：'+result.Data.data[i].bill_number+'</label>'
								                  if( result.Data.data[i].status == 1){
								                  	html+='<label><span class="colorzhifu">￥'+result.Data.data[i].actual_money+'</span></label>'
								                  }else{
								                  	html+='<label><span class="colornozhifu">￥'+result.Data.data[i].actual_money+'</span></label>'
								                  }
								                  
								                html+='</p>'
								                if( result.Data.data[i].status == 1){
													html+='<i class="zhifu">已支付</i>'
												}else if( result.Data.data[i].status == 0){
													html+='<i class="nozhifu">待支付</i>'
												}
								            html+='</div>'
								            html+='<span class="weui_cell_ft"></span>'
								        html+='</a>'
								    html+='</div>'
								}
								$('#myBilllist').append(html)
								loading = false;
							}
						}else{
							opCityTip(result.Data.msg)
						}
					},patient_id,n,10)

				}else{
					opCityTip(result2.Data.msg)
				}
			})

	   	},1000);
        
	        
    });


			
})
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(2000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}

function UsergetInfo(){
	Ajax.UsergetInfo(function(result2){
		if( result2.Data.code ==1 ){
			var patient_id = result2.Data.data.id;
			Ajax.Billindex(function(result){
				if(result.Data.code == 1){
					var html='';
					if(result.Data.data==''){
						$('#noDatabox').show();
						$('#myBilllist').hide();
					}else{
						$('#noDatabox').hide();
						$('#myBilllist').show();
						for(var i=0; i<result.Data.data.length; i++){
							html+='<div class="weui_cells weui_cells_access">'
						        html+='<a class="weui_cell" href="myBillContent.html?id='+result.Data.data[i].id+'">'
						            html+='<div class="weui_cell_hd">'
						                html+='<p>'
						                  html+='<b>'+result.Data.data[i].patient_name+'<em>'+result.Data.data[i].project_name+'</em></b>'
						                  html+='<label>账单号：'+result.Data.data[i].bill_number+'</label>'
						                  if( result.Data.data[i].status == 1){
						                  	html+='<label><span class="colorzhifu">￥'+result.Data.data[i].actual_money+'</span></label>'
						                  }else{
						                  	html+='<label><span class="colornozhifu">￥'+result.Data.data[i].actual_money+'</span></label>'
						                  }
						                  
						                html+='</p>'
						                if( result.Data.data[i].status == 1){
											html+='<i class="zhifu">已支付</i>'
										}else if( result.Data.data[i].status == 0){
											html+='<i class="nozhifu">待支付</i>'
										}
						            html+='</div>'
						            html+='<span class="weui_cell_ft"></span>'
						        html+='</a>'
						    html+='</div>'
						}
						$('#myBilllist').html(html)
					}
				}else{
					opCityTip(result.Data.msg)
				}
			},patient_id,1,10)

		}else{
			opCityTip(result2.Data.msg)
		}
	})
}