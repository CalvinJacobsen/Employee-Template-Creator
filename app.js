const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const EventEmitter = require("events");

var addAdditional = true;
var id = 0;

while (addAdditional == true) {

    addAdditional = false;
    //asking questions for object implimentation
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the name of this employee?',
        },
        {
            type: 'list',
            name: 'role',
            message: 'What kind of employee is this?',
            choices: ['Manager', 'Intern', 'Engineer'],
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the employee\'s email?',
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: 'What is the office number of the Manager?',
            when: (responsesObj) => responsesObj.role == 'Manager'
        },
        {

            type: 'text',
            name: 'gitHub',
            message: 'What is the GitHub username of this engineer?',
            when: (responsesObj) => responsesObj.role == 'Engineer'
        },
        {
            type: 'text',
            name: 'school',
            message: 'What school does this intern go to?',
            when: (responsesObj) => responsesObj.role == 'Intern'
        },
        {
            type: 'text',
            name: 'addEmp',
            message: 'Would you like to add another employee?',
            default: "yes"
        }
    ]).then((responsesObj) => {

        id += 1;

        switch (responsesObj.role) {
            case 'Manager':
                let manager = new Employee(responsesObj.name, id, responsesObj.email);
                manager.officeNumber = responsesObj.officeNumber;

                //console log below returns 'Employee' when expecting to return 'Manager'
                console.log(manager.getRole())
                render(manager);
                break;
            case 'Engineer':
                let engineer = new Employee(responsesObj.name, id, responsesObj.email);

                render(engineer);
                break;
            case 'Intern':
                let intern = new Employee(responsesObj.name, id, responsesObj.email);
                render(intern);
                break;
        }

        if (responsesObj.addEmp[0].toLowerCase() == 'y') {
            addAdditional = true;
        }

    })
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
