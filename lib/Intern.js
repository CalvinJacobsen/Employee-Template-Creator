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

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;