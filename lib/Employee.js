//const Employee = require("../lib/Employee");

class Employee {
    constructor(name, id, email, title ) {
        /*
        if (!name) {
            throw new Error("You are missing your name.");
        }
        if (!id) {
            throw new Error("You are missing the id.");
        }
        if (!email) {
            throw new Error("Your are missing the email.")
        }
        if (!title) {
            throw new Error("You are missing the title.");
        }
        */
        this._name = name;
        this._id = id;
        this._email = email;
        this._title = title;
    }
    getName() {
        // may change to "this.name" if Template Strings are not working.
        return this._name;
    }

    getId() {
        return this._id;
    }

    getEmail() {
        return this._email;
    }
    
    getRole() {
        return this.constructor.name;
    }
}

module.exports = Employee;

