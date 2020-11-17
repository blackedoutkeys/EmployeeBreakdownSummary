// TODO: Write code to define and export the Manager class. HINT: This class should inherit from manager.
const Employee = require('../lib/employee');

class Manager extends Employee {
    //constructor function returns manager name, id, email address
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        //returns the manager's office number
        return this.officeNumber;
    }

            //returns the managers's role

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;