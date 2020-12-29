if(window.innerWidth <= 375){
    $('.nr p span').map((index,item) => {
        item.innerHTML = item.innerHTML.replace(/(^\s*)|(\s*$)/g,"");
    })
    $('.nr p span span').map((index,item) => {
        item.innerHTML = item.innerHTML.replace(/(^\s*)|(\s*$)/g,"");
    })
    $('.nr p span span span').map((index,item) => {
        item.innerHTML = item.innerHTML.replace(/(^\s*)|(\s*$)/g,"");
    })
    $('.nr p span strong').map((index,item) => {
        item.innerHTML = item.innerHTML.replace(/(^\s*)|(\s*$)/g,"");
    })
    $('.nr p span span strong').map((index,item) => {
        item.innerHTML = item.innerHTML.replace(/(^\s*)|(\s*$)/g,"");
    })
}
function show() {
    var date = new Date(); //日期对象
    var now = "";
    now = date.getFullYear() + "年"; //读英文就行了
    now = now + (date.getMonth() + 1) + "月"; //取月的时候取的是当前月-1如果想取当前月+1就可以了
    now = now + date.getDate() + "日";
    now = now + date.getHours() + "时";
    now = now + date.getMinutes() + "分";
    now = now + date.getSeconds() + "秒";
    document.getElementById("nowDiv").innerHTML = now; //div的html是now这个字符串
    setTimeout("show()", 1000); //设置过1000毫秒就是1秒，调用show方法
}

function showLocale(objD) {
    var str, colorhead, colorfoot;
    var yy = objD.getYear();
    if (yy < 1900) yy = yy + 1900;
    var MM = objD.getMonth() + 1;
    if (MM < 10) MM = '0' + MM;
    var dd = objD.getDate();
    if (dd < 10) dd = '0' + dd;
    var hh = objD.getHours();
    if (hh < 10) hh = '0' + hh;
    var mm = objD.getMinutes();
    if (mm < 10) mm = '0' + mm;
    var ss = objD.getSeconds();
    if (ss < 10) ss = '0' + ss;
    var ww = objD.getDay();
    if (ww == 0) colorhead = "<font color=\"#FF0000\">";
    if (ww > 0 && ww < 6) colorhead = "<font color=\"#373737\">";
    if (ww == 6) colorhead = "<font color=\"#008000\">";
    if (ww == 0) ww = "星期日";
    if (ww == 1) ww = "星期一";
    if (ww == 2) ww = "星期二";
    if (ww == 3) ww = "星期三";
    if (ww == 4) ww = "星期四";
    if (ww == 5) ww = "星期五";
    if (ww == 6) ww = "星期六";
    colorfoot = "</font>"
    str = colorhead + yy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + "  " + colorfoot;
    return (str);
}

function tick() {
    var today;
    today = new Date();
    document.getElementById("localtime").innerHTML = showLocale(today);
    window.setTimeout("tick()", 1000);
}

tick();