/*****************************************************************************
 *
 * Your task is to fill out this Student class. Follow the steps below.
 *
 *   1. Add all the fields your Student class will need. You're free to make
 *      these `public` instead of `private`, if that makes things easier for you.
 *
 *   2. Add a constructor.
 *
 *      If you made your fields readonly, you can set all of them in the
 *      constructor.
 *
 *      You can make your attributes either `private` or `public1`. If you make
 *      them public, setting them is as easy as doing this:
 *
 *        Student amy = new Student();
 *        amy.firstName = "Amy";
 *        // etc.
 *
 *      The choice is yours, but feel free to go the simpler, bare `public`
 *      route this  time around.
 *
 *   3. Add a method that prints all of the student's attributes.
 *
 *   4. If you have time, add a `static` property that keeps track of how many
 *      students you've created. This will be identical to what you saw in the User
 *      class, sw you'll have one line in your previously empty constructor!
 *
 *      This property should be private, and you should provide a get method for it.
 *
 *************************************************************************** */
using System;

namespace Students
{
  public class Student
  {
    public string firstName { get; set; }

    public string lastName {get; set; }

    public string middleName {get; set; }

    public string email { get; set; }

    public string address { get; set; }

    public string phoneNumber { get; set; }

    public static int created { get; private set; } = 0;

    public Student ()
    {
      Student.created += 1;
    }

    public void printAttributes ()
    {
      Console.WriteLine("This student's first name is " + this.firstName + ".");
      Console.WriteLine("This student's last name is " + this.lastName + ".");
      Console.WriteLine("This student's middle name is " + this.middleName + ".");

      Console.WriteLine("This student's email is " + this.email + ".");
      Console.WriteLine("This student's address is " + this.address + ".");
      Console.WriteLine("This student's phoneNumber is " + this.phoneNumber + ".");
    }

  }

}
