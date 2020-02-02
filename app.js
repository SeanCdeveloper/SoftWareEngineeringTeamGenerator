const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

//const writeFileAsync = util.promisify(fs.writeFile);

/*async function promptUser() {
    let data = {};
    let queryData = {};
    */
     inquirer.prompt([
        {
        type: "input",
        message: "What is your name?",
        name: "name"
        },
        {
        type: "email",
        message: "What is your email?",
        name: "email"
        }, 
        {
        type: "input",
        message: "What is your id?",
        name: "id",
        },
        {
        type: "list",
        message: "What is your role in the company?",
        name: "role", 
        choices: [
            {
               role: "Manager", value: "Manager"
            },
            {
                role: "Intern", value: "Intern"
            },
            {
                role: "Engineer", value: "Engineer"
            },
        ]}
    ]).then((response) => {
        console.log(response);
    });




