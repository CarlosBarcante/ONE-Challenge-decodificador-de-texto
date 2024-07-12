let resultArea = document.getElementById('result-area');
let resultOriginalValue = resultArea.innerHTML;

function testString(string) {
    const regex = /^[a-z\s]+$/;

    if (!regex.test(string)) {
        return false;
    }

    return true;
}

function createResult(string) {
    return `<h2>${string}</h2>`;
}

function encrypt() {
    let userText = document.getElementById('user-text').value;
    if (!testString(userText)) {
        resultArea.innerHTML = createResult('Use apenas letras minúsculas e sem acento.');
        return;
    }

    let encryptedText = '';
    for (let letra of userText) {
        switch (letra) {
            case 'e':
                encryptedText += 'enter';
                break;
            case 'i':
                encryptedText += 'imes';
                break;
            case 'a':
                encryptedText += 'ai';
                break;
            case 'o':
                encryptedText += 'ober';
                break;
            case 'u':
                encryptedText += 'ufat';
                break;
            default:
                encryptedText += letra;
        }
    }

    resultArea.innerHTML = createResult(encryptedText);
}

function decrypt() {
    let userText = document.getElementById('user-text').value;
    if (!testString(userText)) {
        resultArea.innerHTML = createResult('Use apenas letras minúsculas e sem acento.');
        return;
    }

    let decryptedText = '';
    let i = 0;
    while (i < userText.length) {
        let currentCharacter = userText[i];

        switch (currentCharacter) {
            case 'e':
                decryptedText += 'e';
                i += 5;
                break;
            case 'i':
                decryptedText += 'i';
                i += 4;
                break;
            case 'a':
                decryptedText += 'a';
                i += 2;
                break;
            case 'o':
                decryptedText += 'o';
                i += 4;
                break;
            case 'u':
                decryptedText += 'u';
                i += 4;
                break;
            default:
                decryptedText += currentCharacter;
                i++;
        }
    }

    resultArea.innerHTML = createResult(decryptedText);
}