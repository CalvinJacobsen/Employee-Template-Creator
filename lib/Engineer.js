const Employee = require('./Employee.js');

function inquirerFunction() {

    inquirer.prompt([
        {
            type: 'text',
            name: 'gitHub',
            message: 'What is the GitHub username of this engineer?',
        },
    ]).then((repsonsesObj) => {
        return repsonsesObj.gitHub;
    });

}

module.exports = { inquirerFunction };

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;