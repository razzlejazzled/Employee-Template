const inquirer = require("inquirer")
const fs = require("fs")
const employees = []
const Manager = require("./Manager")
const Intern = require ("./Intern")
const Engineer = require("./Engineer")
const Employee = require("./Employee")
const render = require("./htmlRenderer")
const { formatWithOptions } = require("util")

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
        const newManager =new Manager(manager.name, manager.id, manager.email, manager.officeNumber)

        

        employees.push(newManager)
        //run this and look at the console log. figure out how to get the information as displayed in the consolelog out, so that it can be pushed into the array. 
        // employees.push(newManager)

       
    
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
        fs.writeFile("index.html", render(employees), () => {})
    
        }
            //write to file
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
        const newEngineer =new Engineer(engineer.name, engineer.id, engineer.email, engineer.github)

        

        employees.push(new Engineer(engineer.name, engineer.id, engineer.email, engineer.github))
       
        
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
        const newIntern =new Intern(intern.name, intern.id,intern.email, intern.school)

        

        employees.push(new Intern(intern.name, intern.id, intern.email, intern.school))
        console.log(employees)
        
        addEmployee();
    })
};


module.exports = {
    managerPrompt,
    addEmployee,
    engineerPrompt,
    internPrompt,

}

