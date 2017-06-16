namespace Students
{
  public class User
  {
    private string firstName;

    private string lastName;

    private string email;

    // Remove this prior to discussing the class, and add it when prompted by
    //   the lesson plan.
    private static int created = 0;

    public User (string firstName, string lastName, string email)
    {
        User.created += 1;

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    static int getCreated ()
    {
      return User.created;
    }

    public string getFirstName ()
    {
      return this.firstName;
    }

    public string getLastName ()
    {
      return this.lastName;
    }

    public string getFullName ()
    {
      return this.firstName + " " + this.lastName;
    }

    public string getEmail ()
    {
      return this.email;
    }

  }
}
