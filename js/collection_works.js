// ---------- フェードインでページを表示させるアニメーションの設定 ----------

$(function() {
    $('body').fadeIn(1500); //1,5秒かけてフェードインで表示(数字が少なくなると早く表示される)
});

lightbox.option({
    'fitImagesInViewport': true,
})