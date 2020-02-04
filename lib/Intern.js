const Employee = require("./Employee")

class Intern extends Employee {
    constructor(school) {
        if (!school) {
            throw new Error("No school has been declared.")
        }
        this.school = school;
    }
    getSchool() {
        // code to get school goes here.
    }
    getRole() {
        console.log("Intern");
        // should this be "return"?
    }
}

module.exports = Intern;
