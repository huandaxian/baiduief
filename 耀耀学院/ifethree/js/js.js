/**
 * Created by chen on 2017/3/9.
 */
window.onload = function () {

    var inSchool = document.getElementById("in");
    var outSchool = document.getElementById("out");
    var showDOM = document.getElementById("show");
    var showTwo = document.getElementById("show-two");
    var city = document.getElementById("city");

    // 存放变量
    var list = [
        ["北京大学", "北京师范大学", "北京科技大学", '清华大学'],
        ["上海交大", "上海师范大学", "上海科技大学"],
        ["福州大学", "福建农林大学", "福建师范大学"]
    ];

    // selectedIndex 属性可设置或返回下拉列表中被选选项的索引号。
    function relevant() {
        var str = '';
        var num = city.selectedIndex;
        var arr = list[num];

        for (var i = 0; i < arr.length; i++) {
            str += " <option>" + arr[i] + "</option>"
        }
        school.innerHTML = str;
    }


    inSchool.onclick = function () {
        showTwo.style.display = "none";
        showDOM.style.display = "block";
        // relevant();
    };

    outSchool.onclick = function () {
        showDOM.style.display = "none";
        showTwo.style.display = "block";
    };

    city.onchange = function () {
        relevant();
    }

};
