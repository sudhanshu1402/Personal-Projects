<?php
if ($_POST) {
    if (!empty($_POST['name']) && !empty($_POST['email'])) {
        echo "Thanks, " . htmlspecialchars($_POST['name']);
    } else {
        echo "Please fill all fields.";
    }
}
?>
<form method="post">
    Name: <input type="text" name="name"><br>
    Email: <input type="text" name="email"><br>
    <input type="submit">
</form>
