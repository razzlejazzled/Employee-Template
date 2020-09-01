const prompts = require("./prompts")

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName()
    getID()
    getEmail()
    getRole(){
        return "Employee"
    }
}

// TODO: Write code to define and export the Employee class
//start with this one and extend it out to the others. 