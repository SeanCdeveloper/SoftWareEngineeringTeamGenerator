const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input", 
        message: "Who is the team manager?",
        name: "managerQuery"
    },
    {
        type: "input",
        message: "How many team members do you have?",
        name: "teamMemberQuery"
    },
    {
      
    }
])