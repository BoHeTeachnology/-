$(function(){
    $('.wrapper1').height($(window).height() );
    $('.wrapper1').css('overflow-y','hidden')
    var v1 = new Vue({
        el:'#app',
        data:{
            data_son:{

            },
            data_brother:{

            }
        }
    })
    var record_id = sessionStorage.getItem('record_id');
    var user_id = sessionStorage.getItem('user_id')
    $('.userContain').height( $(window).height()-145 )
    window.onresize=function(){
        $('.userContain').height( $(window).height()-145 )
    }
    jeDate({
        dateCell:"#J-xl",//isinitVal:true,
        format:"YYYY-MM-DD",
        isTime:false, //isClear:false,
    })
    upFile();
    if(user_id){
        $('#button_id').attr('disabled',true);
        AjaxObj.getRelationUserParent(function(modal){
            if(modal.Data.code ==1){
                if(modal.Data.data !=''){
                    $('#desc_tip1,#desc_tip').html('与 '+modal.Data.data.real_name+'&nbsp;的关系：'+modal.Data.data.relation)
                }
            }
        },user_id)
    }else{
        $('#button_id').attr('disabled',false)
    }
    //查询标签
    AjaxObj.IndextagLst(function(result){
        if(result.Data.code == 1 ){
            var html='';
            for (var i=0; i<result.Data.data.length; i++ ) {
                html+='<span>'
                html+='<input type="checkbox" class="checkbox" id="checkboxa_'+i+'" value="'+result.Data.data[i].id+'">'
                html+='<label for="checkboxa_'+i+'"><i>'+result.Data.data[i].tag_name+'</i></label>'
                html+='</span>'
            };
            $('#tag_name').html(html)
            $('#tag_name input').change(function(){
                $('#tag_name').siblings('p').html('');
            })
            seeFun(record_id,v1)
        }else{
            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
        }
    },2)
    
    $('.addCbut').click(function(){
        $('.Countryhide').show();
        $(this).hide();
        $('.cuontryval').val('')
    })
    $('#tooth_type input,#tooth_square input').change(function(){
         $('#tooth_type').parent().siblings('p.error').html('');
    })
    $('#types input').change(function(){
        if($(this).val() == '1'){
            $('#desc_span').html('综合意见：')
        }else if($(this).val() == '2'){
             $('#desc_span').html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;处置：')
        }
    })
    //添加标签
    $('.addCountry').click(function(){
        var tag_name = $('.cuontryval').val();
        console.log(tag_name)
        if(tag_name == ''){
            $('.addCbut').show();
            $('.Countryhide').hide();
        }else{
            AjaxObj.RecordaddTag(function(result){
                if(result.Data.code == 1){
                    AjaxObj.IndextagLst(function(result){
                        if(result.Data.code == 1 ){
                            var html='';
                            for (var i=0; i<result.Data.data.length; i++ ) {
                                html+='<span>'
                                html+='<input type="checkbox" class="checkbox" id="checkboxa_'+i+'" value="'+result.Data.data[i].id+'">'
                                html+='<label for="checkboxa_'+i+'"><i>'+result.Data.data[i].tag_name+'</i></label>'
                                html+='</span>'
                            };
                            $('#tag_name').html(html)
                            $('.addCbut').show();
                            $('.Countryhide').hide();
                            $('#tag_name input').change(function(){
                                $('#tag_name').siblings('p').html('');
                            })
                        }else{
                            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
                        }
                    },2)
                }else{
                    console.log(result.Data.msg)
                }
            },tag_name)
        }
    })

    /*用户查找*/
    AjaxObj.AppointmentUserLst(function(result){
        if(result.Data.code == 1){
            var html='';
            for(var i=0;i<result.Data.data.length;i++){
                var accountPhone =result.Data.data[i].account=='' ? '' : '&nbsp;&nbsp;('+result.Data.data[i].account+')';
                var listname = result.Data.data[i].name ==''? '' : result.Data.data[i].name+'&nbsp;&nbsp;';
                html+='<li class="filter-item items" data-filter="'+listname+result.Data.data[i].phone+'('+result.Data.data[i].account+')'+'" data-value="'+result.Data.data[i].id+'" data-name="'+result.Data.data[i].name+'" data-phone="'+result.Data.data[i].phone+'"><span>'+listname+'</span>'+result.Data.data[i].phone+accountPhone+'</li>'
            
            }
            $('#patient_id').append(html)
            //病人查找
            AjaxObj.AppointmentUserLst(function(result){
                if(result.Data.code == 1){
                    var html='';
                    for(var i=0;i<result.Data.data.length;i++){
                        html+='<li class="filter-item items" data-filter="'+result.Data.data[i].name+'('+result.Data.data[i].account+')'+'" data-value="'+result.Data.data[i].id+'">'+result.Data.data[i].name+'('+result.Data.data[i].account+')'+'</li>'
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
                            $('#patient_id li').click(function(){
                                var dataVal = $(this).attr('data-value');
                                var dataName = $(this).attr('data-name')
                                $('#userInputbox .text').attr('data-val',dataVal);
                                $('#userInputbox .text').attr('data-name',dataName)
                                getEarliestTooth(dataVal,v1);
                                AjaxObj.getRelationUserParent(function(modal){
                                    if(modal.Data.code ==1){
                                        if(modal.Data.data !=''){
                                            $('#desc_tip1,#desc_tip').html('与 '+modal.Data.data.real_name+'&nbsp;的关系：'+modal.Data.data.relation)
                                        }
                                    }
                                },dataVal)
                            })
                            $('#doctor_id li').click(function(){
                                var dataVal = $(this).attr('data-value');
                                $('#DocInputbox .text').attr('data-val',dataVal)
                            })
                            $('#clinic_id li').click(function(){
                                var dataVal = $(this).attr('data-value');
                                $('#ClinkBox .text').attr('data-val',dataVal)
                            })

                        }else{
                            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
                        }
                    })
                    //诊所查找结束
                }else{
                    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                    $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
                }
            },2)
            //病人查找结束
        }else{
            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
            $('.opacity-tip p').html(result.Data.msg).css({'margin-left':-($('.opacity-tip p').width()/2)})
        }
    },1)


    $('#userInputbox button,#ClinkBox button,#DocInputbox button').click(function(){
        $(this).css({'border':'solid 1px #ccc'});
        $(this).parents('.col-sm-8').siblings('p.error').html('')
    })
    $('#types input,#tooth_type input,#tooth_square input').change(function(){
        $(this).parents('.checkBone').siblings('p.error').html('');
    })
    $('#save-but').click(function(){
       editFun(record_id,function(){
            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
            $('.opacity-tip p').html('编辑成功').css({'margin-left':-($('.opacity-tip p').width()/2)})
            sessionStorage.setItem('idSee',record_id)
            setTimeout(function(){
               location.href="/mint/html/illLibrary/see.html#Record";
            },500);
       })
    })
    $('#send-but').click(function(){
        editFun(record_id,function(){
            AjaxObj.sendWeixinMsg(function(modal){
                if(modal.Data.code ==1){
                    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                    $('.opacity-tip p').html('保存并发送').css({'margin-left':-($('.opacity-tip p').width()/2)})
                    $('#send-but').hide();
                    $('#sent').show();
                }else{
                    opCityTip('',modal.Data.msg)
                }
            },record_id)
        })
    })
})
function editFun(record_id,callback){
    var visit_time = $('#J-xl').val(),
        patient_id = $('#userInputbox .text').attr('data-val') || $('#Valuser').attr('data-val'),
        doctor_id = $('#DocInputbox .text').attr('data-val') || $('#DovVal').attr('data-val'),
        clinic_id = $('#ClinkBox .text').attr('data-val') || $('#ClinkVal').attr('data-val'),
        record_content = $('#record_content').val(),
        treatment = $('#treatment').val(),
        tooth_pic = $("#tooth_pic .fileBoxUl li").eq(0).attr('file_path') || '',
        tooth_type = $('#tooth_type input:checked').val() || '',
        tooth_square = $('#tooth_square input:checked').val() || '',
        tooth_suggestion = $('#tooth_suggestion').val(),
        toothpic_id = sessionStorage.getItem('toothpic_id') || '',
        type=$('#types input:checked').val();
        var file_data=[];//项目附件路径（数组） 选填
            $("#upFilesdiv .fileBoxUl li").each(function(){ 
                var path=$(this).attr('file_path');
                var file_name=$(this).find('div.diyFileName').html();
                file_data.push([path,file_name]);
            })
        var label =new Array();
        $("#tag_name input[type='checkbox']:checked").each(function(){ 
            var checkVal=$(this).siblings('label').find('i').text();
            label.push(checkVal)
        }) 
        var label_id =new Array();
        $("#tag_name input[type='checkbox']:checked").each(function(){ 
            var checkVal=parseInt($(this).val());
            label_id.push(checkVal)
        }) 
        //console.log(patient_id,visit_time,doctor_id,clinic_id)
        //console.log(record_content,tooth_type,tooth_square,record_content,treatment,tooth_suggestion)
        //console.log(label,label_id)
        //console.log(toothpic_id,file_data)
        if( !ifFun(visit_time,patient_id,doctor_id,clinic_id,record_content,file_data,treatment,tooth_pic,tooth_type,tooth_square,tooth_suggestion,toothpic_id) ){
            return false;
        }else{
            if(label_id ==''){
                $('#tag_name').siblings('p').html('请选择标签').show();
                $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                $('.opacity-tip p').html('<span class="wrong">请选择标签<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
            }else{
                AjaxObj.Recordedit(function(result){
                    if( result.Data.code == 1 ){
                        callback();
                    }else{
                        console.log(result.Data.msg)
                    }
                },record_id,visit_time,patient_id,doctor_id,clinic_id,record_content,file_data,label,label_id,treatment,tooth_pic,tooth_type,tooth_square,tooth_suggestion,toothpic_id,type)
            }
        }
}
function seeFun(record_id,v1){
    //获取单个病历信息
    AjaxObj.RecordgetOne(function(result){
        if(result.Data.code ==1 ){
            $('#types input[value="'+result.Data.data.type+'"]').attr('checked',true)
            if(result.Data.data.type == '1'){
                $('#desc_span').html('综合意见：')
            }else if(result.Data.data.type == '2'){
                $('#desc_span').html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;处置：')
            }
            var thisId = result.Data.data.patient_id;
            getEarliestTooth(thisId,v1)
            /*if(result.Data.data.date !=''){
                //getEarliestTooth(thisId,v1,result.Data.data.date)
            }else{
                $('#creat_time,#tooth_pic_main').hide();
                $('#time_showbox').show().html('没有牙位图记录！');
            }*/
            AjaxObj.getRelationUserParent(function(modal){
                if(modal.Data.code ==1){
                    if(modal.Data.data !=''){
                        $('#desc_tip1,#desc_tip').html('与 '+modal.Data.data.real_name+'&nbsp;的关系：'+modal.Data.data.relation)
                    }
                }
            },thisId)
            $('#J-xl').val(result.Data.data.visit_time);
            var accountP = result.Data.data.account == '' ? '' : '('+result.Data.data.account+')';
            var Names = result.Data.data.patient_name == '' ? '' : result.Data.data.patient_name+'&nbsp;&nbsp;';
            $('#Valuser').attr('data-val',result.Data.data.patient_id).html(Names+result.Data.data.patient_phone+accountP);
            $('#DovVal').attr('data-val',result.Data.data.doctor_id).html(result.Data.data.doctor_name+'('+result.Data.data.doctor_phone+')');
            if(result.Data.data.clinic_name == '' || result.Data.data.clinic_name == null){
                $('#ClinkVal').attr('data-val',result.Data.data.clinic_id).html('请选择');
            }else{
                $('#ClinkVal').attr('data-val',result.Data.data.clinic_id).html(result.Data.data.clinic_name);
            }
            $('#record_content').val(result.Data.data.record_content);
            $('#treatment').val(result.Data.data.treatment);
            $('#tooth_type input[value="'+result.Data.data.tooth_type+'"]').attr('checked',true);
            $('#tooth_square input[value="'+result.Data.data.tooth_square+'"]').attr('checked',true);
            $('#tooth_suggestion').val(result.Data.data.tooth_suggestion);
            //treatment,tooth_pic,tooth_type,tooth_square,tooth_suggestion
            for(var n=0; n<result.Data.data.label_id.length; n++){
                $('#tag_name input[value="'+result.Data.data.label_id[n]+'"]').attr('checked',true);
            }
            if(result.Data.data.is_send==1){
                $('#send-but').hide();
                $('#sent').show();
            }else{
                $('#send-but').show();
                $('#sent').hide();
            }
            if(result.Data.data.file_data != ''){
                var li='';
                for(var f=0;f<result.Data.data.file_data.length; f++){
                    li+= '<li id="fileBox_'+result.Data.data.file_data[f].id+'" class="txt_diy_bg" file_path="'+result.Data.data.file_data[f].file_path+'">'
                    li+= '<div class="viewThumb"><img src="'+result.Data.data.file_data[f].file_path+'" alt="" /></div>'
                    li+= '<div class="diyCancel"></div>'
                    li+= '<div class="diyFileName">'+result.Data.data.file_data[f].file_name+'</div>'
                    li+= '</li>'
                }
                $('#upFilesdiv .fileBoxUl').append( li )
            } 
            $('#upFilesdiv .diyCancel').click(function(){
                $(this).parent().remove();
            })

        }else{
            opCityTip('',result.Data.msg)
            //console.log(result.Data.msg)
        }
    },record_id)

}
function getEarliestTooth(user_id,v1){
    AjaxObj.RecordsltDateRecords(function(modal){
        if(modal.Data.code ==1){
            if(modal.Data.data==''){
                $('#creat_time,#tooth_pic_main').hide();
                $('#time_showbox').show().html('没有牙位图记录！');
            }else{
                var option='';
                for(var i=0;i<modal.Data.data.length; i++){
                    option+='<option value="'+modal.Data.data[i].create_time+'">'+modal.Data.data[i].create_time+'</option>';
                }
                $('#creat_time').html(option);
                /*if( dateTime ){
                    $('#creat_time option[value="'+dateTime+'"]').attr('selected',true);
                    RecordsltArchives(user_id,dateTime)
                }else{}*/
                $('#creat_time option[value="'+modal.Data.data[modal.Data.data.length-1].create_time+'"]').attr('selected',true);
                RecordsltArchives(user_id,modal.Data.data[modal.Data.data.length-1].create_time)
                
                $('#creat_time').change(function(){
                    var optionVal = $(this).val();
                    console.log(optionVal)
                    RecordsltArchives(user_id,optionVal)
                })
            }
                
        }else{
            opCityTip('',modal.Data.msg)
        }
    },user_id,3)

    function RecordsltArchives(user_id,creat_time){
        AjaxObj.RecordsltArchives(function(result){
            if(result.Data.code ==1){
                sessionStorage.setItem('toothpic_id',result.Data.id)
                v1.data_son = result.Data.data[0];
                $('#tooth_pic_main').show();
                $('#time_showbox').html(result.Data.date);
                var flag = 1;
                for(var i=0;i<result.Data.data[0].teeth_arr.length;i++){
                    if(result.Data.data[0].teeth_arr[i].content.length != 0){
                      flag =0;
                      break;
                    }else{
                      continue;
                    }
                }
                if(flag==1){
                    var arr = []
                    for(var i =0;i<result.Data.data[0].teeth_child_arr.length;i++){
                        if(result.Data.data[0].teeth_child_arr[i].content.length!=0){
                            var obj = {
                              name:result.Data.data[0].teeth_child_arr[i].name,
                              content:[]
                            }
                            for(var j =0;j<result.Data.data[0].teeth_child_arr[i].content.length;j++){
                              obj.content.push(result.Data.data[0].teeth_child_arr[i].content[j].name);
                            }
                            arr.push(obj);
                        }
                    }
                }else{
                    var arr = []
                    for(var i =0;i<result.Data.data[0].teeth_arr.length;i++){
                    if(result.Data.data[0].teeth_arr[i].content.length!=0){
                        var obj = {
                            name:result.Data.data[0].teeth_arr[i].name,
                            content:[]
                          }
                          for(var j =0;j<result.Data.data[0].teeth_arr[i].content.length;j++){
                            obj.content.push(result.Data.data[0].teeth_arr[i].content[j].name);
                          }
                          arr.push(obj);
                        }
                    }
                }
                v1.data_brother=arr;
                $('#creat_time,#tooth_pic_main').show();
                $('#time_showbox').hide();
            }else{
                toothpic_id = result.Data.id;
                $('#tooth_pic_main').hide();
                $('#time_showbox').html(result.Data.data);
            }
        },user_id,creat_time,3)
    } 
}

function ifFun(visit_time,patient_id,doctor_id,clinic_id,record_content,file_data,treatment,tooth_pic,tooth_type,tooth_square,tooth_suggestion){
    if( patient_id == '' ){
        $('#userInputbox').siblings('p.error').html('请选择就诊人').show()
        $('#userInputbox button').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">请选择就诊人</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( visit_time == '' ){
        opCityTip('J-xl','请选择时间')
        return false;
    }else if( doctor_id == '' ){
        $('#DocInputbox').siblings('p').html('请选择医生').show()
        $('#DocInputbox button').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">请选择医生</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( clinic_id == '' ){
        $('#ClinkBox').siblings('p').html('请选择诊所').show()
        $('#ClinkBox button').css({'border':'solid 1px red'})
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">请选择诊所</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( tooth_type == '' ){
        $('#tooth_type').siblings('p').html('请选择牙周情况').show();
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">请选择牙周情况<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( tooth_square == '' ){
        $('#tooth_square').siblings('p').html('请选择牙列情况').show();
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">请选择牙列情况<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }else if( record_content == '' ){
        opCityTip('record_content','诊断不能为空')
        return false;
    }else if( treatment == '' ){
        opCityTip('treatment','治疗不能为空')
        return false;
    }/*else if( tooth_pic == '' ){
        $('.wrongfiletip').show().html('请上传牙位图');
        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
        $('.opacity-tip p').html('<span class="wrong">牙位图不能为空<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
        return false;
    }*/else if( tooth_suggestion == '' ){
        opCityTip('tooth_suggestion','处置不能为空')
        return false;
    }else{
        return true;
    }
}

function upFile(){
    /*上传文件---------------------------------------------*/

    $('#picUpfile').diyUpload({
        url:'http://'+location.host+'/mintAdmin/index.php/Admin/Index/upFile',
        success:function( data ) {
            $('.wrongfiletip').html('');
            /*var str = '<li id="fileBox" class="diyUploadHover" file_path="'+data.file_path+'"> \
                                <div class="viewThumb"><img src="'+data.file_path+'" alt="" /></div> \
                                <div class="diyCancel"></div> \
                                <div class="diyFileName">'+data.file_path+'</div>
                                <div class="clear"></div> \
                            </li>';
            $('#tooth_pic .fileBoxUl').append(str);
            $('#tooth_pic .diyCancel').click(function(){
                $(this).parent().remove();
            })*/
        },
        error:function( err ) {
            console.log( err ); 
        },
        buttonText : '上传图片',
        buttonText : '上传图片',
        chunked:false,
        auto : true,
        // 分片大小
        chunkSize:1048576 * 15,
        //最大上传的文件数量, 总文件大小,单个文件大小(单位字节);
        fileNumLimit:100,
        fileSizeLimit:1048576 * 100,
        fileSingleSizeLimit:1048576 * 15,
        accept : {
            mimeTypes: 'image/*',
            extensions: '*',
        }
      
    });
    /*上传文件结束-----------------------------------*/
}

function opCityTip(selector,tipText){
    $('#'+selector+'').siblings('p.error').html(tipText).show()
    $('#'+selector+'').css({'border':'solid 1px red'})
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
    $('.opacity-tip p').html('<span class="wrong">'+tipText+'<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
}