// フォーム送信時の処理
function onSubmit(token) {
    const form = document.getElementById('contact-form');
    const statusElement = document.getElementById('form-status');
  
    // バリデーションを実行
    if (!validateForm()) {
      return false; // バリデーションに失敗した場合、送信を中止
    }
  
    const formData = new FormData(form);
    formData.append('googleReCaptchaToken', token);
  
    // 非同期でフォーム送信
    fetch(form.action, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // 送信成功時にメッセージ表示
        statusElement.innerHTML = '送信完了しました。ありがとうございます！';
      } else {
        // エラー時にメッセージ表示
        statusElement.innerHTML = '送信に失敗しました。もう一度お試しください。';
      }
    })
    .catch(error => {
      statusElement.innerHTML = 'エラーが発生しました。';
    });
  
    return false; // ページ遷移を防ぐ
  }
  
  // バリデーション関数
  function validateForm() {
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const message = document.getElementById('message').value;
  
    // メールアドレス形式の正規表現
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // 電話番号形式の正規表現
    const telRegex = /^[0-9]{2,4}-[0-9]{2,4}-[0-9]{4}$/;
  
    // 担当者名のチェック
    if (name === "") {
      alert("担当者名を入力してください。");
      return false;
    }
    // 会社名のチェック
    if (company === "") {
        alert("会社名を入力してください。");
        return false;
    }

    // 電話番号のチェック
    if (!telRegex.test(tel)) {
        alert("正しい電話番号を入力してください。");
        return false;
        }

    // メールアドレスのチェック
    if (!emailRegex.test(email)) {
      alert("正しいメールアドレスを入力してください。");
      return false;
    }
  
    // メッセージのチェック
    if (message === "") {
      alert("ご相談内容を入力してください。");
      return false;
    }
  
    return true; // バリデーション成功
  }
  
  // ページロード時にreCAPTCHAトークンを生成
  document.addEventListener('DOMContentLoaded', function() {
    grecaptcha.ready(function() {
      document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();  // フォームの通常送信を防ぐ
        grecaptcha.execute('6Leqz2IqAAAAADezbj_H78Vgd0Xe7cn9NejrLqIN', {action: 'submit'}).then(function(token) {
          onSubmit(token);
        });
      });
    });
  });
  