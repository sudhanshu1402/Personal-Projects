using System;
using System.Collections.Generic;

namespace InventorySystem
{
    class Item { public string Name { get; set; } public int Qty { get; set; } }
    
    class Program
    {
        static void Main(string[] args)
        {
            List<Item> inventory = new List<Item>();
            // Basic stub for inventory logic
            Console.WriteLine("Inventory System Initialized");
        }
    }
}
