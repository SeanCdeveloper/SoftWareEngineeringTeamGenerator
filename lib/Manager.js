const Employee = require("./Employee").default

class Manager extends Employee {
    constructor(officeNumber) {
        if (!officeNumber) {
            throw new Error ("You are missing the office number.")
        }
        this.officeNumber = officeNumber;
    }
    getRole() {
        return Manager; // This needs to override 'Employee' getRole().
    }
}

module.exports = Manager;

