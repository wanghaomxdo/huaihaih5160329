<?php
    ini_set('display_errors', true);
    error_reporting(E_ALL);
    date_default_timezone_set("Asia/Shanghai");


    $mysqli = new mysqli("localhost", "huaihaih5160321", "huaihaih5160321", "huaihaih5160321");

    /* check connection */
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }

    /* change character set to utf8 */
    if (!$mysqli->set_charset("utf8")) {
        printf("Error loading character set utf8: %s\n", $mysqli->error);
    }

?>
