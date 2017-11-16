$(function(){
    $('#routeUl li').eq(4).show();
    $('.userContain').height( $(window).height()-190 )
    $('.containb_right').css({'min-height': $(window).height()-192 })
    window.onresize=function(){
        $('.userContain').height( $(window).height()-190 )
        $('.containb_right').css({'min-height': $(window).height()-192 })
    }
    jeDate({
        dateCell:"#birth",//isinitVal:true,
        format:"YYYY-MM-DD",
        isTime:false, //isClear:false,
        choosefun:function(val){}
    })
    var user_id = sessionStorage.getItem('user_id');
    if( sessionStorage.getItem('getOneobj') ){
        var getOne_obj = JSON.parse(sessionStorage.getItem('getOneobj'));
        $('#user_name').html( getOne_obj.user_name )
        $('#user_age').html( getOne_obj.user_age)
        $('#user_phone').html(getOne_obj.user_phone)
        $('#user_photo img').attr('src',getOne_obj.user_photo)
    }
    if(user_id){
        loadTable(user_id)
    }else{
        $('#family_able').html('<tr><td colspan="5">暂时没有相关数据</td></tr>')
    }
    
    //添加
    $('#add-but').click(function(){
        var getOne_obj = JSON.parse(sessionStorage.getItem('getOneobj'));
        $('#family_tipbox').show();
        $('#family_tipbox .toph4 b').html('添加关系成员');
        $('#member_name,#relation,#birth,#phone').val('');
        $('#phone').val(getOne_obj.user_phone);
        $('#confirm-but').die().live('click',function(e){
            var member_name=$('#member_name').val();
            var relation=$('#relation').val();
            var phone=$('#phone').val();
            var birth=$('#birth').val();
            if( !checkFun(member_name,relation,birth,phone) ){
                return false;
            }else{
                AjaxObj.addRelationUser(function(result){
                    if(result.Data.code==1){
                        opCityTip('','添加成功');
                        loadTable(user_id)
                        $('#family_tipbox').hide();
                    }else{
                        if(result.Data.msg == '缺少用户id！'){
                            opCityTip('','请先去完善基础信息')
                            setTimeout(function(){
                                location.href="/mint/html/user/add_info.html#User";
                            },1000)
                        }else{
                            opCityTip('',result.Data.msg)
                        }
                    }
                },user_id,phone,member_name,birth,relation)
            }   
            e.stopPropagation()
        })
    })   
    /*点击跳转，判断值是否发生是那个改变*/
    $('#routeUl li a').click(function(){
        var see_data = $(this).attr('see-href');
        var href_data = $(this).attr('data-href');
        if( sessionStorage.getItem('from_family') == 'see_family' ){
            location.href="/mint/html/user/"+see_data;
        }else{
            location.href="/mint/html/user/"+href_data;
        }   
    })
    $('#birth').click(function(){
        $('#jedatebox').css({'z-index':'999999'})
    })

})
function loadTable(user_id){
    AjaxObj.indexRelationUser(function(result){
        if(result.Data.code==1){
            if(result.Data.data == '' || result.Data.data == null ){
                $('#family_able').html('<tr><td colspan="5">暂时没有相关数据</td></tr>')
            }else{
                var html="";
                for(var i=0;i<result.Data.data.length;i++){
                    html+='<tr data-id="'+result.Data.data[i].id+'">'
                    html+='<td class="memberName">'+result.Data.data[i].real_name+'</td>'
                    html+='<td class="relation">'+result.Data.data[i].relation+'</td>'
                    html+='<td class="birth">'+result.Data.data[i].birth+'</td>'
                    html+='<td class="phone">'+result.Data.data[i].phone+'</td>'
                    html+='<td><span class="operate">'
                    html+='<a href="javascript:;" class="edit_pre">编辑</a>'
                    html+='<a href="javascript:;" class="delete_pre">删除</a>'
                    html+='<a href="javascript:;" class="file_pre">档案</a>'
                    html+='<a href="javascript:;" class="ill_pre">病历</a>'
                    html+='</span></td>'
                    html+='</tr>'
                }
                $('#family_able').html(html)
                /*点击编辑按钮*/
                $('#family_able td a.edit_pre').click(function(){
                    var member_id = $(this).parents('tr').attr('data-id');
                    $('#family_tipbox').show();
                    $('#family_tipbox .toph4 b').html('编辑关系成员');
                    $('#member_name').val($(this).parents('tr').find('.memberName').text());
                    $('#relation').val($(this).parents('tr').find('.relation').text());
                    $('#birth').val($(this).parents('tr').find('.birth').text());
                    $('#phone').val($(this).parents('tr').find('.phone').text());
                    /*编辑保存*/
                    $('#confirm-but').die().live('click',function(e){
                        var member_name=$('#member_name').val();
                        var relation=$('#relation').val();
                        var phone=$('#phone').val();
                        var birth=$('#birth').val();
                        if( !checkFun(member_name,relation,birth,phone) ){
                            return false;
                        }else{
                            AjaxObj.saveRelationUser(function(result){
                                if(result.Data.code==1){
                                    opCityTip('','编辑成功');
                                    loadTable(user_id)
                                    $('#family_tipbox').hide();
                                }else{
                                    if(result.Data.msg == '缺少用户id！'){
                                        opCityTip('','请先去完善基础信息')
                                        setTimeout(function(){
                                            location.href="/mint/html/user/add_info.html#User";
                                        },1000)
                                    }else{
                                        opCityTip('',result.Data.msg)
                                    }
                                }
                            },member_id,phone,member_name,birth,relation)
                        }   
                        e.stopPropagation()
                    })
                })
                /*点击删除按钮*/
                $('#family_able td a.delete_pre').click(function(){
                    var that=$(this);
                    $('.delete-tipbox').show();
                    var member_id = $(this).parents('tr').attr('data-id');
                    $('#deletetipBox').die().live('click',function(){
                        AjaxObj.deleteRelationUser(function(result){
                            if(result.Data.code==1){
                                opCityTip('','删除成功');
                                $('.delete-tipbox').hide();
                                that.parents('tr').remove();
                                if( $('#family_able tr').length == 0){
                                    $('#family_able').html('<tr><td colspan="5">没有相关数据了</td></tr>')
                                }
                            }else{
                                opCityTip('',result.Data.msg);
                            }
                        },member_id)
                    })
                   
                })
                /*点击档案*/
                $('#family_able td a.file_pre').click(function(){
                    var member_id = $(this).parents('tr').attr('data-id');
                    sessionStorage.setItem('user_id',member_id)
                    location.href='/mint/html/user/edit_info.html#User?from=1'
                })
                /*点击病历*/
                $('#family_able td a.ill_pre').click(function(){
                    //var member_id = $(this).parents('tr').attr('data-id');
                    //sessionStorage.setItem('user_id',member_id)
                    opCityTip('','待开发...')
                    //location.href='/mint/html/user/edit_info.html#User?from=1'
                })
            }
            
        }else{
            console.log(result.Data.msg)
        }
    },user_id)
}
function checkFun(member_name,relation,birth,phone){
    var mobile_reg=/^1[3|4|5|7|8][0-9]\d{8}$/;
    if(member_name==''){
        opCityTip('member_name','请输入姓名')
        return false;
    }else if(relation==''){
        opCityTip('relation','请输入与主账户之间的关系')
        return false;
    }else if(birth==''){
        opCityTip('birth','请选择出生日期')
        return false;
    }else if(phone==''){
        opCityTip('phone','请输入联系方式')
        return false;
    }else if(!mobile_reg . test( phone )){
        opCityTip('phone','手机号格式错误')
        return false;
    }else{
        return true;
    }
}
function opCityTip(selector,tipText){
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut();
    $('.opacity-tip p').html(tipText).css({'margin-left':-($('.opacity-tip p').width()/2)});
    $('#'+selector).css({'border':'solid 1px red'});
    $('#'+selector).siblings('p').html(tipText);
}