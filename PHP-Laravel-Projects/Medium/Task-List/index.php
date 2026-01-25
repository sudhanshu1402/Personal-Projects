<?php
session_start();
if (!isset($_SESSION['tasks']))
    $_SESSION['tasks'] = [];
if (isset($_POST['task'])) {
    $_SESSION['tasks'][] = $_POST['task'];
}
?>
<form method="post">
    Task: <input type="text" name="task">
    <input type="submit" value="Add">
</form>
<ul>
    <?php foreach ($_SESSION['tasks'] as $t): ?>
        <li>
            <?= htmlspecialchars($t) ?>
        </li>
    <?php endforeach; ?>
</ul>