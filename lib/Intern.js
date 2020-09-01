const Employee = require("./Employee")
const prompts = require("./prompts")

class Intern extends Employee {
    constructor(name, id, email, role, school){
    super(name, id, email);
    this.role = Intern
    this.school = school
    }
    getSchool(){

    }
    getRole(){
        return "Intern"
    }
}




// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
