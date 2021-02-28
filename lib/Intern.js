const Employee = require('./Employee.js');

function inquirerFunction() {

    inquirer.prompt([
        {
            type: 'text',
            name: 'school',
            message: 'What school does this intern go to?',
        },
    ]).then((repsonsesObj) => {
        return repsonsesObj.gitHub;
    });

}
module.exports = { inquirerFunction };

module.export = class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}