$(function(){
    sessionStorage.removeItem('infosee_edit_show')
    $('.userContain').height( $(window).height()-260 )
    window.onresize=function(){
        $('.userContain').height( $(window).height()-260 )
    }
    var user_id = sessionStorage.getItem('user_id')
    console.log(user_id)
    $('#edit-but').click(function(){
        sessionStorage.setItem('user_id',user_id)
        sessionStorage.setItem('point','1')
        location.href="/mint/html/user/edit_info.html#User";
    })
    if( sessionStorage.getItem('getOneobj') ){
        var getOne_obj = JSON.parse(sessionStorage.getItem('getOneobj'));
        $('#user_name').html( getOne_obj.user_name )
        $('#user_age').html( getOne_obj.user_age)
        $('#user_phone').html(getOne_obj.user_phone)
        $('#user_photo img').attr('src',getOne_obj.user_photo)
    }

    AjaxObj.UsergetOne(function(result){
        if(result.Data.code == 1){
            var birth = result.Data.data.birthyear == null || result.Data.data.birthmonth == null ||  result.Data.data.birthday == null || result.Data.data.birthyear == 0 || result.Data.data.birthmonth == 0 ||  result.Data.data.birthday == 0  ? '' : result.Data.data.birthyear+'-'+result.Data.data.birthmonth+'-'+result.Data.data.birthday;
            
            $('#mint_name').html(result.Data.data.mint_name);
            $('#account').html(result.Data.data.account);
            $('#name').html(result.Data.data.name);
            $('#phone').html(result.Data.data.phone);
            $('#real_name').html(result.Data.data.real_name);
            if(result.Data.data.sex == '1'){
                $('#sex').html('男')
            }else if(result.Data.data.sex == '2'){
                $('#sex').html('女')
            }else{
                $('#sex').html('')
            }
            $('#birth').html(birth);
            $('#age').html(ages(birth));
            $('#race').html(result.Data.data.race);
            console.log(result.Data.data.married)
            if(result.Data.data.married == '0'){
                $('#married').html('未婚')
            }else if(result.Data.data.married == '1'){
                $('#married').html('已婚')
            }else{
                $('#married').html('')
            }
            if(result.Data.data.card_type =='1'){
                $('#card_type').html('身份证')
            }else if(result.Data.data.card_type =='3'){
                $('#card_type').html('护照')
            }else{
                $('#card_type').html('')
            }
            if(result.Data.data.have_child == '0'){
                $('#have_child').html('无')
            }else if(result.Data.data.have_child == '1'){
                $('#have_child').html('有')
            }else{
                $('#have_child').html('')
            }
            $('#card_id').html(result.Data.data.card_id);
            $('#company_name').html(result.Data.data.company_name);
            $('#email').html(result.Data.data.email);
            $('#job').html(result.Data.data.job)
            $('#society_number').html(result.Data.data.society_number)
            $('#post_address').html(result.Data.data.post_address)
            $('#remark').html(result.Data.data.remark)
            result.Data.data.photo == '' || result.Data.data.photo == null ? $('#photo img').attr('src','../../images/userPic.png'): $('#photo img').attr('src',result.Data.data.photo);//项目logo 选填      
            var user_name = result.Data.data.real_name ==''? '<b class="no_add_real">未填写真实姓名</b>' : result.Data.data.real_name;
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

        }else{
            alert(result.Data.msg)
        }
    },user_id)
})



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
    $('#'+selector+'').siblings('p').html(tiptext).show()
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html(tiptext).css({'margin-left':-($('.opacity-tip p').width()/2)})
}