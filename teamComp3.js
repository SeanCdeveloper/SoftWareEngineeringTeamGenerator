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
                   <li class="list-group-item"><b>Number of Engineers:</b>&nbsp; ${teamData.numOfEngineers}</li>
                   <li class="list-group-item"><b>Number of Interns:</b>&nbsp; ${teamData.numOfInterns}</li>
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