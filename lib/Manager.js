import { Employee } from "./Employee";

function inquirerFunction() {

    inquirer.prompt([
        {
            type: 'text',
            name: 'officeNumber',
            message: 'What is the office number of the Manager?',
        },
    ]).then((repsonsesObj) => {
        return repsonsesObj.officeNumber;
    });

}
module.exports = { inquirerFunction };

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