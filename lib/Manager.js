const Employee = require("./Employee")

class Manager extends Employee {
    constructor(officeNumber) {
        if (!officeNumber) {
            throw new Error ("You are missing the office number.")
        }
        this.officeNumber = officeNumber;
    }
    getRole() {
        console.log("Manager"); // This needs to override 'Employee' getRole().
    }
}

module.exports = Manager;

