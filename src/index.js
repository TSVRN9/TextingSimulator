async function decrypt(password, filename) {
    const encryptedFile = await axios.get(`encrypted/${filename}`).data;
    const { ciphertext, salt } = JSON.parse(encryptedFile);
    const decrypted = CryptoJS.AES.decrypt({ ciphertext, salt });
    return JSON.parse(decrypted);
}
