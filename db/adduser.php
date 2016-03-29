<?php 

	session_start();

	// for debug use $_GET["param"]
	// http://localhost/huaihaih5160321/db/adduser.php?trade=Progammer&brand=CREATC&name=LEON&phone=13564137185&email=969196087@qq.com&targetdate=0101
	// $trade           = $_GET['trade'];
	// $brand           = $_GET['brand'];
	// $name           = $_GET['name'];
	// $phone          = $_GET['phone'];
	// $email           = $_GET['email'];
	// $adate          = $_GET['adate'];

	

	include_once 'connect.php';

	// params
	$trade           = $_POST['trade'];
	$brand           = $_POST['brand'];
	$name            = $_POST['name'];
	$phone           = $_POST['phone'];
	$email           = $_POST['email'];

	// wechat user info from session
	$openid          = $_POST['openid'];

	// operation time
	$adate           = date("Y-m-d H:i:s",time());

	if ($stmt = $mysqli->prepare("SELECT phone FROM user WHERE openid=? and phone=?")) {

        // Bind the variables to the parameter as strings.
        $stmt->bind_param("ss", $openid,$phone);

        /* execute query */
        if($stmt->execute()){
        	/* bind result variables */
        	$stmt->bind_result($phones);
			/* fetch value */
	        $stmt->fetch();
	        // response json data
			if(isset($phones))
	        {
	        	echo json_encode(array('code'=>1));
	        }else{
	        	if ($stmt = $mysqli->prepare("INSERT INTO user (trade,brand,name,phone,email,adate,openid) VALUES(?,?,?,?,?,?,?)")){
					// Bind the variables to the parameter as strings.
				    $stmt->bind_param("sssssss", $trade,$brand,$name,$phone,$email,$adate,$openid);
				    if($stmt->execute()){
				        /* fetch value */
					    echo json_encode(array('code'=>0));
				    }else{
				    	echo json_encode(array('code'=>2));
				    }
				}
	        }
		}else{
			echo json_encode(array('code'=>3));
		}
	}else{
		echo json_encode(array('code'=>4));
	}
	$stmt->close();
?>