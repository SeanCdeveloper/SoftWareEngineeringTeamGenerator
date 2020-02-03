const inquirer = require("inquirer");
const jest = require("jest");
// var http = require("http");
// var fs = require("fs");
//const members = require("./members")

let teamData = {};
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
    const managerName = response.managerName;
    const numOfEngineers = response.engineerNumber;
    const numOfInterns = response.internNumber;

    teamData.managerName = managerName;
    teamData.numOfEngineers = numOfEngineers;
    teamData.numofInterns = numOfInterns;
}).then(() => {
    
});



/*

Chccking that Data is coming through correctly:

console.log(managerName);
console.log(numOfEngineers);
console.log(numOfInterns);

console.log(teamData.managerName);
console.log(teamData.numOfEngineers);
console.log(teamData.numofInterns);
*/