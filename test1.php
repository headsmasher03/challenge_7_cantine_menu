<?php
session_start();
$item = $_GET['item'];

$_SESSION['item'] = $item;
