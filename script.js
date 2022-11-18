const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "Whats your user name?",
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
      message: "Who also contributed?",
      name: "contribute",
    },
    {
      type: "list",
      message: "Whats your license?",
      choices: ["1", "2", "3"],
      name: "license",
    },
  ])
  .then((response) => {
    console.log(response);
  });
