const inquirer = require("inquirer")
const fs = require("fs")

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
        addEmployee();
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
        addEmployee();
    })
}