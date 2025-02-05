$(function(){
  // すべてのアコーディオンを対象
  $('.s_07 .accordion_header').click(function(e){
    e.stopPropagation(); // クリックイベントが親要素に伝播しないようにする

    // クリックされた .accordion_header の次の .accordion_inner を開閉
    let $inner = $(this).next('.accordion_inner');
    if ($inner.is(':visible')) {
      $inner.slideUp();
      $(this).removeClass("open");
    } else {
      // 他のすべてのアコーディオンを閉じるのをやめる
      // $('.s_07 .accordion_inner').slideUp();
      // $('.s_07 .accordion_header').removeClass("open");

      // クリックされた要素だけを開く
      $inner.slideDown();
      $(this).addClass("open");
    }
  });
});
