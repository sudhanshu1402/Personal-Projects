using System;
using System.Collections.Generic;

namespace ExpenseTracker
{
    class Program
    {
        static void Main(string[] args)
        {
            List<decimal> expenses = new List<decimal>();
            while(true)
            {
                Console.WriteLine("1. Add Expense\n2. View Total");
                string choice = Console.ReadLine();
                if(choice == "1")
                {
                    Console.Write("Amount: ");
                    expenses.Add(Convert.ToDecimal(Console.ReadLine()));
                }
                else if(choice == "2")
                {
                    decimal total = 0;
                    expenses.ForEach(e => total += e);
                    Console.WriteLine($"Total: {total}");
                }
            }
        }
    }
}
