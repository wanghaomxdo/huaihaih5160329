var app = app || {};

/*-- tools
====================================================== */
app.tools = function(){};
app.tools.random = function(n, m){
    var c = m-n+1;  
    return Math.floor(Math.random() * c + n);
};

app.tools.getpageurlwithoutparam = function(){
    var url = window.location.href;
    return url.substring(0, url.indexOf("?"));
};

app.tools.getbaseurl = function(){
    var url = window.location.href;
    return url.substring(0, url.lastIndexOf("/") + 1);
};

app.tools.gotourl = function(url){
    window.location.href = url;
};

app.tools.geturlparam = function(param){
    var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) 
        return unescape(r[2]);
    else
        return undefined;
};

app.tools.substr = function(str, len){
    if(str.length > len)
        str = str.substring(0, len) + "...";

    return str;
};

app.tools.platform = function(){};
app.tools.platform.os = "";
app.tools.platform.debug = ""; // 强制开始指定os模式
app.tools.platform.init = function(){
    var u = navigator.userAgent;

    app.debug.console("userAgent:" + u);

    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)
        app.tools.platform.os = "android";
    else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
        app.tools.platform.os = "ios";

    if(app.tools.platform.debug == "ios")
        app.tools.platform.os = "ios";
    else if(app.tools.platform.debug == "android")
        app.tools.platform.os = "android";
};

/*-- debug
====================================================== */
app.debug = function(){};
app.debug.enable = false;
app.debug.maxline = 5;
app.debug.linecount = 0;
app.debug.console = function(str){
    if(app.debug.enable)
    {
        app.debug.linecount ++;

        if($("#debug").length > 0)
        {
            if(app.debug.linecount > app.debug.maxline)
            {
                app.debug.linecount = 0;
                $("#debug").html("<br/> #" + str);
            }
            else
                $("#debug").append("<br/> #" + str);
        }else
        {
            $("body").append("<div id='debug' class='debug'></div>");
            $("#debug").append("<br/> #" + str);
        }
    }
};

/* Landscape */

    var Landscape = new mo.Landscape({
        pic: 'js/motion/landscape.png',
        picZoom: 3,
        mode:'portrait',//portrait,landscape
        prefix:'Shine'
    });


/*-- arry
====================================================== */
var enlg,lg;
/*-- P1
====================================================== */
app.p1 = function(){};
app.p1.init = function(){
     lg = ["请您填写上述信息","请您补全信息","请输入正确的11位号码","请输入正确的邮箱信息","信息正在提交中，请稍后...","报名信息提交成功！","信息已提交！","信息提交失败，请重试！"];
     $(".hit").html(lg[0]);
};

