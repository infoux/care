
$(function(){

  menu();
  maintab();
  outlink();
  popup();



  
  
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
  $(".menus-focus").on("focus", function () {
    $("nav#main-menu").addClass("on");
    $("#header").addClass("on");
    $("a.main-menu").addClass("on");
    $("nav#main-menu a.close").addClass("on");
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


function popup() {

  /* 스토리지 제어 함수 정의 */
  var handleStorage = {
    // 스토리지에 데이터 쓰기(이름, 만료일)
    setStorage: function (name, exp) {
      // 만료 시간 구하기(exp를 ms단위로 변경)
      var date = new Date();
      date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

      // 로컬 스토리지에 저장하기
      // (값을 따로 저장하지 않고 만료 시간을 저장)
      localStorage.setItem(name, date)
    },
    // 스토리지 읽어오기
    getStorage: function (name) {
      var now = new Date();
      now = now.setTime(now.getTime());
      // 현재 시각과 스토리지에 저장된 시각을 각각 비교하여
      // 시간이 남아 있으면 true, 아니면 false 리턴
      return parseInt(localStorage.getItem(name)) > now
    }
  };

    // 쿠키 읽고 화면 보이게
    if (handleStorage.getStorage("today")) {
      $(".modal").removeClass("on");
    } else {
      $(".modal").addClass("on");
    }
  
    // 오늘하루 보지 않기 버튼
    $(".modal").on("click", ".modalClose", function () {
      // 로컬 스토리지에 today라는 이름으로 1일(24시간 뒤) 동안 보이지 않게
      if($(".cehckModal").is(":checked") == true){
        handleStorage.setStorage("today", 1);
        $(this).parents(".modal.on").removeClass("on");
      } 
      
    });
  
    // 일반 닫기 버튼
    $(".modal").on("click", ".modalClose", function () {
      $(this).parents(".modal.on").removeClass("on");
    });

}












