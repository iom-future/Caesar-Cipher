//Array of Alphabets
let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function encrypt(key,text){
    let textArray = text.split("");
    let encryptedText = "";
    textArray.forEach(letter => {
        encryptedText+= alphabets[(alphabets.indexOf(letter) + key) % 26];
    });

   return encryptedText;
}

function decrypt(key, text){
    let encryptedTextArray = text.split("");
    let decryptedText = "";
    encryptedTextArray.forEach(letter => {
        encryptedText+= alphabets[(alphabets.indexOf(letter) - key) % 26];
    });

   return decryptedText;
}
let encryption = encrypt(3,"hello");
let decryption = decrypt(3,encryption);
console.log(encryption);
console.log(decryption);