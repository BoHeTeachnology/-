var header='<div style="min-width:800px">';
    header+='<dl>';
        header+='<dt id="user_photo"><img src="" alt=""></dt>';
        header+='<dd>';
            header+='<h3>';
                header+='<span id="user_name"></span><span id="user_age"></span>'
                header+='<b class="relationtip_tip">( 与 <label class="parentname" id="parentName"></label> 的关系： <label id="relation_child">子女</label> )</b>';
            header+='</h3>';
            header+='<p id="user_phone"></p>';
        header+='</dd>';
    header+='</dl>';
    header+='<div class="head_desc_btnbox" id="head_btnbox" style="display:none">';
    	header+='<a href="javascript:;" class="default_inputbtn see-but2" id="report-but-see" style="display:none">查看初筛报告单</a>';
        header+='<a href="javascript:;" class="default_inputbtn see-but1" id="report-but-add" style="display:none">生成初筛报告单</a>';
        header+='<a href="javascript:;" class="default_inputbtn see-but" id="see-but-case">查看病历</a>';
    header+='</div>';
header+='</div>';
document.write(header);
$(document).ready(function(){
	//console.log(sessionStorage.getItem('accountNum'))
	if(sessionStorage.getItem('accountNum')){
		if(sessionStorage.getItem('accountNum') == '' ){
			$('#routeUl li').eq(4).hide();
		}else{
			$('#routeUl li').eq(4).show();
		}
	}
	AjaxObj.UsergetOne(function(result){
		sessionStorage.setItem('accountNum',result.Data.data.account)
		if(result.Data.data.account ==''){
			$('#routeUl li').eq(4).hide();
		}else{
			$('#routeUl li').eq(4).show();
		}
		if(result.Data.record==1){
			$('#report-but-see').attr('data-id',result.Data.record_id).show();
			$('#report-but-add').hide();
		}else{
			$('#report-but-see').hide();
			$('#report-but-add').attr('data-id',result.Data.record_id).show();
		}
		$('#head_btnbox').show();
	},sessionStorage.getItem('user_id'))

		
	if(sessionStorage.getItem('trelationObj')){
		//console.log('1')
		var trelationObj = JSON.parse(sessionStorage.getItem('trelationObj'))
		$('.relationtip_tip').show();
		$('#parentName').html(trelationObj.real_name)
		$('#relation_child').html(trelationObj.relation)
		$('#parentName').attr('data-id',trelationObj.id)
	}else{
		//console.log('2')
		AjaxObj.getRelationUserParent(function(result){
			if(result.Data.code ==1){
				if(result.Data.data==''){
					$('.relationtip_tip').hide();
				}else{
					sessionStorage.setItem('trelationObj',JSON.stringify(result.Data.data));
					$('.relationtip_tip').show();
					$('#parentName').html(result.Data.data.real_name)
					$('#parentName').attr('data-id',result.Data.data.id)
					$('#relation_child').html(result.Data.data.relation)
				}
					
			}else{
				$('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
				$('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
			}
		},sessionStorage.getItem('user_id'))
	}
	$('#parentName').click(function(){
		sessionStorage.removeItem('trelationObj')
		sessionStorage.setItem('user_id',$(this).attr('data-id'))
		location.reload();
	})
	$('#report-but-see').click(function(){
		sessionStorage.setItem('idSee',$(this).attr('data-id'))
		location.href="/mint/html/illLibrary/see.html#Record";
	})
	$('#report-but-add').click(function(){
		sessionStorage.setItem('record_id',$(this).attr('data-id'))
		location.href="/mint/html/illLibrary/add.html#Record";
	})
	$('#see-but-case').click(function(){
		opCityTipS('待开发...')
	})
	function opCityTipS(tiptext){
	    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
	    $('.opacity-tip p').html(tiptext).css({'margin-left':-($('.opacity-tip p').width()/2)})
	}
})
	