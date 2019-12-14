$ (function () {
  //資料請求フォームへ移動
  $ ('#btn1, #btn2,#btn3').on ('click', function () {
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

  $ ('*').on ('click', function () {
    $ ('.q').removeClass ('click_mark');
    $ ('.box_title').removeClass ('click_mark');
  });

  //アコーディオン1

  $ ('.qa-box').on ('click', function () {
    var target = $ (event.target);
    var answer = $ (this).find ('div');
    if ($ (answer[1]).hasClass ('hide')) {
      $ (answer[1]).stop (true, true).slideToggle ();
      $ (answer[1]).removeClass ('hide');
      $ (answer[0]).addClass ('open');
      $ (answer[0]).removeClass ('close');
    } else if (!$ (this).next ().hasClass ('hide')) {
      $ (answer[1]).stop (true, true).slideToggle ();
      $ (answer[1]).addClass ('hide');
      $ (answer[0]).removeClass ('open');
      $ (answer[0]).addClass ('close');
    }
    $ (answer[0]).addClass ('click_mark');
  });

  //アコーディオン2

  $ ('.box_container').on ('click', function () {
    var w = $ (window).width ();
    var x = 769;
    if (w <= x) {
      var target = $ (event.target);
      var answer = $ (this).find ('div');
      if ($ (answer[1]).hasClass ('hide')) {
        $ (answer[1]).stop (true, true).slideToggle ();
        $ (answer[1]).removeClass ('hide');
        $ (answer[0]).addClass ('open');
        $ (answer[0]).removeClass ('close');
      } else if (!$ (this).next ().hasClass ('hide')) {
        $ (answer[1]).stop (true, true).slideToggle ();
        $ (answer[1]).addClass ('hide');
        $ (answer[0]).removeClass ('open');
        $ (answer[0]).addClass ('close');
      }
      $ (answer[0]).addClass ('click_mark');
    }
  });

  //topに戻る
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
