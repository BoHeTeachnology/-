$(function(){
	var inviterUserIid=transform(window.location.search);
	var user_id=decodeURI(inviterUserIid.user_id);
	var mScrolly;
	//var mScrolly = new iScroll('main_right',{ vScrollbar:true});
//console.log($('#main_right_scroll').height())
	//获取左侧菜单及右侧项目详情
	Ajax.BillgetCatLst(function(result){

		if(result.Data.code == 1){
			var html='';
			for (var i = 0; i<result.Data.data.length; i++) {
				html+='<li data-id="'+result.Data.data[i].id+'"><a href="javascript:;">'+result.Data.data[i].cat_name+'</a></li>'
			}
			$('#main_left_scroll ul').html(html)
			var first_id =  $('#main_left_scroll ul li').eq(0).attr('data-id');
			$('#main_left_scroll ul li a').eq(0).addClass('cur')
			BillgetCatPro(first_id);

			// console.log($('#main_left_scroll ul li').length);
			// for(var i = 0;i<$('#main_left_scroll ul li').length;i++){
			// 	console.log($('#main_left_scroll ul li'));
			// }
			$('#main_left_scroll ul li').on('click',function(){
				//console.log('a')
				$(this).children().addClass('cur').parent().siblings().children().removeClass('cur');
				var dataId = $(this).attr('data-id')
				//console.log(dataId)
				BillgetCatPro(dataId)
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
			$('#confirmBut').die().live('click',function(){
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
		                	"obj_num":$(this).parent().siblings("p.productCtr").find('input').val(),
		                	"project_name":$(this).parent().siblings("p.productTitle").find('b').html(),
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
						console.log($('#moneyAll').html())
						localStorage.setItem('ObjNum',JSON.stringify(ObjNum) );
			            localStorage.setItem('obj_num',JSON.stringify(obj_num) );
			            localStorage.setItem('obj_ids',JSON.stringify(obj_ids) );
			            localStorage.setItem('AllTotal',$('#moneyAll').html() );
						location.href='http://'+location.host+"/mintwx/html/priceBillContent.html?id="+user_id
					}
			})
		}else{
			alert(Models.Data.msg)
		}
	},user_id)





function BillgetCatPro(dataId){

	Ajax.BillgetCatPro(function(model){
		if(model.Data.code == 1){
			var olHtml ='';
				olHtml+='<ol olId="'+dataId+'">'
				for(var m = 0; m<model.Data.data.length; m++){
					olHtml+='<li data-id="'+model.Data.data[m].id+'">'
					olHtml+='<p class="productTitle"><b>'+model.Data.data[m].project_name+'</b><span>￥<label id="danjia">'+model.Data.data[m].price+'</label></span></p>'
					olHtml+='<p class="productCtr"><i class="minusBut"></i><input type="text" value="1" class="numVal"><i class="addBut"></i></p>'
					olHtml+='<p class="productCheck"><i id="prezong"></i><input type="checkbox" data-id="'+model.Data.data[m].id+'" value="'+model.Data.data[m].price+'" id="checkbox_0'+model.Data.data[m].cat_id+m+'" price="'+model.Data.data[m].price+'"><label for="checkbox_0'+model.Data.data[m].cat_id+m+'"></label></p>'
					olHtml+='<div class="clear"></div>'
					olHtml+='</li>'
				}
				olHtml+='</ol>'
				$('#main_right_scroll').html(olHtml)
				//console.log($('#main_right_scroll').height())
				//$('#main_right').height($('#main_right_scroll').height())

				//var mScrolly= new iScroll('main_right',{ vScrollbar:true});
				//callback();


				//mScrolly3.destroy();


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

				if(mScrolly){
					mScrolly.destroy();
					console.log(111);
				}
				mScrolly = new iScroll('main_right',{ vScrollbar:true});


		}else{
			alert(result.Data.msg)
		}
	},dataId)
}
function ctrNum(){
		/*点击加号*/
	$('#main_right_scroll ol li p .addBut').die().live('click',function(){
		var numVal = parseInt($(this).siblings('input').val());
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
		var numVal = parseInt($(this).siblings('input').val());
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
	var pre_price =parseInt(that.parent().siblings("p.productTitle").find('label#danjia').html() )
		that.parent().siblings("p.productCheck").find('i#prezong').html( (parseInt(numVal) * pre_price).toFixed(2) );
		that.parent().siblings("p.productCheck").find('input').val( (parseInt(numVal) * pre_price).toFixed(2) );
		GetCount()
}
function GetCount() {//总价格合计
	var conts = 0;
	$('#main_right_scroll li p.productCheck input').each(function () {
		if ($(this).attr("checked")) {
			for (var i = 0; i < $(this).length; i++) {
				conts += parseInt($(this).val());
			}
		}
	});
	$("#moneyAll").html( '￥'+(conts).toFixed(2) );
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
})
