const fs = require('fs');
const path = require('path');

const newVersion = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json')).toString()).version;

const template = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.template.json')).toString());

template.version = newVersion;

fs.writeFileSync(path.resolve(__dirname, 'package.template.json'), JSON.stringify(template, undefined, 2));
