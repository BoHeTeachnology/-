$(function(){
    jeDate({
        dateCell:"#visit_time",//isinitVal:true,
        format:"YYYY-MM-DD",
        isTime:false, //isClear:false,
    })
    sessionStorage.removeItem('user_name');
    sessionStorage.removeItem('patient_account');
    sessionStorage.removeItem('doctor_name');
    sessionStorage.removeItem('clinic_name');
    sessionStorage.removeItem('visit_time');
    sessionStorage.removeItem('project_name');
    sessionStorage.removeItem('status');
    sessionStorage.removeItem('pay_method');
    sessionStorage.removeItem('bill_discount');
    if(sessionStorage.getItem("jumpid")){
        var jump = sessionStorage.getItem("jumpid");
        Billindex('','','','','','','','','',jump,10)
    }else{
        Billindex('','','','','','','','','',1,10)
    }
    DoctorListFun()
    $('.moreButspan').click(function(){
        $('.moreboxhide').slideToggle();
    })
    $('#edit').click(function(){
        if($('#BillTable input[type="radio"]').is(":checked")){
            location.href="/mint/edit.html#Customer";
            var id = $("#BillTable input[type='radio']:checked").val();
            console.log(id)
            sessionStorage.setItem('user_id',id)
        }else{
            opCityTip('请先选择列表中的某一项')
        }
    })
    /*点击删除按钮*/
    $('#delete').click(function(){
        if($('#BillTable input[type="radio"]').is(":checked")){
            $('.delete-tipbox').show();
            var user_id=$("#BillTable input[type='radio']:checked").val()
            $('#deletetipBox').die().live('click',function(){
                AjaxObj.Userdelete(function(result){
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
        var user_name = $('#user_name').val(),
            patient_account = $('#patient_account').val(),
            doctor_name = $('#DocInputbox .text').attr('data-name') || '',
            clinic_name = $('#ClinkBox .text').html() || '',
            visit_time = $('#visit_time').val();
            project_name = $('#project_name').val(),
            status = $('#status option:selected').val(),
            pay_method = $('#pay_method option:selected').val(),
            bill_discount = $('#bill_discount_search option:selected').val();
            sessionStorage.removeItem('jumpid');
            sessionStorage.setItem('user_name',user_name);
            sessionStorage.setItem('patient_account',patient_account);
            sessionStorage.setItem('doctor_name',doctor_name);
            sessionStorage.setItem('clinic_name',clinic_name);
            sessionStorage.setItem('visit_time',visit_time);
            sessionStorage.setItem('project_name',project_name);
            sessionStorage.setItem('status',status);
            sessionStorage.setItem('pay_method',pay_method);
            sessionStorage.setItem('bill_discount',bill_discount);
            Billindex(user_name,patient_account,doctor_name,clinic_name,visit_time,project_name,status,pay_method,bill_discount,1,10)
    })
    $(document).keydown(function(e) {
        if (e.keyCode == 13) {
            var user_name = $('#user_name').val(),
                patient_account = $('#patient_account').val(),
                doctor_name = $('#DocInputbox .text').attr('data-name') || '',
                clinic_name = $('#ClinkBox .text').html() || '',
                visit_time = $('#visit_time').val();
                project_name = $('#project_name').val(),
                status = $('#status option:selected').val(),
                pay_method = $('#pay_method option:selected').val(),
                bill_discount = $('#bill_discount_search option:selected').val();
                sessionStorage.removeItem('jumpid');
                sessionStorage.setItem('user_name',user_name);
                sessionStorage.setItem('patient_account',patient_account);
                sessionStorage.setItem('doctor_name',doctor_name);
                sessionStorage.setItem('clinic_name',clinic_name);
                sessionStorage.setItem('visit_time',visit_time);
                sessionStorage.setItem('project_name',project_name);
                sessionStorage.setItem('status',status);
                sessionStorage.setItem('pay_method',pay_method);
                sessionStorage.setItem('bill_discount',bill_discount);
                Billindex(user_name,patient_account,doctor_name,clinic_name,visit_time,project_name,status,pay_method,bill_discount,1,10)
        }
    });
    $('.go').click(function(){
        sessionStorage.setItem("jumpid",$('.numPage').val());
        var b = sessionStorage.getItem("pcount"),
            num=$('.numPage').val(),
            showCount =10,
            pageNum=Math.ceil(b/showCount);
        if(num<=pageNum && num>0){
            var user_name = sessionStorage.getItem('user_name');
                patient_account = sessionStorage.getItem('patient_account'),
                doctor_name = sessionStorage.getItem('doctor_name'),
                clinic_name = sessionStorage.getItem('clinic_name'),
                visit_time = sessionStorage.getItem('visit_time'),
                project_name = sessionStorage.getItem('project_name'),
                status = sessionStorage.getItem('status'),
                pay_method = sessionStorage.getItem('pay_method'),
                bill_discount = sessionStorage.getItem('bill_discount');
            Billindex(user_name,patient_account,doctor_name,clinic_name,visit_time,project_name,status,pay_method,bill_discount,num,showCount)
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

    $('#excelBtn').click(function(){
        window.open('http://'+location.host+'/mintAdmin/index.php/Admin/Bill/exportExcel');
    })

})
function DoctorListFun(){
     //医生查找 //诊所查找
    AjaxObj.AppointmentUserLst(function(result){
        if(result.Data.code == 1){
            var html='';
            for(var i=0;i<result.Data.data.length;i++){
                html+='<li class="filter-item items" data-filter="'+result.Data.data[i].name+result.Data.data[i].account+'" data-value="'+result.Data.data[i].id+'" data-name="'+result.Data.data[i].name+'">'+result.Data.data[i].name +'('+result.Data.data[i].account+')</li>'
           
            }
            $('#doctor_id').append(html)
            //诊所查找
            AjaxObj.AppointmentClinicLst(function(result){
                if(result.Data.code == 1){
                    var html='';
                    for(var i=0;i<result.Data.data.length;i++){
                        html+='<li class="filter-item items" data-filter="'+result.Data.data[i].clinic_name+'" data-value="'+result.Data.data[i].id+'">'+result.Data.data[i].clinic_name+'</li>'
                    }
                    $('#clinic_id').append(html)
                    $('body').append('<script src="/mint/fillter/tabcomplete.min.js"></script><script src="/mint/fillter/livefilter.min.js"></script><script src="/mint/fillter/src/bootstrap-select.js"></script>');
                  
                    $('#doctor_id li').click(function(){
                        var dataVal = $(this).attr('data-value');
                        var dataName = $(this).attr('data-name');
                        //localStorage.setItem('dataVal',dataVal)
                        $('#DocInputbox .text').attr('data-val',dataVal)
                        $('#DocInputbox .text').attr('data-name',dataName)

                    })
                    $('#clinic_id li').click(function(){
                        var dataVal = $(this).attr('data-value');
                        $('#ClinkBox .text').attr('data-val',dataVal)
                    })

                }else{
                    opCityTip('',result.Data.msg)
                }
            })
            //诊所查找结束
        }else{
            opCityTip('',result.Data.msg)
        }
    },2)
}
function Billindex(user_name,patient_account,doctor_name,clinic_name,visit_time,project_name,status,pay_method,bill_discount,p,p_len){
    AjaxObj.Billindex(function(result){
        if( result.Data.code ==1 ){
                if(result.Data.data == '' || result.Data.data == null ){
                    $('#BillTable').html('<tr><td colspan="15">暂时没有相关数据</td></tr>')
                    $('#Pagination-box').hide();
                }else{
                    var html='';
                    for(var i = 0 ; i < result.Data.data.length; i++ ){
                        var birth = result.Data.data[i].birthyear == null || result.Data.data[i].birthmonth == null ||  result.Data.data[i].birthday == null  ? '' : result.Data.data[i].birthyear+'-'+result.Data.data[i].birthmonth+'-'+result.Data.data[i].birthday;
                        var sex = result.Data.data[i].sex == 1 ? '男':'女';
                        var doctor_name = result.Data.data[i].doctor_name ==null ? '' : result.Data.data[i].doctor_name ;
                        var clinic_name = result.Data.data[i].clinic_name ==null ? '' : result.Data.data[i].clinic_name ;
                        var patient_name = result.Data.data[i].patient_name ==null ? '' : result.Data.data[i].patient_name ;
                        html+='<tr>'
                        html+='<td><span class="radio-span"><input type="radio" class="radio" name="radio" id="radioInputc_'+i+'" value="'+result.Data.data[i].id+'"><label for="radioInputc_'+i+'"></label></span></td>'
                        html+='<td><span class="bill_number_btn" data-id="'+result.Data.data[i].id+'">'+result.Data.data[i].bill_number+'</span></td>'
                        /*html+='<td><span id="goSee" data-id="'+result.Data.data[i].id+'">'+result.Data.data[i].patient_account+'</span></td>'*/
                        html+='<td><span>'+patient_name+'</span></td>'
                        html+='<td><span>'+result.Data.data[i].contact_tel+'</span></td>'
                        html+='<td><span>'+result.Data.data[i].visit_time+'</span></td>'
                        html+='<td><span>'+doctor_name+'</span></td>'
                        html+='<td>'+result.Data.data[i].project_name+'</td>'
                        html+='<td class="W150"><span>'+clinic_name+'</span></td>'
                        html+='<td><span>￥'+result.Data.data[i].pay_money+'</span></td>'
                        if(result.Data.data[i].status == 1){
                            html+='<td>'+result.Data.data[i].actual_money+'</td>'
                        }else{
                            html+='<td></td>'
                        }
                        
                        /*if(result.Data.data[i].is_self == 1){
                            html+='<td><span>是</span></td>'
                        }else{
                            html+='<td><span>否</span></td>'
                        }
                        html+='<td class="W150"><span>'+result.Data.data[i].company+'</span></td>'
                        if(result.Data.data[i].is_confirm == 1){
                        	html+='<td><span>已确认</span></td>'
                        }else{
                        	html+='<td><span>未确认</span></td>'
                        }*/
                        if(result.Data.data[i].status == 1){
                        	html+='<td><span>已支付</span></td>'
                        }else{
                        	html+='<td><span>未支付</span></td>'
                        }
                        html+='<td><span>'+result.Data.data[i].pay_method+'</span></td>'
                        html+='<td><span class="billMingxi" data-id="'+result.Data.data[i].id+'">明细</span></td>'
                        html+='</tr>'
                    }
                    $('#BillTable').html(html)
                    //new TableSorter("BillTableMain", 1,2,3,4,5,6,7,8,9,10,11,12);
                    $('#BillTable td .billMingxi,#BillTable .bill_number_btn').click(function(){
                        var BillId = $(this).attr('data-id');
                        AjaxObj.billDetail(function(model){
                            if(model.Data.code == 1){
                                var bill_discountData = model.Data.data.bill_discount;
                                var bill = '';
                                for (var b=0; b<model.Data.data.bill_detail.length; b++) {
                                    var project_discount = model.Data.data.bill_detail[b].project_discount == 1 ? '' : (model.Data.data.bill_detail[b].project_discount*10).toFixed(1);
                                    //bill+='<li><b>'+model.Data.data.bill_detail[b].project_name+'</b><span>￥'+model.Data.data.bill_detail[b].price+'</span><label>'+model.Data.data.bill_detail[b].number+'</label></li>'
                                    bill+='<tr data-id="'+model.Data.data.bill_detail[b].id+'" number = "'+model.Data.data.bill_detail[b].number+'" price="'+model.Data.data.bill_detail[b].price+'" actual_price="'+(model.Data.data.bill_detail[b].actual_price*model.Data.data.bill_detail[b].number).toFixed(4)+'">'
                                    bill+='<td><span class="proj">'+model.Data.data.bill_detail[b].project_name+'</span></td>'
                                    bill+='<td>￥<span>'+model.Data.data.bill_detail[b].price+'</span></td>'
                                    bill+='<td>'+model.Data.data.bill_detail[b].number+'</td>'
                                    bill+='<td>￥<span class="before_price">'+model.Data.data.bill_detail[b].count_price.toFixed(2)+'</span></td>'
                                    bill+='<td class="zhe_pricetd">'
                                    bill+='<input type="text" value="'+project_discount+'">'
                                    bill+='<select id="discount_td" data-val = "'+model.Data.data.bill_detail[b].project_discount+'">'
                                    bill+='</select>'
                                    bill+='</td>'
                                    bill+='<td class="after_price">￥<span>'+(model.Data.data.bill_detail[b].actual_price*model.Data.data.bill_detail[b].number).toFixed(2)+'</span></td>'
                                    bill+='</tr>'
                                }
                                $('#billtablebox').html(bill);
                                totalNum()
                                $('#payMoney b').html(model.Data.data.pay_money)
                                $('#payMoney2').html( parseInt(model.Data.data.actual_money) );

                                if(model.Data.data.bill_discount==1){
                                    $('#bill_discount').val('')
                                }else{
                                    $('#bill_discount').val( (result.Data.data.bill_discount*10).toFixed(1) )
                                }
                                var selected_bill_discount = result.Data.data.bill_discount;
                                AjaxObj.IndexdiscountLst(function(modalresult){ //查询账单明细中的折扣
                                    if(modalresult.Data.code == 1){
                                        var option='';
                                        for (var i = 0;i<modalresult.Data.data.length; i++) {
                                            //console.log(modalresult.Data.data[i].discount,modalresult.Data.data[i].discount*0.01)
                                            option+='<option value="'+(modalresult.Data.data[i].discount*0.01).toFixed(2)+'">'+(modalresult.Data.data[i].discount*0.1).toFixed(1)+'折</option>'
                                        };
                                        $('#billtablebox tr td select#discount_td,#discount_select').html('<option value="">无折扣</option>'+option)
                                        $('#billtablebox tr').each(function(){
                                            var dataVals = $(this).find('select#discount_td').attr('data-val');
                                            console.log(dataVals)
                                            if(dataVals == 1){
                                                $(this).find('select#discount_td option[value=""]').attr('selected',true);
                                            }else{
                                                 $(this).find('select#discount_td option[value="'+dataVals+'"]').attr('selected',true);
                                            }
                                        })
                                        if(selected_bill_discount == 1){
                                            $('#discount_select option[value=""]').attr('selected',true);
                                        }else{
                                            $('#discount_select option[value="'+selected_bill_discount+'"]').attr('selected',true);
                                        }
                                        
                                    }else{  
                                        if(modalresult.Data.msg=='没有数据'){
                                            //opCityTip('请先去折扣管理添加折扣')
                                        }else{
                                            opCityTip(modalresult.Data.msg)
                                        }
                                        
                                    }
                                })
                                $('#saveBill').die().live('click',function(){  //点击保存按钮，修改账单
                                    var pay_mony = $('#payMoney b').html(),
                                        actual_money = parseInt( $('#payMoney2').html() ),
                                        bill_discount = $('#bill_discount').val()*0.1 == 0 ? 1 : Number($('#bill_discount').val()*0.1).toFixed(2),
                                        obj_data = [];
                                        $('#billtablebox tr').each(function(){
                                            var discountNum = $(this).find('.zhe_pricetd input').val()*0.1 == 0? 1 : $(this).find('.zhe_pricetd input').val()*0.1;
                                            console.log(bill_discount,Number(discountNum).toFixed(2))
                                            var obj ={
                                                "id": $(this).attr('data-id'),
                                                "project_discount":Number(discountNum).toFixed(2),
                                                "number":$(this).attr('number'),
                                                "price":$(this).attr('price'),
                                                'actual_price':($(this).attr('actual_price')/$(this).attr('number')).toFixed(4)
                                            }
                                            obj_data.push(obj)
                                        })
                                        //console.log(pay_mony,actual_money,bill_discount)
                                        console.log(obj_data,pay_mony,actual_money)
                                    AjaxObj.BilleditBill(function(Models){
                                        if(Models.Data.code ==1){
                                            $('.mingxitipBox').hide();
                                            opCityTip('保存成功')
                                            setTimeout(function(){
                                                location.reload();
                                            },1000)
                                            
                                        }else{
                                            opCityTip(Models.Data.msg)
                                        }
                                    },BillId,pay_mony,actual_money,bill_discount,obj_data)
                                })
                                $('#billtablebox tr td select#discount_td').change(function(){ //选择折扣计算对应的值
                                    if($(this).find('option:selected').val()!=''){
                                        var selectVal = ($(this).find('option:selected').val()*10).toFixed(1) ;
                                    }
                                    $(this).siblings('input').val( selectVal )
                                    $('#discount_select option[value=""]').attr('selected',true);
                                    $('#bill_discount').val('');
                                    var vip_num  =  $(this).siblings('input').val()*0.1;
                                    var brfore_price =Number( $(this).parent('td').siblings().find('.before_price').html() );
                                    var after_price =brfore_price * vip_num  ;
                                    console.log(brfore_price,after_price)
                                    if(vip_num==''){
                                        $(this).parent('td').siblings('.after_price').find('span').html(brfore_price.toFixed(2))
                                        $(this).parents('tr').attr('actual_price',brfore_price)
                                    }else{
                                        $(this).parent('td').siblings('.after_price').find('span').html(after_price.toFixed(2))
                                        $(this).parents('tr').attr('actual_price',after_price.toFixed(4))
                                    }
                                    totalNum();
                                    if(Number( $('#Alltotal_brfore i').html() ).toFixed(2)==Number( $('#Alltotal_after i').html() ).toFixed(2)){
                                        $('#Alltotal_brfore').hide();
                                    }else{
                                        $('#Alltotal_brfore').show();
                                    }

                                }) 
                                $('#billtablebox tr td.zhe_pricetd input').keyup(function(){//键盘事件 //选择折扣计算对应的值
                                    $('#discount_select option[value=""]').attr('selected',true);
                                    $('#bill_discount').val('');
                                    var vip_num  =  $(this).val()*0.1;
                                    var brfore_price =Number( $(this).parent('td').siblings().find('.before_price').html() );
                                    var after_price =brfore_price * vip_num ;
                                    console.log(brfore_price,after_price)
                                    if(vip_num==''){
                                        $(this).parent('td').siblings('.after_price').find('span').html(brfore_price.toFixed(2))
                                        $(this).parents('tr').attr('actual_price',brfore_price)
                                    }else{
                                        $(this).parent('td').siblings('.after_price').find('span').html(after_price.toFixed(2))
                                        $(this).parents('tr').attr('actual_price',after_price.toFixed(4))
                                    }
                                    totalNum();
                                    if(Number( $('#Alltotal_brfore i').html() ).toFixed(2)==Number( $('#Alltotal_after i').html() ).toFixed(2)){
                                        $('#Alltotal_brfore').hide();
                                    }else{
                                        $('#Alltotal_brfore').show();
                                    }
                                    
                                })
                                $('#discount_select').change(function(){ //整单折扣 //选择折扣计算对应的值
                                    if( $(this).find('option:selected').val()!=''){
                                        var selectVal_dis = ($(this).find('option:selected').val()*10).toFixed(1) ;
                                    }
                                    
                                    $(this).siblings('input').val( selectVal_dis )
                                    var vip_num  = $('#bill_discount').val()*0.1;
                                    var Alltotal_brfore =Number( $('#payMoney b').html() );
                                    var Alltotal_after = Number( $('#payMoney2').attr('total-data') ); 
                                    var Alltotal_afterhtml = Number( $('#payMoney2').html() ); 
                                    var after_price =Alltotal_after * vip_num  ;
                                    console.log(Alltotal_brfore,Alltotal_after)
                                    if(vip_num == ''){
                                        $('#payMoney2').html(parseInt(Alltotal_after) )
                                    }else{
                                        $('#payMoney2').html(parseInt(after_price) )
                                    }
                                })
                                $('#bill_discount').keyup(function(){//键盘事件 //选择折扣计算对应的值
                                    var vip_num  = $(this).val()*0.1;
                                    var Alltotal_brfore =Number( $('#payMoney b').html() );
                                    var Alltotal_after = Number( $('#payMoney2').attr('total-data') ); 
                                    var Alltotal_afterhtml = Number( $('#payMoney2').html() ); 
                                    var after_price =Alltotal_after * vip_num  ;
                                    
                                    if(vip_num == ''){
                                        $('#payMoney2').html( parseInt(Alltotal_after) )
                                    }else{
                                        $('#payMoney2').html( parseInt(after_price) )
                                    }
                                })
                                
                                
                                
                                AjaxObj.BillgetOne(function(Mod){ //获取账单详情
                                    if(Mod.Data.code == 1){
                                        $('#BilName').html(Mod.Data.data.patient_name)
                                        $('#BilNumber').html(Mod.Data.data.bill_number)
                                        $('.mingxitipBox').show();
                                        $('#billTipMargin').css({'margin-top':-$('#billTipMargin').height()/2+'px'})
                                        var Bill_id = Mod.Data.data.id; 
                                        if(Mod.Data.data.status == 1 ){
                                            $('#btnbox,.billUlboxTable td select,.billheji label select').hide();
                                            $('.billUlboxTable td input,.billheji label input').attr('disabled',true).css({'border':'none','text-align':'center'});
                                            if( Number(bill_discountData) == 1 ){
                                                $('#billdiscount_btom').hide();
                                            }else{
                                                $('#billdiscount_btom').show();
                                            }
                                        }else{
                                            $('#btnbox,.billUlboxTable td select,.billheji label select').show();
                                            $('.billUlboxTable td input,.billheji label input').attr('disabled',false).css({'border':'solid 1px #ccc','text-align':'left'});
                                            $('#billTipMargin').css({'margin-top':-$('#billTipMargin').height()/2+'px'})
                                            $('#trueBtn').die().live('click',function(){
                                                console.log(Bill_id)
                                                AjaxObj.Billedit_status(function(resMod){
                                                    if(resMod.Data.code == 1){
                                                        $('.mingxitipBox').hide();
                                                        location.reload();
                                                    }else{
                                                        $('.mingxitipBox').hide();
                                                        opCityTip(resMod.Data.msg)
                                                    }
                                                },Bill_id,1,'线下支付')
                                            })
                                        }
                                   }else{
                                        opCityTip(Mod.Data.msg)
                                    }
                                },BillId)
                                
                            }else{
                                if(model.Data.msg=='失败!'){
                                    opCityTip('暂时无明细')
                                }else{
                                    opCityTip(model.Data.msg)
                                }
                                
                            }
                        },BillId) 
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
    },user_name,patient_account,doctor_name,clinic_name,visit_time,project_name,status,pay_method,bill_discount,p,p_len)
}
function totalNum(){
    var str ='';
    $('#billtablebox tr').each(function(){
        str =Number( str ) + Number( $(this).attr('actual_price') );
        $('#payMoney2').html( parseInt(str) ).attr('total-data',str.toFixed(4))
    })
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
    var user_name = sessionStorage.getItem('user_name') || '';
        patient_account = sessionStorage.getItem('patient_account') || '',
        doctor_name = sessionStorage.getItem('doctor_name') || '',
        clinic_name = sessionStorage.getItem('clinic_name') || '',
        visit_time = sessionStorage.getItem('visit_time') || '',
        project_name = sessionStorage.getItem('project_name') || '',
        status = sessionStorage.getItem('status') || '',
        pay_method = sessionStorage.getItem('pay_method') || '',
        bill_discount = sessionStorage.getItem('bill_discount') || '';
        Billindex(user_name,patient_account,doctor_name,clinic_name,visit_time,project_name,status,pay_method,bill_discount,page,showCount)
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