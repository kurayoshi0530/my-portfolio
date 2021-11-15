// ---------- タイトルを１文字づつ表示させるアニメーションの設定 ----------
// アニメーションさせたいクラス
var container = $(".titleAnime");
// アニメーションスピード
var speed = 80;

// テキストの間にスペースを入れる
var content = container.html();
var text = $.trim(content);
var newHtml = "";

// スペースで区切ったテキストを、テキストの数だけspanタグで囲む
text.split("").forEach(function(v) {
newHtml += '<span>' + v + '</span>';
});

// <span>で囲んだテキスト群をHTMLに戻す
container.html(newHtml);

// １文字づつ表示させる
var txtNum = 0;
container.css({opacity: 1});
setInterval(function() {
    container.find('span').eq(txtNum).css({opacity: 1});
    txtNum++
},speed);

// ---------- フェードインでページを表示させるアニメーションの設定 ----------
$(function() {
    $('body').fadeIn(2000); //2秒かけてフェードインで表示(数字が少なくなると早く表示される)
});
