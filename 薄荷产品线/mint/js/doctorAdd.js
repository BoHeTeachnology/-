$(function(){
    sessionStorage.removeItem('dataArray')

    jeDate({
        dateCell:"#J-xl",//isinitVal:true,
        format:"YYYY-MM-DD",
        isTime:false, //isClear:false,
        choosefun:function(val){
            $('#age').val(ages(val))
        }
    })
    upPicFun();
    $('#timesetbut').click(function(){
        $('#timesetbut').parents('.input-box').find('p').html('')
        $('#timeTipbox').show();
    })
    $('.close_dialog,#quxiao_btn').click(function(){
        $('#timeTipbox').hide();
        $('.new-create-opcity').hide();
    })
    $('#change_wrap input,#timesetbut').click(function(){
        $('#save-but').attr('disabled',false);
    })
    $('#clinc_types input').change(function(){
        if( $(this).val() == 1){
            $('.doc_clinic_address').show();
            if( $('#clinicList option:selected').val() == '' ){
                $('.clinic_nodatabox').show();
            }else{
                $('.clinic_nodatabox').hide();
            }
        }else if( $(this).val() == 2){
            $('.doc_clinic_address,.clinic_nodatabox').hide();

        }
    })
    AjaxObj.userList(function(result){
        if(result.Data.code==1){
            var html='';
            for (var i=0;i<result.Data.data.length; i++) {
                html+='<option value="'+result.Data.data[i].id+'">'+result.Data.data[i].name+'</option>';
            }
            $('#assistant_id').html('<option value="">请选择</option>'+html)
        }else{
            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)}) 
        }
    },3)
    /*查询服务项目列表（医生管理）*/
    AjaxObj.DoctorserviceLst(function(result){
        if(result.Data.code ==1){
            var html='';
            for(var i=0; i<result.Data.data.length; i++){
                html+='<span><input type="checkbox" class="checkbox" id="checkbox_n'+i+'" value="'+result.Data.data[i].id+'"><label for="checkbox_n'+i+'"></label>'+result.Data.data[i].service_name+'</span>'
            }
            $('#service_ids').html(html);
            $("#service_ids input").change(function(){
                $('#save-but').attr('disabled',false);
                $(this).parents('.input-box').find('p').html('');
            })
        }else{
            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
        }
    })
    /*查询医生标签*/
    AjaxObj.IndextagLst(function(result){
        if(result.Data.code == 1 ){
            var html='';
            for (var i=0; i<result.Data.data.length; i++ ) {
                html+='<span><input type="checkbox" class="checkbox" id="checkboxa_'+i+'" value="'+result.Data.data[i].id+'"><label for="checkboxa_'+i+'"></label><i>'+result.Data.data[i].tag_name+'</i></span>'
            };
            $('#tag_name').html(html)
            $("#tag_name input").change(function(){
                $('#save-but').attr('disabled',false);
                $(this).parents('.input-box').find('p').html('');
            })
        }else{
            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
        }
    },1)
    /*查询诊所地址列表*/
    AjaxObj.DoctorclinicLst(function(result){
        if(result.Data.code ==1){
            var html='';
            for(i=0; i<result.Data.data.length; i++){
                html+='<option value="'+result.Data.data[i].id+'">'+result.Data.data[i].clinic_name+'</option>'
            }
            $('#clinicList').html('<option value="">请选择诊所</option>'+html)
            $('#clinicList').change(function(){
                if( $(this).val() =='' ){
                    $('.clinic_nodatabox').show();
                }else{
                    $('.clinic_nodatabox').hide();  
                }
            })
        }
    })
    $('.addCbut').click(function(){
        $('.Countryhide').show();
        $(this).hide();
        $('.cuontryval').val('')
    })
    $('#worktime').change(function(){
        $('.worktimeP').html('');
    })
    $('.addCountry').click(function(){
        var tag_name = $('.cuontryval').val();
        console.log(tag_name)
        if(tag_name == ''){
            $('.addCbut').show();
            $('.Countryhide').hide();
        }else{
            AjaxObj.DoctoraddTag(function(result){
                if(result.Data.code == 1){
                    AjaxObj.IndextagLst(function(result){
                        if(result.Data.code == 1 ){
                            var html='';
                            for (var i=0; i<result.Data.data.length; i++ ) {
                                html+='<span><input type="checkbox" class="checkbox" id="checkboxa_'+i+'" value="'+result.Data.data[i].id+'"><label for="checkboxa_'+i+'"></label><i>'+result.Data.data[i].tag_name+'</i></span>'
                            };
                            $('#tag_name').html(html)
                            $('.addCbut').show();
                            $('.Countryhide').hide();
                            $("#tag_name input").change(function(){
                                $('#save-but').attr('disabled',false);
                                $(this).parents('.input-box').find('p').html('');
                            })
                        }else{
                            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
                        }
                    },1)
                }else{
                    console.log(result.Data.msg)
                }
            },tag_name)
        }
    })
    var TMonth = ((new Date()).getMonth()+1) <10? '0'+((new Date()).getMonth()+1) : ((new Date()).getMonth()+1) ;
    var Tdate = (new Date()).getDate()<10 ? '0'+(new Date()).getDate() : (new Date()).getDate() ;
    var TodayD = (new Date()).getFullYear()+'-'+TMonth;
    var TodayDate = (new Date()).getFullYear()+'-'+TMonth+'-'+Tdate; //获取本地时间具体到日
    var arr = TodayDate.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var year2 = year;
    var month2 = parseInt(month) + 1;
    if (month2 == 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
    }
    month2 = month2<10 ? '0' + month2 : month2;
    var next_Month = year2 + '-' + month2; //获取下个月的日期

    var dataArray = new Array();
    AjaxObj.visitDateQueryD(function(result){
        if(result.Data.code == 1){
           sessionStorage.setItem('nex_date',result.Data.nex_date)
            $("#inline-calendar").calendar({
                container: "#inline-calendar",
                input: "#date",
                minDate:TodayDate,
                maxDate:sessionStorage.getItem('nex_date'),
                multiple:true,
                value:'',
                onChange:function(p, values, displayValues){
                },  
                onMonthYearChangeEnd:function(p,year,month){
                    if((parseInt(month)+1)<10){
                        var thisMonth = year+'-0'+(parseInt(month)+1);
                    }else{
                        var thisMonth = year+'-'+(parseInt(month)+1);
                    }
                    
                },
                onDayClick:function(p, dayContainer, year, month, day){
                        $('.clinic_nodatabox').hide();
                        if( $('#clinc_types input:checked').val() ==2 ){
                            dayContainer.addClass('picker-calendar-day-selected2')
                        }
                        /*获取具体时间*/
                        var Monthdate = (parseInt(month)+1) < 10 ? "0" + (parseInt(month)+1): (parseInt(month)+1);
                        var Datdate = day < 10 ? "0" + day : day;
                        var visit_date = year + "-" + Monthdate + "-" + Datdate;
                        var thisMonth = year + "" + Monthdate;
                        var Month = (new Date()).getMonth();
                        if( (Month+1) >= 12 ){
                            var nextMonth = (parseInt(year)+1)+'01';
                        }else{
                            if( (Month+2) <10 ){
                                var nextMonth = year+'0'+(Month+2);
                            }else{
                                var nextMonth = year+''+(Month+2);
                            }
                        }
                        //console.log(thisMonth,nextMonth)
                       // if(thisMonth == nextMonth){//判断如果是9月份
                            $('#chuTime').html(year+'年'+(parseInt(month)+1)+'月'+day+'日')
                            var start_time ='09:00',
                                end_time =  '17:30';
                               
                            if( !dayContainer.hasClass('picker-calendar-day-selected') ){//添加日
                                timeDatapre(1);
                                var obj={
                                    clinic_id :$('#clinicList option:selected').val(),
                                    visit_date:visit_date,
                                    start_time:start_time,
                                    end_time:end_time,
                                    time_span:$('#selectedTime option:selected').val(),
                                    type : $('#clinc_types input:checked').val()
                                }
                                $('#start_time').change(function(){
                                    //console.log($(this).val())
                                    start_time = $(this).val();
                                    if( start_time.replace(":", "") >= end_time.replace(":", "") ){
                                        opCityTip('初始时间不能大于结束时间')
                                        $('#start_time option[value="09:00"]').attr('selected',true)
                                    }else{
                                        obj.end_time=end_time
                                    }
                                    obj.start_time=start_time
                                })
                                $('#end_time').change(function(){
                                    //console.log($(this).val())
                                    end_time = $(this).val();
                                    if( start_time.replace(":", "") >= end_time.replace(":", "") ){
                                        opCityTip('初始时间不能大于结束时间')
                                        $('#end_time option[value="17:30"]').attr('selected',true)
                                    }else{
                                        obj.end_time=end_time
                                    }

                                })
                                $('#selectedTime').die().live('click',function(){
                                    obj.time_span=$(this).val()
                                })
                                dataArray.push(obj)
                                //console.log(dataArray)
                            }else{//取消日
                                dayContainer.removeClass('picker-calendar-day-selected2')
                                timeDatapre(2)
                                //console.log(dataArray)
                                for(i=0; i<dataArray.length; i++){
                                    if(visit_date == dataArray[i].visit_date){
                                        dataArray.splice(i,1)
                                        console.log(dataArray)
                                    }
                                }
                            }
                        //}
                    
                }
            });
            $("#inline-calendar").calendar('setValue',[]);
        }else{
            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
        }
    },TodayD)
    
    $('.clinic_nodatabox').click(function(){
        if($('#clinicList option:selected').val() ==''){
            $('.clinic_nodatabox').show();
            opCityTip('请选择出诊诊所')
        }else{
            $('.clinic_nodatabox').hide();
        }
    });
                   

    /*点击确认按钮*/
    $('#confirm-but').on('click',function(){
        if(dataArray!='' && $('#clinc_types input:checked').val() == 1 && $('#clinicList option:selected').val()=='' ){
            $('#clinicList').css('border','solid 1px red')
            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
            $('.opacity-tip p').html('<span class="wrong">请选择出诊诊所</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        }else{
            $('#timeTipbox').hide();
        }
        sessionStorage.setItem('dataArray',JSON.stringify(dataArray) )
        console.log(dataArray)
        
        
    })
    $('#save-but').click(function(){
            $('#save-but').attr('disabled',true);
            var name = $('#name').val(),
                photo = $('#logo img').attr('src') == '../../images/user.png' ? '' : $('#logo img').attr('src'),//项目logo 选填
                sex = $('#sex input:checked').val(),
                is_show = $('#is_show input:checked').val(),
                birth = $('#J-xl').val(),
                position = $('#position').val(),
                hospital = $('#hospital').val(),
                field = $('#field').val(),
                job_age = $('#job_age').val(),
                context = $('#context').val(),
                account = $('#account').val(),
                phone = $('#phone').val(),
                password = $('#password').val(),
                clinic_id = $('#clinicList option:selected').val() || '',
                visit_data =JSON.parse( sessionStorage.getItem('dataArray') ) || '',
                assistant_id =$('#assistant_id option:selected').val() ,
                meiqia = $('#meiqia').val(),
                identity_id = 2 ;
              // console.log(clinic_id)
            var label =new Array();
            $("#tag_name input[type='checkbox']:checked").each(function(){ 
                var checkVal=$(this).siblings('i').text();
                label.push(checkVal)
            }) 
            var label_id =new Array();
            $("#tag_name input[type='checkbox']:checked").each(function(){ 
                var checkVal=parseInt($(this).val());
                label_id.push(checkVal)
            }) 
            var service_ids =new Array();
            $("#service_ids input[type='checkbox']:checked").each(function(){ 
                var checkVal=parseInt($(this).val());
                service_ids.push(checkVal)
            }) 
             //console.log(assistant,meiqia,visit_data)
            //console.log(name,sex,birthday,position,hospital,field,job_age,context,account,password,label,label_id,service_ids)
            if( !ifFun(name,photo,sex,birth,position,hospital,field,job_age,context,account,phone,password,label,label_id,identity_id,is_show,service_ids,clinic_id,visit_data) ){
                return false;
                $('#save-but').attr('disabled',false);
            }else{
                AjaxObj.DoctorAdd(function(result){
                    if( result.Data.code == 1 ){
                        $('#save-but').attr('disabled',true);
                        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                        $('.opacity-tip p').html('<span class="success">添加成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                        setTimeout(function(){
                           location.href="/mint/html/doctorlist/index.html#Doctor";
                        },500);
                    }else{
                        $('#save-but').attr('disabled',false);
                        if(result.Data.msg == '用户已存在！'){
                            $('#account').siblings('p').html('用户已存在！').show()
                            $('#account').css({'border':'solid 1px red'})
                            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                            $('.opacity-tip p').html('<span class="wrong">用户已存在！</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                        }else{
                            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
                        } 
                    }
                },name,photo,sex,birth,position,hospital,field,job_age,context,account,phone,password,label,label_id,identity_id,is_show,service_ids,clinic_id,visit_data,assistant_id,meiqia)
            
            }
    })


})

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
        var img = cropper.getDataURL();
        AjaxObj.imgBase64Up(function(result){
            if(result.Data.code == 1){
                $('.new-create-opcity').hide()
                $('#logo img').attr('src',result.Data.photo_path)
            }else{
                $('#logo').siblings('p').html(result.Data.msg).show()
            }
        },img)
    })
    $('#btnZoomIn').on('click', function(){
        cropper.zoomIn();
    })
    $('#btnZoomOut').on('click', function(){
        cropper.zoomOut();
    })
    /*------图片头像上传结束----*/
}
function ifFun(name,photo,sex,birth,position,hospital,field,job_age,context,account,phone,password,label,label_id,identity_id,is_show,service_ids,clinic_id,visit_data){
    var mobile_reg=/^1[3|4|5|7|8][0-9]\d{8}$/;
    if(account == ''){
        $('#account').siblings('p').html('账号不能为空').show()
        $('#account').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">账号不能为空</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( !mobile_reg . test( account ) ){
        $('#account').siblings('p').html('手机号格式不正确').show()
        $('#account').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">手机号格式不正确</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( name == '' ){
        $('#name').siblings('p').html('医生姓名不能为空').show()
        $('#name').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">医生姓名不能为空</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( position == '' ){
        $('#position').siblings('p').html('职称不能为空').show()
        $('#position').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">职称不能为空</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( hospital == '' ){
        $('#hospital').siblings('p').html('所在医院不能为空').show()
        $('#hospital').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">所在医院不能为空</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if(service_ids == ''){
        $('#service_ids').parents('.input-box').find('p').html('请选择服务项目').show()
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">请选择服务项目</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( field == '' ){
        $('#field').siblings('p').html('擅长领域不能为空').show()
        $('#field').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">擅长领域不能为空</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( context == '' ){
        $('#context').siblings('p').html('背景不能为空').show()
        $('#context').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">背景不能为空</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }/*else if(visit_data == ''){
        $('#timesetbut').parents('.input-box').find('p').html('请选择出诊时间').show()
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">请选择出诊时间</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if($('#clinc_types input:checked').val() == 1 && visit_data != '' && clinic_id == ''){
        $('#timesetbut').parents('.input-box').find('p').html('请选择出诊诊所').show()
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">请选择出诊诊所</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }*/else if( phone == '' ){
        $('#phone').siblings('p').html('手机号不能为空').show()
        $('#phone').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">手机号不能为空</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if(!mobile_reg . test( phone )){
        $('#phone').siblings('p').html('手机号格式不正确').show()
        $('#phone').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">手机号格式不正确</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( password == '' ){
        $('#password').siblings('p').html('密码不能为空').show()
        $('#password').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">密码不能为空</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if($('#password').val().length <6 || $('#password').val().length > 20){
        $('#password').siblings('p').html('请将密码长度保持在6到20个字符').show()
        $('#password').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">请将密码长度保持在6到20个字符</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else{
        return true;
    }
}

