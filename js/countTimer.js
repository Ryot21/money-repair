

const update = () => {
    // 日本時間の timezone 付きで指定
    const targetTime = new Date('2024-12-17T00:00+09:00').getTime();
    const diff = targetTime - Date.now();

    // 残り日数を計算
    const remainingDays = Math.floor(diff / 1000 / 60 / 60 / 24);

    // 残日数をHTML内に表示
    const dayElement = document.querySelector('#timer > .num');
    if (dayElement) {
        dayElement.textContent = `${remainingDays}`.padStart(2, '0');
    }
};

update();
setInterval(update, 1000); // 1時間ごとに更新
