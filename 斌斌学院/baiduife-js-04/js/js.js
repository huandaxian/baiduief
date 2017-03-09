/**
 * Created by chen on 2017/3/7.
 * http://7xrp04.com1.z0.glb.clouddn.com/task_2_18_1.jpg
 * 参考手册
 * http://www.w3school.com.cn/js/js_htmldom_elements.asp   ---  createElement
 * http://www.w3school.com.cn/jsref/met_node_insertbefore.asp --- insertBefore()
 */



window.onload = function () {

    var txt = document.getElementById('txt');

    var left_enter = document.getElementById('left-enter');
    var right_enter = document.getElementById('right-enter');
    var left_out = document.getElementById('left-out');
    var right_out = document.getElementById('right-out');

    var add = document.getElementById('add');


    //    左边进入
    left_enter.onclick = function () {
        var change = document.createElement('div');
        change.className = 'red';
        change.innerHTML = txt.value;
        add.insertBefore(change, add.firstChild);
    };
    //右边进入
    right_enter.onclick = function () {
        var change = document.createElement('div');
        change.className = 'red';
        change.innerHTML = txt.value;
        add.insertBefore(change, add.lastChild);
    };
    //左侧出来
    left_out.onclick = function () {
        var change = document.createElement('div');
        change.className = 'red';
        var list = document.getElementsByClassName('red');
        for (i = 0; i < list.length; i++) {
            if (list[i].innerHTML == txt.value) {

                add.removeChild(list[i]);
                return;
            }
        }
    };

    //右侧出来
    right_out.onclick = function () {
        var list = document.getElementsByClassName('red');

        for (i = list.length - 1; i >= 0; i--) {
            if (list[i].innerHTML == txt.value) {
                // console.log(list[i]);
                add.removeChild(list[i]);
                return;
            }
        }
    };


    // right_out.onclick = function () {
    //     add.innerHTML = txt.value;
    // }

};
