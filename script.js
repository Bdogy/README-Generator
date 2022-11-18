const inquirer = require("inquirer");
const fs = require("fs");
const licenseArr = [
  "Apache license 2.0",
  "MIT License",
  "Boost Software license 1.0",
  "Eclipse Public license",
  "Mozilla Public License 2.0",
];

const markDown = (response) => {
  const {
    name,
    userName,
    description,
    use,
    install,
    contribute,
    license,
    test,
    deployedApp,
    media,
  } = response;

  const iconIndex = licenseArr.indexOf(license);

  const licenseIcons = [
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]",
    "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]",
  ];

  var info = `
# ${name}
### license icon
${licenseIcons[iconIndex]}

## Description
${description}
## Installation
${install}
## Media
${media}
## Credits
${userName}
${"https://github.com/" + userName}
${contribute}
## Testing
${test}
## Uses
${use}
## License
${license}
## Application URL
${deployedApp}

## Questions
if you have any questions got to me github profile to contact me
${"https://github.com/" + userName}
`;
  return info;
};

inquirer
  .prompt([
    {
      type: "input",
      message: "Whats your username?",
      name: "userName",
    },
    {
      type: "input",
      message: "whats the Project name?",
      name: "name",
    },
    {
      type: "input",
      message: "What does it do?",
      name: "description",
    },
    {
      type: "input",
      message: "What are the install instructions",
      name: "install",
    },
    {
      type: "input",
      message: "What are is the usage?",
      name: "use",
    },
    {
      type: "input",
      message: "Any testing?",
      name: "test",
    },
    {
      type: "input",
      message: "Who also contributed?",
      name: "contribute",
    },
    {
      type: "input",
      message: "any media? add the link!",
      name: "media",
    },
    {
      type: "input",
      message: "deployed app link:",
      name: "deployedApp",
    },
    {
      type: "list",
      message: "Whats your license?",
      choices: licenseArr,
      name: "license",
    },
  ])
  .then((response) => {
    console.log(response);
    console.log(markDown(response));
    fs.writeFile("README.md", markDown(response), (error) => {
      error ? console.log(error) : console.log("appended to README");
    });
  });
