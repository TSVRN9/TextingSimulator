const CryptoJS = require('crypto-js');

async function decrypt(password, filename) {
    const { ciphertext, salt, iv } = (await axios.get(`./encrypted/${filename}`)).data;
    const encrypted = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(ciphertext),
        salt: CryptoJS.enc.Base64.parse(salt),
        iv: CryptoJS.enc.Base64.parse(iv),
    })
    console.log(encrypted);
    const decrypted = CryptoJS.AES.decrypt(encrypted, password);
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
}

async function registerServiceWorker() {
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

window.on('load', () => {
    registerServiceWorker();
});