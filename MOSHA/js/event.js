$ (function () {
  $ ('#btn1, #btn2').on ('click', function () {
    // スクロールの速度
    var speed = 200; // ミリ秒
    // アンカーの値取得
    var target = $ ('#form');

    var position = target.offset ().top;
    $ ('html, body').animate ({scrollTop: position - 40}, speed, 'swing');
    return true;
  });
  $ ('#back_to_top').on ('click', function () {
    // スクロールの速度
    var speed = 200; // ミリ秒
    $ ('html, body').animate ({scrollTop: 0}, speed, 'swing');
    return true;
  });
  $ ('#acd_label').click (function (e) {
    e.style.textDecoration = 'underline';
  });

  $ (window).on ('load scroll', function () {
    var vScrollDistance = $ (window).scrollTop ();
    var element = $ ('#back_to_top');
    if (vScrollDistance == 0) {
      element.removeClass ('display');
      element.addClass ('none_display');
    } else {
      element.removeClass ('none_display');
      element.addClass ('display');
    }
  });
});
