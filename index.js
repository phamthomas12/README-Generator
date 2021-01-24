// TODO: Include packages needed for this application
const readme_export = 'exports/README.md';
const readme_template = require('./readme_template');

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer.prompt([
	{
        type: 'input',
		message: 'Project Title: ',
		name: 'projectTitle'
	},
	{
		type: 'input',
		message: 'Description of Project: ',
		name: 'description'
	},
	{
		type: 'input',
		message: 'Do you require a Table of Contents? ',
		name: 'toc'
	},
	{
		type: 'input',
		message: 'Installation Instructions: ',
		name: 'installation'
	},
	{
		type: 'input',
		message: 'Usage Instructions: ',
		name: 'usage'
	},
	{
		type: 'input',
		message: 'Insert Names of Contributors, and their GitHub Names: ',
		name: 'contributors'
    },
    {
		type: 'input',
		message: 'Got any tests? ',
		name: 'tests'
	},
	{
		type: 'input',
		message: 'Please Select a License: ',
		name: 'license'
	},
	{
		type: 'input',
		message: 'Some badges if you will? ',
		name: 'badges'
	},
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your E-mail address?',
        name: 'email',
      },
])
.then((response) => {
	// Turn the object into an array and parse this to the funciton.
	let responseArray = [];
	for (const item in response){
		responseArray.push(response[item]);
	}
	console.log(responseArray);
	// Merge the responses with the template.
	let readme = readme_template.readmeTemplate(...responseArray);
	fs.writeFile(readme_export, readme, (err) =>
		err ? console.error(err) : console.log('File exported')
	);
});

