<?php
    session_start();
    include_once "config.php";
    $user_id = $_SESSION['unique_id'];
    $sql = "SELECT * FROM friends WHERE NOT followers = {$user_id} ORDER BY following DESC";
    $query = mysqli_query($conn, $sql);
    $output = "";
    if(mysqli_num_rows($query) == 0){
        $output .= "No users are available to chat";
    }elseif(mysqli_num_rows($query) > 0){
        include_once "user_list.php";
    }
    echo $output;
?>