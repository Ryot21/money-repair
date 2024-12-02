// スクロールイベントの定義
const handleScroll = () => {
    const player = document.getElementById("mr-logo"); // アニメーション要素の取得
    const playerPosition = player.getBoundingClientRect().top; // 要素の画面上位置
    const triggerPosition = window.innerHeight - 200; // 発火位置（画面の下から100px上）

    if (playerPosition < triggerPosition) {
        player.play(); // アニメーション再生
        window.removeEventListener("scroll", handleScroll); // イベントリスナー削除
    }
};

// イベントリスナー登録
window.addEventListener("scroll", handleScroll);