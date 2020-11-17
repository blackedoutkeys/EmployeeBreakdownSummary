const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function createTeam(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'What is your current role at the company?',
            name: 'userChoice',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
                'No other employees to enter'
            ]
        }
    ]).then(userInput => {
        switch(userInput.userChoice){
            case 'Manager': addManager(); break;
            case 'Engineer': addEngineer(); break;
            case 'Intern': addIntern(); break;
            case 'No other employees to enter': render(teammates); break
        }
    })
}

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

        const engineer = new engineer(userInput.engineerName, userInput.engineerEmail, userInput.engineerID, userInput.engineerGithub);
        teammates.push(engineer)

        createTeam();
    })
}

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

        const intern = new intern(userInput.internName, userInput.internEmail, userInput.internID, userInput.internOfficeNumber);
        teammates.push(intern)

        createTeam();
    })
}

module.exports = teammates;

createTeam();