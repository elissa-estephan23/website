<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nefaa_services"; // You can change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$fullName = $_POST['fullName'];
$licenseNumber = $_POST['licenseNumber'];
$dob = $_POST['dob'];
$expiryDate = $_POST['expiryDate'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Insert data into database
$sql = "INSERT INTO applications (full_name, license_number, dob, expiry_date, email, phone)
        VALUES ('$fullName', '$licenseNumber', '$dob', '$expiryDate', '$email', '$phone')";

if ($conn->query($sql) === TRUE) {
    echo "New application submitted successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
