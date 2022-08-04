const ciphering = (letter, codeA, num, offset) => {
  const lettersOfAlphabet = 26;
  return ((letter - (codeA + num) + offset) % lettersOfAlphabet) + codeA + num;
};

const encodeOrDecode = (offset, message, num) => {
  if (typeof message !== 'string') {
    throw new TypeError('message undefined');
  }
  let finalMessage = '';
  for (const letter of message) {
    const letterCode = letter.charCodeAt();
    const codeUppercaseA = 65;
    const codeUppercaseZ = 90;
    const codeLowercaseA = 97;
    const codeLowercaseZ = 122;
    if (letterCode >= codeUppercaseA && letterCode <= codeUppercaseZ) {
      const upperCase = ciphering(letterCode, codeUppercaseA, num, offset);
      finalMessage += String.fromCharCode(upperCase);
    } else if (letterCode >= codeLowercaseA && letterCode <= codeLowercaseZ) {
      const lowerCase = ciphering(letterCode, codeLowercaseA, num, offset);
      finalMessage += String.fromCharCode(lowerCase);
    } else {
      finalMessage += String.fromCharCode(letterCode);
    }
  }
  return finalMessage;
};

const encode = (offset, message) => {
  return encodeOrDecode(offset, message, 0);
};

const decode = (offset, message) => {
  return encodeOrDecode(-offset, message, 25);
};

const cipher = {
  ciphering,
  encodeOrDecode,
  encode,
  decode,
};

export default cipher;