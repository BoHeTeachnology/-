$(function(){
    var idSee = sessionStorage.getItem('idSee')

    AjaxObj.AdsetgetOne(function(result){
        if(result.Data.code == 1){
            var birth = result.Data.data.birthyear == null || result.Data.data.birthmonth == null ||  result.Data.data.birthday == null  ? '' : result.Data.data.birthyear+'-'+result.Data.data.birthmonth+'-'+result.Data.data.birthday;
            $('#name').html(result.Data.data.name);
            if(result.Data.data.sex == 1 ){
                $('#sex').html('男');
            }else{
                $('#sex').html('女');
            }
            $('#J-xl').html(birth);
            $('#age').html(ages(birth));
            $('#phone').html(result.Data.data.phone);
            $('#account').html(result.Data.data.account);
            var role_id = result.Data.data.role_id;
            AjaxObj.AdsetroleList(function(result2){
                if(result2.Data.code == 1 ){
                    var html='';
                    for (var i=0; i<result2.Data.data.length; i++ ) {
                        if( result2.Data.data[i].id == role_id ){
                            html+=result2.Data.data[i].role_name
                        }
                        
                    };
                    $('#role').html(html)
                }else{
                    console.log(result2.Data.msg)
                }
            })
        }else{
            console.log(result.Data.msg)
        }
    },idSee)
           
       
    $('#edit-but').click(function(){
        location.href="/mint/html/adminset/edit.html#Adset";
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