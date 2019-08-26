window.onload = function () {
    //设置背景
    function setBodyBg() {

    }
    //获取select
    var select = document.getElementById("select");
    //设置改变监听
    select.onchange = function () {
        //获取当前改变的想
        var bgColor = select.options[select.selectedIndex].value;
        if(bgColor == ""){
            document.body.style.background = "#fff";
        }
        else {
            document.body.style.background = bgColor;
        }
    };
};