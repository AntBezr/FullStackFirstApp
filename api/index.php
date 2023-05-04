<?php
include 'DBConnect.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');


/* 
echo "Testing our local API , it works !";  */
//phpinfo();

$objectDB = new DbConnect;
$connection = $objectDB->connect();
/* var_dump($connection); */

//Read raw data frop request body
print_r(file_get_contents('php://input'));

$booking = file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
  case "POST":
    $booking = json_decode(file_get_contents('php://input'));
    $sql = "INSERT INTO booking VALUES(null, :name, :appartment, :date, :time)";
    $stmt = $connection->prepare($sql);
    $stmt->bindParam(':name', $booking->name);
    $stmt->bindParam(':appartment', $booking->appartment);
    $stmt->bindParam(':date', $booking->date);
    $stmt->bindParam(':time', $booking->time);

    if ($stmt->execute()) {
      $response = ['status' => 1, 'message'=>'Record created successfully'];
    } else {
      $response = ['status'=> 0, 'message'=> 'Failed to create record'];
    }
    echo json_encode($response) ;
    break;

    case "GET":
      $sql ="SELECT *  FROM booking WHERE date > CURDATE() ORDER BY date, time asc ";
      $stmt = $connection->prepare($sql);
      $stmt->execute();
      $bookings = $stmt->fetchAll(PDO::FETCH_ASSOC);
      echo json_encode($bookings);
        }