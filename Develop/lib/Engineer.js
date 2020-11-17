// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('../lib/employee');

class Engineer extends Employee {
    //constructor function returns employee name, id, email address
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        //returns the engineer's name
        return this.github;
    }

    getRole() {
        //returns the engineer's role
        return 'Engineer';
    }

}

module.exports = Engineer;