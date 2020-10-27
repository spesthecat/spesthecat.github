const inquirer = require('inquirer');
const fs = require('fs');
const marked = require('marked');
const { JSDOM } = require('jsdom');
const Prism = require('prismjs');

function getInput() {
  const questions = [
    {
      name: "PATH",
      type: "input",
      message: "Enter file path:",
    },
    {
      name: "TITLE",
      type: "input",
      message: "Enter title (leave blank for no change)",
    },
  ];
  return inquirer.prompt(questions);
}

async function run() {
  const { PATH, TITLE } = await getInput();
  fs.readFile(PATH, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    const html = marked(data);
    console.log(html);
    const dom = new JSDOM(html, {
      contentType: 'text/html'
    });
    
    Prism.highlightAllUnder(dom.window.document);
    console.log(TITLE); 
    console.log(dom.window.document.body.outerHTML);
  });
}

run();