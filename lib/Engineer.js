import { Employee } from "./Employee";

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
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