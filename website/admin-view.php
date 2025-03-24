<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nefaa_services"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get application data
$sql = "SELECT * FROM applications";
$result = $conn->query($sql);

// Display the data
if ($result->num_rows > 0) {
    // Output data for each row
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Name: " . $row["full_name"]. " - License: " . $row["license_number"]. "<br>";
    }
} else {
    echo "No applications found";
}

// Close connection
$conn->close();
?>
