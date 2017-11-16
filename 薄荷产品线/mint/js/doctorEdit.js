$(function(){
    jeDate({
        dateCell:"#J-xl",//isinitVal:true,
        format:"YYYY-MM-DD",
        isTime:false, //isClear:false,
        choosefun:function(val){
            $('#age').val(ages(val))
        }
    })

    Array.prototype.indexOf = function(val) {
      for (var i = 0; i < this.length; i++) {
          if (this[i] == val) return i;
          }
          return -1;
    };
    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
            if (index > -1) {
            this.splice(index, 1);
        }
    };

    sessionStorage.removeItem('dataArray')
    var user_id = sessionStorage.getItem('user_id')
    upPicFun();
    var TMonth = ((new Date()).getMonth()+1) <10? '0'+((new Date()).getMonth()+1) : ((new Date()).getMonth()+1) ; 
    var Tdate = (new Date()).getDate()<10 ? '0'+(new Date()).getDate() : (new Date()).getDate() ;
    var ThisMonth = (new Date()).getFullYear()+'-'+TMonth; //获取本地时间具体到月
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
    var nextMonth = year2 + '-' + month2; //获取下个月的日期
    
    $('#timesetbut').click(function(){
        $('#timesetbut').parents('.input-box').find('p').html('')
        $('#timeTipbox').show();     
        valueDate = [];
        zdh = [];
        dataArray = [];
        calendarFun(ThisMonth,user_id,TodayDate,ThisMonth,nextMonth);

    })

    calendarFun(ThisMonth,user_id,TodayDate,ThisMonth,nextMonth)
    
    $('.close_dialog,#quxiao_btn').click(function(){
        $('#timeTipbox').hide();
        $('.new-create-opcity').hide();
        dataArray = zdh;
        //console.log(zdh);
        //console.log(dataArray);
    })
    
    $('.close_know_dialog,#close_know_dialog').click(function(){
        $('.delete-tipbox').hide();
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
            AjaxObj.DoctorgetOne(function(result){
                if(result.Data.code == 1){
                    $('#assistant_id option[value="'+result.Data.data.assistant_id+'').attr('selected',true);
                }
            },user_id)
        }else{
            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)}) 
        }
    },3)
    /*查询服务项目列表（医生管理）*/ /*查询医生标签*/ /*查询诊所地址列表*/
    AjaxObj.DoctorserviceLst(function(result){
        if(result.Data.code ==1){
            var html='';
            for(var i=0; i<result.Data.data.length; i++){
                html+='<span><input type="checkbox" class="checkbox" id="checkbox_n'+i+'" value="'+result.Data.data[i].id+'"><label for="checkbox_n'+i+'"></label>'+result.Data.data[i].service_name+'</span>'
            }
            $('#service_ids').html(html);
            $("#service_ids input").change(function(){
                $(this).parents('.input-box').find('p').html('');
            })
            AjaxObj.DoctorgetOne(function(result){
                if(result.Data.code == 1){
                    $('#account').val(result.Data.data.account);
                    for(var m=0; m<result.Data.data.service_id_arr.length; m++){
                        $('#service_ids input[value="'+parseInt(result.Data.data.service_id_arr[m])+'"]').attr('checked',true)
                    }
                }
            },user_id)
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
            AjaxObj.DoctorgetOne(function(result){
                if(result.Data.code == 1){
                    var birth = result.Data.data.birthyear == null || result.Data.data.birthmonth == null ||  result.Data.data.birthday == null || result.Data.data.birthyear == 0 || result.Data.data.birthmonth == 0 ||  result.Data.data.birthday == 0  ? '' : result.Data.data.birthyear+'-'+result.Data.data.birthmonth+'-'+result.Data.data.birthday;
                    $('#name').val(result.Data.data.name);
                    $('#sex input[value="'+result.Data.data.sex+'"]').attr('checked',true);
                    $('#is_show input[value="'+result.Data.data.is_show+'"]').attr('checked',true);
                    $('#J-xl').val(birth);
                    $('#age').val(ages(birth));
                    $('#position').val(result.Data.data.position);
                    $('#hospital').val(result.Data.data.hospital);
                    $('#field').val(result.Data.data.field);
                    $('#job_age').val(result.Data.data.job_age);
                    $('#context').val(result.Data.data.context);
                    $('#account').val(result.Data.data.account);
                    $('#phone').val(result.Data.data.phone);
                    $('#password').val(result.Data.data.password);
                    $('#invite_code').val(result.Data.data.invite_code);
                    $('#meiqia').val(result.Data.data.meiqia);
                    if(result.Data.data.tow_code == '' || result.Data.data.tow_code == null){
                        $('#tow_codebox').hide();
                    }else{
                       $('#tow_codebox').show(); 
                       $('#tow_codeImg').html('<img src="'+result.Data.data.tow_code+'" alt="" />')
                       var link =location.host+result.Data.data.tow_code;
                       zclipFun(link)
                    }
                    //console.log(result.Data.data.label_id);
                    result.Data.data.photo == '' || result.Data.data.photo == null ? $('#logo img').attr('src','../../images/user.png'): $('#logo img').attr('src',result.Data.data.photo);//项目logo 选填
                    for(var n=0; n<result.Data.data.label_id.length; n++){
                        $('#tag_name input[value="'+result.Data.data.label_id[n]+'"]').attr('checked',true);
                    }

                }else{
                    alert(result.Data.msg)
                }
            },user_id)
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
            AjaxObj.visitDateQueryD(function(model){
                    if(model.Data.code == 1){
                        if(model.Data.data !=''){
                            $('#clinicList option[value="'+model.Data.data[0].clinic_id+'"]').attr('selected',true);
                        }else{
                            $('#clinic_nodatabox').show();
                        }
                    }
            },ThisMonth,user_id)
        }
    }) 
    $('.clinic_nodatabox').click(function(){
        if($('#clinicList option:selected').val() ==''){
            $('.clinic_nodatabox').show();
            opCityTip('请选择出诊诊所')
        }else{
            $('.clinic_nodatabox').hide();
        }
    });
    $('.addCbut').click(function(){
        $('.Countryhide').show();
        $(this).hide();
        $('.cuontryval').val('')
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
    $('#save-but').click(function(){
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
                visit_data = dataArray,
                monthArray = [ThisMonth,nextMonth],
                assistant_id =$('#assistant_id option:selected').val() ,
                meiqia = $('#meiqia').val(),
                two_code = $('#tow_codeImg img').attr('src') ==undefined ? '' : $('#tow_codeImg img').attr('src'),
                identity_id = 2;

            // sessionStorage.getItem('dataArray')
            var label =new Array();
            // console.log(monthArray);
            $("#tag_name input[type='checkbox']:checked").each(function(){ 
                var checkVal=$(this).siblings('i').text();
                label.push(checkVal)
            }) 
            var label_id =new Array();
            $("#tag_name input[type='checkbox']:checked").each(function(){ 
                var checkVal=$(this).val();
                label_id.push(checkVal)
            }) 
            var service_id =new Array();
            $("#service_ids input[type='checkbox']:checked").each(function(){ 
                var checkVal=parseInt($(this).val());
                service_id.push(checkVal)
            }) 
            //console.log(clinic_id)
            var Label = label == '' ? '' : label;
            var Label_id = label_id == '' ? '' : label_id;
            var service_ids = service_id =='' ? '' : service_id;
           // console.log(visit_data);
            var Visit_Da;
            Visit_Da = visit_data;
            // var Visit_Da = visit_data == 1 ? 1 : visit_data;
            if(visit_data.length == 0){
                Visit_Da = 1;
            }
            //console.log(Label,Label_id);
            //console.log(typeof(Label),typeof(Label_id) );
            console.log(visit_data)
            //console.log(name,sex,birthday,position,hospital,field,job_age,context,account,password,label,label_id)
            if( !ifFun(name,photo,sex,birth,position,hospital,field,job_age,context,account,phone,password,label,label_id,identity_id,is_show,service_ids,clinic_id,visit_data) ){
                return false;
            }else{
                AjaxObj.DoctorEdit(function(result){
                    if( result.Data.code == 1 ){
                        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                        $('.opacity-tip p').html('<span class="success">修改成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                        setTimeout(function(){
                            history.go(-1);
                           //location.href="/mint/html/doctorlist/index.html#Doctor";
                        },500);
                    }else{
                        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                        $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
                    }
                },user_id,name,photo,sex,birth,position,hospital,field,job_age,context,account,phone,password,Label,Label_id,identity_id,is_show,service_ids,clinic_id,Visit_Da,monthArray,assistant_id,meiqia,two_code)
            
            }
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
var valueDate = new Array();
var valueDate2 = new Array();
window.valueDate = valueDate;
window.valueDate2 = valueDate2;
var obj;
window.obj = obj;
var dataArray = new Array();
window.dataArray = dataArray;
var zdh = new Array();
window.zdh = zdh;

function visitDateQueryDFun(visit_date,user_id){
    AjaxObj.visitDateQueryD(function(model){
        if(model.Data.code == 1){
            timeDatapre(1)
            //console.log(model.Data);
            if(model.Data.data.length!=0){
                for(var q=0;q<model.Data.data.length;q++){
                    var obj = {
                        clinic_id:model.Data.data[q].clinic_id,
                        visit_date:model.Data.data[q].visit_date,
                        start_time:model.Data.data[q].start_time,
                        end_time:model.Data.data[q].end_time,
                        time_span: model.Data.data[q].time_span,
                        type:model.Data.data[q].type
                    };
                    dataArray.push(obj);
                    zdh.push(obj);
                }
               //console.log(dataArray);     
            }
            if(model.Data.data !=''){
                $('#start_time option[value="'+model.Data.data[0].start_time+'"]').attr('selected',true)
                $('#end_time option[value="'+model.Data.data[0].end_time+'"]').attr('selected',true)
                var arr = [];
                for(var n=0; n<model.Data.data.length; n++){
                    var visit_dateVal = model.Data.data[n].visit_date;
                    if(model.Data.data[n].type ==2){
                        valueDate2.push(visit_dateVal);
                    }else{
                        valueDate.push(visit_dateVal);
                    }
                    
                }
                //console.log(valueDate,valueDate2)
                for(var j =0 ;j<valueDate.length;j++){
                    arr[j] = valueDate[j];
                }
                window.arr = arr;
                $("#inline-calendar").calendar('setValue',valueDate);              
            }
            if(model.Data.data.length == 0){
                window.arr = arr = [];
                $("#inline-calendar").calendar('setValue',valueDate);  
            }

            var rowslength = $('.picker-calendar-month .picker-calendar-row').length;
            var disable = valueDate2;
            for(var i =0;i<rowslength;i++){
                var daylength = $('.picker-calendar-month .picker-calendar-row').eq(i).children().length;
                for(var j=0;j<daylength;j++){
                    //$('.picker-calendar-month .picker-calendar-row').eq(i).children().eq(j).addClass('picker-calendar-day picker-calendar-day-selected2');
                    for(var z =0 ; z<disable.length;z++){
                        if($('.picker-calendar-month .picker-calendar-row').eq(i).children().eq(j).attr('data_date') == disable[z]){
                            $('.picker-calendar-month .picker-calendar-row').eq(i).children().eq(j).attr('data_date',disable[z]).addClass('picker-calendar-day-selected2');
                        }
                    }
                }
            }
        }else{

            opCityTip(model.Data.msg);
        }

    },visit_date,user_id) 
}
function calendarFun(TodayD,user_id,TodayDate,ThisMonth,nextMonth){  
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
                onMonthYearChangeEnd:function(p,year,month){
                    if((parseInt(month)+1)<10){
                        var thisMonth = year+'-0'+(parseInt(month)+1);
                    }else{
                        var thisMonth = year+'-'+(parseInt(month)+1);
                    }
                    AjaxObj.visitDateQueryD(function(model){
                        if(model.Data.code == 1){
                            if(model.Data.data !=''){
                                $('#clinicList option[value="'+model.Data.data[0].clinic_id+'"]').attr('selected',true);
                            }
                        }else{
                            opCityTip(model.Data.msg)
                        }
                    },thisMonth,user_id) 
                },
                onDayClick:function(p, dayContainer, year, month, day){
                    if( $('#clinc_types input:checked').val() ==2 ){
                        console.log('1111')
                        dayContainer.addClass('picker-calendar-day-selected2')
                    }
                    /*获取具体时间*/
                    var Monthdate = (parseInt(month)+1) < 10 ? "0" + (parseInt(month)+1): (parseInt(month)+1);
                    var Datdate = day < 10 ? "0" + day : day;
                    var visit_date = year + "-" + Monthdate + "-" + Datdate;
                    var ddd = visit_date;
                    var times = 1;
                    //console.log(visit_date)
                    AjaxObj.visitDateQueryD(function(model){
                        if(model.Data.code == 1){
                            if(model.Data.data !=''){
                                $('#start_time option[value="'+model.Data.data[0].start_time+'"]').attr('selected',true)
                                $('#end_time option[value="'+model.Data.data[0].end_time+'"]').attr('selected',true)
                            }
                        }else{
                            opCityTip(model.Data.msg)
                        }
                    },visit_date,user_id) 
                    for(var i =0;i<valueDate.length;i++){
                        if(valueDate[i] == ddd){
                            times = 2;
                        }
                    }
                    if(times == 1){
                        var flag = 0;

                        for(var i =0;i<arr.length;i++){
                            if(arr[i] == ddd){
                                arr.remove(ddd);
                            flag = 1;
                            }
                        }

                        if(flag == 0){
                          arr.push(ddd);
                        }
                    //console.log(arr);

                    }else if(times == 2){

                        var flag = 0;
          
                        for(var i =0;i<arr.length;i++){
                            if(arr[i] == ddd){
                            // arr.remove(ddd);
                            flag = 1;
                            }
                        }

                    if(flag == 0){
                        arr.push(ddd);
                    }


                    for(var i =0;i<valueDate.length;i++){
                        if(valueDate[i] == ddd){
                          valueDate.remove(ddd);
                          flag = 1;
                        }
                    }
                      $('.delete-tipbox').show();
                  }

                  // !dayContainer.hasClass('picker-calendar-day-selected')
                    timeDatapre(1)
                    $('#chuTime').html(year+'年'+(parseInt(month)+1)+'月'+day+'日')
                    var start_time ='09:00',
                        end_time =  '17:30';
                    if( !dayContainer.hasClass('picker-calendar-day-selected')  ) {//添加日
                        timeDatapre(1)
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
                        $('#selectedTime').die().live('change',function(){
                            obj.time_span=$(this).find('option:selected').val()
                            console.log( $(this).find('option:selected').val() )
                        })
                        dataArray.push(obj)
                        window.obj = obj;
                    }else{//取消日
                        if(times == 1){
                            dayContainer.removeClass('picker-calendar-day-selected2')
                            timeDatapre(1)
                            for(i=0; i<dataArray.length; i++){
                                if(visit_date == dataArray[i].visit_date){
                                    dataArray.splice(i,1);
                                    console.log(dataArray);
                                }
                            }
                        }
                    }
                    $('#confirm-but').die().live('click',function(){
                        console.log(dataArray);
                        if(valueDate!='' && $('#clinicList option:selected').val()=='' ){
                            $('#clinicList').css('border','solid 1px red')
                            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                            $('.opacity-tip p').html('<span class="wrong">请选择出诊诊所</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                        }else{
                            $('#timeTipbox').hide();
                        }
                        sessionStorage.setItem('dataArray',JSON.stringify(dataArray) )
                       
                    })  
            }

            });
            $('#confirm-but').die().live('click',function(){
                console.log(dataArray);
                if(valueDate!='' && $('#clinicList option:selected').val()=='' ){
                    $('#clinicList').css('border','solid 1px red')
                    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                    $('.opacity-tip p').html('<span class="wrong">请选择出诊诊所</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                }else{
                    $('#timeTipbox').hide();
                }
                sessionStorage.setItem('dataArray',JSON.stringify(dataArray) )
            })  
            visitDateQueryDFun(ThisMonth,user_id);
            visitDateQueryDFun(nextMonth,user_id);
        }else{
            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
        }
    },TodayD)
    

}
function upPicFun(){
    /*图片头像上传*/
    var options ={
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
function zclipFun(copyLink){
    $("#copyLink").zclip({
        path: '../../diyUpload/js/ZeroClipboard.swf',
        copy: copyLink,
        afterCopy: function(){
          $('.opacity-tip p').html('复制成功')
          $('.opacity-tip').fadeIn().delay(1000).fadeOut(2000)
        }
  });
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

function ifFun(name,photo,sex,birth,position,hospital,field,job_age,context,account,phone,password,label,label_id,identity_id,is_show,service_ids,visit_data){
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
    }else if( phone == '' ){
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
    }else{
        return true;
    }
}
