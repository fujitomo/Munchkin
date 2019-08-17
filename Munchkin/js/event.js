$(function () {
    $('li').on('click', function () {
        // スクロールの速度
        var speed = 100; // ミリ秒
        // アンカーの値取得
        var className = jQuery(this).attr("id");
        var target;
        if (className.indexOf('item_skill') != -1) {
            target = $('.skill_container');
            body.classList.remove('nav-open');
        }else if(className.indexOf('item_about') != -1) {
            target = $('.about_container');
            body.classList.remove('nav-open');
        }else if(className.indexOf('item_contant') != -1) {
            target = $('.contant_container');
            body.classList.remove('nav-open');
        }else{
            return false;
        }

        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return true;
    });

    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');
  
    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function() {
      body.classList.remove('nav-open');
    });
    

});
