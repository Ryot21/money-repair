document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form'); // フォームを取得

    // フォームの送信を監視
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // 通常のフォーム送信を防ぐ

        // 送信処理を実行
        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // ダイアログを表示せずにThanksページへリダイレクト
                window.location.href = 'https://impreme.jp/hokenminaoshi-worksheet/thanks.html';  // 適宜パスを変更
            } else {
                // エラーハンドリング
                alert('送信に失敗しました。再試行してください。');
            }
        })
        .catch(error => {
            // ネットワークエラー等のハンドリング
            alert('エラーが発生しました。再試行してください。');
        });
    });
});
