$(function(){
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
    loadTable(user_id)
    $('#add-but').click(function(){
        $('#family_tipbox').show();
        $('#member_name,#relation,#birth').val('')
        /*添加*/
        $('#confirm-but').die().live('click',function(){
            var str='<tr>\
                        <td class="memberName">'+$('#member_name').val()+'</td>\
                        <td class="relation">'+$('#relation').val()+'</td>\
                        <td class="birth">'+$('#birth').val()+'</td>\
                        <td><span class="operate"><a href="javascript:;" class="edit_pre">编辑</a><a href="javascript:;" class="delete_pre">删除</a></span></td>\
                    </tr>'
            if( $('#member_name').val() == '' ){
                $('#member_name').css({'border':'solid 1px red'})
                $('#member_name').siblings('p').html('姓名不能为空')
                opCityTip('member_name','姓名不能为空')
            }else{
                $('#family_tipbox').hide();
                if( $('#family_able tr').eq(0).find('td').hasClass('no-data') ){
                    $('#family_able').html(str)
                }else{
                    $('#family_able').prepend(str)
                }
                addEditFun(user_id,'添加成功')
            }
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
    AjaxObj.UsersltDateRecords(function(model){
        if(model.Data.code ==1){
            if(model.Data.data == ''){
                $('#family_able').html('<tr><td colspan="4" class="no-data">暂时没有数据</td></tr>')
            }else{
                //$('#recent_time').html( model.Data.data[0].create_time )
                AjaxObj.UsersltArchives(function(result){
                    if(model.Data.family == ''){
                        $('#family_able').html('<tr><td colspan="4" class="no-data">暂时没有数据</td></tr>')
                    }else{
                        var html='';
                        for(var i=0; i< result.Data.family.length; i++){
                            html+='<tr data-id="'+i+'">'
                            html+='<td class="memberName">'+result.Data.family[i].memberName+'</td>'
                            html+='<td class="relation">'+result.Data.family[i].relation+'</td>'
                            html+='<td class="birth">'+result.Data.family[i].birth+'</td>'
                            html+='<td><span class="operate"><a href="javascript:;" class="edit_pre">编辑</a><a href="javascript:;" class="delete_pre">删除</a></span></td>'
                            html+='</tr>'
                        }
                        $('#family_able').html(html)

                        /*编辑*/
                        $('#family_able tr td a.edit_pre').click(function(){
                            var dataid = $(this).parents('tr').attr('data-id');
                            $('#family_tipbox').show();
                            $('#member_name').val( $(this).parents('td').siblings('.memberName').text() );
                            $('#relation').val( $(this).parents('td').siblings('.relation').text() );
                            $('#birth').val( $(this).parents('td').siblings('.birth').text() );

                            $('#confirm-but').die().live('click',function(){
                                $('#family_able tr').each(function(){ 
                                    if($(this).attr('data-id') == dataid){
                                        $(this).find('td.memberName').text( $('#member_name').val() )
                                        $(this).find('td.relation').text( $('#relation').val() )
                                        $(this).find('td.birth').text( $('#birth').val() )
                                        $('#family_tipbox').hide();
                                        addEditFun(user_id,'编辑成功')
                                    }
                                })
                            })
                        })
                        /*删除*/
                        $('#family_able tr td a.delete_pre').click(function(){
                            var dataid = $(this).parents('tr').attr('data-id');
                            $('.delete-tipbox').show();
                            $('#deletetipBox').die().live('click',function(){
                                $('#family_able tr').each(function(){
                                    console.log($(this).attr('data-id'),dataid)
                                    if($(this).attr('data-id') == dataid){
                                        $(this).remove();
                                        $('.delete-tipbox').hide();
                                        addEditFun(user_id,'删除成功')
                                    }
                                })
                            })
                        })
                    }
                },user_id,model.Data.data[0].create_time,5)
            }
           // sessionStorage.setItem('create_time',model.Data.data[0].create_time)
        }
    },user_id,5)
                    
}


function opCityTip(selector,tiptext){
    $('#'+selector+'').siblings('p').html(tiptext).show()
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html(tiptext).css({'margin-left':-($('.opacity-tip p').width()/2)})
}
function addEditFun(user_id,tiptext){
    var memberArray=[];
        $('#family_able tr').each(function(){
            var obj = {
                'memberName':$(this).find('td.memberName').html(),
                'birth':$(this).find('td.birth').html(),
                'relation':$(this).find('td.relation').html()
            }
            memberArray.push(obj)
        })
        //console.log(memberArray)
        var memberArrayobj = {
            'family':memberArray
        }
        AjaxObj.UsereditArchives(function(result){
            if( result.Data.code == 1 ){
                $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                $('.opacity-tip p').html('<span class="success">'+tiptext+'</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                loadTable(user_id)
            }else{
                if(result.Data.msg == '缺少用户id！'){
                    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                    $('.opacity-tip p').html('请先去完善基础信息').css({'margin-left':-($('.opacity-tip p').width()/2)})
                    setTimeout(function(){
                        location.href="/mint/html/user/add_info.html#User";
                    },1000)
                }else{
                    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                    $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
                }
                    
            }
        },user_id,JSON.stringify(memberArrayobj),5)
}