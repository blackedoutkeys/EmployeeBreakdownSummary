// TODO: Write code to define and export the Manager class. HINT: This class should inherit from manager.
class Manager {
    //constructor function returns manager name, id, email address
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        //returns the manager's name
        return this.name;
    }

    getID() {
        //returns the manager's ID
        return this.id;
    }

    getEmail() {
        //returns the manager's email address
        return this.email;
    }

}