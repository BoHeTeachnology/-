$(function(){ 
    $('.userContain').height( $(window).height()-260 )
    window.onresize=function(){
        $('.userContain').height( $(window).height()-260 )
    }
    sessionStorage.removeItem('picbox_see_show');

    $('#a4').addClass('active').parent().siblings().children().removeClass('active');
    $('#change div.containb_right').eq(3).show().siblings().hide();
    var create_time = sessionStorage.getItem('create_time_pic');
    var user_id = sessionStorage.getItem('user_id');
    var userObj = JSON.parse(sessionStorage.getItem('getOneobj'));
    if(!userObj){
      AjaxObj.UsergetOne(function(result){
        console.log(result.Data);
        userObj = {
          "user_name":result.Data.data.real_name==null?'':result.Data.data.real_name,
          "user_age":result.Data.data.age==null?'':result.Data.data.age,
          "user_photo":result.Data.data.photo||'../../images/userPic.png',
          "user_phone":result.Data.data.phone
        }
        $('#user_name').html(userObj.user_name);
        $('#user_age').html(userObj.user_age);
        $('#user_phone').html(userObj.user_phone);
        $('#user_photo img').attr('src',userObj.user_photo);

      },user_id);
    }else{
      $('#user_name').html(userObj.user_name);
      $('#user_age').html(userObj.user_age);
      $('#user_phone').html(userObj.user_phone);
      $('#user_photo img').attr('src',userObj.user_photo);
    }
    $('#backs').click(function(){
      window.location.href = '../../index.html#User';
    })
    var v2 = new Vue({
      el:'#app',
      data:{
        data_son:{
          teeth_arr:[
            {
              name:11,
              id:'H_teeth_position_pic_11',
              type:0,
              content:[

              ]
            },
            {
              name:12,
              id:'H_teeth_position_pic_12',
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_13',
              name:13,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_14',
              name:14,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_15',
              name:15,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_16',
              name:16,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_17',
              name:17,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_18',
              name:18,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_21',
              name:21,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_22',
              name:22,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_23',
              name:23,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_24',
              name:24,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_25',
              name:25,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_26',
              name:26,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_27',
              name:27,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_28',
              name:28,
              type:0,
              content:[

              ]
            },
            {
              name:41,
              id:'H_teeth_position_pic_41',
              type:0,
              content:[

              ]
            },
            {
              name:42,
              id:'H_teeth_position_pic_42',
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_43',
              name:43,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_44',
              name:44,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_45',
              name:45,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_46',
              name:46,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_47',
              name:47,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_48',
              name:48,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_31',
              name:31,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_32',
              name:32,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_33',
              name:33,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_34',
              name:34,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_35',
              name:35,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_36',
              name:36,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_37',
              name:37,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_38',
              name:38,
              type:0,
              content:[

              ]
            }

          ],
          'ache_list':[
            {
              id:'H_content_list_item_1',
              name:'C:龋坏',
              bool:false
            },
            {
              id:'H_content_list_item_2',
              name:'M:缺失',
              bool:false
            },
            {
              id:'H_content_list_item_3',
              name:'F:填充物',
              bool:false
            },
            {
              id:'H_content_list_item_4',
              name:'R:扭转牙',
              bool:false
            },
            {
              id:'H_content_list_item_5',
              name:'U:未见萌出',
              bool:false
            },
            {
              id:'H_content_list_item_6',
              name:'IT:种植牙',
              bool:false
            },
            {
              id:'H_content_list_item_7',
              name:'IM:阻生牙',
              bool:false
            },
            {
              id:'H_content_list_item_8',
              name:'CP:部分冠',
              bool:false
            },
            {
              id:'H_content_list_item_9',
              name:'CF:全冠',
              bool:false
            },
            {
              id:'H_content_list_item_10',
              name:'GO:金合金高嵌体',
              bool:false
            },
            {
              id:'H_content_list_item_11',
              name:'CV:瓷贴面',
              bool:false
            },
            {
              id:'H_content_list_item_12',
              name:'RV:树脂贴面',
              bool:false
            },
            {
              id:'H_content_list_item_13',
              name:'FP:固定桥',
              bool:false
            },
            {
              id:'H_content_list_item_14',
              name:'RP:可摘局部义齿',
              bool:false
            },
            {
              id:'H_content_list_item_15',
              name:'RP:可摘局部义齿',
              bool:false
            },
            {
              id:'H_content_list_item_16',
              name:'DCP:畸形中央尖',
              bool:false
            },
            {
              id:'H_content_list_item_17',
              name:'TC:牙隐裂',
              bool:false
            }


          ],
          'ache_list_child':[
            {
              id:'H_content_list_item_child_18',
              name:'C:龋坏',
              bool:false
            },
            {
              id:'H_content_list_item_child_19',
              name:'M:缺失',
              bool:false
            },
            {
              id:'H_content_list_item_child_20',
              name:'PFS:窝沟封闭',
              bool:false
            },
            {
              id:'H_content_list_item_child_21',
              name:'CF:全冠',
              bool:false
            },
            {
              id:'H_content_list_item_child_22',
              name:'U:未见萌出',
              bool:false
            },
            {
              id:'H_content_list_item_child_23',
              name:'F:填充物',
              bool:false
            },
            {
              id:'H_content_list_item_child_24',
              name:'RT:根管治疗后',
              bool:false
            },
            {
              id:'H_content_list_item_child_25',
              name:'SR:间隙保持器',
              bool:false
            }
          ],
          'teeth_child_arr':[
            {
              name:51,
              id:'H_teeth_position_pic_51',
              type:0,
              content:[

              ]
            },
            {
              name:52,
              id:'H_teeth_position_pic_52',
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_53',
              name:53,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_54',
              name:54,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_55',
              name:55,
              type:0,
              content:[

              ]
            },
            {
              name:61,
              id:'H_teeth_position_pic_61',
              type:0,
              content:[

              ]
            },
            {
              name:62,
              id:'H_teeth_position_pic_62',
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_63',
              name:63,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_64',
              name:64,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_65',
              name:65,
              type:0,
              content:[

              ]
            },
            {
              name:81,
              id:'H_teeth_position_pic_81',
              type:0,
              content:[

              ]
            },
            {
              name:82,
              id:'H_teeth_position_pic_82',
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_83',
              name:83,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_84',
              name:84,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_85',
              name:85,
              type:0,
              content:[

              ]
            },
            {
              name:71,
              id:'H_teeth_position_pic_71',
              type:0,
              content:[

              ]
            },
            {
              name:72,
              id:'H_teeth_position_pic_72',
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_73',
              name:73,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_74',
              name:74,
              type:0,
              content:[

              ]
            },
            {
              id:'H_teeth_position_pic_75',
              name:75,
              type:0,
              content:[

              ]
            }

          ]
        },
        data_brother:{}
      }
    });

    AjaxObj.UsersltDateRecords(function(model){
      if(model.Data.code ==1){
        if(model.Data.data.length!=0){
            $('#content_hide,#edit-but').show();
            $('#page_noData').hide();
            for(var h=0;h<model.Data.data.length;h++){
                $('#creat_time').append('<option value="'+model.Data.data[h].create_time+'">'+model.Data.data[h].create_time+'</option>');
            }
            $('#updateTimebox').show();
            if( sessionStorage.getItem('selectVal') ){
                $('#creat_time option[value="'+sessionStorage.getItem('selectVal')+'"]').attr('selected',true);
            }
            $("#creat_time").change(function(){
                sessionStorage.setItem('selectVal',$("#creat_time option:selected").val() )
                AjaxObj.UsersltArchives(function(result){
                    var flag = 1;
                    for(var i=0;i<model.Data.teeth_arr.length;i++){
                        if(model.Data.teeth_arr[i].content.length!=0){
                          model.Data.teeth_arr[i].type = 2;
                        }else{
                          model.Data.teeth_arr[i].type = 0;
                        }
                    }
                    for(var i=0;i<model.Data.teeth_child_arr.length;i++){
                        if(model.Data.teeth_child_arr[i].content.length!=0){
                          model.Data.teeth_child_arr[i].type = 2;
                        }else{
                          model.Data.teeth_child_arr[i].type = 0;
                        }
                    }
                    for(var i=0;i<result.Data.teeth_arr.length;i++){
                        if(result.Data.teeth_arr[i].content.length != 0){
                          $('#adults_box_see').show();
                          $('#child_box_see').hide();
                          $('#mantab').addClass('active').siblings().removeClass('active');
                          flag =0;
                          break;
                        }else{
                          $('#adults_box_see').hide();
                          $('#child_box_see').show();
                          $('#childtab').addClass('active').siblings().removeClass('active');
                          continue;
                        }
                    }
                    if(flag==1){
                        var arr = []
                        for(var i =0;i<result.Data.teeth_child_arr.length;i++){
                            if(result.Data.teeth_child_arr[i].content.length!=0){
                                var obj = {
                                  name:result.Data.teeth_child_arr[i].name,
                                  content:[]
                                }
                                for(var j =0;j<result.Data.teeth_child_arr[i].content.length;j++){
                                  obj.content.push(result.Data.teeth_child_arr[i].content[j].name);
                                }
                                arr.push(obj);
                            }
                        }
                    }else{
                        var arr = []
                        for(var i =0;i<result.Data.teeth_arr.length;i++){
                        if(result.Data.teeth_arr[i].content.length!=0){
                            var obj = {
                                name:result.Data.teeth_arr[i].name,
                                content:[]
                              }
                              for(var j =0;j<result.Data.teeth_arr[i].content.length;j++){
                                obj.content.push(result.Data.teeth_arr[i].content[j].name);
                              }
                              arr.push(obj);
                            }
                        }
                    }
                    v2.data_son = result.Data;
                    v2.data_brother = arr;
                },user_id,$("#creat_time option:selected").val(),3);
            });
            var creatTimeGet = sessionStorage.getItem('selectVal') ? sessionStorage.getItem('selectVal') : model.Data.data[0].create_time ;
            AjaxObj.UsersltArchives(function(model){

                for(var i=0;i<model.Data.teeth_arr.length;i++){
                  if(model.Data.teeth_arr[i].content.length!=0){
                    model.Data.teeth_arr[i].type = 2;
                  }else{
                    model.Data.teeth_arr[i].type = 0;
                  }
                }
                for(var i=0;i<model.Data.teeth_child_arr.length;i++){
                  if(model.Data.teeth_child_arr[i].content.length!=0){
                    model.Data.teeth_child_arr[i].type = 2;
                  }else{
                    model.Data.teeth_child_arr[i].type = 0;
                  }
                }

                v2.data_son = model.Data;
                var arr = [];

                for(var i =0;i<model.Data.teeth_arr.length;i++){
                  if(model.Data.teeth_arr[i].content.length!=0){
                    var obj = {
                      name:model.Data.teeth_arr[i].name,
                      content:[]
                    }
                    for(var j =0;j<model.Data.teeth_arr[i].content.length;j++){

                      obj.content.push(model.Data.teeth_arr[i].content[j].name);
                    }

                    arr.push(obj);
                  }
                }
                if(arr.length !=0){
                  $('#adults_box_see').show();
                  $('#child_box_see').hide();
                  $('#mantab').addClass('active').siblings().removeClass('active');
                  v2.data_brother = arr;
                  console.log(arr);
                }else{
                    for(var i =0;i<model.Data.teeth_child_arr.length;i++){
                        if(model.Data.teeth_child_arr[i].content.length!=0){
                            var obj = {
                                name:model.Data.teeth_child_arr[i].name,
                                content:[]
                            }
                            for(var j =0;j<model.Data.teeth_child_arr[i].content.length;j++){
                                obj.content.push(model.Data.teeth_child_arr[i].content[j].name);
                            }
                            arr.push(obj);
                        }
                    }
                    if(arr.length == 0){
                        $('#adults_box_see').show();
                        $('#child_box_see').hide();
                        $('#mantab').addClass('active').siblings().removeClass('active');
                        v2.data_brother = arr;
                    }else{
                        $('#child_box_see').show();
                        $('#adults_box_see').hide();
                        $('#childtab').addClass('active').siblings().removeClass('active');
                        v2.data_brother = arr;
                    }

                }
            },user_id,creatTimeGet,3)
            $('#edit-but').show();
            $('#content_hide').show();
            $('#z_time_btn p').show();
            $('#save-but').show();
            $('.z_time_edit').attr('style','top:214px;');
            $('.z_time_btn').attr('style','border-bottom:1px solid #dbdbdb');
        }else{
            $('#content_hide,#updateTimebox').hide();
            $('#edit-but').hide();
            $('#page_noData').show();
            $('#page_noData').height($('#change').height()-1);
        }
      }
    },user_id,3)

    $('#change input').attr('readonly','true');
    $('#save-but,#add_btns').click(function(){
      sessionStorage.removeItem('selectVal')
      sessionStorage.setItem('create_time_pic','nodata_pic');
      sessionStorage.setItem('fromwheretooth','see_tooth');
      window.location.href = './edit_tooth.html#User';
    })
    $('#edit-but').click(function(){
      sessionStorage.setItem('selectVal',$('#creat_time option:selected').val() );
      sessionStorage.setItem('fromwheretooth','see_tooth');
      window.location.href = './edit_tooth.html#User';
    })


})