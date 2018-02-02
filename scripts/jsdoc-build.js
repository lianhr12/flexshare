'use strict';
const jsdoc2md = require('jsdoc-to-markdown');
const fse      = require('fs-extra');
const path     = require('path');

async function js2mdHadnler() {
    let mdcontent = await jsdoc2md.render({files: 'src/main.js'});
    fse.outputFile(path.resolve(process.cwd(), 'docs/flexShare.md'), mdcontent);
}

js2mdHadnler();