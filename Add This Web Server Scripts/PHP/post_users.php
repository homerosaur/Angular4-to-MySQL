<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$data = json_decode( file_get_contents('php://input'),true );

$fid =  $data['id'];
$fname =  $data['firstname'];
$lname =  $data['lastname'];

$conn = new mysqli(*yourDbHostname*,*yourDbUsername*,*yourDbPassword*,*yourDbDatabase*);
$sql = "insert into users(id,firstName,lastName) values('".$fid."','".$fname."','".$lname."')";

$result = $con->query($sql);

?>
