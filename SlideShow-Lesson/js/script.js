// skipperの初期化
$("document").ready(function() {
	$(".theTarget").skipper();
});

// オプションを指定してskipprの実行
$(".theTarget").skippr({
	// スライドショーの変化（fade or slide）
	transition : 'fade',
	// 変化する時間（ミリ秒）
	speed : 1000,
	// easingの種類
	easing : 'easeOutQuart',
	// ナビゲーションの形（block or bubble）
	navType : 'block',
	// 子要素の種類（div or img）
	chidrenElementType : 'div',
	// ナビゲーション矢印の表示（trueで表示）
	arrows : true,
	// スライドショーの自動再生（falseで自動再生なし）
	autoPlay : true,
	// 自動再生時のスライド切替間隔（ミリ秒）
	autoPlayDuration : 1000,
	// キーボードの矢印キーによるスライド送りの設定（trueで有効）
	keyboardOnAlways : true,
	// １枚目のスライド表示時に戻る矢印を表示するかどうか（falseで非表示）
	hidePrevious : false
});