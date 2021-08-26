// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What's the name of your project?",
        name: "projectName",
    },
    {
        type: "input",
        message: "Provide a short description of your project.",
        name: "projDesc",
    },
    {
        type: "input",
        message: "Provide the installation instructions for your project.",
        name: "installIns",
    },
    {
        type: "input",
        message: "Provide usage information for your project.",
        name: "usageInfo",
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contGuide",
    },
    {
        type: "list",
        message: "What is your preferred chosen license for your application?",
        name: "license", 
        choices: ["None", "MIT License", "Apache License 2.0", "Mozilla Public 2.0"],
    },
    {
        type: "input",
        message: "What's your GitHub username?",
        name: "userName",
    },
];


// TODO: Create a function to write README file

    

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions).then((response) => {
        const filename = `README.md`;
        // const readMeString = 
      fs.writeFile(filename, generateMarkdown(response), (err) =>
        err ? console.error(err) : console.log('Success!'));
    });
    
}
// Function call to initialize 
init();


