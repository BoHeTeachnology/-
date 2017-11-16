$(function(){
    sessionStorage.removeItem('name')
    if(sessionStorage.getItem("jumpid")){
        var jump = sessionStorage.getItem("jumpid");
        Adsetindex('',3,jump,10)
    }else{
        Adsetindex('',3,1,10)
    }
    
    $('#edit').click(function(){
        if($('#accountTbody input[type="radio"]').is(":checked")){
            location.href="/mint/html/adminset/edit.html#Adset";
            var id = $("#accountTbody input[type='radio']:checked").val();
            console.log(id)
            sessionStorage.setItem('user_id',id)
        }else{
            opCityTip('请先选择列表中的某一项')
        }
    })
    /*点击删除按钮*/
    $('#delete').click(function(){
        if($('#accountTbody input[type="radio"]').is(":checked")){
            $('.delete-tipbox').show();
            var user_id=$("#accountTbody input[type='radio']:checked").val()
            $('#deletetipBox').die().live('click',function(){
                AjaxObj.Adsetdelete(function(result){
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
        sessionStorage.removeItem('jumpid')
        sessionStorage.setItem('name',name)
        Adsetindex(name,3,1,10)
    })
    $(document).keydown(function(e) {
        if (e.keyCode == 13) {
            sessionStorage.removeItem('jumpid')
            var name = $('#name').val();
            sessionStorage.setItem('name',name)
            Adsetindex(name,3,1,10)
        }
    });

    $('.go').click(function(){
        sessionStorage.setItem("jumpid",$('.numPage').val());
        var b = sessionStorage.getItem("pcount"),
            num=$('.numPage').val(),
            showCount =10,
            pageNum=Math.ceil(b/showCount);
        if(num<=pageNum && num>0){
            var name = sessionStorage.getItem('name')
            Adsetindex(name,3,num,showCount)
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

function Adsetindex(name,identity_id,p,p_len){
    AjaxObj.Adsetindex(function(result){
        if( result.Data.code ==1 ){
                if(result.Data.data == '' || result.Data.data == null ){
                    $('#accountTbody').html('<tr><td colspan="11">暂时没有相关数据</td></tr>')
                    $('#Pagination-box').hide();
                }else{
                    var html='';
                    for(var i = 0 ; i < result.Data.data.length; i++ ){
                        var birth = result.Data.data[i].birthyear == null || result.Data.data[i].birthmonth == null ||  result.Data.data[i].birthday == null  ? '' : result.Data.data[i].birthyear+'-'+result.Data.data[i].birthmonth+'-'+result.Data.data[i].birthday;
                        var sex = result.Data.data[i].sex == 1 ? '男':'女';
                        html+='<tr>'
                        html+='<td><span class="radio-span"><input type="radio" class="radio" name="radio" id="radioInputc_'+i+'" value="'+result.Data.data[i].id+'"><label for="radioInputc_'+i+'"></label></span></td>'
                        html+='<td class="W150"><span class="spanName" id="goSee" data-id="'+result.Data.data[i].id+'">'+result.Data.data[i].name+'</span></td>'
                        html+='<td><span>'+result.Data.data[i].account+'</span></td>'
                        html+='<td><span>'+birth+'</span></td>'
                        html+='<td><span>'+ages(birth)+'</span></td>'
                        html+='<td><span>'+sex+'</span></td>'
                        html+='<td><span>'+result.Data.data[i].phone+'</span></td>'
                        html+='<td><span>'+result.Data.data[i].role_name+'</span></td>'
                        html+='</tr>'
                    }
                    $('#accountTbody').html(html)
                    $('#accountTbody td #goSee').click(function(){
                        var idSee=$(this).attr('data-id')
                        location.href="/mint/html/adminset/see.html#Adset";
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
           // console.log(result.Data.msg)
           opCityTip(result.Data.msg)
        }
    },name,identity_id,p,p_len)
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
        Adsetindex(name,3,page,showCount)
        sessionStorage.setItem("jumpid",page);
}
