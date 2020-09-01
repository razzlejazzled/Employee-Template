const Employee = require("./Employee")


class Intern extends Employee {
    constructor(name, id, email, school, role,){
    super(name, id, email);
    this.role = Intern
    this.school = school
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return "Intern"
    }
}

module.exports = Intern


// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
