// ---------- トップページ読み込み時にロゴを表示させる ----------
$(function() {
	setTimeout(function(){
		$('.logo p').fadeIn(1000);
	},500); //1秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.logo').fadeOut(1000);
	},1000); //1秒後にロゴ含め真っ白背景をフェードアウト！
});

// ---------- タイトルを１文字づつ表示させるアニメーションの設定 ----------
// アニメーションさせたいクラス
var container = $(".titleAnime");
// アニメーションスピード
var speed = 150;

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
    $('body').fadeIn(1500); //1,5秒かけてフェードインで表示(数字が少なくなると早く表示される)
});

