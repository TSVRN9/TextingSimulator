'use strict';

const CryptoJS = require("crypto-js");
const fs = require('fs');
const path = require('path');
const terser = require('terser');
const { password } = require('./config.json');

const directory = path.join(__dirname, 'unencrypted');
const encryptedDirectory = path.join(__dirname, 'dist', 'encrypted')

const files = fs.readdirSync(directory);

files.forEach(async filename => {
        const filepath = path.join(directory, filename);
        const contents = fs.readFileSync(filepath, { encoding: 'UTF-8' });
        
        eval(contents); // read a js object
        const { ciphertext, salt } = await CryptoJS.AES.encrypt(JSON.stringify(code, null, null), password);

        // write to ./dist
        // .js to .json
        const encryptedpath = path.join(encryptedDirectory, filename.substring(0, filename.length - '.js'.length) + '.json');
        fs.writeFileSync(encryptedpath, JSON.stringify({ ciphertext, salt }, null, null));
    });

fs.writeFileSync(path.join(encryptedDirectory, 'data.json'), JSON.stringify(files, null, null));