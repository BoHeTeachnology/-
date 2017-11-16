$(function(){
	Doctorindex(1,10)
    var loading = false;
    var n=1;

    $(document.body).infinite().on("infinite", function() {
            if(loading) return;
            loading = true;
        	setTimeout(function() {
	        	n++
	        	Ajax.Doctorindex(function(result){
					if(result.Data.code ==1 ){
						if( result.Data.data=='' || result.Data.data == null){
							$('.nodata').show();
							$('#loading').hide()
							loading = false;
						}else{
							var html='';
							for (var i = 0; i< result.Data.data.length; i++) {
								var photo = result.Data.data[i].photo == '' || result.Data.data[i].photo == null? '../images/user_default.png' : result.Data.data[i].photo;
								html+='<a href="/mintwx/html/desc.html?user_id='+result.Data.data[i].id+'" class="weui_media_box weui_media_appmsg">'
								html+='<div class="weui_media_hd">'
								html+='<img src="'+photo+'" alt="">'
								html+='</div>'
								html+='<div class="weui_media_bd">'
								html+='<h4 class="weui_media_title"><b>'+result.Data.data[i].name+'</b> <span>'+result.Data.data[i].hospital+'</span></h4>'
								html+='<p class="weui_media_desc">'
									for(var m=0; m<result.Data.data[i].label_arr.length; m++){
										if(m>=0 && m<3){
											if(result.Data.data[i].label_arr[m] != ''){
												html+='<span>'+result.Data.data[i].label_arr[m]+'</span>'
											}
										}
										
									}
								html+='</p></div>'
								html+='<span class="weui_cell_ft"></span>'
								html+='</a>'
							};
							$('#doctorList').append(html)
							loading = false;
						}
					}else{
						opCityTip(result.Data.msg)
					}
				},n,10)
	         	
	        },1000);
        
	        
    });
	
})
function Doctorindex(p,p_len){
	Ajax.Doctorindex(function(result){
		if(result.Data.code ==1 ){
			var html='';
			for (var i = 0; i< result.Data.data.length; i++) {
				var photo = result.Data.data[i].photo == '' || result.Data.data[i].photo == null? '../images/user_default.png' : result.Data.data[i].photo;
				html+='<a href="/mintwx/html/desc.html?user_id='+result.Data.data[i].id+'" class="weui_media_box weui_media_appmsg">'
				html+='<div class="weui_media_hd">'
				html+='<img src="'+photo+'" alt="">'
				html+='</div>'
				html+='<div class="weui_media_bd">'
				html+='<h4 class="weui_media_title"><b>'+result.Data.data[i].name+'</b> <span>'+result.Data.data[i].hospital+'</span></h4>'
				html+='<p class="weui_media_desc">'

					for(var m=0; m<result.Data.data[i].label_arr.length; m++){
						
						if(m>=0 && m<3){
							if(result.Data.data[i].label_arr[m] != ''){
								html+='<span>'+result.Data.data[i].label_arr[m]+'</span>'
							}
							
						}
						
					}
				html+='</p></div>'
				html+='<span class="weui_cell_ft"></span>'
				html+='</a>'
			};
			$('#doctorList').html(html)
		}else{
			opCityTip(result.Data.msg)
		}
	},p,p_len)
}
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(2000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}