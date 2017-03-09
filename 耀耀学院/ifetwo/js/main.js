/**
 * Created by chen on 2017/3/8.
 */
window.onload = function () {

    $("#name").focus(function () {
        $("#name").css( "border-color","blue");
        $("#one").attr("style", "display:block").html("必填,长度为4~16个字符");
    });
    $("#psw").focus(function () {
        if ($("#psw").val().length == 0) {
            $("#two").attr("style", "display:block").html("密码不能为空");
        }
    });


    $('#psw').blur(function () {
        if($("#psw").val().length>0){
            $("#two").attr("style", "display:block").html("密码正确");

        }
    });
    $('#check').blur(function () {
        $('#check').css( "border-color","red");
        $("#three").html("密码输入一致").css( {"color":"red",
                                            "display":"block"})
    });

    $('#btn').click(function () {
        $("#one").attr("style", "display:block").html("名字不能为空");
        $("#two").attr("style", "display:block").html("密码可用");
        $("#three").attr("style", "display:block").html("密码输入一致");
        $("#four").attr("style", "display:block").html("邮箱格式错误");
        $("#five").attr("style", "display:block").html("手机格式正确");
        alert("显示有误")
    })


};