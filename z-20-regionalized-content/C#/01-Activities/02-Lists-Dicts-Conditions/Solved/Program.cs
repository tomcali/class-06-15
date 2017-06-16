/* ****************************************************************************
 *
 * BRIEF //
 *   The student script from last time was a good first-pass. Now, it's time to
 *   make it a bit more robust.
 *
 *   To start, refactor such that all of your prompts occur within an infinite
 *   loop, which doesn't break until the user indicates the information they
 *   entered is correct. Only print the information after their confirmation.
 *
 *   Next, refactor your program such that, after users confirm that they've
 *   entered the correct information, your program prompts them as to whether
 *   they'd like to enter information for additional students.
 *
 *     1. As an "easy" challenge, simply allow them to enter the values again,
 *        and print the information after they confirm it's correct.
 *
 *     2. Your recommended challenge is to store student information in a dict.
 *        When the user confirms their information is correct, add the student
 *        to a list of students.
 *
 *        When the user says "no" to adding more students, print every student
 *        in the list.
 *
 *        Oh, one hint--you'll want to initialize your students list outside
 *        of your loop.
 *
 *     3. For additional fun. figure out how to let the user type in either Y
 *        or y (lowercase) for "yes". Hint: Call the lower() method on a string.
 *        What does it do?
 *
 ***************************************************************************** */

using System;
using System.Collections.Generic;

class Program
{
  static void Main (String[] args)
  {

    while (true) {

      /* Next, create a dict, whose keys are the same as the variable names you've
       * been using. Set their value equal to "None", which is Python's version of
       * JavaScript's null. Refactor your calls to input such that they assign to
       * the dictionary's values directly, rather than to variable names. It'll
       * look very similar! */
      Dictionary<string, string> student = new Dictionary<string, string>();

      // Prompt user for student"s identification information, and
      //   save it into the dictionary.
      Console.Write("Please enter the student's first name. ");
      string firstName = Console.ReadLine();
      student.Add("first name", firstName);

      Console.Write("Please enter the student's middle name. ");
      string middleName = Console.ReadLine();
      student.Add("middle name", middleName);

      Console.Write("Please enter the student's last name. ");
      string lastName = Console.ReadLine();
      student.Add("last name", lastName);

      // Prompt user for student"s contact information...
      Console.Write("Please enter the student's address. ");
      string address = Console.ReadLine();
      student.Add("address", address);

      Console.Write("Please enter the student's email. ");
      string email = Console.ReadLine();
      student.Add("email", email);

      Console.Write("Please enter the student's phone number. ");
      string phoneNumber = Console.ReadLine();
      student.Add("phone number", phoneNumber);

      // Print everything to the console...
      foreach (KeyValuePair<string, string> pair in student) {
        Console.WriteLine("The student's " + pair.Key + " is " + pair.Value + ".");
      }

      /* Use a conditional statement here. If they say "No", simply continue the loop,
       * so they can enter the information again.
       *
       * If they say "Yes", add the student to a list, and prompt them again, asking
       * if they want to add another student.
       *
       * If they say "Yes" again, continue the loop. If not, print every student in
       * your list.
       *
       * Take this one step by step, and don't get overwhelmed. It's okay if this
       * is challenging! */

      Console.Write("Is this information correct? (Y/n) ");
      string confirmation = Console.ReadLine();
      if (confirmation == "y" || confirmation == "Y")
        break;
    }

  }

}
