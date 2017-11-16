$(function(){
	var inviterUserIid=transform(window.location.search);
	var id=decodeURI(inviterUserIid.id);
	var VIP = decodeURI(inviterUserIid.VIP)
	if( sessionStorage.getItem('sessPoint') ==1 ){
		$('.footButposition').hide();
	}else{
		$('.footButposition').show();
	}

	var ObjNum = JSON.parse( localStorage.getItem('ObjNum') ),
    	AllTotal = localStorage.getItem('AllTotal');
        //console.log(ObjNum,AllTotal)
        var li= '';
        for(var i=0;i<ObjNum.length; i++){
			li+='<li data-id="'+ObjNum[i].project_id+'" number="'+ObjNum[i].number+'" price="'+ObjNum[i].price+'" actual_price="'+(ObjNum[i].price*ObjNum[i].number)+'">'
			li+='<p><b class="project_name">'+ObjNum[i].project_name+'</b><span>数量：'+ObjNum[i].number+'</span></p>'
			li+='<label><font class="brfore_price" style="display:none">￥ <b>'+ObjNum[i].preTotal+'</b></font><br /><font class="after_price">￥ <b>'+ObjNum[i].preTotal+'</b></font></label>'
			li+='<p class="selectP">折扣：<select class="select_Vips" id="select_Vip">'
			
			li+='</select></p>'
			li+='</li>'
        }
        $('#Billmingxi').html(li);
        Ajax.IndexdiscountLst(function(result){
        	if(result.Data.code == 1){
        		var option='';
        		for (var i = 0;i<result.Data.data.length; i++) {
        			option+='<option value="'+(result.Data.data[i].discount*0.01).toFixed(2)+'">'+(result.Data.data[i].discount*0.1).toFixed(1)+'折</option>'
        		};
        		$('#Billmingxi #select_Vip,#total_VIP_select').html('<option value="1">请选择</option>'+option)
        	}else{	
        		opCityTip(result.Data.msg)
        	}
        })

        $('#Alltotal_after i').html( parseInt(AllTotal).toFixed(2) )
        $('#Alltotal_after i').attr('total-data',AllTotal)
        $('#Alltotal_brfore i').html( AllTotal )
        if(VIP == 'VIP'){
        	$('#Billmingxi p.selectP,#total_vip_boxMain,#actural_label').show();
        	$('#Alltotal_brfore i').html( AllTotal )
        	if( Number($('#Alltotal_brfore i').html()) == Number($('#Alltotal_after i').html()) ){
        		$('#Alltotal_brfore').hide();
        	}
        }else{
        	$('#Billmingxi p.selectP').hide();
        	$('#Alltotal_after i').html( parseInt(AllTotal).toFixed(2) )
        	$('#Alltotal_after i').attr('total-data',AllTotal)
        	if( Number($('#Alltotal_brfore i').html()) == Number($('#Alltotal_after i').html()) ){
        		$('.Alltotal_brfore').show().css({'color':'#ff7800','text-decoration':'none'});
        		$('#actural_label').hide();
        	}else{
        		$('#actural_label').show();
        		$('#Alltotal_brfore i').html( AllTotal )
        	}
        	
        }
        
        
        $('#Billmingxi li select').change(function(){
        	$('#total_VIP_select option[value="1"]').attr('selected',true);
        	var vip_num  = $(this).find('option:selected').val();
        	var brfore_price =Number( $(this).parent().siblings('label').find('.brfore_price b').html() );
        	var after_price =brfore_price * vip_num  ;
        	if(vip_num=='1'){
        		$(this).parent().siblings('label').find('.brfore_price').hide();
        		$(this).parent().siblings('label').find('.after_price b').html(brfore_price.toFixed(2));
        		$(this).parents('li').attr('actual_price',brfore_price.toFixed(4))
        	}else{
        		$(this).parent().siblings('label').find('.brfore_price').show();
        		$(this).parent().siblings('label').find('.after_price b').html(after_price.toFixed(2));
        		$(this).parents('li').attr('actual_price',after_price.toFixed(4))
        	}
        	totalNum();
			if(Number( $('#Alltotal_brfore i').html() ).toFixed(2)==Number( $('#Alltotal_after i').html() ).toFixed(2)){
				$('#Alltotal_brfore').hide();
			}else{
				$('#Alltotal_brfore').show();
			}

        })

        $('#total_VIP_select').change(function(){
        	var vip_num  = $(this).find('option:selected').val();
        	var Alltotal_brfore =Number( $('#Alltotal_brfore i').html() );
        	var Alltotal_after = Number( $('#Alltotal_after i').attr('total-data') ); 
        	var Alltotal_afterhtml = Number( $('#Alltotal_after i').html() ); 
        	var after_price =(Alltotal_after * vip_num ).toFixed(2) ;
        	//console.log(Alltotal_after,after_price)
        	if(vip_num == '1'){
        		if( Alltotal_brfore ==  after_price){
        			$('#Alltotal_brfore').hide()
        		}else{
        			$('#Alltotal_brfore').show()
        		}
        		$('#Alltotal_after i').html( parseInt(Alltotal_after) )
        	}else{
        		$('#Alltotal_after i').html( parseInt(after_price) )
        		if( Alltotal_brfore ==  after_price){
        			$('#Alltotal_brfore').hide()
        		}else{
        			$('#Alltotal_brfore').show()
        		}
        		
        	}
        })
        
	Ajax.AppointmentgetOne(function(result){
		if(result.Data.code == 1 ){
			$('#patient_name').html(result.Data.data.patient_name)
			$('#reserve_number').html(result.Data.data.reserve_number)
			$('#visit_time').html(result.Data.data.visit_time)
			$('#doctor_name').html(result.Data.data.doctor_name)
			$('#clinic_name').html(result.Data.data.clinic_name)
			if(result.Data.data.clinic_name =='' || result.Data.data.clinic_name == null){
				$('#clinicDiv,#clinicDiv2').hide();
			}else{
				$('#clinicDiv,#clinicDiv2').show();
				$('#clinic_name').html(result.Data.data.clinic_name)
				$('#clinic_address').html(result.Data.data.clinic_address)
			}

			var patient_id = result.Data.data.patient_id,
				patient_name  = result.Data.data.patient_name,
				patient_account  = result.Data.data.contact_tel,
				company_id  = result.Data.data.company_id,
				company  = result.Data.data.company_name,
				doctor_id  = result.Data.data.doctor_id,
				doctor_name  = result.Data.data.doctor_name,
				visit_time  = result.Data.data.visit_time,
				clinic_id  = result.Data.data.clinic_id,
				clinic_name  = result.Data.data.clinic_name,
				contact_tel  = result.Data.data.contact_tel,
				project_name  = result.Data.data.project_name,
				is_self  = result.Data.data.is_self;


				
			$('#confirmBut').die().live('click',function(){
				if(VIP =='VIP'){
					var pay_money =  $('#Alltotal_brfore i').html() ;
				}else{
					var pay_money = $('#Alltotal_after i').attr('total-data');
				}
				var actual_money = parseInt( $('#Alltotal_after i').html() ).toFixed(2),
					bill_discount = $('#total_VIP_select option:selected').val();
				var obj_data =new Array();
		            $('#Billmingxi li').each(function(){ 
		                var obj={
		                	"project_id":$(this).attr('data-id'),
				        	"number":$(this).attr('number'),
				        	"price":$(this).attr('price'),
				        	"project_discount" : $(this).find('select option:selected').val(),
				        	"actual_price":($(this).attr('actual_price') / ($(this).attr('number')) ).toFixed(4),
				        	"project_name":$(this).find('b.project_name').html()
		                }
		                obj_data.push(obj)
		            })
				console.log( obj_data,pay_money,actual_money )
				opCityTip('正在发送中')
				//console.log(id,patient_id,patient_name,patient_account,company_id,company,doctor_id,doctor_name,visit_time,clinic_id,clinic_name,project_name,is_self,contact_tel)		
				BilladdFun(id,patient_id,patient_name,patient_account,company_id,company,doctor_id,doctor_name,visit_time,clinic_id,clinic_name,project_name,is_self,contact_tel,pay_money,actual_money,bill_discount,obj_data)
			})

		}else{
			opCityTip(result.Data.msg)
		}
	},id)

})
function totalNum(brfore_price){
	var str ='';
	$('#Billmingxi li').each(function(){
		str =Number( str ) + Number( $(this).attr('actual_price') );
		//console.log(str)
		$('#Alltotal_after i').html( parseInt(str) ).attr('total-data',str.toFixed(4))
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
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(1000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}


function BilladdFun(id,patient_id,patient_name,patient_account,company_id,company,doctor_id,doctor_name,visit_time,clinic_id,clinic_name,project_name,is_self,contact_tel,pay_money,actual_money,bill_discount,obj_data){
	Ajax.Billadd(function(Models){
		if(Models.Data.code == 1 ){
			$('#toast').fadeIn(500).delay(1000).fadeOut();
			sessionStorage.setItem('sessPoint',1);
			setTimeout(function(){
				location.href='http://'+location.host+"/mintwx/html/doctorCenter.html";
			},1000);
			
		}else{
			opCityTip(Models.Data.msg)
		}
	},id,patient_id,patient_name,patient_account,company_id,company,doctor_id,doctor_name,visit_time,clinic_id,clinic_name,project_name,is_self,contact_tel,pay_money,actual_money,bill_discount,obj_data)

}