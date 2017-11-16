$(function(){

	Ajax.DoctortagLst(function(result){
		if(result.Data.code == 1){ 
			var html="";
			for(var i=0; i<result.Data.data.length; i++){
				html+='<div class="weui_cells weui_cells_access">'
				html+='<a class="weui_cell" href="javascript:;">'
				html+='<div class="weui_cell_hd">'
				html+='<p class="font16">'+result.Data.data[i].tag_name+'</p>'
				html+='<div class="checkboxbtn"><input type="checkbox" class="checkbox" data_id="'+result.Data.data[i].id+'" value="'+result.Data.data[i].tag_name+'" id="checkboxInputa'+result.Data.data[i].id+'" ><label for="checkboxInputa'+result.Data.data[i].id+'"></label></div>'
				html+='</div>'
				html+='</a>'
				html+='</div>'
			}
			$('#editTabbox').html(html)
			Ajax.UsergetInfo(function(modal){
				if(modal.Data.code == 1){
					for(var m=0; m<modal.Data.data.label_id.length; m++){
                        $('#editTabbox .checkboxbtn input[data_id="'+modal.Data.data.label_id[m]+'"]').attr('checked',true);
                    }
				}else{
					opCityTip(modal.Data.msg)
				}
			})
		}else{
			opCityTip(result.Data.msg)
		}
	})
	$('#confirm').click(function(){
		var label = new Array();
            $("#editTabbox input[type='checkbox']:checked").each(function(){ 
                var checkVal=$(this).val();
                label.push(checkVal)
            })
        var label_id = new Array();
            $("#editTabbox input[type='checkbox']:checked").each(function(){ 
                var checkVal=$(this).attr('data_id');
                label_id.push(checkVal)
            })
            console.log(label,label_id) 
		if(label == ''){
			opCityTip('请选择标签')
		}else{
			Ajax.Doctorsave2(function(result){
				if(result.Data.code == 1 ){
					$('#toast').fadeIn(500).delay(1000).fadeOut()
					setTimeout(function(){
						//location.href='http://'+location.host+"/mintwx/html/doctorInfo.html";
					},1000)
				}else{
					opCityTip(result.Data.msg)
				}
			},label,label_id)
		}
	})
	$('#calcel').click(function(){
		window.history.go(-1);
	})
})
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(1000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}
