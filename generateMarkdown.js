// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license == "MIT License"){
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    } else if (license == "Apache License 2.0") {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
        } else if (license == "Mozilla Public 2.0") { 
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
        } else {
            return ``;
    }
    };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license == "MIT License") {
        return `(https://opensource.org/licenses/MIT)`;
    } else if (license == "Apache License 2.0") {
        return `(https://opensource.org/licenses/Apache-2.0)`;
        } else if (license == "Mozilla Public 2.0") {
            return `(https://opensource.org/licenses/MPL-2.0)`;
            } else {
                return `None`;
    }
    };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseBadge, licenseLink) {
    return `
## License

${licenseBadge+licenseLink}
`
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(response) {

    let licenseBadge = renderLicenseBadge(response.license)
    let licenseLink = renderLicenseLink(response.license)
    let licenseSection = renderLicenseSection(licenseBadge, licenseLink)
    return `# ${response.projectName}
    
# Table of Contents
    
1. [Description](#description)
2. [Installation](#installations)
3. [Usage](#usage)
4. [License](#license)
5. [Contributor](#contributor)
6. [Contact](#contact)


## Description
${response.projDesc}
    
## Installations
${response.installIns}
    
npm init -y

npm install bad math

npm install inquirer
      
## Usage
${response.usageInfo}
      
${licenseSection}
      
## Contributors
${response.contGuide}
    
## Contact
[Github Profile](https://www.github.com/${response.userName})
    
`;
    
}
module.exports = generateMarkdown;