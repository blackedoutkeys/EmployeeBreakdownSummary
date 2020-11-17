//global variables
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//path directories
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "teamcreation.html");


// teammates array
const teammates = [];

//the following three constants verify validity of the user input/entry
const validNameEntry = (input) => {
    if (/\d/.test(input) || input === '') {
        return 'Please enter a valid name into the system using only letters!'
    } else {
        return true
    }
}

const validID = (input) => {
    if (isNaN(input) || input === '') {
        return 'Please enter valid ID number';
    } else {
        return true;
    }
}

const validEmailEntry = (input) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input) || input === '') {
        return true;
    } else {
        return 'Please enter a valid e-mail address.'
    }
};

//begins the creation of the user's team members
function createTeam() {
    inquirer.prompt([{
        type: 'list',
        message: 'What is your current role at the company?',
        name: 'userChoice',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'No other employees to enter'
        ]
    }]).then(userInput => {
        switch (userInput.userChoice) {
            case 'Manager':
                addManager();
                break;
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            case 'No other employees to enter':
                render(teammates);
                break
        }
    })
}
//adds a manager role to the company
function addManager() {

    inquirer.prompt([

        {
            type: 'input',
            message: 'What is your name?',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'managerID'
        },
        {
            type: 'input',
            message: 'What is your Office Number?',
            name: 'managerOfficeNumber'
        },

    ]).then(userInput => {
        console.log(userInput);

        const manager = new Manager(userInput.managerName, userInput.managerEmail, userInput.managerID, userInput.managerOfficeNumber);
        teammates.push(manager)

        createTeam();
    })
}
//adds an engineer role to the company

function addEngineer() {
    inquirer.prompt([

        {
            type: 'input',
            message: 'What is your name?',
            name: 'engineerName'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'engineerID'
        },
        {
            type: 'input',
            message: 'What is your Github handle?',
            name: 'engineerGithub'
        },

    ]).then(userInput => {
        console.log(userInput);

        const engineer = new Engineer(userInput.engineerName, userInput.engineerEmail, userInput.engineerID, userInput.engineerGithub);
        teammates.push(engineer)

        createTeam();
    })
}
//adds a intern role to the company

function addIntern() {
    inquirer.prompt([

        {
            type: 'input',
            message: 'What is your name?',
            name: 'internName'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'internEmail'
        },
        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'internID'
        },
        {
            type: 'input',
            message: 'What is the name of the school you attended?',
            name: 'internSchool'
        },

    ]).then(userInput => {
        console.log(userInput);

        const intern = new Intern(userInput.internName, userInput.internEmail, userInput.internID, userInput.internSchool);
        teammates.push(intern)

        createTeam();
    })
}

module.exports = teammates;

createTeam();