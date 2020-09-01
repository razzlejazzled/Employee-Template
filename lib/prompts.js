const inquirer = require("inquirer")
const fs = require("fs")
const htmlRender = require("./htmlRenderer")
const employees = []
const Manager = require("./Manager")
const Intern = require ("./Intern")
const Engineer = require("./Engineer")
const Employee = require("./Employee")

managerPrompt();

function managerPrompt(){
   return inquirer.prompt([
        {
            message: "What is your manager's name?",
            name: "name"
        },
        {
            message: "What is your manager's id?",
            name: "id"
        },
        {
            message: "What is your manager's office number?",
            name: "officeNumber"
        },
        {
            message: "What is your manager's email?",
            name: "email"
        },
    ])
    .then(function(manager){
        const newManager = new Manager(name, id, email, officeNumber)
        //run this and look at the console log. figure out how to get the information as displayed in the consolelog out, so that it can be pushed into the array. 
        employees.push(newManager)
        console.log(manager)
    
        addEmployee();
    })
}

function addEmployee() {
    return inquirer.prompt([
        {
            type: "list",
            message: "Who would you like to add to the team?",
            name: "engOrInt",
            choices: ["Engineer", "Intern", "Quit"],
        }
    ])
    .then(function ({engOrInt}) {
        if (engOrInt === "Engineer") {
            engineerPrompt();
        } else if (engOrInt === "Intern") {
            internPrompt();
        } else {
            fs.appendFile("employee.txt", JSON.stringify(manager), function(err){
            if (err) throw err;
            console.log('Updated!');
        })
            //write to file
        }
    });
}

function engineerPrompt() {
    return inquirer.prompt ([
        {
            message: "What is your engineer's name?",
            name: "name",
        },
        {
            message: "What is your engineers id?",
            name: "id"
        },
        {
            message: "What is your engineer's email?",
            name: "email"
        },
        {
            message: "What is your engineer's github profile name?",
            name: "github",
        },
    ])
    .then(function(engineer){
        console.log(engineer)
        fs.appendFile("employee.txt", JSON.stringify(engineer), function(err){
            if (err) throw err;
            console.log('Updated!');
        addEmployee();
    })
})
}


function internPrompt(){
    return inquirer.prompt ([
        {
            message: "What is your intern's name?",
            name: "name"
        },
        {
            message: "What is your intern's id?",
            name: "id",
        },
        {
            message: "What is your intern's email?",
            name: "email"
        },
        {
            message: "What is your intern's school?",
            name: "school"
        }
    ])
    .then(function(intern){
        console.log(intern)
        fs.appendFile("employee.txt", JSON.stringify(intern), function(err){
            if (err) throw err;
            console.log('Updated!');
        addEmployee();
    })
});
}

module.exports = {
    managerPrompt,
    addEmployee,
    engineerPrompt,
    internPrompt,

}

module.exports = managerPrompt