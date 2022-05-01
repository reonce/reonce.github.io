const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

typeInput();

function typeInput() {
  /**如果直接调用 yarn new 【文章名】 */
  const title = process.argv[2];
  if (title) {
    createFile(title, []);
    return;
  }
  inquirer
    .prompt([
      {
        name: "input",
        type: "input",
        message: "输入你想新建的文章标题",
        default: "未命名文件",
      },
    ])
    .then((res) => {
      typeCheckbox(res.input);
    });
}
/**选择标签 */
function typeCheckbox(title) {
  inquirer
    .prompt([
      {
        name: "checkbox",
        type: "checkbox",
        message: "选择文章标签",
        choices: [
          "JavaScript",
          "TypeScript",
          "Array",
          "Object",
          "React",
          "浏览器工作原理",
        ],
        default: ["JavaScript"],
      },
    ])
    .then((res) => {
      createFile(title, res.checkbox);
    })
    .catch((err) => {
      console(err);
    });
}

function createFile(title, tags) {
  const date = new Date();
  const formatDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  const temp = `---
title: ${title}
date: ${formatDate}
author: reonce
tags: ${[...tags]}
location: 成都  
---
`;
  const newPath = `../docs/_posts/${title}.md`;
  fs.writeFileSync(path.resolve("__dirname", newPath), temp);
}
