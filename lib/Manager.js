const Employee = require('./Employee');

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
console.log(Employee.constructor);

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOffice() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;

