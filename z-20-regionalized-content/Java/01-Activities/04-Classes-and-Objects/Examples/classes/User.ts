'use strict';

// A TypeScript version of the User class. Looks similar, no?
class User {

  static number : created = 0;

  private string : _username;

  private string : _email;

  constructor (string : username, string : email) {
    this._username = username;
    this._email = email;

    User.created += 1;
  )

  public get username () : string {
    return this.username;
  }

  private set username (string : username) : void {
    this._username = username;
  }

  public get email () : string {
    return this.email;
  }

  private set email (string : email) : void {
    this._email = email;
  }

  public static getCreated () : number {
    return User.created;
  }

}
