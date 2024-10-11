document.addEventListener('DOMContentLoaded', function() {
    // ページがどのように読み込まれたかのフラグ
    var backFlg = window.performance && window.performance.navigation ? window.performance.navigation.type : 0;
    console.log('Back Flag:', backFlg); // デバッグ用

    // ページがブラウザバック以外で読み込まれた場合に履歴をプッシュ
    if (backFlg === 0) {
        history.pushState(null, null, location.href);
        console.log('履歴をプッシュしました。');
    }

    // ブラウザの戻るボタンが押されたときの処理（popstateイベント）
    window.addEventListener('popstate', function(event) {
        console.log('Popstateイベントを検出しました。');
        var modal = document.querySelector(".js-modal");

        if (modal) {
            modal.style.display = 'block'; // モーダルを表示
            console.log('モーダルを表示しました。');
        } else {
            console.log('モーダルが見つかりません。');
        }

        // モーダルウィンドウ内の閉じるリンクのリンク先変更
        var mLink = document.getElementsByClassName("js-modal-close");
        if (mLink.length > 1) {
            mLink[1].setAttribute("onClick", "history.back();return false;");
            console.log('リンク先を前ページに変更しました。');
        }
    });

    // モーダルウィンドウを閉じる処理
    var closeButtons = document.getElementsByClassName('js-modal-close');
    if (closeButtons.length > 0) {
        for (var i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', function(event) {
                var modal = document.querySelector(".js-modal");
                if (modal) {
                    modal.style.display = 'none'; // モーダルを閉じる
                    console.log('モーダルを閉じました。');
                }
                event.preventDefault();
            });
        }
    } else {
        console.log('closeボタンが見つかりません。');
    }

    // スマホ対応のためのタッチイベント追加
    window.addEventListener('touchstart', function() {
        console.log('Touchstart event detected');
    });

    // iPhoneやAndroidのブラウザバック時のキャッシュ復元に対応するためのpageshowイベント
    window.addEventListener('pageshow', function(event) {
        if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
            console.log('ページがブラウザバックで表示されました。'); // デバッグ用
            var modal = document.querySelector(".js-modal");
            if (modal) {
                modal.style.display = 'block'; // モーダルを表示
                console.log('モーダルを表示しました。');
            }
        }
    });

    // スマホやPCの違いにかかわらずpopstateイベントが確実に動作するように
    window.addEventListener('load', function() {
        history.replaceState(null, null, location.href); // 初回ロード時にも状態を追加
    });
});
