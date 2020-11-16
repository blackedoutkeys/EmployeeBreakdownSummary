// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./employee');

class Engineer extends Employee {
    //constructor function returns employee name, id, email address
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getGithub() {
        //returns the engineer's name
        return this.github;
    }

    getID() {
        //returns the engineer's ID
        return this.id;
    }

    getEmail() {
        //returns the engineer's email address
        return this.email;
    }

}

module.exports = Engineer;