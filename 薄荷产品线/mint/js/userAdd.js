$(function(){
    jeDate({
        dateCell:"#J-xl",//isinitVal:true,
        format:"YYYY-MM-DD",
        isTime:false, //isClear:false,
        choosefun:function(val){
            $('#age').val(ages(val))
        }
    })
    upPicFun()
    $('#save-but').click(function(){
            var name = $('#name').val(),
                real_name = $('#real_name').val(),
                sex = $('#sex input:checked').val(),
                birth = $('#J-xl').val(),
                card_id = $('#card_id').val(),
                email = $('#email').val(),
                account = $('#account').val(),
                phone = $('#phone').val(),
                password = $('#password').val(),
                company_name = $('#company_name').val(),
                photo = $('#logo img').attr('src') == 'images/user.png' ? '' : $('#logo img').attr('src'),//项目logo 选填
                identity_id = 1 ;
            //console.log(name,sex,birth,card_id,email,account,phone,password,company_name)
            if( !ifFun(name,sex,birth,card_id,email,account,phone,password,company_name) ){
                return false;
            }else{
                AjaxObj.UserAdd2(function(result){
                    if( result.Data.code == 1 ){
                        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                        $('.opacity-tip p').html('<span class="success">添加成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                        setTimeout(function(){
                           location.href="/mint/index.html#Customer";
                        },500);
                    }else{
                        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                        $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
                    }
                },name,real_name,sex,birth,card_id,email,account,phone,password,company_name,identity_id,photo)
            }
    })


})
function upPicFun(){
    /*图片头像上传*/
    var options =
    {
        thumbBox: '.thumbBox',
        spinner: '.spinner',
        imgSrc: '/mint/images/user.png'
    }
    var cropper = $('.imageBox').cropbox(options);
    $('#file,#file2').on('change', function(){
        $('.new-create-opcity').show()
        var reader = new FileReader();
        reader.onload = function(e) {
            options.imgSrc = e.target.result;
            cropper = $('.imageBox').cropbox(options);
        }
        reader.readAsDataURL(this.files[0]);
        this.files = [];
    })
    $('#btnCrop').on('click', function(){
        var img = cropper.getDataURL();
        AjaxObj.imgBase64Up(function(result){
            if(result.Data.code == 1){
                $('.new-create-opcity').hide()
                $('#logo img').attr('src',result.Data.photo_path)
            }else{
                $('#logo').siblings('p').html(result.Data.msg).show()
            }
        },img)
    })
    $('#btnZoomIn').on('click', function(){
        cropper.zoomIn();
    })
    $('#btnZoomOut').on('click', function(){
        cropper.zoomOut();
    })

    $('.close_dialog').click(function(){
        $('.new-create-opcity').hide();
    })
    /*------图片头像上传结束----*/
}
function ifFun(name,sex,birth,card_id,email,account,phone,password,company_name){
    var mobile_reg=/^1[3|4|5|7|8][0-9]\d{8}$/;
    var credit = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
    var Email_reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(account == ''){
        $('#account').siblings('p').html('账号不能为空').show()
        $('#account').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">账号不能为空</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( !mobile_reg . test( account ) ){
        $('#account').siblings('p').html('手机号格式不正确').show()
        $('#account').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">手机号格式不正确</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }/*else if( name == '' ){
        $('#name').siblings('p').html('客户姓名不能为空').show()
        $('#name').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">客户姓名不能为空</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }*/else if( card_id != '' && !credit . test( card_id ) ){
        $('#card_id').siblings('p').html('请输入正确的身份证号').show()
        $('#card_id').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">请输入正确的身份证号</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( email != '' && !Email_reg . test( email ) ){
        $('#email').siblings('p').html('请输入正确的邮箱').show()
        $('#email').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">请输入正确的邮箱</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( phone == '' ){
        $('#phone').siblings('p').html('手机号不能为空').show()
        $('#phone').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">手机号不能为空</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if(!mobile_reg . test( phone )){
        $('#phone').siblings('p').html('手机号格式不正确').show()
        $('#phone').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">手机号格式不正确</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( password == '' ){
        $('#password').siblings('p').html('密码不能为空').show()
        $('#password').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">密码不能为空</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if($('#password').val().length <6 || $('#password').val().length > 20){
        $('#password').siblings('p').html('请将密码长度保持在6到20个字符').show()
        $('#password').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">请将密码长度保持在6到20个字符</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }/*else if( company_name == '' ){
        $('#company_name').siblings('p').html('所在公司不能为空').show()
        $('#company_name').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">所在公司不能为空</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }*/else{
        return true;
    }
}

function  ages(str){
    var  r  =  str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if(r==null) return  false;
    var  d=  new  Date(r[1],  r[3]-1,  r[4]);
    if  (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]){
        var  Y  =  new  Date().getFullYear();
        return( Y-r[1] );
    }
    return("输入的日期格式错误！");
}


