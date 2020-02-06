//const Employee = require("../lib/Employee");

class Employee {
    constructor(name, id, email, title ) {
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

