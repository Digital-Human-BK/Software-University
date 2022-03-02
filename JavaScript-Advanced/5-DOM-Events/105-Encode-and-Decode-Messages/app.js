function encodeAndDecodeMessages() {
    const encodeBtn = document.querySelectorAll('#main button')[0];
    const decodeBtn = document.querySelectorAll('#main button')[1];
    const inputMsg = document.querySelectorAll('#main textarea')[0];
    const outputMsg = document.querySelectorAll('#main textarea')[1];

    encodeBtn.addEventListener('click', encodeMsg);
    decodeBtn.addEventListener('click', decodeMsg);

    function encodeMsg() {
        let encodedMessage = '';

        for (const ch of inputMsg.value) {
            let code = ch.charCodeAt();
            encodedMessage += String.fromCharCode(code + 1);
        }
        outputMsg.value = encodedMessage;
        inputMsg.value = '';
    }

    function decodeMsg() {
        let decodedMessage = '';
        for (const ch of outputMsg.value) {
            let code = ch.charCodeAt();
            decodedMessage += String.fromCharCode(code - 1);
        }
        outputMsg.value = decodedMessage;
    }
}