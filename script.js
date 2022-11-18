const inquirer = require("inquirer");
const fs = require("fs");

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

  var info = `
    # ${name}
    ### license icon

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
    ## uses
    ${use}
    ## License
    ${license}
    ## Application URL
    ${deployedApp}
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
      choices: [
        "Apache license 2.0",
        "MIT License",
        "Boost Software license 1.0",
        "Eclipse Public license",
        "Mozilla Public License 2.0",
      ],
      name: "license",
    },
  ])
  .then((response) => {
    console.log(response);
    console.log(markDown(response));
  });
