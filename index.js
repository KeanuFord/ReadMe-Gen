const fs = require('fs');
const colors = require('colors');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your Name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What city do you live in?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Say something about yourself: ',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'LinkedIn username: ',
            name: 'linkedIn',
        },
        {
            type: 'input',
            message: 'Github URL: ',
            name: 'github',
        },
    ])
    .then((response) => {
        console.log(`Name: ${response.name}`)
        const html = 
        `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width", initial-scale="1.0" />
                <title>Portfolio</title>
            </head>
            <body>
                <h1>Portfolio: ${response.name}</h1>
                <p>
                Location: ${response.location} <br>
                Bio: ${response.bio} <br>
                LinkedIn: ${response.linkedIn} <br>
                Github: ${response.github}
            </body>
        </html>
        `

        fs.writeFile('index.html', html, (err) => {
        err ? console.error(err) : console.log('Html Created!');
        });

    });