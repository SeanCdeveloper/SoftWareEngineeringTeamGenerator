const Employee = require ("./Employee");

class Intern extends Employee {
    constructor(school) {
        if (!school) {
            throw new Error("No school has been declared.")
        }
        this.school = school;
    }
    getSchool() {

    }
    getRole() {
        console.log("Intern");
    }
}