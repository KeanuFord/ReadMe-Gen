// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Required: 
//  - Title
//  - Description
//  - Table of Contents
//  - Installation
//  - Usage information
//  - License
//  - Contribution guidelines
//  - Test instructions
//  - Questions (how to reach me with additional questions)
//      - Email
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe the project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Explain how to install',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Explain how to use this:',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'How would you like this licensed?',
            name: 'license',
            choices: ["Apache 2.0", "Eclipse", "MIT", "Unlicense"]
        },
        {
            type: 'input',
            message: 'State the contribution guidelines:',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Describe the process of testing the project:',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Contact info for reaching out:',
            name: 'contact',
        },
    ])
    .then((response) => {
        console.log(`Project: ${response.title}`)
        let badge = "";
        switch(response.license) {
            case 'Apache 2.0':
                badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case 'Eclipse':
                badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
                break; 
            case 'MIT':
                badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                break;
            case 'Unlicense':
                badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
                break;
            default:
                console.log('License error');
        }
        const readMe = 
`
# ${response.title} 

## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Testing](#testing)
- [Contact](#contact)

## Installation
${response.install}

## Usage
${response.usage}

## Licence ${badge}
${response.license}

## Contribution
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/)
${response.contribution}

## Testing
${response.test}

## Contact
${response.contact}
Email: KeanuF2017@gmail.com
Github: Github: https://github.com/KeanuFord
`

        fs.writeFile(__dirname +'/output/README.md', readMe, (err) => {
        err ? console.error(err) : console.log('ReadMe Created in output folder');
        });

    });