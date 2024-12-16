const typing = (el, sentence) => {
    [...sentence].forEach((char, index) => {
        setTimeout(() => {
        document.querySelector(el).textContent += char;
        }, 200 * ++index);
    });
}
typing('.a-typing', '未来の自分を変える');