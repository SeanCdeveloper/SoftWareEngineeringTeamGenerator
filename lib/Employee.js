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
        this.email = email;
        this.title = title;
    }
    getName() {
        console.log(`${this.name}`);
    }
    getId() {
        console.log(`${this.id}`);
    }
    getEmail() {
        console.log(`${this.email}`);
    }
    getRole() {
        console.log("Employee");
    }
}

module.exports = Employee;

