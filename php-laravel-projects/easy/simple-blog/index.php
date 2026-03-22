<?php
$posts = [
    ["title" => "First Post", "content" => "Hello World!"],
    ["title" => "PHP is cool", "content" => "It is widely used."]
];
?>
<html>

<body>
    <h1>My Blog</h1>
    <?php foreach ($posts as $post): ?>
        <h2>
            <?= $post['title'] ?>
        </h2>
        <p>
            <?= $post['content'] ?>
        </p>
    <?php endforeach; ?>
</body>

</html>