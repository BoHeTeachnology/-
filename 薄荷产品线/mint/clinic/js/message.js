$(function(){
  var clinicId = sessionStorage.getItem('clinic_id')
   upPicFun();
   upPicFun2();
  $("#inline-calendar").calendar({
        container: "#inline-calendar",
        input: "#date",
        onDayClick:function(p, dayContainer, year, month, day){
         /*获取具体时间*/
          var Monthdate = (parseInt(month)+1) < 10 ? "0" + (parseInt(month)+1): (parseInt(month)+1);
          var Datdate = day < 10 ? "0" + day : day;
          var visit_date_juti = year + "-" + Monthdate + "-" + Datdate;  
          getFreeChair(clinicId,visit_date_juti)  
        }
  });
  $('.closebtni,#cancelBtn,#cancelBtn2').click(function(){
    $('.clinicTipbox-opacity').hide();
    $('input[name="textInput"],input[type="password"],textarea').val('');
    $('input[name="textInput"],input[type="password"],textarea').css({'border':'#ccc 1px solid'});
    $('.errorTip,.uppicerrorTip').html('');
    $('.touxiang img').attr('src','');
  })
  
  /*左侧基本信息查询-------------------------------------*/
  AjaxObj.ClinicgetOne(function(result){
    if(result.Data.code ==1){
      $('#clinic_brand').html( result.Data.data.clinic_brand );
      $('#clinic_name').html( result.Data.data.clinic_name );
      $('#set_date').html( result.Data.data.set_date );
      $('#clinic_address').html( result.Data.data.clinic_address );
      $('#chair_nums').html( result.Data.data.chair_nums );
      $('#staff_nums').html( result.Data.data.staff_nums ==0? 0 : result.Data.data.staff_nums+'人' );
      $('#clinic_head_name').html( result.Data.data.clinic_head_name );
      $('#mint_head_name').html( result.Data.data.mint_head_name );
      $('#mint_head_phone').html( result.Data.data.mint_head_phone );
      var clinic_pic_Url = result.Data.data.clinic_pic;
      var around_pic_Url = result.Data.data.around_pic;
      $('#clinic_pic_btn').click(function(){
        if(clinic_pic_Url ==''){
            opCityTip('暂时没有相关图片')
        }else{
          $('#showPicTipbox').fadeIn().find('img').attr('src',clinic_pic_Url);
        }
        
      })
      $('#around_pic_btn').click(function(){
        if(around_pic_Url ==''){
            opCityTip('暂时没有相关图片')
        }else{
          $('#showPicTipbox').fadeIn().find('img').attr('src',around_pic_Url);
        }
      })
    }else{
      opCityTip(result.Data.msg)
    }
  },clinicId)
  /*可用牙椅数量-------------------------------------*/
  getFreeChair(clinicId,$('#date').val())
  $('#editChairNum').click(function(){
    $('#chair_numsInput').show();
    $('#chair_numsInput').focus();
    $('#saveChairNum').show();
    $('#editChairNum').hide();
  })
  $('#saveChairNum').click(function(){
    var clinic_id = clinicId,
        chair_date = $('#date').val() ,
        chair_nums = $('#chair_numsInput').val();
    AjaxObj.modifyFreeChair(function(result){
      if(result.Data.code ==1){
        opCityTip('修改成功')
        $('#editChairNum').show();
        $('#chair_numsInput').hide();
        $('#chair_numsText').html( $('#chair_numsInput').val() )
        $('#saveChairNum').hide();
      }else{
        $('#chair_numsInput').val(sessionStorage.getItem('chair_nums'))
        $('#chair_numsText').html(sessionStorage.getItem('chair_nums'))
        opCityTip(result.Data.msg)
      }
    },clinic_id,chair_date,chair_nums)
  })

  /*设备信息 查询添加与编辑-------------------------------------*/
  AjaxObj.equipmentList(function(result){
      if(result.Data.code ==1){
        var html='';
        var x = false;
        for(i=0; i<result.Data.data.length; i++){
          html+='<div class="swiper-slide">'
          html+='<div class="swiper-slidebox">'
          html+='<dl>'
          html+='<dt data-id="'+result.Data.data[i].id+'"><img src="'+result.Data.data[i].equipment_pic+'" alt=""><span></span></dt>'
          html+='<dd>'
          html+='<p><b>品牌：</b><span>'+result.Data.data[i].brand+'</span></p>'
          html+='<p><b>国家：</b><span>'+result.Data.data[i].country+'</span></p>'
          html+='<p><b>使用年限：</b>'+result.Data.data[i].life_year+'<span></span></p>'
          html+='<p><b>数量：</b><span>'+result.Data.data[i].equipment_nums+'</span></p>'
          html+='<p><b>支持电话：</b><span>'+result.Data.data[i].tel+'</span></p>'
          html+=' </dd>'
          html+=' </dl>'
          html+='</div>'
          html+='</div>'
        }
        $('#EquipmentList').html(html)
        swiperFun('.swiper-container1','.swiper-button-next1','.swiper-button-prev1',2,30)
        $('#EquipmentList .swiper-slide dl dt').click(function(){
          sessionStorage.setItem('EquipmentBut',2);
          var id=$(this).attr('data-id');
          sessionStorage.setItem('EquipId',id);
          $('#EquipmentTipbox').show()
          $('#title_Equip').html('编辑设备信息')
          AjaxObj.getOneEquipment(function(mode){
            if(mode.Data.code ==1){
              $('#brand').val(mode.Data.data.brand);
              $('#country').val(mode.Data.data.country)
              $('#life_year').val(mode.Data.data.life_year)
              $('#tel').val(mode.Data.data.tel)
              $('#equipment_nums').val(mode.Data.data.equipment_nums)
              $('#equipment_pic img').attr('src',mode.Data.data.equipment_pic)
            }else{
              opCityTip(mode.Data.msg)
            }
          },id)
          //console.log(id)
        })
      }else{
        opCityTip(result.Data.msg)
      }
  },clinicId)
  $('#saveBtn').die().live('click',function(){
    var clinic_id =clinicId,
        brand = $('#brand').val(),
        country = $('#country').val(),
        life_year = $('#life_year').val(),
        equipment_nums = $('#equipment_nums').val(),
        tel = $('#tel').val(),
        equipment_pic = $('#equipment_pic img').attr('src');
       // console.log(clinic_id,brand,country,life_year,equipment_nums,tel,equipment_pic)
        //console.log( sessionStorage.getItem('EquipId') )
    if(sessionStorage.getItem('EquipmentBut') == 1){//添加  1
        if( !checkFun(brand,country,life_year,equipment_nums,tel,equipment_pic) ){
          return false;
        }else{
          AjaxObj.addEquipment(function(result){
            if(result.Data.code==1){
              $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
              $('.opacity-tip p').html('<span class="success">添加成功<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
              setTimeout(function(){
                $('#EquipmentTipbox').hide();
                location.reload();
              },1000)
            }else{
              opCityTip(result.Data.msg)
            }
          },clinic_id,brand,country,life_year,equipment_nums,tel,equipment_pic)
        }
    }else if(sessionStorage.getItem('EquipmentBut') == 2){//编辑  2
        AjaxObj.editEquipment(function(result){
            if(result.Data.code==1){
              $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
              $('.opacity-tip p').html('<span class="success">修改成功<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
              setTimeout(function(){
                $('#EquipmentTipbox').hide();
                location.reload();
              },1000)
            }else{
              opCityTip(result.Data.msg)
            }
        },sessionStorage.getItem('EquipId'),clinic_id,brand,country,life_year,equipment_nums,tel,equipment_pic)
    }       
  })
  /*耗材库存 查询添加与编辑-------------------------------------*/
  AjaxObj.materialList(function(result){
      if(result.Data.code ==1){
        var html='';
        var x = false;
        for(i=0; i<result.Data.data.length; i++){
            html+='<div class="swiper-slide" data-id="'+result.Data.data[i].id+'">'
            html+='<div class="swiper-slidebox">'
            html+='<dl>'
            html+='<dt data-id="'+result.Data.data[i].id+'"><img src="'+result.Data.data[i].material_pic+'" alt=""><span></span></dt>'
            html+='<dd>'
            html+='<span>'+result.Data.data[i].material_name+'</span>'
            html+='<label>'+result.Data.data[i].material_nums+result.Data.data[i].material_unit+'</label>'
            html+='</dd>'
            html+='</dl>'
            html+='</div>'
            html+='</div>'
        }
        $('#materialList').html(html)
        swiperFun('.swiper-container2','.swiper-button-next2','.swiper-button-prev2',5,10)
        
        $('#materialList .swiper-slide dl dt').click(function(){
          sessionStorage.setItem('MaterialBut',2);
          var id=$(this).attr('data-id');
          sessionStorage.setItem('MaterId',id);


          $('#MaterialTipbox').show()
          $('#title_Material').html('编辑耗材库存')
          AjaxObj.getOneMaterial(function(mode){
            if(mode.Data.code ==1){
              $('#material_name').val(mode.Data.data.material_name);
              $('#material_nums').val(mode.Data.data.material_nums);
              $('#material_unit option[value="'+mode.Data.data.material_unit+'"]').attr('selected',true)
              $('#material_pic img').attr('src',mode.Data.data.equipment_pic)
            }else{
              opCityTip(mode.Data.msg)
            }
          },id)
          //console.log(id)
        })
      }else{
        opCityTip(result.Data.msg)
      }
  },clinicId)
  $('#saveBtn2').die().live('click',function(){
    var clinic_id =clinicId,
        material_name = $('#material_name').val(),
        material_nums = $('#material_nums').val(),
        material_unit = $('#material_unit option:selected').val(),
        material_pic = $('#material_pic img').attr('src');
        //console.log(clinic_id,material_name,material_nums,material_unit,material_pic)
    if( sessionStorage.getItem('MaterialBut') == 1 ){ //添加
        if( !materialFun(material_name,material_nums,material_unit,material_pic) ){
          return false;
        }else{
          AjaxObj.addMaterial(function(result){
            if(result.Data.code==1){
              $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
              $('.opacity-tip p').html('<span class="success">添加成功<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
              setTimeout(function(){
                $('#MaterialTipbox').hide();
                location.reload();
              },1000)
            }else{
              opCityTip(result.Data.msg)
            }
          },clinic_id,material_name,material_nums,material_unit,material_pic)
        }
    }else if( sessionStorage.getItem('MaterialBut') == 2 ){ //编辑
        AjaxObj.editMaterial(function(result){
          if(result.Data.code==1){
            $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
            $('.opacity-tip p').html('<span class="success">修改成功<span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
            setTimeout(function(){
                $('#MaterialTipbox').hide();
                location.reload();
              },1000)
          }else{
            opCityTip(result.Data.msg)
          }
        },sessionStorage.getItem('MaterId'),clinic_id,material_name,material_nums,material_unit,material_pic)
    }        
  })


  $('#addEquipment').click(function(){
      sessionStorage.setItem('EquipmentBut',1);
      $('#EquipmentTipbox').show();
      $('#title_Equip').html('添加设备信息')
  })
  $('#addMaterial').click(function(){
    sessionStorage.setItem('MaterialBut',1);
    $('#MaterialTipbox').show();
    $('#title_Material').html('添加耗材库存')
  })
  $('#closeShowpic').click(function(){
    $('#showPicTipbox').fadeOut();
  })



})
  
function getFreeChair(clinic_id,chair_date){
  //获取诊所空余椅位信息（诊所后台）
  AjaxObj.getFreeChair(function(result){
    if(result.Data.code ==1){
      //console.log(result.Data.chair_nums)
      $('#chair_numsInput').val(result.Data.chair_nums)
      $('#chair_numsText').html(result.Data.chair_nums)
      sessionStorage.setItem('chair_nums',result.Data.chair_nums)
    }else{
      opCityTip(result.Data.msg)
    }
  },clinic_id,chair_date)
}
function upPicFun(){

    /*图片头像上传*/
    var options =
    {
        thumbBox: '.thumbBox',
        spinner: '.spinner',
        imgSrc: ''
    }
    var cropper = $('#imageBox').cropbox(options);
    $('#file,#filen').on('change', function(){
        $('#equipment_pic').siblings('p').html('')
        $('#clinicupPic1').show();
        var reader = new FileReader();
        reader.onload = function(e) {
            options.imgSrc = e.target.result;
            cropper = $('#imageBox').cropbox(options);
        }
        reader.readAsDataURL(this.files[0]);
        this.files = [];
    })
    $('#btnCrop').on('click', function(){
        var img = cropper.getDataURL();
        AjaxObj.imgBase64Up(function(result){
            if(result.Data.code == 1){
                $('#clinicupPic1').hide();
                $('#equipment_pic img').attr('src',result.Data.photo_path)
            }else{
                $('#clinicupPic1').hide()
                $('#equipment_pic').siblings('p').html(result.Data.msg).show()
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

function upPicFun2(){

    /*图片头像上传*/
    var options =
    {
        thumbBox: '.thumbBox',
        spinner: '.spinner',
        imgSrc: ''
    }
    var cropper2 = $('#imageBox2').cropbox(options);
    $('#file2,#filen2').on('change', function(){
        $('#material_pic').siblings('p').html('')
        $('#clinicupPic2').show();
        var reader = new FileReader();
        reader.onload = function(e) {
            options.imgSrc = e.target.result;
            cropper2 = $('#imageBox2').cropbox(options);
        }
        reader.readAsDataURL(this.files[0]);
        this.files = [];
    })
    $('#btnCrop2').on('click', function(){
        var img = cropper2.getDataURL();
        AjaxObj.imgBase64Up(function(result){
            if(result.Data.code == 1){
                $('#clinicupPic2').hide();
                $('#material_pic img').attr('src',result.Data.photo_path)
            }else{
                $('#clinicupPic2').hide()
                $('#material_pic').siblings('p').html(result.Data.msg).show()
            }
        },img)
    })
    $('#btnZoomIn2').on('click', function(){
        cropper2.zoomIn();
    })
    $('#btnZoomOut2').on('click', function(){
        cropper2.zoomOut();
    })
    /*------图片头像上传结束----*/
} 


function swiperFun(container,next,prev,PerViewnum,space){
    var swiper = new Swiper(container, {
        pagination: '.swiper-pagination',
        nextButton:next ,
        prevButton:prev ,
        paginationHide :true,
        slidesPerView: PerViewnum,
        spaceBetween:space,
        freeMode: true
    });
}
function checkFun(brand,country,life_year,equipment_nums,tel,equipment_pic){
  if( brand =='' ){
    wrongTip('brand','请输入品牌')
    return false;
  }else if( country =='' ){
    wrongTip('country','请输入国家')
    return false;
  }else if( life_year =='' ){
    wrongTip('life_year','请输入使用年限')
    return false;
  }else if( equipment_nums =='' ){
    wrongTip('equipment_nums','请输入数量')
    return false;
  }else if( tel =='' ){
    wrongTip('tel','请输入支持电话')
    return false;
  }else if( equipment_pic =='' ){
    $('.equipment_pic').html('请上传图片')
    return false;
  }else{
    return true;
  }
}  
function materialFun(material_name,material_nums,material_unit,material_pic){
  if( material_name =='' ){
    wrongTip('material_name','耗材名称')
    return false;
  }else if( material_nums =='' ){
    wrongTip('material_nums','请输入数量')
    return false;
  }else if( material_unit =='' ){
    wrongTip('material_unit','请输入单位')
    return false;
  }else if( material_pic =='' ){
    $('.uppicerrorTip').html('请上传图片')
    return false;
  }else{
    return true;
  }
}
function opCityTip(tipText){
    $('.opacity-tip').fadeIn(500).delay(2000).fadeOut();
    $('.opacity-tip p').html(tipText).css({'margin-left':-($('.opacity-tip p').width()/2)})
}

function wrongTip(selector,tipText){
  $('#'+selector+'').parents('.inputboxdiv').find('p').html(tipText).show()
  $('#'+selector+'').css({'border':'solid 1px red'})
}


