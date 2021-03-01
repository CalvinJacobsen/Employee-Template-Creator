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

//setting global variables
var id = 0;
var employees = [];

//creating async function for our inquier prompt so we call call it again if the user wants to add another member
async function addEmployee() {

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
            type: 'confirm',
            name: 'addEmp',
            message: 'Would you like to add another employee?',
            default: 'Y'
        }
    ]).then((responsesObj) => {

        //increases id for next member
        id += 1;
        
        //switch case to create our classes depending on the role response
        switch (responsesObj.role) {
            case 'Manager':
                let manager = new Manager(responsesObj.name, id, responsesObj.email, responsesObj.officeNumber);
                employees.push(manager);
                break;
            case 'Engineer':
                let engineer = new Engineer(responsesObj.name, id, responsesObj.email, responsesObj.gitHub);
                employees.push(engineer);
                break;
            case 'Intern':
                let intern = new Intern(responsesObj.name, id, responsesObj.email, responsesObj.school);
                employees.push(intern);
                break;
        }

        //checking to see if the user wants to add another member
        if (responsesObj.addEmp == true) {
            console.log('--------------------------------')
            //calls questions again
            addEmployee();
        }
        else {
            //writing to team.html all of the employees that we've added to the employee array
            fs.writeFile('./output/team.html', render(employees), (err) =>
                err ? console.error(err) : console.log('Look in the output folder for your newly created webpage.'))

        }

    })

}

//function to call our inquirer prompts at the start of the node call
addEmployee();