//バーガーボタンの表示・非表示
$(function() {
  $('.open_btn').on('click',function(){// .menuをクリックすると〜
      $('.open_btn').toggleClass('active');
      $('.header_menu').toggleClass('active');
    });
  });

//jq 出てきたメニューをクリックした時
$('nav a').click(function(){
  $('nav').toggleClass('active');
  $('.header_menu').toggleClass('active');
  $('.open_btn').toggleClass('active');
});

/**
 * ファーストビューのスライダー HTMLのクラス名注意!！
 * */
const swiper = new Swiper(".swiper", {
  loop: true, // ループ有効
  slidesPerView: 1, // 一度に表示する枚数
  speed: 2000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay:5000,
    disableOnInteraction: false //スライドに触っても自動再生を停止しない
  }
});

 //ヘッダーを途中で表示
 $(function() {
  // 変数にクラスを入れる
  var header = $('.header');
  var windowHeight = $(window).height()
  //スクロールしてファーストビューを過ぎたらメニューを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > windowHeight) {
      header.addClass('fixed');
    }else{
      header.removeClass('fixed');

    }
  });
});


//トップへ戻るボタンを途中で表示
$(function() {
  // 変数にクラスを入れる
  var menu = $('.to_pagetop');
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 720) {
      menu.addClass('active');
    }else{
      menu.removeClass('active');
    }
  });
  //スクロールしてトップへ戻る
  menu.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});

/**
 * スムーズスクロール
 */
$('a[href^="#"]').click(function(){
  // リンクを取得
  let href= $(this).attr("href");
  // ジャンプ先のid名をセット
  let target = $(href == "#" || href == "" ? 'html' : href);
  // トップからジャンプ先の要素までの距離を取得
  let position = target.offset().top-100;
  // animateでスムーススクロールを行う
  // 600はスクロール速度で単位はミリ秒
  $("html, body").animate({scrollTop:position}, 600, "swing");
  return false;
});
