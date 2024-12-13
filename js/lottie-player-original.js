// スクロールイベントの定義
LottieInteractivity.create({
    player: "#lottie-scroll-trigger",
    mode:   "scroll", // スクロールイベント
    actions: [{
        visibility: [0.45, 1], // ビューポートの50%まで来たら再生
        type: "playOnce", // 一度再生
    },],
});