'use strict';

const CryptoJS = require("crypto-js");
const fs = require('fs');
const path = require('path');
const colors = require('colors');
const { password } = require('./config.json');

const directory = path.join(__dirname, 'unencrypted');
const encryptedDirectory = path.join(__dirname, 'dist', 'encrypted')

// if (!fs.existsSync(path.join(__dirname, 'dist'))) fs.mkdirSync(path.join(__dirname, 'dist'));
if (!fs.existsSync(encryptedDirectory)) fs.mkdirSync(encryptedDirectory, { recursive: true });

console.log();
console.log(`Attempting to encrypt directory: ${directory.toString().cyan} to ${encryptedDirectory.toString().cyan}`);

const files = 
    Promise.all(fs.readdirSync(directory)
        .map(async filename => {
            const filepath = path.join(directory, filename);
            const contents = fs.readFileSync(filepath, { encoding: 'UTF-8' });

            const data = require(filepath);
            const { ciphertext, salt, iv } = await CryptoJS.AES.encrypt(JSON.stringify(data, null, null), password);

            // write to ./dist
            // .js to .json
            const encryptedFilename = filename.substring(0, filename.length - '.js'.length) + '.json';
            const encryptedpath = path.join(encryptedDirectory, encryptedFilename);
        
            fs.writeFileSync(encryptedpath, 
                JSON.stringify({ 
                    ciphertext: ciphertext.toString(CryptoJS.enc.Base64), 
                    salt: salt.toString(CryptoJS.enc.Base64),
                    iv: iv.toString(CryptoJS.enc.Base64), 
                }, null, null));
        
            console.log(`Encrypted ${filename.cyan} to ${encryptedFilename.toString().cyan}`);
        
            return encryptedFilename;
        }))
        .then(f => {
            fs.writeFileSync(path.join(encryptedDirectory, 'data.json'), JSON.stringify(f, null, null));
            console.log(`Created data.json`.cyan);
            console.log();
        });
