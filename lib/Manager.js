const Employee = require("./Employee")

class Manager extends Employee{
    constructor(name, id, email, role, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
        this.role = Manager
    }
    getOfficeNumber(){

    }

    getRole(){
        return "Manager"
    }
}





// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
