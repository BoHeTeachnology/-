$(function(){
	var inviterUserIid=transform(window.location.search);
	var id=decodeURI(inviterUserIid.id);
	var doctor_id = sessionStorage.getItem("doctor_id");
	BillindexDoctorId(doctor_id)
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
			Ajax.BillindexDoctorId(function(result){
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
							html+='<a class="weui_cell" href="doctorBillContent.html?id='+result.Data.data[i].id+'">'
							html+='<div class="weui_cell_hd">'
							if(result.Data.data[i].status == 1){
								var color = "colorzhifu";
							}else{
								var color = "colornozhifu"; 
							}
							html+='<p><b>'+result.Data.data[i].patient_name+'<em>'+result.Data.data[i].project_name+'</em></b><label>预约单号:'+result.Data.data[i].bill_number+'</label><label>'+'<span class="'+color+'">'+'￥'+result.Data.data[i].actual_money+'</span></label></p>'
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
			},doctor_id,n,10)
	    },1000);
        
	        
    });



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

function BillindexDoctorId(doctor_id){
	Ajax.BillindexDoctorId(function(result){
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
					html+='<a class="weui_cell" href="doctorBillContent.html?id='+result.Data.data[i].id+'">'
					html+='<div class="weui_cell_hd">'
					if(result.Data.data[i].status == 1){
						var color = "colorzhifu";
					}else{
						var color = "colornozhifu"; 
					}
					html+='<p><b>'+result.Data.data[i].patient_name+'<em>'+result.Data.data[i].project_name+'</em></b><label>预约单号:'+result.Data.data[i].bill_number+'</label><label>'+'<span class="'+color+'">'+'￥'+result.Data.data[i].actual_money+'</span></label></p>'
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
	},doctor_id,1,10)
}



var str = "";
var sum = 0;
var i = 1;
var times = 0;

function zdh(n){
	if( n == 0){
		return times;
	}else if(n == 1){
		return times+1;
	}else{
		i = 1;
		while( i*i <= n){
			sum = i*i;
			i += 1;
		}
		times++;
		return zdh(n-sum);
	}	
}

var times = 0;
function zdh(n){
	times++;
	if(n==1){
		return times+1;
	}else if(n==0){
		return times;
	}else{
		times++;
		return n - Math.pow(Math.floor(Math.sqrt(n)),2)
	}
	
}