// TODO: Write code to define and export the Employee class
class Employee {
    //constructor function returns employee name, id, email address
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        //returns the employee's name
        return this.name;
    }

    getId() {
        //returns the employee's ID
        return this.id;
    }

    getEmail() {
        //returns the employee's email address
        return this.email;
    }
    // get role method 
    getRole() {
        // return this employee's role
        return 'Employee';
    };
};
// export content for the employee class 
module.exports = Employee;