'use strict';

const CryptoJS = require("crypto-js");
const fs = require('fs');
const path = require('path');
const colors = require('colors');
const { password } = require('./config.json');
const utils = require("./unencrypted/utils");

const directory = path.join(__dirname, 'unencrypted');
const encryptedDirectory = path.join(__dirname, 'dist', 'encrypted')

// if (!fs.existsSync(path.join(__dirname, 'dist'))) fs.mkdirSync(path.join(__dirname, 'dist'));
if (!fs.existsSync(encryptedDirectory)) fs.mkdirSync(encryptedDirectory, { recursive: true });

console.log();
console.log(`Attempting to encrypt directory: ${directory.toString().cyan} to ${encryptedDirectory.toString().cyan}`);

const files = 
    Promise.all(fs.readdirSync(directory)
        .filter(f => f != 'utils.js') // ignore utils.js
        .map(async filename => {
            
            const filepath = path.join(directory, filename);
            const contents = fs.readFileSync(filepath, { encoding: 'UTF-8' });

            const data = require(filepath);
            const key = data.password ?? password; // checks file for file password
            const { ciphertext, salt, iv } = await CryptoJS.AES.encrypt(JSON.stringify(data, null, null), key);

            // write to ./dist
            // .js to .json
            const encryptedFilename = CryptoJS.SHA3('texting-simlol' + filename).toString(CryptoJS.enc.Hex) + '.json';
            const encryptedpath = path.join(encryptedDirectory, encryptedFilename);
        
            const json = JSON.stringify({ 
                    ciphertext: ciphertext.toString(CryptoJS.enc.Base64), 
                    salt: salt.toString(CryptoJS.enc.Base64),
                    iv: iv.toString(CryptoJS.enc.Base64), 
                }, null, null);

            fs.writeFileSync(encryptedpath, json);
        
            console.log(`Encrypted ${filename.cyan} to ${encryptedFilename.toString().cyan}`);
        
            return encryptedFilename;
        }))
        .then(f => {
            fs.writeFileSync(path.join(encryptedDirectory, 'data.json'), JSON.stringify(f, null, null));
            console.log(`Created data.json`.cyan);
            console.log();
        });