function timeDatapre(show){
    var h =8,m=0,html='';
    for(var i=0 ; i<13; i++){
        h+=1;
        m=0;
        for(var a=0; a<4; a++){
            if( m==60 ){
                m=0;
            }
            var hour = h <10? '0'+h : h;
            var minute= m == 0?'00':m;
            if( !(h==21 && (m==15 || m==30 || m==45)) ){
                //if( !(h==12 || h==18) ){
                    html+='<option value="'+hour+':'+minute+'">'+hour+':'+minute+'</option>'
                //}
                m+=15;
            }
            
        }   
    }
    var optionHtml = html;
    var str = '<div class="timeDatapre" style="border-top:none;">\
            <h3>\
                <span>初诊：</span>\
                <p>\
                    <select name="" id="start_time">'+optionHtml+'</select>\
                </p>\
            </h3>\
            <h3>\
                <span>终诊：</span>\
                <p>\
                    <select name="" id="end_time">'+optionHtml+'</select>\
                </p>\
            </h3>\
        </div>'
        if(show==1){
            $('.timechoose').html(str)
            $('#end_time option[value="17:30"]').attr('selected',true)

        }else{
            $('.timechoose').html('')
        } 

}
function opCityTip(tiptext){
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html(tiptext).css({'margin-left':-($('.opacity-tip p').width()/2)})
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