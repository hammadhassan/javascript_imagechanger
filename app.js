//var num = [];
function random() {
    //alert("test");
    var num = [];
    var num1 = Math.random();
    var phone = ((num1 * 15) + 1);
    var phonenum = Math.floor(phone);
    num.push(phonenum);    
    //num = [];
    //var number = num;+
    //alert(num);
    var stat = num;
switch(stat) {
    case 1 :
    document.getElementById("one").innerHTML = ("Original-iphone" + "<img src='images/iphone-original.jpg' width='538' height='406'>");
    break;
    case 2 :
    document.getElementById("one").innerHTML= ("Iphone 3G" + "<img src='images/iphone3g.jpg' width='538' height='406'>");
    break;
    case 3 :
    document.getElementById("one").innerHTML= ("Iphone 3GS 'The fastest, smartest phone yet'" + "<img src='images/iphone3gs.jpg' width='538' height='406'>");
    break;
    case 4 :
    document.getElementById("one").innerHTML = ("Iphone 4 'This changes everything. Again'" + "<img src='images/iphone4.jpg' width='538' height='406'>");
    break;
    case 5 :
    document.getElementById("one").innerHTML = ("Iphone 4s 'The most amazing iPhone yet'" + "<img src='images/iphone4s.jpg' width='538' height='406'>");
    break;
    case 6 :
    document.getElementById("one").innerHTML = ("Iphone 5 'The biggest thing to happen to iPhone since iPhone'" + "<img src='images/iphone5.jpg' width='538' height='406'>");
    break;
    case 7 :
    document.getElementById("one").innerHTML = ("Iphone 5s 'Forward Thinking" + "<img src='images/iphone5s.jpg' width='538' height='406'>");
    break;
    case 8 :
    document.getElementById("one").innerHTML = ("Iphone 5c 'For the colorful'" + "<img src='images/iphone5c.jpg' width='538' height='406'>");
    break;
    case 9 :
    document.getElementById("one").innerHTML = ("Iphone SE 'A big step for small'" + "<img src='images/iphonese.jpg' width='538' height='406'>");
    break;
    case 10 :
    document.getElementById("one").innerHTML = ("Iphone 6 'The two and only'" + "<img src='images/iphone6.jpg' width='538' height='406'>");
    break;
    case 11 :
    document.getElementById("one").innerHTML = ("Iphone 6 Plus 'Bigger than bigger'" + "<img src='images/iphone6plus.jpg' width='538' height='406'>");
    break;
    case 12 :
    document.getElementById("one").innerHTML = (" Iphone 6s 'The only thing that's changed is everything'" + "<img src='images/iphone6s.jpg' width='538' height='406'>");
    break;
    case 13 :
    document.getElementById("one").innerHTML = ("'Iphone 6s Plus 'The only thing that's changed is everything'" + "<img src='images/iphone6splus.jpg' width='538' height='406'>");
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
}