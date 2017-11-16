$(function(){
    jeDate({
        dateCell:"#J-xl",//isinitVal:true,
        format:"YYYY-MM-DD",
        isTime:false, //isClear:false,
        choosefun:function(val){
            $('#age').val(ages(val))
        }
    })
    var user_id = sessionStorage.getItem('user_id')
    AjaxObj.AdsetroleList(function(result){
        if(result.Data.code == 1 ){
            var html='';
            for (var i=0; i<result.Data.data.length; i++ ) {
                html+='<option value="'+result.Data.data[i].id+'">'+result.Data.data[i].role_name+'</option>'
            };
            $('#role_id').append(html)
            AjaxObj.AdsetgetOne(function(result){
                if(result.Data.code == 1){
                    var birth = result.Data.data.birthyear == null || result.Data.data.birthmonth == null ||  result.Data.data.birthday == null  ? '' : result.Data.data.birthyear+'-'+result.Data.data.birthmonth+'-'+result.Data.data.birthday;
                    $('#name').val(result.Data.data.name);
                    $('#sex input[value="'+result.Data.data.sex+'').attr('checked',true);
                    $('#J-xl').val(birth);
                    $('#age').val(ages(birth));
                    $('#phone').val(result.Data.data.phone);
                    $('#account').val(result.Data.data.account);
                    $('#role_id option[value="'+result.Data.data.role_id+'').attr('selected',true);
                }else{
                    alert(result.Data.msg)
                }
            },user_id)
        }else{
            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
        }
    })
        



    $('#save-but').click(function(){
            var name = $('#name').val(),
                sex = $('#sex input:checked').val(),
                birth = $('#J-xl').val(),
                account = $('#account').val(),
                phone = $('#phone').val(),
                password = $('#password').val(),
                role_id = $('#role_id option:selected').val(),
                identity_id = 3 ;
            //console.log(name,sex,birthday,position,hospital,field,job_age,context,account,password,label,label_id)
            if( !ifFun(name,sex,birth,account,phone,password,role_id) ){
                return false;
            }else{
                AjaxObj.Adsetedit(function(result){
                    if( result.Data.code == 1 ){
                        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                        $('.opacity-tip p').html('<span class="success">修改成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                        setTimeout(function(){
                           history.go(-1);
                        },500);
                    }else{
                        if(result.Data.msg == '用户已存在！'){
                            $('#phone').siblings('p').html(result.Data.msg).show()
                            $('#phone').css({'border':'solid 1px red'})
                            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)}) 
                        }else{
                           $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                           $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)}) 
                        }
                    }
                },user_id,name,sex,birth,account,phone,password,role_id,identity_id)
            }
    })


})

function ifFun(name,sex,birth,account,phone,password,role_id){
    var mobile_reg=/^1[3|4|5|7|8][0-9]\d{8}$/;
    var name_reg= /^[A-Za-z0-9]+$/;
    if(account == ''){
        $('#account').siblings('p').html('账号不能为空').show()
        $('#account').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">账号不能为空</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( !name_reg . test( account ) ){
        $('#account').siblings('p').html('用户名由字母、数字任意组合').show()
        $('#account').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">用户名由字母、数字任意组合</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( name == '' ){
        $('#name').siblings('p').html('医生姓名不能为空').show()
        $('#name').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">医生姓名不能为空</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
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
    }else if( password !='' && $('#password').val().length <6 || $('#password').val().length > 20){
        $('#password').siblings('p').html('请将密码长度保持在6到20个字符').show()
        $('#password').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">请将密码长度保持在6到20个字符</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if(role_id == ''){
        $('#role_id').siblings('p').html('请选择角色').show()
        $('#role_id').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">请选择角色</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else{
        return true;
    }
}


function  ages(str){
    var  r  =  str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if(r==null) return  '';
    var  d=  new  Date(r[1],  r[3]-1,  r[4]);
    if  (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]){
        var  Y  =  new  Date().getFullYear();
        return( Y-r[1] );
    }
    return("输入的日期格式错误！");
}