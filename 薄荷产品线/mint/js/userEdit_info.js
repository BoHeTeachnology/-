$(function(){
    sessionStorage.removeItem('jump_li');
    $('.userContain').height( $(window).height()-260 )
    window.onresize=function(){
        $('.userContain').height( $(window).height()-260 )
    }
    var user_id = sessionStorage.getItem('user_id')
    if( sessionStorage.getItem('getOneobj') ){
        var getOne_obj = JSON.parse(sessionStorage.getItem('getOneobj'));
        $('#user_name').html( getOne_obj.user_name )
        $('#user_age').html( getOne_obj.user_age)
        $('#user_phone').html(getOne_obj.user_phone)
        $('#user_photo img').attr('src',getOne_obj.user_photo)
    }
    jeDate({
        dateCell:"#birth",//isinitVal:true,
        format:"YYYY-MM-DD",
        isTime:false, //isClear:false,
        choosefun:function(val){
            sessionStorage.setItem('jump_li',1)
            $('#age').val(ages(val))
        }
    })
    upPicFun()
    seeFun(user_id)

    //查看，判断盒子是否显示
    if( sessionStorage.getItem('infosee_edit_show') =='1' ){
        $('#infobox_see,#edit_but_see').show();
        $('#infobox_edit,#save-but').hide();
    }else{
        $('#infobox_edit,#save-but').show();
        $('#infobox_see,#edit_but_see').hide();
    }
    //点击编辑按钮，展示出可编辑状态
    $('#edit_but_see').click(function(){
        sessionStorage.removeItem('infosee_edit_show')
        $('#infobox_see,#edit_but_see').hide();
        $('#infobox_edit,#save-but').show();
    })

    $('#backs').click(function(){
        if( sessionStorage.getItem('jump_li') ==1 ){
            $('#warmTipbox').show();
            $('#no_save').die().live('click',function(){
                sessionStorage.setItem('jump_li',0)
                $('#warmTipbox').hide();
                location.href="/mint/index.html#User";
            })
            $('#save_btn').die().live('click',function(){
                sessionStorage.removeItem('point')
                sessionStorage.setItem('jump_li',0)
                $('#warmTipbox').hide();
                addFun(user_id,function(){
                    setTimeout(function(){
                        location.href="/mint/index.html#User";
                    },1000)
                });
            })
        }else{
            location.href="/mint/index.html#User";
        }
    })
    /*点击跳转，判断值是否发生是那个改变*/
    $('#routeUl li a').click(function(){
        var see_data = $(this).attr('see-href');
        var href_data = $(this).attr('data-href');
        if( sessionStorage.getItem('jump_li') ==1 ){
            $('#warmTipbox').show();
            $('#no_save').die().live('click',function(){
                sessionStorage.setItem('jump_li',0)
                $('#warmTipbox').hide();
                if(sessionStorage.getItem('point') == '1' ){
                    location.href="/mint/html/user/"+see_data;
                }else{
                    location.href="/mint/html/user/"+href_data;
                }
                
            })
            $('#save_btn').die().live('click',function(){
                sessionStorage.setItem('jump_li',0)
                $('#warmTipbox').hide();
                addFun(user_id,function(){
                    if(sessionStorage.getItem('point') == '1' ){
                        location.href="/mint/html/user/"+see_data; 
                    }else{
                       location.href="/mint/html/user/"+href_data; 
                    }
                    
                });
            })
        }else{
            if(sessionStorage.getItem('point') == '1' ){
                location.href="/mint/html/user/"+see_data;
            }else{
                location.href="/mint/html/user/"+href_data;
            }
            
        }
      
            
    })
    $('#change input,#change select').change(function(){
        sessionStorage.setItem('jump_li',1)
    })
    $('#birth').click(function(){
        sessionStorage.setItem('jump_li',1)
    })
    $('.close_x').click(function(){
        $('#warmTipbox').hide();
    })
    $('#bindPhone').click(function(){
        $('#account2').show().focus();
        $('#bindPhone,#bindDesc').hide();
    })
    $('#account2').blur(function(){
        if($(this).val()==''){
            $('#bindPhone,#bindDesc').show();
            $(this).hide();
        }
        
    })
    $('#save-but').click(function(){
        sessionStorage.setItem('jump_li',0)
        addFun(user_id,function(){
            if( sessionStorage.getItem('point')){
                location.href="/mint/html/user/see_info.html#User";
            }else{
                seeFun(user_id)
                $('#infobox_edit,#save-but').hide();
                $('#infobox_see,#edit_but_see').show();
            }
        });
    })

})
function addFun(user_id,callback){
    
    if(sessionStorage.getItem('is_ownVal')==1){
        var account =$('#account').val();
    }else{
        var account =$('#account2').val();
    }
    var mint_name = $('#mint_name').val(),
        name = $('.yongHuming').val(),
        phone = $('#phone').val(),
        password = $('.Mima').val(),
        real_name = $('#real_name').val(),
        sex = $('#sex input:checked').val() || '',
        birth = $('#birth').val(),
        race = $('#race').val(),
        married = $('#married input:checked').val() || '',
        card_type = $('#card_type option:selected').val() || '';
        card_id = $('#card_id').val(),
        have_child = $('#have_child input:checked').val() || '',
        company_name = $('#company_name').val(),
        email = $('#email').val(),
        job = $('#job').val(),
        society_number = $('#society_number').val(),
        post_address = $('#post_address').val(),
        remark = $('#remark').val(),
        photo = $('#photo img').attr('src') == '../../images/userPic.png' ? '' : $('#photo img').attr('src'),//项目photo 选填
        identity_id = 1 ;
    //console.log(account,name,phone,password,photo)
    //console.log(real_name,sex,birth,race,married,card_type,card_id,have_child,company_name,email,job,society_number,post_address,remark)
    
    if( !ifFun(mint_name,account,phone,password,card_id,email,society_number) ){
        return false;
    }else{
        AjaxObj.Usersave(function(result){
            if( result.Data.code == 1 ){
                $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()  //修改成功
                $('.opacity-tip p').html('<span class="success">保存成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                sessionStorage.setItem('infosee_edit_show','1')
                setTimeout(function(){
                    $('.opacity-tip').hide();
                    callback()
                },1000)
                
                $('#user_photo img').attr('src',$('#photo img').attr('src') );
                var user_age = $('#age').val() =='' || $('#age').val() ==0 ? '' : $('#age').val()+'岁';
                var name = $('#real_name').val() == '' ? '<b class="no_add_real">未填写真实姓名</b>' : $('#real_name').val();
                $('#user_name').html( name )
                $('#user_age').html(user_age)
                $('#user_phone').html( $('#phone').val() )
                var getOne_obj = {
                    "user_name":name,
                    "user_age":user_age,
                    "user_phone":$('#phone').val(),
                    "user_photo":$('#photo img').attr('src')
                }
                sessionStorage.setItem('getOneobj',JSON.stringify(getOne_obj) )

            }else{
                $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
            }
        },user_id,identity_id,mint_name,photo,account,name,phone,password,real_name,sex,birth,race,married,card_type,card_id,have_child,company_name,email,job,society_number,post_address,remark)
    
    }
}

function seeFun(user_id){
    AjaxObj.UsergetOne(function(result){
        if(result.Data.code == 1){
            var birth = result.Data.data.birthyear == null || result.Data.data.birthmonth == null ||  result.Data.data.birthday == null || result.Data.data.birthyear == 0 || result.Data.data.birthmonth == 0 ||  result.Data.data.birthday == 0  ? '' : result.Data.data.birthyear+'-'+result.Data.data.birthmonth+'-'+result.Data.data.birthday;
            $('#mint_name').val(result.Data.data.mint_name)
            
            if(result.Data.data.is_own=='0'){ 
                $('#account_twobox,#account2,#bindPhone,#bindDesc,#pwd_tip').show();
                $('#account_onebox,#account2').hide();
                $('#account2').val(result.Data.data.account)
                $('.relationtip_tip').show();
            }else{
                sessionStorage.removeItem('trelationObj');
                $('#account_twobox,#account2,#bindPhone,#bindDesc,#pwd_tip').hide();
                $('#account_onebox').show();
                $('#account').val(result.Data.data.account);
                $('.relationtip_tip').hide();
            }
            sessionStorage.setItem('is_ownVal',result.Data.data.is_own)
            sessionStorage.setItem('user_phone',result.Data.data.phone)
            $('.yongHuming').val(result.Data.data.name);
            $('#phone').val(result.Data.data.phone);
            $('#real_name').val(result.Data.data.real_name);
            $('#sex input[value="'+result.Data.data.sex+'"]').attr('checked',true);
            $('#birth').val(birth);
            $('#age').val(ages(birth));
            $('#race').val(result.Data.data.race);
            $('#married input[value="'+result.Data.data.married+'"]').attr('checked',true);
            $('#card_type option[value="'+result.Data.data.card_type+'"]').attr('selected',true);
            $('#card_id').val(result.Data.data.card_id);
            $('#have_child input[value="'+result.Data.data.have_child+'"]').attr('checked',true);
            $('#company_name').val(result.Data.data.company_name);
            $('#email').val(result.Data.data.email);
            $('#job').val(result.Data.data.job)
            $('#society_number').val(result.Data.data.society_number)
            $('#post_address').val(result.Data.data.post_address)
            $('#remark').val(result.Data.data.remark)
            
            result.Data.data.photo == '' || result.Data.data.photo == null ? $('#photo img').attr('src','../../images/userPic.png'): $('#photo img').attr('src',result.Data.data.photo);//项目logo 选填      
            var user_name = result.Data.data.real_name ==''? '<b class="no_add_real">未填写真实姓名</b>': result.Data.data.real_name;
            var user_age = ages(birth) == '' ? '' : ages(birth)+'岁';
            var user_photo = result.Data.data.photo == '' || result.Data.data.photo == null ? '../../images/userPic.png' : result.Data.data.photo;
            $('#user_name').html(user_name)
            $('#user_age').html(user_age)
            $('#user_phone').html(result.Data.data.phone)
            $('#user_photo img').attr('src',user_photo)
            var getOne_obj = {
                "user_name":user_name,
                "user_age":user_age,
                "user_phone":result.Data.data.phone,
                "user_photo":user_photo
            }
            sessionStorage.setItem('getOneobj',JSON.stringify(getOne_obj) )

            $('#mint_name_see').html(result.Data.data.mint_name)
            $('#account_see').html(result.Data.data.account);
                $('#name_see').html(result.Data.data.name);
                $('#phone_see').html(result.Data.data.phone);
                $('#real_name_see').html(result.Data.data.real_name);
                if(result.Data.data.sex == '1'){
                    $('#sex_see').html('男')
                }else if(result.Data.data.sex == '2'){
                    $('#sex_see').html('女')
                }else{
                    $('#sex_see').html('')
                }
                $('#birth_see').html(birth);
                $('#age_see').html(ages(birth));
                $('#race_see').html(result.Data.data.race);
                if(result.Data.data.married == '0'){
                    $('#married_see').html('未婚')
                }else if(result.Data.data.married == '1'){
                    $('#married_see').html('已婚')
                }else{
                    $('#married_see').html('')
                }
                if(result.Data.data.card_type =='1'){
                    $('#card_type_see').html('身份证')
                }else if(result.Data.data.card_type =='3'){
                    $('#card_type_see').html('护照')
                }else{
                    $('#card_type_see').html('')
                }
                if(result.Data.data.have_child == '0'){
                    $('#have_child_see').html('无')
                }else if(result.Data.data.have_child == '1'){
                    $('#have_child_see').html('有')
                }else{
                    $('#have_child_see').html('')
                }
                $('#card_id_see').html(result.Data.data.card_id);
                $('#company_name_see').html(result.Data.data.company_name);
                $('#email_see').html(result.Data.data.email);
                $('#job_see').html(result.Data.data.job)
                $('#society_number_see').html(result.Data.data.society_number)
                $('#post_address_see').html(result.Data.data.post_address)
                $('#remark_see').html(result.Data.data.remark)
                result.Data.data.photo == '' || result.Data.data.photo == null ? $('#photo_see img').attr('src','../../images/userPic.png'): $('#photo_see img').attr('src',result.Data.data.photo);//项目logo 选填      
            

        }else{
            alert(result.Data.msg)
        }
    },user_id)
}
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
        sessionStorage.setItem('jump_li',1)
        var img = cropper.getDataURL();
        AjaxObj.imgBase64Up(function(result){
            if(result.Data.code == 1){
                $('.new-create-opcity').hide()
                $('#photo img').attr('src',result.Data.photo_path)
                $('#file,#file2').val('');
            }else{
                $('#photo').siblings('p').html(result.Data.msg).show()
                $('#file,#file2').val('');
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
function ifFun(mint_name,account,phone,password,card_id,email,society_number){
    var mobile_reg=/^1[3|4|5|7|8][0-9]\d{8}$/;
    var credit_reg = /^[1-9]([0-9]{16}|[0-9]{13})[xX0-9]$/;
    var Email_reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    var huzhao_reg =/^1[45][0-9]{7}|G[0-9]{8}|P[0-9]{7}|S[0-9]{7,8}|D[0-9]+$/;
    var mint_name_reg = /^[a-zA-Z][a-zA-Z0-9_]*$/;
    if(mint_name ==''){
        opCityTip('mint_name','薄荷名不能为空')
    }else if(!mint_name_reg . test( mint_name ) ){
        opCityTip('mint_name','薄荷名为字母开头、数字、下划线组合')
    }else if(sessionStorage.getItem('is_ownVal') =='1' && account == ''){
        $('#account').css({'border':'solid 1px red'})
        opCityTip('account','登录手机号不能为空')
        return false;
    }else if(account!='' && !mobile_reg . test( account ) ){
        $('#account').css({'border':'solid 1px red'})
        opCityTip('account','手机号格式不正确')
        return false;
    }else if(phone == ''){
        $('#phone').css({'border':'solid 1px red'})
        opCityTip('phone','联系方式不能为空')
        return false;
    }else if(!mobile_reg . test( phone ) ){
        $('#phone').css({'border':'solid 1px red'})
        opCityTip('phone','手机号格式不正确')
        return false;
    }else if(password != '' && ($('.Mima').val().length <6 || $('.Mima').val().length > 20) ){
        $('.Mima').css({'border':'solid 1px red'})
        $('.Mima').siblings('p').html('请将密码长度保持在6到20个字符').show()
        opCityTip('','请将密码长度保持在6到20个字符')
        return false;
    }else if( $('#card_id').val() !='' && $('#card_type option:selected').val()==1 && !credit_reg . test( $('#card_id').val() ) ){
        $('#card_id').css({'border':'solid 1px red'})
        opCityTip('card_id','请输入正确的证件号')
        return false;
    }else if( $('#card_id').val() !='' && $('#card_type option:selected').val()==3 && !huzhao_reg . test( $('#card_id').val() ) ){
        $('#card_id').css({'border':'solid 1px red'})
        opCityTip('card_id','请输入正确的证件号')
        return false;
    }else if( email != '' && !Email_reg . test( email ) ){
        $('#email').css({'border':'solid 1px red'})
        opCityTip('email','请输入正确的邮箱')
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
function opCityTip(selector,tiptext){
    $('#'+selector).css({'border':'solid 1px red'})
    $('#'+selector).siblings('p').html(tiptext).show()
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html(tiptext).css({'margin-left':-($('.opacity-tip p').width()/2)})
}