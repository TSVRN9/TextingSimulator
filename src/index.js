import CryptoJS from 'crypto-js';
import axios from 'axios';

import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';
import intersect from '@alpinejs/intersect';

Alpine.plugin(persist);
Alpine.plugin(intersect);

// make all these things avaliable in the html
window.Alpine = Alpine;
window.decrypt = decrypt;
window.search = search;
window.scrollToBottom = scrollToBottom;
window.distanceToBottom = distanceToBottom;
window.params = new URLSearchParams(window.location.search);

// clear window params
history.pushState(null, "", location.href.split("?")[0]);

/**
 * @param {string} password 
 * @param {string} filename 
 * @returns {object}
 */
async function decrypt(password, filename) {
    const { ciphertext, salt, iv } = (await axios.get(`./encrypted/${filename}`)).data;
    const encrypted = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(ciphertext),
        salt: CryptoJS.enc.Base64.parse(salt),
        iv: CryptoJS.enc.Base64.parse(iv),
    })
    const decrypted = CryptoJS.AES.decrypt(encrypted, password);
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
}

let files = []

async function search(password) {
    if (!files.length) {
        files = (await axios.get('./encrypted/data.json')).data;
    }
    
    console.log(files);

    for (const file of files) {
        try {
            const d = await decrypt(password, file);
            return [file, d];
        } catch (e) {}
    }
    
    throw Error('None Found');
}

async function registerServiceWorker() {
    // quit if localhost
    if (location.hostname == 'localhost') return;

    if ('serviceWorker' in navigator) {
        try {
            // trick to get parcel to not compile service-worker.js
            const filename = 'service-worker.js';
            const url = new URL(filename, import.meta.url);
            const registration = await navigator.serviceWorker.register(url);

            if (registration.installing) {
              console.log("Service worker installing");
            } else if (registration.waiting) {
              console.log("Service worker installed");
            } else if (registration.active) {
              console.log("Service worker active");
            }
        } catch (e) {
            console.error(e);
        }
    }
}

function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function distanceToBottom() {
    return Math.abs(document.documentElement.scrollTop + window.innerHeight - document.body.scrollHeight);
}

Alpine.start();