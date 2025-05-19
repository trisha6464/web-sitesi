<?php

$email = $_POST['email'];
$sifre = $_POST['sifre'];

$dogruSifre = explode('@', $email)[0];

if ($sifre === $dogruSifre) {
    echo "<h2>Hoşgeldiniz $sifre</h2>";
} else {
    header("Location: login.html");
    exit();
}
?>