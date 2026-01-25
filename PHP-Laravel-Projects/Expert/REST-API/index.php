<?php
header("Content-Type: application/json");
$data = ["status" => "ok", "message" => "API working"];
echo json_encode($data);
?>