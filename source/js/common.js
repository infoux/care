
$(function(){

  menu();
  maintab();
  outlink();



  
  
  $("section.sub-content #sub-menu li.on a").on("click", function(e){

      $("nav#sub-menu").toggleClass("active");
      e.preventDefault();

  });

  $(window).on("resize", function(){
      $("nav#main-menu h3 a").unbind();
      menu();
  });


  $("div.find-form").last().hide();

  var radioContent = $("div.find-form");


  $("div.find-type input[type='radio']").click(function() {

      radioContent.hide();
      radioContent.eq($("input[type='radio']").index(this)).show();


  });



  $(" button.close,youtube").on("click",function(){
    $(".youtube").removeClass("on")
  })

  


  /* ----- slider ----- */

  const banerSwiper = new Swiper('.banner-swiper', {
    autoplay:{
      delay : 5000,
      disableOnInteraction: true
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 30, // 슬라이드 사이 여백
    navigation: {
      nextEl: '.banner-next',
      prevEl: '.banner-prev',
    },
    pagination: {
      el: ".banner-pagination",
      type: "fraction",
    },
    observer: true,
    observeParents: true,
    a11y: {
      prevSlideMessage: '이전 슬라이드',
      nextSlideMessage: '다음 슬라이드',
      slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
  },
  })

  $(".banner-stop").click(function(){
    banerSwiper.autoplay.stop()
    $(".banner-stop").addClass("on")
    $(".banner-play").removeClass("on")
  })
  $(".banner-play").click(function(){
    banerSwiper.autoplay.start()
    $(".banner-play").addClass("on")
    $(".banner-stop").removeClass("on")
  })

  new Swiper('.gallery-swiper', {
    autoplay:false,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,

    navigation: {
      nextEl: '.gallery-next',
      prevEl: '.gallery-prev',
    },
    breakpoints: {
      1199: {
        direction: 'horizontal', // 수직 슬라이드
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });


});


/* ----- Window Size ----- */
var windowh = $(window).height();
var windowW = $(window).width();


$(window).on("resize", function(){
  windowh = $(window).height();
  windowW = $(window).width();
});


/* ----- menu ----- */
function menu() {

  $(document).on("mousemove", function(e){
      if (windowW > 1200 && e.pageY > 480) {
          $("nav#main-menu").removeClass("on");
          $("#header").removeClass("on");
          $("a.main-menu").removeClass("on");
          $("nav#main-menu a.close").removeClass("on");
          $("div.shadow").removeClass("on");
      }
  });

  

  $("a.main-menu").on("click", function () {
      $("nav#main-menu").addClass("on");
      $("#header").addClass("on");
      $("a.main-menu").addClass("on");
      $("nav#main-menu a.close").addClass("on");
      $("div.shadow").addClass("on");
  });

  $("nav#main-menu a.close").on("click", function () {
      $("nav#main-menu").removeClass("on");
      $("#header").removeClass("on");
      $("a.main-menu").removeClass("on");
      $("nav#main-menu a.close").removeClass("on");
      $("div.shadow").removeClass("on");
  });

  $("nav#main-menu h3 a").on("click", function (e) {
      
      $("nav#main-menu h3").removeClass("on");



      if (windowW < 1200 && $(this).parent().parent().find("ul").length) {

          $(this).parent().addClass("on");
          e.preventDefault();

      }
      else {
          $("nav#main-menu h3 a").unbind();

      }
  });

  $("nav#main-menu div.menus").on("mouseenter", function(){
      $(this).parent().addClass("on");
      $("#header").addClass("on");
      $("a.main-menu").addClass("on");
      $("nav#main-menu a.close").addClass("on");
  });
  $("div#content").on("mouseenter", function(){
      $("nav#main-menu a.close").removeClass("on");
  });


  var subToggle = "0";

  $(".sub-head a.depth2-link").on("click", function(){

    if (windowW < 1200) {

        if (subToggle == "1") {
    
            $(this).parent().removeClass("on");
            $(".shadow").removeClass("active");
            subToggle = "0";
    
        } else if (windowW < 1200 || subToggle == "0") {
    
            $(this).parent().addClass("on");
            $(".shadow").addClass("active");
            subToggle = "1";
    
        }
    
        if ($(this).parent().hasClass("depth2")) {
            $(".sub-head div.depth1").removeClass("on");
        }
    


    }


  });





}



/* ----- main tab ----- */ 
function maintab() {

  $(".main-content .news h3").on("click", function(){
      $(".main-content .news h3").removeClass("active");
      $(this).addClass("active");

      $(".main-content .news .tab-data").removeClass("active");
      
      $(".main-content .news ."+ $(this).attr("data") +"").addClass("active");

  });
}

/* ----- outlink ----- */ 
function outlink() {
  $(".agency-open").click(function() {
      $(this).toggleClass("on");
  });
}














