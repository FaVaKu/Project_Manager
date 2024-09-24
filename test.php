<?php
    // Check if the form has been submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the input values
        $name = $_POST["name"];
        $age = $_POST["age"];

        // Print out the input values
        echo "Hello, " . $name . "! You are " . $age . " years old.";
    }
?>