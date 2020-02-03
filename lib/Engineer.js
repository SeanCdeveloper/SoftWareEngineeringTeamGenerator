const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        if (!github) {
            throw new Error("No Github link has been established.")
        }
        this.github = github;
    }
    getGithub() {
        // code for getting GitHub username goes here. 
    }
    getRole() {
        console.log("Engineer"); // This has to override Employee getRole(), stating "Engineer".
    }
}

module.exports = Engineer;

