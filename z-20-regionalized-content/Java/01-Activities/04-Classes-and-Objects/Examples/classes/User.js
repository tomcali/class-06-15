'use strict';

// An ES6 User class. Since we don't have private/public in JavaScript, this
//   will look a bit different than the Java version. We can emulate private 
//   memnbers, but it's difficult to impossible to truly enforce privacy.
class User {

  constructor (username, email) {
    this._username = username;
    this._email = email;
  }


  get username () {
    return this._username;
  }

  get email () {
    return this._email;
  }
  
}
