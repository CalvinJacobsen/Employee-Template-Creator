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
console.log(typeof Employee);

class Manager extends Employee {
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

module.exports = Manager;