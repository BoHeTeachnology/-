$(function(){
    
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('hospital');
    if(sessionStorage.getItem("jumpid")){
        var jump = sessionStorage.getItem("jumpid");
        Doctorindex('','',2,'',jump,10)
    }else{
        Doctorindex('','',2,'',1,10)
    }
    $('#edit').click(function(){
        if($('#doctorTable input[type="radio"]').is(":checked")){
            location.href="/mint/html/doctorlist/edit.html#Doctor";
            var id = $("#doctorTable input[type='radio']:checked").val();
            //console.log(id)
            sessionStorage.setItem('user_id',id)
        }else{
            opCityTip('请先选择列表中的某一项')
        }
    })
    /*点击删除按钮*/
    $('#delete').click(function(){
        if($('#doctorTable input[type="radio"]').is(":checked")){
            $('.delete-tipbox').show();
            var user_id=$("#doctorTable input[type='radio']:checked").val()
            $('#deletetipBox').die().live('click',function(){
                AjaxObj.Doctordelete(function(result){
                    if(result.Data.code==1){
                        $('.delete-tipbox').hide();
                        $("input[type='radio']:checked").parents('tr').remove();
                        location.reload();
                    }else{
                        opCityTip(result.Data.msg)
                    }
                },user_id)
            })
            
        }else{
            opCityTip('请先选择列表中的某一项')
        }   
    })

    $('#search').click(function(){
        var name = $('#name').val();
        var hospital = $('#hospital').val();
        var account = $('#account').val();
            sessionStorage.removeItem('jumpid')
            sessionStorage.setItem('name',name);
            sessionStorage.setItem('hospital',hospital);
            sessionStorage.setItem('account',account)
        Doctorindex(account,name,2,hospital,1,10)
    })
    $(document).keydown(function(e) {
        if (e.keyCode == 13) {
            var name = $('#name').val();
            var hospital = $('#hospital').val();
            var account = $('#account').val();
                sessionStorage.removeItem('jumpid')
                sessionStorage.setItem('name',name);
                sessionStorage.setItem('hospital',hospital);
                sessionStorage.setItem('account',account)
            Doctorindex(account,name,2,hospital,1,10)
        }
    });
    $('.go').click(function(){
        sessionStorage.setItem("jumpid",$('.numPage').val());
        var b = sessionStorage.getItem("pcount"),
            num=$('.numPage').val(),
            showCount =10,
            pageNum=Math.ceil(b/showCount);
        if(num<=pageNum && num>0){
            var name = sessionStorage.getItem('name');
            var hospital = sessionStorage.getItem('hospital');
            var account = sessionStorage.getItem('account');
            Doctorindex(account,name,2,hospital,num,showCount)
            $("#Pagination").pagination(b, {
                callback: pageselectCallback,
                prev_text: " <<",
                next_text: " >> ",
                items_per_page:showCount, 
                num_display_entries:3,
                current_page:(num-1), 
                num_edge_entries:3,
                ellipse_text:"...",
                link_to:"javascript:void(0)"
            });

        }
    })

})

