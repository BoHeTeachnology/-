$(function(){
	$('.closebtni,#cancelBtn,#cancelBtn2').click(function(){
		$('.clinicTipbox-opacity').hide();
		$('input[name="textInput"],input[type="password"],textarea').val('');
		$('input[name="textInput"],input[type="password"],textarea').css({'border':'#ccc 1px solid'});
		$('.errorTip,.uppicerrorTip').html('');
		$('.touxiang img').attr('src','');
	})
	$('.close-dialog').click(function(){
		$('.new-create-opcity').hide();
	})
	$('.opacity-tip').click(function(){
		$(this).hide()
	})
	$('input[type="text"],input[type="password"],select,textarea').focus(function(){
		$(this).css({'border':'#ccc 1px solid'});
		$(this).parents('.inputboxdiv').find('p').html('');
	})
	AjaxObj.getHead(function(result){
		if(result.Data.code ==0 ){
			location.href='http://'+location.host+'/mint/clinic/login.html';
		}
	})
})