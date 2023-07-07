const { CTX_PATH } = require('./utils');
const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path')

const MAIN_SCRIPT_FILE_PATH = resolve(CTX_PATH, './src/scripts/main.js');

const README_FILE_PATH = resolve(CTX_PATH, './readme.md');

const DOC_COMMENTS_REGEX = /(\/\*\*\s*[\s\S]+?\*\/)/gm;

const DESCRIPTION_REGEX = /@description\s([\s\S]*?)\s*\*/m;

const BIND_REGEX = /@bind\s([\s\S]*?)\s*\*/m;

const KEYMAP_START_TEXT = '<!--keymap-start-->';

const KEYMAP_END_TEXT = '<!--keymap-end-->';

function genKeyMap() {
  const comments = getComments();
  writeToReadme(comments);
}

function getComments() {
  const content = readFileSync(MAIN_SCRIPT_FILE_PATH, { encoding: 'utf-8' });

  const commentStrList = content.match(DOC_COMMENTS_REGEX)
    .filter((item) => item.includes('@description') && item.includes('@bind'));

  const comments = commentStrList.map((commentStr) => {
    const [ , description ] = commentStr.match(DESCRIPTION_REGEX);
    const [ , bind ] = commentStr.match(BIND_REGEX);

    // console.log(description, bind);
    return { description, bind };
  });

  return comments;
}

function writeToReadme(comments) {
  const content = readFileSync(README_FILE_PATH, { encoding: 'utf-8' });

  const tableHeader = ''
  + '| 按键 | 说明 |\n'
  + '| --- | --- |\n'

  let tableRows = '';

  comments.forEach(({ description, bind }) => {
    tableRows += `| ${bind} | ${description} |\n`
  });

  const table = tableHeader + tableRows;

  const replacement = `${KEYMAP_START_TEXT}\n\n${table}\n\n${KEYMAP_END_TEXT}`;

  const startIndex = content.indexOf(KEYMAP_START_TEXT);
  const endIndex = content.indexOf(KEYMAP_END_TEXT) + KEYMAP_END_TEXT.length + 1;

  const newContent = content.substring(0, startIndex) + replacement + content.substring(endIndex)

  writeFileSync(README_FILE_PATH, newContent, { encoding: 'utf-8' });
}

module.exports = function (next) {
  genKeyMap()

  next();
}

genKeyMap();
