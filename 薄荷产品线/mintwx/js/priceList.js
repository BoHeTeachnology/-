$(function(){
	sessionStorage.clear();
	var loading = false;
    var page = document.pageNum=1;
	Ajax.IndexcatLst(function(result){
		if(result.Data.code ==1){
			var li='';
			var li2='';
			for(i=0;i<result.Data.data.length;i++){
				var cat_id=result.Data.data[i].id;
				li+='<li data-id="'+result.Data.data[i].id+'"><a href="#">'+result.Data.data[i].cat_name+'</a></li>'
				li2+='<li class="li_list" data-id="'+result.Data.data[i].id+'"></li>'
			}
			$('#cat_idbox').html(li)
			$('#cat_idbox2').html(li+'<div class="clear"></div>')
			$('#box01_list').html(li2)
			animateFun();
			$(".find_nav_list li").eq(0).find('a').addClass('active');
			$('.brother-related li').eq(0).addClass("active_olli")

			IndexProjectindex($(".find_nav_list li").eq(0).attr('data-id'),function(){
				$('#box01_list li').eq(0).find('div').show();
			})

		}else{
			opCityTip(result.Data.msg)
		}
	})


    $(document.body).infinite().on("infinite", function() {
	    if(loading) return;
	    loading = true;
	    if( $('.nodata').is(':visible') == true ){
	    	$('#loading').hide()
	    }else{ 
	    	if(sessionStorage.getItem('count')>=50){
	    		$('#loading').show();
	    	}else{
	    		$('#loading').hide();
	    	}
	    }
		setTimeout(function() {
			var cat_id = $('#cat_idbox').find('li.find_nav_cur').attr('data-id');
	    	document.pageNum++;
	    	console.log(document.pageNum)
	    	loading = false;
			Ajax.IndexProjectindex(function(modal){
				if(modal.Data.code ==1){
					var html='';
					if(modal.Data.data==''){
						if(sessionStorage.getItem('count')>=50){
							$('.nodata').show(); 
						}else{
							$('.nodata').hide();
						}
						$('#loading').hide()
						loading = false;
						
					}else{
						for(var m=0; m<modal.Data.data.length; m++){
							var content_link = modal.Data.data[m].content_link==''?'javascript:;':modal.Data.data[m].content_link;
							html+='<div class="pre_media_main">'
							html+='<a href="'+content_link+'" class="weui_media_box">'
							html+='<div class="li_media_hd"><img src="'+modal.Data.data[m].pic+'" alt=""></div>'
							html+='<div class="li_media_bd">'
							html+='<h4 class="weui_media_title">'+modal.Data.data[m].project_name+'</h4>'
							html+='<p class="weui_media_desc">'+parseInt(modal.Data.data[m].price)+ modal.Data.data[m].unit+'</p>'
							html+='</div>'
							if(modal.Data.data[m].content_link !=''){
								html+='<span class="weui_cell_ft"></span>'
							}
							
							html+='</a>'
							html+='</div>'
						}
					}

					$('#box01_list li').each(function(){
						if( $(this).attr('data-id') == cat_id ){
							$(this).append(html);
							loading = false;
						}
					})
					
				}else{
					opCityTip(modal.Data.msg)
				}
			},cat_id,document.pageNum,50)
	    },1000);  
    });
	
	$('#related_nav1').click(function(){
		$(this).hide();
	})

})
function IndexProjectindex(cat_id,callback){
	Ajax.IndexProjectindex(function(modal){
		sessionStorage.setItem('count',modal.Data.count)
		if(modal.Data.code ==1){
			var html='';
			if(modal.Data.data==''){
				html+='<div class="noeata-showpage"><img src="images/nodata.png" alt="" /><p>暂无相关信息</p></div>'
			}else{

				for(var m=0; m<modal.Data.data.length; m++){
					var content_link = modal.Data.data[m].content_link==''?'javascript:;':modal.Data.data[m].content_link;
					html+='<div class="pre_media_main">'
					html+='<a href="'+content_link+'" class="weui_media_box">'
					html+='<div class="li_media_hd"><img src="'+modal.Data.data[m].pic+'" alt=""></div>'
					html+='<div class="li_media_bd">'
					html+='<h4 class="weui_media_title">'+modal.Data.data[m].project_name+'</h4>'
					html+='<p class="weui_media_desc">'+parseInt(modal.Data.data[m].price)+modal.Data.data[m].unit+'</p>'
					html+='</div>'
					if(modal.Data.data[m].content_link !=''){
						html+='<span class="weui_cell_ft"></span>'
					}
					html+='</a>'
					html+='</div>'
				}
			}
			$('#box01_list li').each(function(){
				if( $(this).attr('data-id') == cat_id){
					$(this).html(html)
				}
			})
			callback();
			
		}else{
			opCityTip(modal.Data.msg)
		}
	},cat_id,1,50)
}
function animateFun(){
	var nav_w=$(".find_nav_list li").first().width();
	$(".find_nav_list li").each(function(){
	    $(".find_nav_list li").eq(0).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
	});
	$('.brother-related li').click(function(){
		$('body').animate({scrollTop:0});
		document.pageNum=1;
		var index=$(this).index();
		nav_w = $(".find_nav_list li").eq(index).width()
		console.log(nav_w)
		$(this).addClass('active_olli').siblings().removeClass('active_olli')
		$('.brother-related').slideUp(300);
		//对应导航关联位置展示
		$(".find_nav_list li").eq(index).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
	    var fn_w = ($(".find_nav").width() - nav_w) / 2;
	    var fnl_l;
	    var fnl_x = parseInt($(".find_nav_list li").eq(index).position().left);
	    if (fnl_x <= fn_w) {
	    	fnl_l = 0;
	    } else if (fn_w - fnl_x <= flb_w - fl_w) {
	    	fnl_l = flb_w - fl_w;
	    } else {
	    	fnl_l = fn_w - fnl_x;
	    }
	    $(".find_nav_list").animate({"left" : fnl_l}, 300);
	})
	$('#row_roate_1').click(function(){
		$('.brother-related').slideDown(300);
	})
	$('#row_roate_2').click(function(){
		$('.brother-related').slideUp(300);
	})
	$(".find_nav_list li").on('click', function(){
		$('body').animate({scrollTop:0});
	    var index = $(this).index();
	    $('.brother-related li').eq(index).addClass("active_olli").siblings().removeClass("active_olli");
	    document.pageNum=1;
	});
	var fl_w=$(".find_nav_list").width();
	var flb_w=$(".find_nav_left").width();
	$(".find_nav_list").on('touchstart', function (e) {
	    var touch1 = e.originalEvent.targetTouches[0];
	    x1 = touch1.pageX;
	    y1 = touch1.pageY;
	    ty_left = parseInt($(this).css("left"));
	});
	$(".find_nav_list").on('touchmove', function (e) {
	    var touch2 = e.originalEvent.targetTouches[0];
	    var x2 = touch2.pageX;
	    var y2 = touch2.pageY;
	    if(ty_left + x2 - x1>=0){
	    	$(this).css("left", 0);
	    }else if(ty_left + x2 - x1<=flb_w-fl_w){
	    	$(this).css("left", flb_w-fl_w);
	    }else{
	    	$(this).css("left", ty_left + x2 - x1);
	    }
	    if(Math.abs(y2-y1)>0){
	    	e.preventDefault();
	    }
	});

	for(n=1;n<$(".find_nav_list li").length;n++){
	    var page='pagenavi'+n;
	    var mslide='slider'+n;
	    var mtitle='emtitle'+n;
	    var related = 'related_nav'+n;
	    arrdiv = 'arrdiv' + n;
	    var as=$('#'+page).find('a');
	    var as2=$('#'+related).find('a');
	    var tt=new TouchSlider({id:mslide,'auto':'-1',fx:'ease-out',direction:'left',speed:10,timeout:5000,'before':function(index){
	    	
			var as=document.getElementById(this.page).getElementsByTagName('a');
		    as[this.p].className='';
		    this.p=index;
		    fnl_x =  parseInt($(".find_nav_list li").eq(this.p).position().left);
		    nav_w=$(".find_nav_list li").eq(this.p).width();
		    $(".find_nav_list li").eq(this.p).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
		    var fn_w = ($(".find_nav").width() - nav_w) / 2;
		    var fnl_l;
		    if (fnl_x <= fn_w) {
		      fnl_l = 0;
		    } else if (fn_w - fnl_x <= flb_w - fl_w) {
		      fnl_l = flb_w - fl_w;
		    } else {
		      fnl_l = fn_w - fnl_x;
		    }
		    $(".find_nav_list").animate({"left" : fnl_l}, 0);
		    $('.brother-related li').eq(index).addClass("active_olli").siblings().removeClass("active_olli");
		    
		    if( !(sessionStorage.getItem('index') == index) ){
		    	IndexProjectindex($(".find_nav_list li").eq(this.p).attr('data-id'),function(){
		    		$('#box01_list li').eq(index).find('div').show();
		    		$('#box01_list li').eq(index).siblings().find('div').hide();
		    	});
		    	sessionStorage.setItem('index',index)
		    }
		    
		    
	    }});
	    tt.page = page;
	    tt.p = 0;
	  //console.dir(tt); console.dir(tt.__proto__);

	    for(var i=0;i<as.length;i++){
		    (function(){
		        var j=i;
		        as[j].tt = tt;
		        as[j].onclick=function(){
		        	this.tt.slide(j);
		        	return false;
		        }
		    })();
	    }
	    for(var i=0;i<as2.length;i++){
		    (function(){
		        var j=i;
		        as2[j].tt = tt;
		        as2[j].onclick=function(){
		        	this.tt.slide(j);
		        	return false;
		        	
		        }
		    })();
	    }
	}
}
function opCityTip(tipText){
    $('.opcitybox').fadeIn(500).delay(1000).fadeOut()
    $('.opcitybox span').html(tipText).css({'margin-left':-( ($('.opcitybox span').width()+40)/2)})
}
