const Employee = require("../lib/Employee").default

class Manager extends Employee {
    constructor(officeNumber) {
        super(title, officeNumber, id, name, email)
        if (!officeNumber) {
            throw new Error ("You are missing the office number.")
        }
        this.officeNumber = officeNumber;
    }
    getRole() {
        return this.title; // This needs to override 'Employee' getRole().
    }
}

module.exports = Manager;

