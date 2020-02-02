const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(github) {
        if (!github) {
            throw new Error("No Github link has been established.")
        }
        this.github = github;
    }
    getGithub() {

    }
    getRole() {
        console.log("Engineer");
    }
}

