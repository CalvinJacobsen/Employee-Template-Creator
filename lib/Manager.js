import { Employee } from "./Employee";
module.exports = { inquirerFunction };

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
inquirerFunction () {
    
    inquirer.prompt([
        {
            type: 'text',
            name: 'officeNumber',
            message: 'What is the officeNumber of the Manager?',
        },
    ]).then((repsonsesObj) => {
        return repsonsesObj.officeNumber;
    });

}

export class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getOffice() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}


