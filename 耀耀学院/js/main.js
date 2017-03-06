/**
 * Created by chen on 2017/3/6.
 */
window.onload = function () {

    var txt = document.getElementById('txt');
    var btn = document.getElementById('btn');
    var fan = document.getElementById('fan-in');


    btn.onclick = function () {
        var num = 0;
        var inner = document.getElementById('txt').value;
        for (i = 0; i < inner.length; i++) {
            var char = inner.charCodeAt(i);
            //  这里用charCodeAt实际上不太稳妥,应该用正则表达式比较合适...
            // 因为charCodeAt方法,把全角状态下的符号也认定为中文...
            if (char >= 0 && char <= 128) {
                num = num + 1;
            } else {
                num = num + 2;
            }
        }
        if (4 < num && num < 16) {
            fan.innerHTML = "名字格式正确";
            fan.style.color = "blue";
        } else {
            fan.innerHTML = '格式错误了';
            fan.style.color = "red";
        }
    }
};
