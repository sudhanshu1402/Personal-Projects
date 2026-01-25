using System;

namespace NumberGuess
{
    class Program
    {
        static void Main(string[] args)
        {
            Random random = new Random();
            int target = random.Next(1, 101);
            Console.WriteLine("Guess a number between 1 and 100");
            
            while (true)
            {
                Console.Write("Guess: ");
                int guess = Convert.ToInt32(Console.ReadLine());
                if (guess < target) Console.WriteLine("Higher");
                else if (guess > target) Console.WriteLine("Lower");
                else { Console.WriteLine("You Win!"); break; }
            }
        }
    }
}
