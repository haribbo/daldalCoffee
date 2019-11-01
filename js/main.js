$(document).ready(function() {
  const line_menu = $('.line_menu');
  const nav = $('.header_nav');
  const nav_item = $('.header_nav > ul > li');
  var nav_view = false;
  var drop_menu_view = false;
  var isNavTurn = false;

  var main_header = $('.header_nav');
  var main_header_height = $('.header_nav').innerHeight();

  line_menu.click(function(e) {
    e.preventDefault();
    nav.toggleClass('view');
  });

  nav_item.click(function(e) {
    if (drop_menu_view == true) {
      $('.header_nav ul li').find('ul').removeClass('view');
      drop_menu_view = !drop_menu_view;
    } else {
      var idx = nav_item.index(this);
      $('.header_nav ul li').eq(idx).find('ul').addClass('view');
      drop_menu_view = true;
    }
  });

  $(window).scroll(function() {
    var top = this.scrollY;
    menu_scroll_ani(top);
  });

  function menu_scroll_ani(top) {
    if (main_header_height * 2 < top && main_header.hasClass('active') == false) {
      main_header.addClass('stiky');
      isNavTurn = true;

    } else if (top * 0.5 < main_header_height || top === 0) {
      main_header.removeClass('stiky');
      isNavTurn = false;
    }
  }
  // 본문 애니메이션
  ScrollOut({
    targets: '.heading span, .heading h2,.ani_tit,#index_page .right_content  p,.ani_btn,.ani_conts'
  });

  //슬라이더
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

});
