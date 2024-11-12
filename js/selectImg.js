document.addEventListener("DOMContentLoaded", function() {

    const q3Radios    = document.querySelectorAll('input[name="q03"]');
    const select03Img = document.querySelector('.selectImg.-q03');

    const q4Radios    = document.querySelectorAll('input[name="q04[]"]');
    const select04Img = document.querySelector('.selectImg.-q04');

    // ラジオボタンにイベントリスナーを追加
    q3Radios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (radio.checked) {
                select03Img.classList.add('show'); // ラジオボタンが選択されたときに画像をフェードイン
            }
        });
    });
    q4Radios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (radio.checked) {
                select04Img.classList.add('show'); // ラジオボタンが選択されたときに画像をフェードイン
            }
        });
    });
});