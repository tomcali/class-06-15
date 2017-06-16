using System;

namespace Students
{
  class Program
  {
    static void Main (string[] args)
    {
      double x = 2;
      double y = 3.14;

      Console.WriteLine("The product of " + x + " and " + y + " is " + multiply(x, y) + ".");

      string name;

      actionAtADistance(out name);
      Console.WriteLine("The variable 'name' has the value " + name + ". Spooky!");
    }

    static double multiply (double x, double y)
    {
      return x * y;
    }

    static void actionAtADistance(out string name)
    {
      name = "Joan";
    }

  }
}
