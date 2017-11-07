$(function(){






  //滚动时 动画
  new WOW().init();


  //提交问题
  $('.questionContent #btn-submit').on('click',function(even){
  var value1 =$('.questionContent input:eq(0)').val();
  var value2 =$('.questionContent input:eq(1)').val();
  var value3 =$('.questionContent textarea:eq(0)').val();
  console.log(value1,value2,value3);
  even.preventDefault();
$('.questionContent form').request('onComfirmQuestion',
{
  data:{'key1':value1,'key2':value2,'key3':value3},
  success:function(){
    // alert('success')
  },
  error:function(){
    // alert('error')
  },
  // update:{'alert':'#alertResult'}
}
)


});

})

//滚动导航栏监听
$(window).scroll(function () {

  if($('#bootstrap-touch-slider').offset()){
    var menu_top = $('#bootstrap-touch-slider').offset().top;
    if ($(window).scrollTop() >= menu_top+50){
     $('.navbar-default').css({'backgroundColor':'#fff'});
      $('.navbar-default .nav li a').css({'color':'#000'});
      $('.navbar-brand img').attr({'src':'/themes/BoHeOffical/assets/img/brand.png'});


    }
    else {

            $('.navbar-default').css({'backgroundColor':'rgba(255,255,255,.02)'});
              $('.navbar-default .nav li a').css({'color':'#fff'});
                $('.navbar-brand img').attr({'src':'/themes/BoHeOffical/assets/img/brandwhite.png'});

                // var headerBtnStatus = $('#headerBtn').attr('class');
                //
                // if(headerBtnStatus=='navbar-toggle'){
                //   $('.navbar-collapse a').css('color','#000');
                // }
    }
  }
});

$(window).load(function () {
  $('#loader').fadeOut(); // will first fade out the loading animation
              $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
          $('body').delay(350).css({'overflow-y':'visible'});

// 服务项目导航
var scheduleTab = function() {
  $('.schedule-container').css('height', $('.schedule-content.active').outerHeight());

  $(window).resize(function(){
    $('.schedule-container').css('height', $('.schedule-content.active').outerHeight());
  });

  $('.schedule a').on('click', function(event) {

    // event.preventDefault();

    var $this = $(this),
      sched = $this.data('sched');

    $('.schedule a').removeClass('active');
    $this.addClass('active');
    $('.schedule-content').removeClass('active');

    $('.schedule-content[data-day="'+sched+'"]').addClass('active');
})
};
    scheduleTab();
    // lazyload
  //   $("img").lazyload({
  //     placeholder : "{{'assets/img/loading.gif' |theme}}",
  //        effect: "fadeIn"
  //  });



// banner 动画效果
$('#bootstrap-touch-slider').bsTouchSlider();

// 导航栏点击监听

$('.navbar-collapse a').on('click', function(even){

$('.navbar-collapse a').removeClass('active');
$(this).addClass('active');

})


//导航栏收缩按钮点击
$('#headerBtn').on('click', function(){
    console.log('dsadasda');
  var headerBtnStatus = $('#headerBtn').attr('class');

  if(headerBtnStatus=='navbar-toggle'){
    $('.navbar-collapse a').css('color','#000');
  }
})








})
