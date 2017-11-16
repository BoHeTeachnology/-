$(function(){
	var inviterUserIid=transform(window.location.search);
	var user_id=decodeURI(inviterUserIid.user_id);
	
	var myScroll2 = new iScroll('main_left',{vScrollbar:true});
	
	//获取左侧菜单及右侧项目详情
	Ajax.BillgetCatLst(function(result){
		var mScrolly3;
		if(result.Data.code == 1){
			var html='';
			for (var i = 0; i<result.Data.data.length; i++) {
				html+='<li data-id="'+result.Data.data[i].id+'"><a href="javascript:;">'+result.Data.data[i].cat_name+'</a></li>'
			}
			$('#main_left_scroll ul').html(html)

			$('#main_left_scroll ul li').each(function(){
				var dataId = $(this).attr('data-id')
				BillgetCatPro(dataId,function(){
					if(mScrolly3){
						mScrolly3.destroy();
					}
					mScrolly3 = new iScroll('main_right',{ vScrollbar:true, hScrollbar:false});
				},function(){
					mScrolly3.refresh();//使点击li动态滚动
				})
			})
				
		}else{
			alert(result.Data.msg)
		}
	})


	Ajax.AppointmentgetOne(function(Models){
		if(Models.Data.code == 1 ){
			var patient_id = Models.Data.data.patient_id,
					patient_name  = Models.Data.data.patient_name,
					patient_account  = Models.Data.data.patient_account,
					company_id  = Models.Data.data.company_id,
					company  = Models.Data.data.company_name,
					doctor_id  = Models.Data.data.doctor_id,
					doctor_name  = Models.Data.data.doctor_name,
					visit_time  = Models.Data.data.visit_time,
					clinic_id  = Models.Data.data.clinic_id,
					clinic_name  = Models.Data.data.clinic_name,
					project_name  = Models.Data.data.project_name,
					is_self  = Models.Data.data.is_self;
			$('#confirmBut,#VIP_point').die().live('click',function(){
					var VIP = $(this).attr('name');
				    var obj_ids =new Array();
		            $('#main_right_scroll li p.productCheck input:checked').each(function(){ 
		                //var checkVal=$(this).parent().siblings("p.productCtr").find('input').val();
		                var checkVal=$(this).attr('data-id')
		                obj_ids.push(checkVal)
		            }) 
		            var obj_num =new Array();
		            $('#main_right_scroll li p.productCheck input:checked').each(function(){ 
		                var checkVal=$(this).parent().siblings("p.productCtr").find('input').val();
		                obj_num.push(checkVal)
		            })

		            //选择的总数据对象
		            var ObjNum =new Array();
		            $('#main_right_scroll li p.productCheck input:checked').each(function(){ 
		                var obj={
		                	"project_id":$(this).attr('data-id'),
		                	"project_name":$(this).parent().siblings("p.productTitle").find('b').html(),
		                	"price":$(this).attr('price'),
		                	"number":$(this).parent().siblings("p.productCtr").find('input').val(),
		                	"preTotal":$(this).val()
		                }
		                ObjNum.push(obj)
		            })
		            //console.log(ObjNum)

		            //console.log(obj_ids,obj_num)
					//console.log(user_id,patient_id,patient_name,patient_account,company_id,company,doctor_id,doctor_name,visit_time,clinic_id,clinic_name,project_name,is_self)
					if( obj_ids == ''){
						opCityTip('请选择项目')

					}else{
						console.log($('#moneyAll i').html())
						localStorage.setItem('ObjNum',JSON.stringify(ObjNum) );
						//console.log( JSON.parse( localStorage.getItem('ObjNum') ))
			            localStorage.setItem('AllTotal',$('#moneyAll i').html() );
			            if(VIP){
			            	location.href='http://'+location.host+"/mintwx/html/priceBillContent.html?id="+user_id+'&VIP='+VIP
			            }else{
			            	location.href='http://'+location.host+"/mintwx/html/priceBillContent.html?id="+user_id
			            }
						
					}
			})
		}else{
			alert(Models.Data.msg)
		}
	},user_id)

})
function BillgetCatPro(dataId,callback,callback2){
	Ajax.BillgetCatPro(function(model){
		if(model.Data.code == 1){
			var olHtml ='';
				olHtml+='<ol olId="'+dataId+'">'
				for(var m = 0; m<model.Data.data.length; m++){
					olHtml+='<li data-id="'+model.Data.data[m].id+'">'
					olHtml+='<p class="productTitle"><b>'+model.Data.data[m].project_name+'</b><span>￥<label id="danjia">'+model.Data.data[m].price+'</label></span></p>'
					olHtml+='<p class="productCtr"><i class="minusBut"></i><input type="text" value="1" class="numVal"><i class="addBut"></i></p>'
					olHtml+='<p class="productCheck"><i id="prezong"></i><input type="checkbox" data-id="'+model.Data.data[m].id+'" value="'+model.Data.data[m].price+'" id="checkbox_0'+model.Data.data[m].cat_id+model.Data.data[m].id+'" price="'+model.Data.data[m].price+'"><label for="checkbox_0'+model.Data.data[m].cat_id+model.Data.data[m].id+'"></label></p>'
					olHtml+='</li>'
				}
				olHtml+='</ol>'
				$('#main_right_scroll').append(olHtml)
				callback()
				$('#main_left_scroll ul li a').eq(0).addClass('cur')
				var olid = $('#main_left_scroll ul li').eq(0).attr('data-id');
				//console.log(olid)
				$('.main_right ol[olid="'+olid+'"]').show();

				$('.main_left_scroll ul li').die().live('click',function(){
					var index=$(this).attr('data-id');
					
					$(this).children().addClass('cur').parent().siblings().children().removeClass('cur');
					$('.main_right ol[olid="'+index+'"]').show().siblings().hide();
					callback2();
					
				})
				$('#main_right_scroll p.productCtr input').each(function(){
				    if( $(this).val()<=1){
						$(this).siblings('i.minusBut').addClass('curgray')
					}else{
						$(this).siblings('i.minusBut').removeClass('curgray')
					}
				});
				ctrNum();
				$('#main_right_scroll li p.productCheck input').die().live('click',function () {
					GetCount();
				});

		}else{
			alert(result.Data.msg)
		}
	},dataId)
}
function ctrNum(){
	/*点击加号*/
	$('#main_right_scroll ol li p .addBut').die().live('click',function(){
		var numVal = Number($(this).siblings('input').val());
		console.log(numVal)
		numVal++;
		if( numVal >0 ){
			$(this).siblings('i.minusBut').removeClass('curgray')
			$(this).siblings('input').val(numVal)
		}
		setPreTotal($(this),numVal)
			
	})
	/*点击减号*/
	$('#main_right_scroll ol li p .minusBut').die().live('click',function(){
		var numVal = Number($(this).siblings('input').val());
		console.log(numVal)
		numVal--;
		if( numVal <= 1){
			$(this).addClass('curgray')
			$(this).siblings('input').val('1')
		}else{
			$(this).siblings('input').val(numVal)
		}
		setPreTotal($(this),numVal)
	})
}

function setPreTotal(that,numVal){//计算每个商品的价格
	var pre_price =Number(that.parent().siblings("p.productTitle").find('label#danjia').html() ) 
		that.parent().siblings("p.productCheck").find('i#prezong').html( (Number(numVal) * pre_price).toFixed(2) );
		that.parent().siblings("p.productCheck").find('input').val( (Number(numVal) * pre_price).toFixed(2) );
		GetCount()
}
function GetCount() {//总价格合计
	var conts = 0;
	$('#main_right_scroll li p.productCheck input').each(function () {
		if ($(this).attr("checked")) {
			for (var i = 0; i < $(this).length; i++) {
				conts += Number($(this).val());
			}
		}
	});
	$("#moneyAll i").html( (conts).toFixed(2) );
}

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