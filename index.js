var inquirer = require("inquirer");
var fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')




// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your projects title?',
        name: 'Title'
    },
    {
        type:'input',
        message: 'What is the description?',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'What is the use of the project?',
        name: 'Usage'
    },
    {
        type: 'checkbox',
        message: 'What lisence are you using?',
        name: 'Lisense',
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
        name: 'Contributing'
    },
    {
        type: 'input',
        message: 'Will this be tested?',
        name: 'Tests'
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'Questions'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Questions'
    },

]


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        const makeReadMe = generateMarkdown(answers)
        writeToFile('README.md', makeReadMe)
    });
}

// function call to initialize program
init();
