import { Employee } from "./Employee";

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

export class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}