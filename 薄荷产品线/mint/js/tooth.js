$(function(){

    $('#routeUl li').eq(4).show();
    //设置初始值0 证明是保存过的 或者是没有变化的
    sessionStorage.setItem('url_flag_add2',0);
    $('.userContain').height( $(window).height()-190 )
    window.onresize=function(){
        $('.userContain').height( $(window).height()-190 )
    }
    var user_id = sessionStorage.getItem('user_id');
    var create_time = sessionStorage.getItem('create_time');
    if(user_id){
      $('#reports-btn').removeClass('graybj').attr('disabled',false)
      AjaxObj.UsergetOne(function(result){
        sessionStorage.setItem('record_id_tooth',result.Data.record)
        if(result.Data.record==1){
          $('#reports-btn').hide();
          $('#report-but-see').attr('data-id',result.Data.record_id).show();
        }else{
          $('#reports-btn').show();
          $('#report-but-see').hide();
        }
      },user_id)
    }else{
      $('#reports-btn').addClass('graybj').attr('disabled',true)
      $('#reports-btn').show();
    }
    $('#reports-btn').click(function(){
      sessionStorage.setItem('record_id',user_id);
      sessionStorage.setItem('fromTootnhtml','1')
      location.href="/mint/html/illLibrary/add.html#Record";
    })
    $('#report-but-see').click(function(){
      sessionStorage.setItem('fromTootnhtml','1')
      sessionStorage.setItem('idSee',$(this).attr('data-id'))
      location.href="/mint/html/illLibrary/see.html#Record";
    })
      

    if(sessionStorage.getItem('picbox_show') == '1' ){
        $('#seetooth_page,#seehead_page').show();
        $('#addtooth_page,#addhead_page').hide();
        if( sessionStorage.getItem('tabmun') == 'man' ){
          $('#mantab').addClass('active').siblings().removeClass('active');
        }else if(sessionStorage.getItem('tabmun') == 'child'){
          $('#childtab').addClass('active').siblings().removeClass('active');
        }
    }else if(sessionStorage.getItem('picbox_show') == '0'){
        $('#seetooth_page,#seehead_page').hide();
        $('#addtooth_page,#addhead_page').show();
        if( sessionStorage.getItem('tabmun') == 'man' ){
          $('#mantab1').addClass('active').siblings().removeClass('active');
        }else if(sessionStorage.getItem('tabmun') == 'child'){
          $('#childtab1').addClass('active').siblings().removeClass('active');
        }
        /*if($('#mantab1').hasClass('active')){
          $('#adultBox').show().siblings().hide();
        }else if($('#childtab1').hasClass('active') ){
            $('#childBigbox').show().siblings().hide();
        }*/
    }else{
      $('#seetooth_page,#seehead_page,#childBigbox').hide();
      $('#addtooth_page,#addhead_page,#adultBox').show();
    }
    //添加的时候点击切换对应牙位图
    $('#add_toptab span').click(function(){
    	var index=$(this).index();
    	$(this).addClass('active').siblings().removeClass('active');
    	$('.addBigboxMain div.tab_cheangebox').eq(index).show().siblings().hide();
    })
    //默认为成人牙位图
    var childORman = 'man';
    window.childORman = childORman;
    $('#backs').click(function(){
      if(sessionStorage.getItem('url_flag_add2') == 0){
        window.location.href = '../../index.html#User';
      }else{
        $('#warmTipbox2').show();
      }
    })
    $('.close_x').click(function(){
        $('#warmTipbox').hide();
    })
    $('#no_save').click(function(){
        window.location.href = url;
        $('#warmTipbox').hide();
    })
    $('.close_x2').click(function(){
        $('#warmTipbox2').hide();
    })
    $('#no_save2').click(function(){
        window.location.href = url;
        $('#warmTipbox2').hide();
    })
    //点击编辑按钮
    $('#edit-buts').click(function(){
      sessionStorage.setItem('picbox_show','0');
      $('#seetooth_page,#seehead_page').hide();
      $('#addtooth_page,#addhead_page').show();

      if( $('#childtab').hasClass('active') ){
        sessionStorage.setItem('tabmun','child')
      	$('#childBigbox').show();
      	$('.childa').addClass('active').siblings().removeClass('active');
      }else if($('#mantab').hasClass('active')){
        sessionStorage.setItem('tabmun','man')
      	$('#adultBox').show();
      	$('.mana').addClass('active').siblings().removeClass('active');
      }
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
      },
      methods:{
        save:function(){
        	if( $('#mantab1').hasClass('active') ){ //成人的
        		var count = 0;
              for(var i=0;i<this.data_son.teeth_child_arr.length;i++){
                this.data_son.teeth_child_arr[i].content.length = 0;
                this.data_son.teeth_child_arr[i].type = 0;
              }
              for(var i=0;i<this.data_son.teeth_arr.length;i++){
                if(this.data_son.teeth_arr[i].content.length == 0){
                	++count;
                }
              }
              if(count == 32){
              	$('.opacity-tip').fadeIn(500).delay(2000).fadeOut();
             	  $('.opacity-tip p').html('<span class="success">您还没有添加牙齿相关信息</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
				}else{
                var pastObj_json = JSON.stringify(this.data_son);
                AjaxObj.UsereditArchives(function(result){
              		if( result.Data.code == 1 ){
                      $('.opacity-tip').fadeIn(500).delay(1000).fadeOut()
                      $('.opacity-tip p').html('<span class="success">保存成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
<<<<<<< .mine
                      sessionStorage.setItem('url_flag_add2',0);
                      sessionStorage.setItem('picbox_show','1');
=======
                      $('#reports-btn').removeClass('graybj').attr('disabled',false)
>>>>>>> .r14865
                      setTimeout(function(){
                        $('.opacity-tip').hide();
                        $('#seetooth_page,#seehead_page').show();
                        $('#addtooth_page,#addhead_page').hide();
                      },1000)
                      var model = {
                        Data : v2.data_son
                      }
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
                      getJson(model,v2)
                    }else{

                      if(result.Data.msg == '缺少用户id！'){
                        $('.opacity-tip').fadeIn(500).delay(1000).fadeOut()
                        $('.opacity-tip p').html('请您完成基础信息').css({'margin-left':-($('.opacity-tip p').width()/2)})
                        setTimeout(function(){
      	                	location.href="/mint/html/user/add_info.html#User";
      	                },1000)
                      }
                      if(result.Data.msg == '失败'){
                        $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                        $('.opacity-tip p').html('您没有修改').css({'margin-left':-($('.opacity-tip p').width()/2)})
                      }
                    }
        		},user_id,pastObj_json,3);
				}

        	}else if( $('#childtab1').hasClass('active') ){
        		var count = 0;
              for(var i=0;i<this.data_son.teeth_arr.length;i++){
                this.data_son.teeth_arr[i].content.length = 0;
                this.data_son.teeth_arr[i].type = 0;
              }
              for(var i=0;i<this.data_son.teeth_child_arr.length;i++){
                if(this.data_son.teeth_child_arr[i].content.length == 0){
                	++count;
                }
              }
              if(count == 20){
              	$('.opacity-tip').fadeIn(500).delay(2000).fadeOut();
               	$('.opacity-tip p').html('<span class="success">您还没有添加牙齿相关信息</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
              }else{
                var pastObj_json = JSON.stringify(this.data_son);
                AjaxObj.UsereditArchives(function(result){
            			if( result.Data.code == 1 ){
                    $('.opacity-tip').fadeIn(500).delay(1000).fadeOut()
                    $('.opacity-tip p').html('<span class="success">保存成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
<<<<<<< .mine
                    sessionStorage.setItem('url_flag_add2',0);
                    sessionStorage.setItem('picbox_show','1');
=======
                    $('#reports-btn').removeClass('graybj').attr('disabled',false)
>>>>>>> .r14865
                    setTimeout(function(){
                      $('.opacity-tip').hide();
                      $('#seetooth_page,#seehead_page').show();
                      $('#addtooth_page,#addhead_page').hide();
                    },1000)
                    var model = {
                      Data : v2.data_son
                    }
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
                    getJson(model,v2)
                  }else{
                    if(result.Data.msg == '缺少用户id！'){
                      $('.opacity-tip').fadeIn(500).delay(1000).fadeOut()
                      $('.opacity-tip p').html('请您完成基础信息').css({'margin-left':-($('.opacity-tip p').width()/2)})
                      setTimeout(function(){
    	                	location.href="/mint/html/user/add_info.html#User";
    	                },1000)
                    }
                    if(result.Data.msg == '失败'){
                      $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                      $('.opacity-tip p').html('您没有修改').css({'margin-left':-($('.opacity-tip p').width()/2)})
                    }
                  }
            		},user_id,pastObj_json,3);

              }
        	}

        },
        click_ya:function(index,flag){
          console.log('ayz')
          $('.H_teeth_position_list').attr('style','pointer-events:auto;');
          $('#H_child2,#H_man2').attr('style','pointer-events:auto;');
          $('#tishi').html('牙齿:');
          //flag
          if(flag == 1){
            var obj = this.data_son.ache_list;
            var obj2 = this.data_son.teeth_arr;
          }else{
            var obj = this.data_son.ache_list_child;
            var obj2 = this.data_son.teeth_child_arr;
          }
          $('#H_teeth_xu_hao').html(index.name);
          for(var i =0;i<obj.length;i++){
            obj[i].bool = false;
          }
          if(index.type == 2){

            for(var i =0;i<index.content.length;i++){
              for(var ii=0;ii<obj.length;ii++){
                if(index.content[i].id == obj[ii].id){
                  obj[ii].bool = true;
                }
              }
            }
          }
          if(index.type==1){
            if(index.content.length != 0){
              for(var i =0;i<index.content.length;i++){
                for(var ii=0;ii<obj.length;ii++){
                  if(index.content[i].id == obj[ii].id){
                    obj[ii].bool = true;
                  }
                }
              }
            }
          }
          for(var j =0;j<obj2.length;j++){
            if(obj2[j].content!=0){
              obj2[j].type = 2;
            }else{
              obj2[j].type = 0;
            }
          }
          index.type = 1;

        },
        click_ache:function(index,flag){
          if(flag == 1){

            var obj2 = this.data_son.teeth_arr;
          }else{
            var obj2 = this.data_son.teeth_child_arr;

          }
          console.log(index);
          for(var j=0;j<obj2.length;j++){
            if(obj2[j].type == 1){

                if(index.bool == false){
                  var obj = {
                    name : index.name,
                    id : index.id
                  }
                  obj2[j].content.push(obj);
                  console.log(111);
                }else{
                  console.log(222);
                  for(var z =0;z<obj2[j].content.length;z++){
                    if(obj2[j].content[z].name == index.name){
                      obj2[j].content.pop(z,1);
                      z--;
                    }
                  }
                }
              }
            }
        },
        changeUrl:function(url){
          window.url = url;
          if(sessionStorage.getItem('url_flag_add2') == 0){
            console.log(url);
            window.location.href = url;
          }else{
            $('#warmTipbox').show();
          }
        },
        teshu_save:function(n){

            $('#warmTipbox').hide();
            var create_times = $('#recent_time').text();
            if( $('#mantab1').hasClass('active') ){ //成人的
              for(var i=0;i<this.data_son.teeth_child_arr.length;i++){
                this.data_son.teeth_child_arr[i].content.length = 0;
                this.data_son.teeth_child_arr[i].type = 0;
              }
              for(var i=0;i<this.data_son.ache_list_child.length;i++){
                this.data_son.ache_list_child[i].bool = false;
              }
            }else if( $('#childtab1').hasClass('active') ){
              for(var i=0;i<this.data_son.teeth_arr.length;i++){
                this.data_son.teeth_arr[i].content.length = 0;
                this.data_son.teeth_arr[i].type = 0;
              }
              for(var i=0;i<this.data_son.ache_list.length;i++){
                this.data_son.ache_list[i].bool = false;
              }
            }
            var pastObj_json = JSON.stringify(v2.data_son);
            AjaxObj.UsereditArchives(function(result){
              if( result.Data.code == 1 ){
                   $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                   $('.opacity-tip p').html('<span class="success">保存成功</span>').css({'margin-left':-($('.opacity-tip p').width()/2)})
                   sessionStorage.setItem('picbox_show','1');
                   if(n==1){
                     console.log(v2.data_son)
                   }else{
                     window.location.href = '../../index.html#User';
                   }
               }else{
                 if(n ==1){
                   if(result.Data.msg == '缺少用户id！'){
                     $('.opacity-tip').fadeIn(500).delay(2000).fadeOut()
                     $('.opacity-tip p').html('请您完成基础信息').css({'margin-left':-($('.opacity-tip p').width()/2)})
                   }
                 }else{
                   window.location.href = '../../index.html#User';
                 }

               }
            },user_id,pastObj_json,3)

           setTimeout(function () {
             window.location.href = url;
           }, 1000);
        }

      }
    });
    

    //初次渲染页面 最开始一定是没有数据的 但是保存切换后应该是有数据的
    AjaxObj.UsersltDateRecords(function(model){

      if(model.Data.code ==1){
        if(model.Data.data.length!=0){
          // $('#recent_time').html(model.Data.data[0].create_time);
          for(var h=0;h<model.Data.data.length;h++){
            $('#creat_time').append('<option value="'+model.Data.data[h].create_time+'">'+model.Data.data[h].create_time+'</option>');
          }


          AjaxObj.UsersltArchives(function(model){
            var n=0;
            //遍历成人牙齿
            for(var i=0;i<model.Data.teeth_arr.length;i++){
              if(model.Data.teeth_arr[i].content.length != 0){
                // $('#H_child').hide();
                $('#mantab').addClass('active');
                // $('.child').attr('class','child');
                childORman = 'man';
                //因为成人有数据 清空幼儿数据 跳出循环
                for(var j=0;j<model.Data.teeth_child_arr.length;j++){
                  model.Data.teeth_child_arr[j].content.length = 0;
                  model.Data.teeth_child_arr[j].type = 0;
                }
                for(var z=0;z<model.Data.ache_list_child.length;z++){
                  model.Data.ache_list_child[z].bool = false;
                }
                break;
              }else{
                //否则清空成人的此项数据 继续循环
                ++n;
                model.Data.teeth_arr[i].content.length = 0;
                model.Data.teeth_arr[i].type = 0;
                continue;
              }
            }
            //如果n=32 了 证明成人所有数据为空
            if(n==model.Data.teeth_arr.length){
              for(var z=0;z<model.Data.teeth_child_arr.length;z++){
                //遍历所有的幼儿牙齿
                if(model.Data.teeth_child_arr[z].content.length!=0){
                  $('#childtab').addClass('active');
                  // $('.man').attr('class','man');
                  for(var z=0;z<model.Data.ache_list.length;z++){
                    model.Data.ache_list[z].bool = false;
                  }
                  childORman = 'child';
                }else{//如果幼儿的数据也为空 要默认显示成人
                  // $('#bingbox,#H_man,#tishi').show();
                  // $('#H_child').hide();
                  // $('.man').attr('class','man active');
                  // $('.child').attr('class','child');
                  childORman = 'man';
                }
              }
            }
            getJson(model,v2)
            v2.data_son = model.Data;
          },user_id,model.Data.data[0].create_time,3)

        }

      }
    },user_id,3)
    v2.$watch('data_son',function(val1,val2){
      if(val1 != val2){
        sessionStorage.setItem('url_flag_add2',0);
        console.log('no')
      }else{
        sessionStorage.setItem('url_flag_add2',1);
        console.log('yes')
      }
    },{deep:true})
})

function getJson(model,v2){
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
        $('#mantab').addClass('active').siblings().removeClass('active');

        if(sessionStorage.getItem('picbox_show') == '0'){
            $('#seetooth_page,#seehead_page').hide();
            $('#addtooth_page,#addhead_page').show();
            if($('#mantab1').hasClass('active')){
             	$('#adultBox').show().siblings().hide();
            }else if($('#childtab1').hasClass('active') ){
              	$('#childBigbox').show().siblings().hide();
            }
        }else{
        	$('#seetooth_page,#seehead_page,#adults_box_see').show();
        	$('#addtooth_page,#addhead_page,#child_box_see').hide();
        }
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
        	console.log('3')
            /*$('#seetooth_page,#seehead_page').show();
            $('#addtooth_page,#addhead_page').hide();*/
          v2.data_brother = arr;
        }else{
            $('#childtab').addClass('active').siblings().removeClass('active');

            if(sessionStorage.getItem('picbox_show') == '0'){
	            $('#seetooth_page,#seehead_page').hide();
	            $('#addtooth_page,#addhead_page').show();
	            if($('#mantab1').hasClass('active')){
	             	$('#adultBox').show().siblings().hide();
	            }else if($('#childtab1').hasClass('active') ){
	              	$('#childBigbox').show().siblings().hide();
	            }
	        }else{
	        	$('#seetooth_page,#seehead_page,#child_box_see').show();
            	$('#addtooth_page,#addhead_page,#adults_box_see').hide();
	        }
          v2.data_brother = arr;
        }

      }

}
