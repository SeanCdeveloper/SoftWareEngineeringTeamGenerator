class Employee {
    constructor(name, id, title) {
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
        this.name = name;
        this.id = id;
        //this.email = email;
        this.title = title;
    }
    getName() {
        // may change to "this.name" if Template Strings are not working.
        return (`Employee Name: ${this.name}`);
    }
    getId() {
        return (`${this.id}`);
    }
    getEmail() {
        return (`${this.email}`);
    }
    getRole() {
        return ("Employee");
    }
}

module.exports = Employee;

