<?php
$host = '192.168.4.41'; // replace with your remote server details
$db   = 'ROTR'; // replace with your database name
$user = 'user 1'; // replace with your username
$pass = '1337'; // replace with your password
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
  $pdo = new PDO($dsn, $user, $pass, $opt);

  $name = $_POST['name']; // get the name from the AJAX request

  $sql = "INSERT INTO character (name) VALUES (:name)";
  $stmt= $pdo->prepare($sql);
  $stmt->bindParam(':name', $name);
  $stmt->execute();

  echo "Name saved successfully!";
} catch (PDOException $e) {
  echo "Error: " . $e->getMessage();
} finally {
  $pdo = null; // close the connection
}
?>
