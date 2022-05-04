const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { tagOptions, pathOptions } = require("./dataSource");

class NewArticle {
  constructor() {
    this.title = "";
    this.tags = [];
    this.folderPath = "";
  }
  /**输入文章标题 */
  articleInput = () => {
    /**如果直接调用 yarn new 【文章名】 */
    const title = process.argv[2];
    if (title) {
      this.title = title;
      createFile();
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
        this.title = res.input;
        this.tagCheckbox();
      });
  };
  /**选择文章标签 */
  tagCheckbox = () => {
    inquirer
      .prompt([
        {
          name: "tagCheckbox",
          type: "checkbox",
          message: "选择文章标签",
          choices: tagOptions,
          default: [""],
        },
      ])
      .then((res) => {
        this.tags = res.tagCheckbox;
        this.folderPathCheckbox();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  folderPathCheckbox = () => {
    inquirer
      .prompt([
        {
          name: "folderPathCheckbox",
          type: "list",
          message: "选择文章所在文件夹路径",
          choices: pathOptions,
          default: [""],
        },
      ])
      .then((res) => {
        this.folderPath = res.folderPathCheckbox;
        this.createFile();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /**创建文件 */
  createFile = () => {
    const date = new Date();
    const formatDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    const temp = `---
title: ${this.title}
date: ${formatDate}
author: reonce
tags: ${[...this.tags]}
location: 成都  
---
`;
    const newPath = `../docs/_posts/${this.folderPath}/${this.title}.md`;
    fs.writeFileSync(path.resolve("__dirname", newPath), temp);
  };
}

new NewArticle().articleInput();
