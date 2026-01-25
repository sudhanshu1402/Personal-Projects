<?php
// CMS Core Logic Stub
class CMS
{
    public function renderPage($slug)
    {
        echo "Rendering page for: " . htmlspecialchars($slug);
    }
}

$cms = new CMS();
$cms->renderPage(isset($_GET['page']) ? $_GET['page'] : 'home');
?>