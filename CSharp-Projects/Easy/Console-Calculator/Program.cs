using System;

namespace ConsoleCalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Simple Calculator");
            Console.Write("Enter number 1: ");
            double num1 = Convert.ToDouble(Console.ReadLine());
            
            Console.Write("Enter number 2: ");
            double num2 = Convert.ToDouble(Console.ReadLine());
            
            Console.WriteLine($"Sum: {num1 + num2}");
            Console.WriteLine($"Diff: {num1 - num2}");
        }
    }
}
