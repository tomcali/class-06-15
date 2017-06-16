using System;
using System.Collections.Generic;

namespace Students
{
  class Helpers
  {

    public static void saveAttribute(string attribute, Dictionary<string, string> student)
    {
      Console.Write("Please enter the student's " + attribute + ". ");
      string _attribute = Console.ReadLine();
      student.Add(attribute, _attribute);
    }

    public static void printEntries(Dictionary<string, string> student)
    {
      foreach (KeyValuePair<string, string> pair in student)
      {
        Console.WriteLine("The student's " + pair.Key + " is " + pair.Value + ".");
      }
    }

    public static bool confirm()
    {
      Console.Write("Is this information correct? (Y/n) ");
      string confirmation = Console.ReadLine();

      if (confirmation == "y" || confirmation == "Y")
        return true;
      else
        return false;
    }

    public static string promptForAttribute(string attribute)
    {
      Console.WriteLine("Please enter the student's " + attribute + ".");
      return Console.ReadLine();
    }
  }
}
