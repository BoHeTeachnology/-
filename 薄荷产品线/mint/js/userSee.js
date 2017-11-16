$(function(){
    var idSee = sessionStorage.getItem('idSee')
    AjaxObj.UsergetOne(function(result){
        if(result.Data.code == 1){
            var birth = result.Data.data.birthyear == null || result.Data.data.birthmonth == null ||  result.Data.data.birthday == null || result.Data.data.birthyear == 0 || result.Data.data.birthmonth == 0 ||  result.Data.data.birthday == 0  ? '' : result.Data.data.birthyear+'-'+result.Data.data.birthmonth+'-'+result.Data.data.birthday;
            $('#name').html(result.Data.data.name);
            $('#real_name').html(result.Data.data.real_name);
            if(result.Data.data.sex == 1 ){
                $('#sex').html('男');
            }else{
                $('#sex').html('女');
            }
            $('#J-xl').html(birth);
            $('#age').html(ages(birth));
            $('#card_id').html(result.Data.data.card_id);
            $('#email').html(result.Data.data.email);
            $('#phone').html(result.Data.data.phone);
            $('#account').html(result.Data.data.account);
            $('#company_name').html(result.Data.data.company_name);
        }else{
            alert(result.Data.msg)
        }
    },idSee)

    $('#edit-but').click(function(){
        location.href="/mint/edit.html#User";
        sessionStorage.setItem('user_id',idSee)
    })

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