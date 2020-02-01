const inquirer = require("inquirer");

async function promptUser() {
    let data = {};
    let queryData = {};
    return inquirer.prompt([
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
        type: "input",
        message: "What is your role in company?",
        name: "role"
        }
    ])
}

// Setting Up Classes, below:

