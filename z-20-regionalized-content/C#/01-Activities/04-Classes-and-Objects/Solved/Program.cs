/* ****************************************************************************
 *
 * BRIEF //
 *
 *  In this exercise, you'll create a Student class to replace the student 
 *  Dictionary.
 *
 *  FIrst, fill out Student.cs. Then come back to this file!
 *
 * ****************************************************************************
 *
 *  There's a new function in Helpers.cs, called `promptForAttribute (string attribute)`.
 *  It takes the name of an attribute, which will be displayed to the user, and
 *  returns what they enter in response.
 *
 *  For example, you can do: 
 *
 *    string firstName = promptForAttribute("first name");
 *
 *  This will write to the console with:
 *
 *      "Please enter the student's first name."
 *
 *  ...And store the user's resposne in the `firstName` variable.
 *
 *  Do this for every attribute you set on your Student, and use the user's input to
 *  set their values appropriately.
 *
 * ****************************************************************************
 *
 * When you're done, use the script we've provided to compile Program.cs. Just
 * run the following command:
 *
 *   bash compile
 *
 * If you're using Visual Studio, you don't need to do this-just use the IDE.
 *
 ***************************************************************************** */

using System;
using System.Collections.Generic;

namespace Students
{
  class Program
  {
    static void Main (String[] args)
    {

      while (true) {

        Student student = new Student();

        // Or, if fiels are private, something like:
        //   student.setFirstName(promptForAttribute("first name"));

        student.firstName = Helpers.promptForAttribute("first name");
        student.lastName = Helpers.promptForAttribute("last name");
        student.middleName = Helpers.promptForAttribute("middle name");

        student.email = Helpers.promptForAttribute("email");
        student.address = Helpers.promptForAttribute("address");
        student.phoneNumber = Helpers.promptForAttribute("phone number");

        student.printAttributes();

        if (Helpers.confirm())
          break;
      }
      
    }

  }
}
