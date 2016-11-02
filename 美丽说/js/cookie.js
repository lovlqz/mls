function getCookie(keys) {
    var str = document.cookie;
    var list = str.split(";"); //[sex=nan,userName=leson,nickName=雷雷];
    var temp = "";
    for (var i = 0; i < list.length; i++) {
        var cookie = list[i]; //username=leson;
        var key = cookie.split("=")[0].replace(" ", "");
        var value = cookie.split("=")[1];
        if (key == keys) {
            temp = value;
            break;
        }
    }
    return temp;
}
function setCookie(key, value, day) {
    var date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = key + "=" + value + ";expires=" + date;
}