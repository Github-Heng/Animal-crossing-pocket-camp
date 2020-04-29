$(document).ready(function () {
    // 先取得 #carousel_box
    var $block = $('#carousel_box');

    // 幫 #carousel_box ..gallery_quene ul.gallery_pick 加上 hover() 事件
    $('#queue_showed li').hover(function () {
        // 當滑鼠移上時加上 .over 樣式
        $(this).addClass('over').siblings('.over').removeClass('over');
    }, function () {
        // 當滑鼠移出時移除 .over 樣式
        $(this).removeClass('over');
    }).click(function () {
        // 當滑鼠點擊時, 顯示相對應的 div.candidate
        // 並加上 .on 樣式
        var $this = $(this);
        $this.add($('.gallery div.candidate', $block).eq($this.index())).addClass('on').siblings('.on').removeClass('on');
    });
    $(".nav_theme").hover(function () {
        $(this).addClass("animated").addClass("rubberBand")
    }, function () {
        $(this).removeClass("animated").removeClass("rubberBand")
    });
});
