<?php
	function  mysqlInit($dbms,$host,$dbname,$username,$password){
		$dsn="{$dbms}:host={$host};dbname={$dbname}";
		//创建pdo对象
		$pdo=new PDO($dsn,$username,$password);
		//设置编码格式
		$pdo->query("set names utf8");
		//错误的提醒方式
		$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
		return $pdo;
	}
?>