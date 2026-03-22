<?php
// Simple E-commerce Stub
class Product
{
    public $name;
    public $price;
    function __construct($n, $p)
    {
        $this->name = $n;
        $this->price = $p;
    }
}

$products = [new Product("Laptop", 1000), new Product("Mouse", 20)];

foreach ($products as $p) {
    echo "Product: {$p->name} - \${$p->price}<br>";
}
?>