$(function(){
    sessionStorage.removeItem('pastsee_edit_show');
    $('.userContain').height( $(window).height()-260 )
    $('.containb_right').css({'min-height': $(window).height()-263 })
    window.onresize=function(){
        $('.userContain').height( $(window).height()-260 )
        $('.containb_right').css({'min-height': $(window).height()-263 })
    }
    var user_id = sessionStorage.getItem('user_id')
    var userObj = JSON.parse(sessionStorage.getItem('getOneobj'));
    $('#user_name').html(userObj.user_name);
    $('#user_age').html(userObj.user_age);
    $('#user_phone').html(userObj.user_phone);
    $('#user_photo img').attr('src',userObj.user_photo);
    $('.userContain input').attr('disabled',true)


    AjaxObj.UsersltDateRecords(function(model){
        if(model.Data.code ==1){
            if( model.Data.data =='' ){
                $('#btnsbox').hide();
                $('.update_his,#creat_time,.see_update_timebox').hide();
                $('#page_haveData').hide();
                $('#page_noData').show();
            }else{
                $('#page_haveData').show();
                $('#page_noData').hide();
                $('.z_time_btn').removeClass('nobord_btom');
                $('.update_his,#creat_time,.see_update_timebox').show();
                $('#btnsbox').show();
                var html='';
                $('#recent_time').html( model.Data.data[0].create_time )
                for(var i=0;i<model.Data.data.length;i++){
                    html+='<option value="'+model.Data.data[i].create_time+'">'+model.Data.data[i].create_time+'</option>'
                }
                $('#creat_time').html(html)
                if( sessionStorage.getItem('create_time_past' )){
                    if(sessionStorage.getItem('create_time_past' ) !='nodata'){
                        $('#creat_time option[value="'+sessionStorage.getItem('create_time_past' )+'"]').attr('selected',true)
                        getTimeFun(user_id,sessionStorage.getItem('create_time_past' ))
                    }else{
                        getTimeFun(user_id,model.Data.data[0].create_time)
                    }  
                }else{
                    getTimeFun(user_id,model.Data.data[0].create_time)
                }
                $('#creat_time').change(function(){
                    sessionStorage.setItem('create_time_past',$(this).val() )
                    getTimeFun(user_id,$(this).val())
                })
            }
        }
    },user_id,1)
    if( sessionStorage.getItem('getOneobj') ){
        var getOne_obj = JSON.parse(sessionStorage.getItem('getOneobj'));
        $('#user_name').html( getOne_obj.user_name )
        $('#user_age').html( getOne_obj.user_age)
        $('#user_phone').html(getOne_obj.user_phone)
        $('#user_photo img').attr('src',getOne_obj.user_photo)
    }
    $('#edit-but').click(function(){
        sessionStorage.setItem('create_time_past',$('#creat_time option:selected').val())
        sessionStorage.setItem('past_where','see_page')
        location.href="/mint/html/user/edit_past.html#User";
    })
    $('#add-but,#add_btns').click(function(){
        sessionStorage.setItem('create_time_past','nodata')
        sessionStorage.setItem('past_where','see_page')
        location.href="/mint/html/user/edit_past.html#User";
    })

})
function getTimeFun(user_id,create_time){
    AjaxObj.UsersltArchives(function(result){
        forFun('body_condition',result.Data.body_condition,'暂时无相关数据'); //全身情况
        forFun('family_history',result.Data.family_history,'无家族史'); //家族史
        forFun('medicine',result.Data.medicine,'无用药史') //用药史
        forFun('surgery',result.Data.surgery,'无手术史') //手术史
        forFun('allergy',result.Data.allergy,'无过敏情况') //过敏情况
        forFun('infection',result.Data.infection,'无传染病') //传染病
        function forFun(idName,resultData,desc_word){
            var html='';
            for(var i=0; i<resultData.length;i++){
                $('#'+idName+' span input[value="'+result.Data.body_condition[i].name+'"]').siblings('input').val(result.Data.body_condition[i].date)
                if( resultData[i].state == 1 ){
                    html+='<span>'+resultData[i].name+'</span>'

                    if( resultData[i].date !='' && resultData[i].name == '定期体检'){
                        html+='<span>最近一次体检日期：'+resultData[i].date+'</span>'
                    }else if(resultData[i].date !='' && resultData[i].name == '定期洗牙'){
                        html+='<span>最近一次洗牙日期：'+resultData[i].date+'</span>'
                    }else{
                        html+='<span>'+resultData[i].date+'</span>'
                    }

                }else{
                    if( resultData[i].date !='' && resultData[i].name == '定期体检'){
                        html+='<span>最近一次体检日期：'+resultData[i].date+'</span>'
                    }else if(resultData[i].date !='' &&　resultData[i].name == '定期洗牙'){
                        html+='<span>最近一次洗牙日期：'+resultData[i].date+'</span>'
                    } 
                }    
            }
            $('#'+idName+'_desc').html(html)
            if($('#'+idName+'_desc span').length==0){
                $('#'+idName+'_desc').html('<span>'+desc_word+'</span>');
            }
        }
    },user_id,create_time,1)
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
