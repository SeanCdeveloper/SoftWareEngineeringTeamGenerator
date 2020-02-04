const fs = require("fs");
const inquirer = require("inquirer");
//  const util = require("util");
const jest = require("jest");

//const writeFileAsync = util.promisify(fs.writeFile);

/*async function promptUser() {
    */
   memberData = {};
     inquirer.prompt([
        {
        type: "input",
        message: "What is your name?",
        name: "memberName"
        },
        {
        type: "email",
        message: "What is your email?",
        name: "memberEmail"
        }, 
        {
        type: "input",
        message: "What is your id?",
        name: "memberId",
        },
        {
        type: "list",
        message: "What is your role in the company?",
        name: "memberRole", 
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
        console.log("Employee Information:")
        console.log(response);
        const memberName = response.memberName;
        const memberEmail = response.memberEmail;
        const memberId = response.memberId;
        const memberRole = response.memberRole;
        
        memberData.memberRole = memberRole;
        memberData.memberName = memberName; 
        memberData.memberEmail = memberEmail;
        memberData.memberId = memberId;
    });

        


/* 
    Verifying that memberData Object is working;

    console.log(memberName);
    console.log(memberEmail);
    console.log(memberId);
    console.log(memberRole);

    console.log(memberData.memberName);
    console.log(memberData.memberEmail);
    console.log(memberData.memberId);
    console.log(memberData.memberRole);
*/