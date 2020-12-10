var inquirer = require("inquirer");
var fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')




// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your projects title?',
        name: 'title'
    },
    {
        type:'input',
        message: 'What is the description?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the use of the project?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What lisence are you using?',
        name: 'lisense',
        choices: [
            'MIT',
            'Mozilla Public License 2.0',
            'Apache license 2.0',
            'ISC',
            'Microsoft Public License'
        ]
    },
    {
        type: 'input',
        message: 'Who is contributing?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Will this be tested?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'githubUsername'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },

]


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(data => {
        const makeReadMe = generateMarkdown(data)
        writeToFile('README.md', makeReadMe)
    });
}

// function call to initialize program
init();