function Doctorindex(account,name,identity_id,hospital,p,p_len){
    AjaxObj.Doctorindex(function(result){
        if( result.Data.code ==1 ){
                if(result.Data.data == '' || result.Data.data == null ){
                    $('#doctorTable').html('<tr><td colspan="13">暂时没有相关数据</td></tr>')
                    $('#Pagination-box').hide();
                }else{
                    var html='';
                    for(var i = 0 ; i < result.Data.data.length; i++ ){
                        var birth = result.Data.data[i].birthyear == null || result.Data.data[i].birthmonth == null ||  result.Data.data[i].birthday == null ||  result.Data.data[i].birthyear == 0 || result.Data.data[i].birthmonth == 0 ||  result.Data.data[i].birthday == 0   ? '' : result.Data.data[i].birthyear+'-'+result.Data.data[i].birthmonth+'-'+result.Data.data[i].birthday;
                        var photo = result.Data.data[i].photo == null || result.Data.data[i].photo == ''? '<img src="../../images/user_default.png" alt="" />' : '<img src="'+result.Data.data[i].photo+'" alt="">'
                        if( result.Data.data[i].sex =='1' ){
                            var sex = '男';
                        }else if(result.Data.data[i].sex =='2' ){
                            var sex = '女';
                        }else{
                            var sex = '' ;
                        }
                        html+='<tr>'
                        html+='<td><span class="radio-span"><input type="radio" class="radio" name="radio" id="radioInputc_'+i+'" value="'+result.Data.data[i].id+'"><label for="radioInputc_'+i+'"></label></span></td>'
                        html+='<td><span class="spanName" id="goSee" data-id="'+result.Data.data[i].id+'">'+result.Data.data[i].account+'</span></td>'
                        html+='<td>'+result.Data.data[i].name+'</td>'
                        html+='<td><span class="user-pic">'+photo+'</span></td>'
                        html+='<td><span>'+birth+'</span></td>'
                        html+='<td><span>'+ages(birth)+'</span></td>'
                        html+='<td><span>'+sex+'</span></td>'
                        html+='<td><span>'+result.Data.data[i].phone+'</span></td>'
                        html+='<td class="W100"><span>'+result.Data.data[i].position+'</span></td>'
                        html+='<td class="W100"><span>'+result.Data.data[i].field+'</span></td>'
                        html+='<td><span>'+result.Data.data[i].job_age+'</span></td>'
                        html+='<td class="W100"><span>'+result.Data.data[i].hospital+'</span></td>'
                        html+='<td><span>'+result.Data.data[i].invite_code+'</span></td>'
                        if( result.Data.data[i].is_show == 1 ){
                            html+='<td><span>是</span></td>'
                        }else if( result.Data.data[i].is_show == 2 ){
                            html+='<td><span>否</span></td>'
                        }
                        html+='</tr>'
                    }
                    $('#doctorTable').html(html)
                    $('#doctorTable td #goSee').click(function(){
                        var idSee=$(this).attr('data-id')
                        location.href="/mint/html/doctorlist/see.html#Doctor";
                        sessionStorage.setItem('idSee',idSee)
                    })
                    if(result.Data.count<=10){
                        $('#Pagination-box').hide();
                    }else{
                        $('#Pagination-box').show();
                        var pcount=result.Data.count;
                            showCount =10,
                            pageNum=Math.ceil(pcount/showCount);
                            $('.pageNum').html(pageNum)
                            $('#pcountNum').html(pcount)
                            fenyeFun(pcount,showCount)
                            sessionStorage.setItem("pcount",pcount);
                    }
                }
        }else{
            opCityTip(result.Data.msg)
            //console.log(result.Data.msg)
        }
    },account,name,identity_id,hospital,p,p_len)
}
function fenyeFun(pcount,showCount){
    var jump = sessionStorage.getItem("jumpid") || 1;
    $("#Pagination").pagination(pcount, {
        callback: pageselectCallback,//PageCallback() 为翻页调用次函数。
        prev_text: " <<",
        next_text: " >> ",
        items_per_page:showCount, //每页的数据个数
        num_display_entries:3, //两侧首尾分页条目数
        current_page:(jump-1),   //当前页码
        num_edge_entries:3, //连续分页主体部分分页条目数
        ellipse_text:"...",
        link_to:"javascript:void(0)"
    });
}
function pageselectCallback(page_index, jq){
    var page=page_index+1;
        var name = sessionStorage.getItem('name') || '';
        var hospital = sessionStorage.getItem('hospital') || '';
        var account = sessionStorage.getItem('account') || '';
        Doctorindex(account,name,2,hospital,page,showCount)

        sessionStorage.setItem("jumpid",page);
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
function opCityTip(tipText){
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html(tipText).css({'margin-left':-($('.opacity-tip p').width()/2)})
}