const inquirer=require("inquirer");
const fs=require("fs");
const Engineer=require("./js/engineer");
const Intern=require("./js/intern");
const Manager=require("./js/manager");

const employee=[];
const engineerArr=[];
const managerArr=[];
const internArr=[];

function startApp(){
    // generateHtml();
    addEmployees();
}
function addEmployees(){
    inquirer.prompt([{
        message: "Enter the  name",
        name: "name"
    

        
    },
    {
        type: "list",
        message: "Enter their position",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "position"
    },
    {
        message: "Enter their id",
        name: "id"
    },
    {
        message: "Enter their email address",
        name: "email"
    }])
    .then(function({name, position, id, email}) {
        let positionDets = "";
        if (position === "Engineer") {
            positionDets = "GitHub username";
        } else if (position === "Intern") {
            positionDets = "school name";
        } else {
            positionDets = "office number";
        }
        inquirer.prompt([{
            message: `Enter the member's ${positionDets}`,
            name: "positionDets"
        },
        {
            type: "list",
            message: "Would you like to add more members?",
            choices: [
                "yes",
                "no"
            ],
            name: "addMore"
        }])
        .then(function({positionDets, addMore}) {
            console.log(name, id, email)
            let addMember;
            if (position === "Engineer") {
                addMember = new Engineer(name, id, email, positionDets);
                engineerArr.push(addMember);
            } else if (position === "Intern") {
                addMember = new Intern(name, id, email, positionDets);
                internArr.push(addMember);
            } else {
                addMember = new Manager(name, id, email, positionDets);
                managerArr.push(addMember);
            }
            // employee.push(addMember)
            // generateHtml(addMember)
            // .then(function() {
                if (addMore === "yes") {
                    addEmployees();
                } else {
                    completeHtml();
                }
            // });
            
        });
    });
}


function beginHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1  text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./results/member.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("begin");
    beginHtml();
}

function createManager(){
    let html="";
for (let index = 0; index < managerArr.length; index++) {
    const element = managerArr[index];
    html+= `
    <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${element.name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${element.id}</li>
                <li class="list-group-item">Email Address: ${element.email}</li>
                <li class="list-group-item">Office Phone: ${element.officeNumber}</li>
            </ul>
            </div>
        </div>
    `
}
return html;
}
function createIntern(){
    let html="";
for (let index = 0; index < internArr.length; index++) {
    const element = internArr[index];
    html+= `
    <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${element.name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${element.id}</li>
                <li class="list-group-item">Email Address: ${element.email}</li>
                <li class="list-group-item">Office Phone: ${element.school}</li>
            </ul>
            </div>
        </div>
    `
}
return html;
}
function createEngineer(){
    let html="";
for (let index = 0; index < engineerArr.length; index++) {
    const element = engineerArr[index];
    html+= `
    <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${element.name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${element.id}</li>
                <li class="list-group-item">Email Address: ${element.email}</li>
                <li class="list-group-item">Office Phone: ${element.github}</li>
            </ul>
            </div>
        </div>
    `
}
return html;
}

function generateHtml(manager,engineer, intern) {
    return new Promise(function(resolve, reject) {
        // const name = member.getName();
        const position = member.getPosition();
        // const id = member.getId();
        // const email = member.getEmail();
        let info = "";
        if (position === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${member.id}</li>
                <li class="list-group-item">Email Address: ${member.email}</li>
                <li class="list-group-item">GitHub: ${member.gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (position === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officeNumber = member.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officeNumber}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("add a member");
        fs.appendFile("./results/member.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
            
    
        
    
    
}

function completeHtml() {
    fs.writeFile("./results/member.html", `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1  text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">
            ${createManager()}
            ${createIntern()}
            ${createEngineer()}
            </div>
            </div>
            </body>
            </html>
    `, function (err) {
                if (err) {
                    console.log(err);
                };
            });
//     const html = ` </div>
//     </div>
    
// </body>
// </html>`;

//     fs.appendFile("./results/member.html", html, function (err) {
//         if (err) {
//             console.log(err);
//         };
//     });
//     console.log("end");
}

startApp();
