import { Employee } from "./Employee";
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
export class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    getSchool(){

    }
    getRole() {
        return 'Intern'
    }
}