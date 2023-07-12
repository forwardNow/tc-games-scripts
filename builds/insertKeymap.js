const { CTX_PATH } = require('./utils');
const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path')

const KEYMAP_SCRIPT_FILE_PATH = resolve(CTX_PATH, './src/scripts/keymap.ts');

const README_FILE_PATH = resolve(CTX_PATH, './readme.md');

const DOC_COMMENTS_REGEX = /(\/\*\*\s*[\s\S]+?\*\/\s*\w+\(\)\s*{)/gm;

const DESCRIPTION_REGEX = /@description\s([\s\S]*?)@/m;

const BIND_REGEX = /@bind\s([\s\S]*?)\s*\*/m;

const METHOD_REGEX = /^\s*(\w*\(\))\s*{/m;

const KEYMAP_START_TEXT = '<!--keymap-start-->';

const KEYMAP_END_TEXT = '<!--keymap-end-->';

function insertKeymap() {
  const comments = getComments();
  writeToReadme(comments);
}

function getComments() {
  const content = readFileSync(KEYMAP_SCRIPT_FILE_PATH, { encoding: 'utf-8' });

  const commentStrList = content.match(DOC_COMMENTS_REGEX)
    .filter((item) => item.includes('@description') && item.includes('@bind'));

  const comments = commentStrList.map((commentStr) => {
    const [ , description ] = commentStr.match(DESCRIPTION_REGEX);
    const [ , bind ] = commentStr.match(BIND_REGEX);
    const [ , method ] = commentStr.match(METHOD_REGEX);


    const desc = description.split(/[\n\r]/)
      .map((item) => {
        return item.trim().replace(/^\*/, '');
      })
      .filter(Boolean)
      .join('<br>');

    return { description: desc, bind, method };
  });

  comments.sort((prev, curr) => {
    if (prev.bind < curr.bind) {
      return -1;
    } else {
      return 1;
    }
  });

  return comments;
}

function writeToReadme(comments) {
  const content = readFileSync(README_FILE_PATH, { encoding: 'utf-8' });

  const tableHeader = ''
  + '| 按键 | 说明 | 宏 |\n'
  + '| --- | --- | --- |\n'

  let tableRows = '';

  comments.forEach(({ description, bind, method }) => {
    const macro =`
(function() {
  import('keymap')
    .then(({ default: keymap }) => {
       keymap.${method};
   });
} ());
    `
      .split(/[\n\r]/gm)
      .filter((item) => Boolean(item.trim()))
      .map((item) => (`\`${item}\``))
      .join('<br>')
    ;

    tableRows += `| ${bind} | ${description} | ${macro} |\n`
  });

  const table = tableHeader + tableRows;

  const replacement = `\n${table}\n`;

  const startIndex = content.indexOf(KEYMAP_START_TEXT) + KEYMAP_START_TEXT.length + 1;
  const endIndex = content.indexOf(KEYMAP_END_TEXT);

  const newContent = content.substring(0, startIndex) + replacement + content.substring(endIndex)

  writeFileSync(README_FILE_PATH, newContent, { encoding: 'utf-8' });
}

module.exports = function (next) {
  insertKeymap()

  next();
}
