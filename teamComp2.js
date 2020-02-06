const inquirer = require("inquirer");
const jest = require("jest");
const util = require("util");
const fs = require("fs");

const writeFileAsync = util.promisify(fs.writeFile);

let teamSize = [];
async function memberSize() {
    await inquirer.prompt([
        {
            type: "input",
            name: "numberOfMembers",
            message: "Please enter your team size."
        }
    ]).then((response) => {
        var memberNum = response.numberOfMembers;
        teamSize.unshift(memberNum);
    });
}

async function promptUser() {
    let teamData = {};
    for (let i = 0; i < teamSize[0]; i++) {
        return inquirer.prompt([
            {
                type: "input",
                message: "What is the name of the Team Manager?",
                name: "managerName"
            },
            {
                type: "input",
                message: "What is the manager's id?",
                name: "managerId"
            },
            {
                type: "input",
                message: "What is the manager's email?",
                name: "managerEmail"
            },
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "managerOffice"
            },
            {
                type: "list",
                message: "What tean member do you want to add?",
                name: "memberAdded",
                choices: [
                    { role: "Intern", value: "Intern" },
                    { role: "Engineer", value: "Engineer" }
                ]
            },
            {
                type: "input",
                name: "engineerName",
                message: "What is the Engineer's name?",
                when: ({ memberAdded }) => memberAdded === "Engineer"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the Engineer's Id?",
                when: ({ memberAdded }) => memberAdded === "Engineer"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the Engineer's email?",
                when: ({ memberAdded }) => memberAdded === "Engineer"
            },
            {
                type: "input",
                name: "github",
                message: "Please input the Engineer's github username.",
                when: ({ memberAdded }) => memberAdded === "Engineer"
            },
            {
                type: "input",
                name: "internName",
                message: "What is the Intern's name?",
                when: ({ memberAdded }) => memberAdded === "Intern"
            },
            {
                type: "input",
                name: "internId",
                message: "What is the Intern's Id?",
                when: ({ memberAdded }) => memberAdded === "Intern"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the Intern's email?",
                when: ({ memberAdded }) => memberAdded === "Intern"
            },
            {
                type: "input",
                name: "internSchool",
                message: "Please input the Intern's school.",
                when: ({ memberAdded }) => memberAdded === "Intern"
            },
            {
                type: "confirm",
                message: "Do you want to add another member?",
                name: "furtherQuery",
                choices: [
                    { choice: "yes", value: true },
                    { choice: "no", value: false }
                ]
            }
        ]).then((response) => {
            console.log("Team Composition: ");
            console.log(response);
            let managerName = response.managerName;
            let managerId = response.managerId;
            let managerEmail = response.managerEmail;
            let managerOffice = response.managerOffice;
            let memberAdded = response.memberAdded;

            /* Engineer / Intern Info */
            let engineerName = response.engineerName;
            let engineerId = response.engineerId;
            let engineerEmail = response.engineerEmail;
            let github = response.github;
            let internName = response.internName;
            let internId = response.internId;
            let internEmail = response.internEmail;
            let internSchool = response.internSchool;

            teamData.managerName = managerName;
            teamData.managerId = managerId;
            teamData.managerEmail = managerEmail;
            teamData.managerOffice = managerOffice;
            teamData.engineerName = engineerName;
            teamData.engineerId = engineerId;
            teamData.engineerEmail = engineerEmail;
            teamData.github = github;
            teamData.internName = internName;
            teamData.internId = internId;
            teamData.internEmail = internEmail;
            teamData.internSchool = internSchool;
            teamData.memberAdded = memberAdded;

            return teamData;
        });
    }
}

function generateHTML(teamData) {
    return `<!DOCTYPE html>
   <html lang="en">
   
   <head>
       <meta charset="UTF-8">
       <title>My Team</title>
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
           integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
   </head>
   
   <style>
       a {
           color: red;
           margin-left: 45%;
           font-size: 16pt;
           text-decoration: underline;
       }
   
       #teamInfo {
           text-align: center;
           margin-top: 2%;
       }
       
       b {
           text-decoration: underline;
       }

       .jumbotron {
           background: #13293D;
           color: white;
       }
   </style>
   
   <body>
       <div class='container-fluid'>
           <div class='jumbotron text-center'>
               <h1>My Team</h1>
           </div>
           <div class="row">
           
           <div id="teamInfo" class="row">
               <h1>Team Information:</h1>
               <ul class="list-group list-group-flush">
                   <li class="list-group-item"><b>Manager Name:</b>&nbsp; ${teamData.managerName}</li>
                   <li class="list-group-item"><b>Manager Id:</b>&nbsp; ${teamData.managerId}</li>
                   <li class="list-group-item"><b>Manager Email:</b>&nbsp; ${teamData.managerEmail}</li>
                   <li class="list-group-item"><b>Manager Office:</b>&nbsp; ${teamData.managerOffice}</li>
                   <li class="list-group-item"><b>New Member Added:</b>&nbsp; ${teamData.memberAdded}</li>
               </ul>
           </div>
       </div>
   </body>
   
   </html>`
}

async function init() {
    try {
        const teamSize = await memberSize();
        const teamData = await promptUser();
        // console.log('data generated before generateHTML: ' + teamData);
        const html = generateHTML(teamData);
        await writeFileAsync("./output/team.html", html);
    } catch (err) {
        console.log(err)
    }
}

init();