app.p1.bind_touch_event = function(){
    $(".button").on("touchend", function(){
        var trade = $("#trade").val();
        var brand = $("#brand").val();
        var name  = $("#name").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        if (trade == '' || trade == 'Trade') {
            $(".p1 .hit").html(lg[1]);
            return false;
        }
        if (brand == '' || brand == 'Trade') {
            $(".p1 .hit").html(lg[1]);
            return false;
        }
        if (name == '') {
            $(".p1 .hit").html(lg[1]);
            return false;
        }
        if (phone == '') {
            $(".p1 .hit").html(lg[1]);
            return false;
        }else{
             var patt = new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
             if(!patt.test(phone)){
                 $(".p1 .hit").html(lg[2]);
                 return false;
             }
        }
        if (email == '' || email == 'Email') {
            $(".p1 .hit").html(lg[1]);
            return false;
        }else{
            var patt = new RegExp(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
            if(!patt.test(email)){
                 $(".p1 .hit").html(lg[3]);
                 return false;
             }
        }
        $(".p1 .hit").html(lg[4]);
        var openid = $OPENID;
        $.post("db/adduser.php", {name: name,email: email,phone: phone,trade: trade,brand: brand,openid:openid},function(r){                
            console.log(r);
            if(r.code == "0"){
                $(".p1 .hit").html(lg[5]);
            }else if(r.code == "1"){
                $(".p1 .hit").html(lg[6]);
            }else{
                $(".p1 .hit").html(lg[7]);
            }
        },'json');
    });
};
/*-- p2
====================================================== */
app.p2 = function(){};
app.p2.init = function(){
     enlg = ["Please leave the correct information","Please wait...","successfully submitted","successfully submitted","Submit failure, please try again"];
     $(".hit1").html(enlg[0]);
};

app.p2.bind_touch_event = function(){
    $(".button1").on("touchend", function(){
        var trade = $("#trade1").val();
        var brand = $("#brand1").val();
        var name  = $("#name1").val();
        var phone = $("#phone1").val();
        var email = $("#email1").val();
        if (trade == '' || trade == 'Trade') {
            $(".p2 .hit1").html(enlg[0]);
            return false;
        }
        if (brand == '' || brand == 'Trade') {
            $(".p2 .hit1").html(enlg[0]);
            return false;
        }
        if (name == '') {
            $(".p2 .hit1").html(enlg[0]);
            return false;
        }
        if (phone == '') {
            $(".p2 .hit1").html(enlg[0]);
            return false;
        }else{
             var patt = new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
             if(!patt.test(phone)){
                 $(".p2 .hit1").html(enlg[0]);
                 return false;
             }
        }
        if (email == '' || email == 'Email') {
            $(".p2 .hit1").html(enlg[0]);
            return false;
        }else{
            var patt = new RegExp(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
            if(!patt.test(email)){
                 $(".p2 .hit1").html(enlg[0]);
                 return false;
             }
        }
        $(".p2 .hit1").html(enlg[1]);
        var openid = $OPENID;
        $.post("db/adduser.php", {name: name,email: email,phone: phone,trade: trade,brand: brand,openid:openid},function(r){                
            console.log(r);
            if(r.code == "0"){
                $(".p2 .hit1").html(enlg[2]);
            }else if(r.code == "1"){
                $(".p2 .hit1").html(enlg[3]);
            }else{
                $(".p2 .hit1").html(enlg[4]);
            }
        },'json');
    });
};
/*
====================图片点击放大
*/
var tagImgs = true;
function ImgShow(evt){
    var lunnum = $("#mask").attr("data-num");
    if(lunnum == 0){
        var clos = "&nbsp;关闭&nbsp;长按保存";
    }else{
        var clos = "&nbsp;clos &nbsp;Press and save the image";
    }
    if(tagImgs == true){
    var imgTag=(window.event)?event.srcElement:evt.target;
    var imgPath=imgTag.src.replace(/\_\d\./,"_4.");//弹出大图的url
    var tagTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop);
    var tag=document.createElement("div");
        tag.style.cssText="width:100%;height:"+Math.max(document.body.clientHeight,document.body.offsetHeight,document.documentElement.clientHeight)+"px;position:absolute;background:black;top:0;filter: Alpha(Opacity=80);Opacity:0.8;";
        tag.ondblclick=closes;
    var tagImg=document.createElement("div");
        tagImg.style.cssText="font:12px /18px verdana;overflow:auto;text-align:center;position:absolute;width:200px;border:5px solid white;background:white;color:white;left:"+(parseInt(document.body.offsetWidth)/2-100)+"px;top:"+(document.documentElement.clientHeight/3+tagTop)+"px;"
        tagImg.innerHTML="<div style='padding:10px;background:#cccccc;border:1px solid white'><img src='/jscode/demoimg/loading.gif' /><br /><br /><b style='color:#999999;font-weight:normal'>Image loading...</b><br /></div>";
    var closeTag=document.createElement("div");
        closeTag.style.cssText="display:none;position:absolute;left:10px;top:10px;color:black;";
        var closesHtml="<b style='background:#16223B;border:1px solid white;filter:Alpha(Opacity=100);Opacity:1;cursor:pointer;font-size:28px;color:#A89A7B'>"+clos+"</b>";
        closeTag.onclick=closes;
    document.body.appendChild(tag);
    document.body.appendChild(tagImg);
    var img=new Image();
        img.src=imgPath;
        img.style.cssText="border:1px solid #cccccc;filter: Alpha(Opacity=0);Opacity:0;cursor:pointer";
    var barShow,imgTime;
    
        img.complete?ImgOK():img.onload=ImgOK;
    }
    function ImgOK(){
        $("#mask").show();
        tagImgs = false;
        var Stop1=false,Stop2=false,temp=0;
        var tx=tagImg.offsetWidth,ty=tagImg.offsetHeight;
        var ix=img.width,iy=img.height;
        var sx=document.documentElement.clientWidth,sy=window.innerHeight||document.documentElement.clientHeight;
        if(iy>sy||ix>sx){
            if(ix<iy){
                var yy=sy-100;
                var xx=(ix/iy)*yy;
            }else{
                var xx=sx-50;
                var yy=(iy/ix)*xx;
            }
        }else{
            var xx=ix+4;
            var yy=iy+3;
        }
            img.style.width=xx-4+'px';
            img.style.height=yy-3+'px';
        
            tagImg.alt="";
            closeTag.innerHTML=closesHtml;
        
        var maxTime=setInterval(function(){
            temp+=35;
            if((tx+temp)<xx){
                tagImg.style.width=(tx+temp)+"px";
                tagImg.style.left=(sx-(tx+temp))/2+"px";
            }else{
                Stop1=true;
                tagImg.style.width=xx+"px";
                tagImg.style.left=(sx-xx)/2+"px";
            }
            if((ty+temp)<yy){
                tagImg.style.height=(ty+temp)+"px";
                tagImg.style.top=(tagTop+((sy-(ty+temp))/2))+"px";
            }else{
                Stop2=true;
                tagImg.style.height=yy+"px";
                tagImg.style.top=(tagTop+((sy-yy)/2))+"px";
            }
            if(Stop1&&Stop2){
                clearInterval(maxTime);
                tagImg.appendChild(img);
                temp=0;
                imgOPacity();
            }
        },1);
        function imgOPacity(){
            temp+=10;
            img.style.filter="alpha(opacity="+temp+")";
            img.style.opacity=temp/100;
            imgTime=setTimeout(imgOPacity,1)
            if(temp>100) clearTimeout(imgTime);
        }
        tagImg.innerHTML="";
        tagImg.appendChild(closeTag);
            
        
        tagImg.style.overflow="visible";
        tagImg.onmousemove=barHidden;
        tagImg.style.zIndex=100;
    }
    function barHidden(){
        clearTimeout(barShow);
        closeTag.style.top=(tagImg.scrollTop+10)+"px";
        closeTag.style.left=(tagImg.scrollLeft+10)+"px";
        if(closeTag.style.display=="none")closeTag.style.display="block";
        //barShow=setTimeout(function(){closeTag.style.display="none";},1000);
    }
    function closes(){
        $("#mask").hide();
        tagImgs = true;
        document.body.removeChild(tag);
        document.body.removeChild(tagImg);
        clearTimeout(barShow);
        clearTimeout(imgTime);
        document.onmouseup=null;
        tag=img=tagImg=closeTag=null;
    }
    
}
//事件绑定部分
if(document.getElementById("workDemo")){
    var workTag=document.getElementById("workDemo");
    var workImg=workTag.getElementsByTagName("img"); //注册此处会把 workDemo下的所有img选中，包括子集下的子集。
    var worka=workTag.getElementsByTagName("a");
    for(var i=0; i<workImg.length; i++){workImg[i].onclick=ImgShow;worka[i].href="javascript:;"}
}

if(document.getElementById("workDemo1")){
    var workTag=document.getElementById("workDemo1");
    var workImg=workTag.getElementsByTagName("img"); //注册此处会把 workDemo下的所有img选中，包括子集下的子集。
    var worka=workTag.getElementsByTagName("a");
    for(var i=0; i<workImg.length; i++){workImg[i].onclick=ImgShow;worka[i].href="javascript:;"}
}

app.p1.destory = function(){  
};
/*-- for android
====================================================== */
var fuckandroid = {};
fuckandroid.app = function(){};
fuckandroid.app.p1 = function(){};
fuckandroid.app.p1.bind_touch_event = function(){
};
fuckandroid.app.p2 = function(){};
fuckandroid.app.p2.bind_touch_event = function(){
};
/*-- page init
====================================================== */
(function(){
    app.p1.init();
    app.p1.bind_touch_event();
    app.p2.init();
    app.p2.bind_touch_event();
})();
