import inquirer from 'inquirer';

const response = await inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then (answers => console.log(answers))

console.log(response.name)
// const fs = require('fs');

// const generatePage = require('./src/page-template.js')

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check it out')
// })