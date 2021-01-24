const readmeTemplate = (
	projectTitle,
	description,
	toc,
	installation,
	usage,
	contributors,
	tests,
	license,
	badges,
	github,
	email
	
) =>
`# ${projectTitle}
## Description
${description}
## Table of Contents
${toc}
## Installation
${installation}
## Usage
${usage}
## Contributors
${contributors}
## License
${license}
## Badges
${badges}
## Github User
${github}
## Email
${email}

> This README.md created with pro-readme-generator by @phamthomas12`;

module.exports = {
	readmeTemplate,
};