const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
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
      message: "Whats your license?",
      name: "license",
    },
  ])
  .then((response) => {
    // appendToHtml(response);
  });
