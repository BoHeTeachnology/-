$(function(){
	Ajax.DoctorserviceLst(function(result){
		if(result.Data.code == 1){ 
			var html="";
			for(var i=0; i<result.Data.data.length; i++){
				html+='<div class="weui_cells weui_cells_access">'
				html+='<a class="weui_cell" href="javascript:;">'
				html+='<div class="weui_cell_hd">'
				html+='<p class="font16">'+result.Data.data[i].service_name+'</p>'
				html+='<div class="checkboxbtn"><input type="checkbox" class="checkbox" id="checkboxInputa'+result.Data.data[i].id+'" data-id="'+result.Data.data[i].id+'"><label for="checkboxInputa'+result.Data.data[i].id+'"></label></div>'
				html+='</div>'
				html+='</a>'
				html+='</div>'
			}
			$('#editProjbox').html(html)
			Ajax.UsergetInfo(function(result){
				if(result.Data.code == 1){
					for(var m=0; m<result.Data.data.service_id_arr.length; m++){
						//input["data_id='+modal.Data.data.service_id_arr[m]+'"]'
                        $('#editProjbox input[data-id="'+result.Data.data.service_id_arr[m]+'"]').attr('checked','checked');
                    }
				}else{
					opCityTip(result.Data.msg)
				}
			})
		}else{
			opCityTip(result.Data.msg)
		}
	})

	$('#confirm').click(function(){
		var service_ids =new Array();
            $("#editProjbox input[type='checkbox']:checked").each(function(){ 
                var checkVal=$(this).attr('data-id');
                service_ids.push(checkVal)
            })
            //console.log(service_ids) 
		if(service_ids == ''){
			opCityTip('请选择服务项目')
		}else{
			Ajax.Doctorsave(function(result){
				if(result.Data.code == 1 ){
					$('#toast').fadeIn(500).delay(1000).fadeOut()
					setTimeout(function(){
						location.href='http://'+location.host+"/mintwx/html/doctorInfo.html";
					},1000)
				}else{
					opCityTip(result.Data.msg)
				}
			},service_ids)
		}
	})
	$('#calcel').click(function(){
		window.history.go(-1);
	})
})
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(2000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}
