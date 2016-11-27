var num = [];
function random() {
    //var num = [];
    var randomnum = Math.random();
    var phone = ((randomnum * 15) + 1);
    var phonenum = Math.floor(phone);
    num.push(phonenum);
}

switch(num) {
    case 1 :
    document.getElementById("one").innerHTML = ("Original-iphone" + "<img src='images/iphone-original.jpg' width='538' height='406'>");
    break;
    case 2 :
    document.getElementById("one").innerHTML= ("Iphone 3G" + "<img src='images/iphone3g.jpg' width='538' height='406'>");
    break;
    case 3 :
    document.getElementById("one").innerHTML= ("Iphone 3GS" + "<img src='images/iphone3gs.jpg' width='538' height='406'>");
    break;
    case 4 :
    document.getElementById("one").innerHTML = ("Iphone 4" + "<img src='images/iphone4.jpg' width='538' height='406'>");
    break;
    case 5 :
    document.getElementById("one").innerHTML = ("Iphone 4s" + "<img src='images/iphone4s.jpg' width='538' height='406'>");
    break;
    case 6 :
    document.getElementById("one").innerHTML = ("Iphone 5" + "<img src='images/iphone5.jpg' width='538' height='406'>");
    break;
    case 7 :
    document.getElementById("one").innerHTML = ("Iphone 5s" + "<img src='images/iphone5s.jpg' width='538' height='406'>");
    break;
    case 8 :
    document.getElementById("one").innerHTML = ("Iphone 5c" + "<img src='images/iphone5c.jpg' width='538' height='406'>");
    break;
    case 9 :
    document.getElementById("one").innerHTML = ("Iphone SE" + "<img src='images/iphonese.jpg' width='538' height='406'>");
    break;
    case 10 :
    document.getElementById("one").innerHTML = ("Iphone 6" + "<img src='images/iphone6.jpg' width='538' height='406'>");
    break;
    case 11 :
    document.getElementById("one").innerHTML = ("Iphone 6 Plus" + "<img src='images/iphone6plus.jpg' width='538' height='406'>");
    break;
    case 12 :
    document.getElementById("one").innerHTML = ("'The two and only thing' Iphone 6s" + "<img src='images/iphone6s.jpg' width='538' height='406'>");
    break;
    case 13 :
    document.getElementById("one").innerHTML = ("'The two and only thing'Iphone 6s Plus" + "<img src='images/iphone6splus.jpg' width='538' height='406'>");
    break;
    case 14 :
    document.getElementById("one").innerHTML = ("This is 7" + "<img src='images/iphone7.jpg' width='538' height='406'>");
    break;
    case 15 :
    document.getElementById("one").innerHTML = ("This is 7 Plus" + "<img src='images/iphone7plus.jpg' width='538' height='406'>");
    break;
    default :
    document.getElementById("one").innerHTML = ("This is 7" + "<img src='images/iphone7.jpg' width='538' height='406'>");
}