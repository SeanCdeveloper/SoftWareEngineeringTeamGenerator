const inquirer = require("inquirer");
module.exports = class Main {

constructor () {
    this._teamArray = [];
}
    async run() {
       const response = await inquirer.prompt([
            {
            type: "input",
            name: "numberOfMember",
            default: "2"
            }
        ]);
        console.log(response);
    };
}

for (let i=0; i<teamSize;i++) {
    console.log("--------------------");
    const response = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please input your name",
        },
        {
            type: "list", 
            name: "role",
            message: "Please input your role",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ]
        },
        {
           type: "input",
           name: "github",
           message: "Please input your github username.",
           when: ([role]) => response === "Engineer"
        },
        {
            type: "input",
            name: "school",
            message: "Please input your github username.",
            when: ([role]) => response === "Intern"
         },
         {
            type: "input",
            name: "roomnumber",
            message: "Please input your github username.",
            when: ([role]) => response === "Manager"
         }
    ]);
    this._teamArray.push();
}