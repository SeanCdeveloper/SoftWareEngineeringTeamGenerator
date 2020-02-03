const inquirer = require("inquirer");
const jest = require("jest");

inquirer.prompt([
    {
        type: "input", 
        message: "What is the name of the Team Manager?",
        name: "managerName"
    },
    {
        type: "input",
        message: "How many Engineers are on your team?",
        name: "engineerNumber"
    },
    {
        type: "input",
        message: "How many Interns are on your team?",
        name: "internNumber"
    },
]).then((response) => {
    console.log("Team Composition: ")
    console.log(response);
});

