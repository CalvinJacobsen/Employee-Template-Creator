const { registerPrompt } = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.getRole();
    }
    
    getName() {
        return this.name;
    }

    getId(){
        return this.id;
    }
    
    getEmail(){
        return this.email;
    }

    getRole() {
        let role = 'Employee'
        return role;
    }
}

module.exports = Employee;
