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
    $('body').fadeIn(1500); //2秒かけてフェードインで表示(数字が少なくなると早く表示される)
});

// ---------- マウスカーソルのアニメーション設定 ----------
//準備
let cursorR = 4;  //カーソルの半径
const cursor = document.getElementById('cursor');  //カーソル用のdivを取得

//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

//リンクにホバー時はクラスをつける
const linkElem = document.querySelectorAll('a');
for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('hov_');
    });
    linkElem[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('hov_');
    });
}