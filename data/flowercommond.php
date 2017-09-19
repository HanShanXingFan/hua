<?php
	    //根据客户端传递过来的菜品编号，查询出该菜品的所有信息
    //以JSON格式返回给客户端

	include_once "linkD.php";
	$pdo=mysqlInit("mysql","localhost","flowerweb","root","");
	$result = $pdo->query("SELECT * FROM  flowerintrodus");
	$row=$result->fetchAll(PDO::FETCH_ASSOC);
//	print_r($row);
	echo  json_encode( $row );
?>