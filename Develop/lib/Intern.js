// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./employee');

// class intern is built off the employee Class 
class Intern extends Employee {
// constructor function to create the intern Class inherited from Employee.
    constructor(name, email, id, school){
        // super pulls the attribute/parameters from the employee class
        super(name, email, id)
        // adds the school information to the intern class
        this.school = school;
    }
    getSchool(){
        // returns the school for the intern class 
        return this.school
    }
    getRole(){
        // returns intern role
        return 'Intern';
    };
};
// exports content of the intern class
module.exports = Intern;