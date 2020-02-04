const inquirer = require("inquirer");
const jest = require("jest");
const util = require("util");
const fs = require("fs");
// var http = require("http");
// var fs = require("fs");
//const members = require("./members")

const writeFileAsync = util.promisify(fs.writeFile);

async function promptUser() {
let teamData = {};

return inquirer.prompt([
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
    let managerName = response.managerName;
    let numOfEngineers = response.engineerNumber;
    let numOfInterns = response.internNumber;

    teamData.managerName = managerName;
    teamData.numOfEngineers = numOfEngineers;
    teamData.numOfInterns = numOfInterns;    

    return teamData;
});
}

function generateHTML(teamData) {
console.log(teamData);
console.log(teamData.managerName);
console.log(teamData.numOfEngineers);
console.log(teamData.numOfInterns);
   return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Engineer HTML</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"></script>
        <style>
            li {
                color: black;
            }
    
            .card-header {
                text-align: center;
            }
        </style>
    </head>
    
    <body>
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">this.name<br>Engineer</div>
            <div class="card-body">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${teamData.managerName}</li>
                        <li class="list-group-item">${teamData.numOfEngineers}</li>
                        <li class="list-group-item">${teamData.numOfInterns}</li>
                    </ul>
                </div>
            </div>
        </div>
    
    </body>
    
    </html>`
}

//  teamData.managerName = managerName;
//  teamData.numOfEngineers = numOfEngineers;
//  teamData.numofInterns = numOfInterns;    

async function init() {
    try {
        const teamData = await promptUser();
        console.log('data generated before generateHTML: ' + teamData);
        const html = generateHTML(teamData);
        await writeFileAsync("index.html", html);
    } catch (err) {
        console.log(err)
    }
}

init();




/*

Chccking that Data is coming through correctly:

console.log(managerName);
console.log(numOfEngineers);
console.log(numOfInterns);

console.log(teamData.managerName);
console.log(teamData.numOfEngineers);
console.log(teamData.numofInterns);
*/