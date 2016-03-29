<?php 

    session_start();
     $_SESSION['url'] = 'http://'.$_SERVER['SERVER_NAME'].$_SERVER["REQUEST_URI"];
     if(!isset($_SESSION["openid"]))
     {
        include_once 'weChat/weChatAutho.php';
     }else
     {
        // userinfo
        /*echo 'openid:'.$_SESSION['openid'] . '<br />';
        echo 'headimgurl:'.$_SESSION['img'] . '<br />';
        echo 'nickname:'.$_SESSION['nickname'] . '<br />';*/
     }
?>
<!DOCTYPE html>
<html lang="en">
<!-- <html lang="en" manifest="app.appcache"> -->
<head>
	<meta charset="UTF-8">
	<title>Le Rendez-vous </title>
	<meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=640, user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no">

    <link rel="stylesheet" type="text/css" href="css/app.css">
</head>

<!-- pagelist-->
<body>
  <div id="mask" class="mask" data-num="1"></div> 
  <div class="swiper-slide p2">
    <img class="bg"src="img/bgen.jpg">
    <div id="workDemo1">
        <a href="#"><img class="e1"src="img/b1.png"></a>
        <a href="#"><img class="e2"src="img/l1&l2.png"></a>
        <a href="#"><img class="e3"src="img/l3.png"></a>
        <a href="#"><img class="e4"src="img/l4.png"></a>
        <a href="#"><img class="e5"src="img/l5.png"></a>
        <a href="#"><img class="map"src="img/map.png"></a>
    </div>
    <input id="trade1" type="text" class="in-1 e-1" >
    <input id="brand1" type="text" class="in-1 e-2" >
    <input id="name1"  type="text" class="in-1 e-3" >
    <input id="phone1" type="text" class="in-1 e-4" >
    <input id="email1" type="text" class="in-1 e-5" >            
    <img class="button1" src="img/transparent.png" >
    <div class="hit1"></div>
  </div>

<!--Script====================================================== -->
<script src="js/zepto/zepto.min.js"></script>
<script src="js/motion/landscape.min.js"></script>
<script src="js/app.js"></script>
<?php include_once 'weChat/weChatShareJS.php';?>
<script>
    app.wechat.sharecontent = app.wechat.sharecontent_en;
    var $OPENID = "<?php echo $_SESSION['openid'] ?>";
</script>
</body>
</html>