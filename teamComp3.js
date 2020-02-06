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
        message: "What type of member do you want to add?",
        name: "memberAdd",
        choices: [
            {role: "Intern", value: "Intern"},
            {role: "Engineer", value: "Engineer"}
        ]
    },
    {
        type: "input",
        name: "github",
        message: "Please input the Engineer's github username.",
        when: ({memberAdd}) => memberAdd === "Engineer"
     },
     {
         type: "input",
         name: "school",
         message: "Please input the Intern's school.",
         when: ({memberAdd}) => memberAdd === "Intern"
      },
    /*
    {
        type: "input",
        message: "Do you want to add another member?",
        name: "furtherQuery",
        choices: [
            {choice: "yes", value: true},
            {choice: "no", value: false}
        ]
    }
    */
]).then((response) => {
    console.log("Team Composition: ");
    console.log(response);
    let managerName = response.managerName;
    let managerId = response.managerId;
    let managerEmail = response.managerEmail;
    let managerOffice = response.managerOffice;
    let memberAdd = response.memberAdd;

    teamData.managerName = managerName;
    teamData.managerId = managerId;
    teamData.managerEmail = managerEmail;
    teamData.managerOffice = managerOffice;
    //teamData.memberAdd = memberAdd;
    console.log("teamData-----------");
    console.log(teamData);
    
    let furtherQuery = response.furtherQuery;
    console.log(furtherQuery);

    /* May want to put an async addition here.  I want this to run after all the members are created 
    switch (memberAdd) {
        case "Engineer":
            console.log("new Engineer");
            inquirer.prompt([
            {type: "input",
            message: "What is the Engineer's Github Username?",
            name: "gitUserName"
            },
            {
                type: "input",
                message: "Do you want to add another member?",
                name: "furtherQuery",
                choices: [
                    {choice: "yes", value: true},
                    {choice: "no", value: false}
                ]
            }
            ]).then((response) => {
                console.log(response);
            });
            break;
        case "Intern":
            console.log("new Intern");
            inquirer.prompt([
                {type: "input",
                message: "What is the Intern's School?",
                name: "gitUserName"
                },
                {
                    type: "input",
                    message: "Do you want to add another member?",
                    name: "furtherQuery",
                    choices: [
                        {choice: "yes", value: true},
                        {choice: "no", value: false}
                    ]
                }
                ]).then((response) => {
                    console.log(response);
                });
            break;
        default: 
        inquirer.prompt([
            {
                type: "list",
                message: "What type of member do you want to add?",
                name: "memberAdd",
                choices: [
                    {role: "Intern", value: "Intern"},
                    {role: "Engineer", value: "Engineer"}
                ]
            },
        ])
    }

 /*
    if (teamData.memberAdd === "Engineer") {
        console.log("Engineer");
        return inquirer.prompt([
            {
                type: "input",
                message: "What is the Engineer's GitHub username?",
                name: "gitUserName"
            }
        ]).then((response) => {
            let gitUserName = response.gitUserName;
            teamData.gitUserName = gitUserName;
            console.log(gitUserName);
            console.log(teamData.gitUserName);
        })
    }
    if (teamData.memberAdd === "Intern") {
        console.log("Intern");
        return inquirer.prompt([
            {
                type: "input",
                message: "What is the Intern's school?",
                name: "internSchool"
            }
        ]).then((response) => {
            let internSchool = response.internSchool;
            teamData.internSchool = internSchool;
            console.log(internSchool);
            console.log(teamData.internSchool);
            
        }).then((response) => {
            return inquirer.prompt([
                {
                    type: "list",
                    message: "What type of member do you want to add?",
                    name: "memberAdd",
                    choices: [
                        {role: "Intern", value: "Intern"},
                        {role: "Intern", value: "Engineer"}
                    ]
                }
            ]);
        }).then((response) => {
            let memberAdd = response.memberAdd;
            teamData.memberAdd = response.memberAdd; 
        });
    }
    */
    return teamData;
});
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
   </style>
   
   <body>
       <div class='container-fluid'>
           <div class='jumbotron text-center'>
               <h1>My Team</h1>
           </div>
           <div class="row">
               <nav>
                   <div>
                       <a href="/team">My Team</a> 
                   </div>
               </nav>
           </div>
           <div id="teamInfo" class="row">
               <h1>Team Information:</h1>
               <ul class="list-group list-group-flush">
                   <li class="list-group-item"><b>Manager Name:</b>&nbsp; ${teamData.managerName}</li>
                   <li class="list-group-item"><b>Manager Id:</b>&nbsp; ${teamData.managerId}</li>
                   <li class="list-group-item"><b>Manager Email:</b>&nbsp; ${teamData.managerEmail}</li>
                   <li class="list-group-item"><b>Manager Office:</b>&nbsp; ${teamData.managerOffice}</li>
                   <li class="list-group-item"><b>New Member Added:</b>&nbsp; ${teamData.memberAdd}</li>
                   <li class="list-group-item"><b>New Member Added:</b>&nbsp; ${teamData.gitUserName}</li>
                   <li class="list-group-item"><b>New Member Added:</b>&nbsp; ${teamData.internSchool}</li>
               </ul>
           </div>
       </div>
   </body>
   
   </html>
      
   <!--
       <div>Manager Name: ${teamData.managerName}</div>
               <div>Number of Engineers: ${teamData.numOfEngineers}</div>
               <div>Number of Interns: ${teamData.numOfInterns}</div>
   
       <a href="/frameworks">Frameworks</a> |
                   <a href="/food">Food</a>
       <div class='container'>
       <div class='jumbotron text-center'>
         <h1>My Team</h1>
       </div>
       <div class="row">
         <div class="col-sm-12 text-center">
           <form action="http://localhost:8080/thanks" method="POST">
             <input name="name" placeholder="enter your name">
             <input name="band" placeholder="enter your favorite band">
             <button type='submit'>submit</button>
           </form>
         </div>
       </div>
     </div>
   -->`
}

async function init() {
    try {
        const teamData = await promptUser();
       // console.log('data generated before generateHTML: ' + teamData);
        const html = generateHTML(teamData);
        await writeFileAsync("./output/team.html", html);
    } catch (err) {
        console.log(err)
    }
}

init();

module.exports = generateHTML;

/* At some point, I have to create a new instance of each Employee Object */




/*

if (role === Main._ENGINEER) {
                this._teamArray.push(new Engineer(name, email, github));
            }
            if (role === Main._INTERN) {
                this._teamArray.push(new Intern(name, email, school));
            }
            if (role === Main._MANAGER) {
                this._teamArray.push(new Manager(name, email, roomNumber));
            }
        }

        this._teamArray = [
            new Engineer('engineer name', 'engineer email', 'engineer github'),
            new Intern('intern name', 'intern email', 'intern school'),
            new Manager('manager name', 'manager email', 'manager room number'),
        ]

Chccking that Data is coming through correctly:

1st Series:

    console.log(managerName);
    console.log(managerId);
    console.log(managerEmail);
    console.log(managerOffice);
    console.log(memberAdd);

    console.log(teamData.managerName);
    console.log(teamData.managerId);
    console.log(teamData.managerEmail);
    console.log(teamData.managerOffice);
    console.log(teamData.memberAdd);
*/