<?php
session_start();
if (isset($_POST['login'])) {
    if ($_POST['user'] == 'admin' && $_POST['pass'] == 'password') {
        $_SESSION['user'] = 'admin';
    }
}
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: index.php");
}
?>
<?php if (isset($_SESSION['user'])): ?>
    Welcome Admin! <a href="?logout">Logout</a>
<?php else: ?>
    <form method="post">
        User: <input type="text" name="user"><br>
        Pass: <input type="password" name="pass"><br>
        <input type="submit" name="login" value="Login">
    </form>
<?php endif; ?>