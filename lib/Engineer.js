const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, role, github){
        super(name, id, email);
        this.role = Engineer
        this.github = github
    }
    getGithub(){

    };

    getRole(){
        return "Engineer"
    }
}
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
