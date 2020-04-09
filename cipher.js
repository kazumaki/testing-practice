const cipher = (() => {
  const offset = 2;

  const utilityFunction = (string, encrypt) => {
    const stringArray = string.split('');
    
    const encryptedArray = stringArray.map((char) => {
      if (char.charCodeAt(0) < 'a'.charCodeAt(0) || char.charCodeAt(0) > 'z'.charCodeAt(0)) {
        return char;
      }
      
      let newKeyCode;

      if (encrypt) {
        newKeyCode = char.charCodeAt(0) + offset % 26;
        newKeyCode = newKeyCode > 'z'.charCodeAt(0) ? 'a'.charCodeAt(0) + newKeyCode - 'z'.charCodeAt(0) - 1 : newKeyCode;
      } else {
        newKeyCode = char.charCodeAt(0) - offset % 26;
        newKeyCode = newKeyCode < 'a'.charCodeAt(0) ? 'z'.charCodeAt(0) - ('a'.charCodeAt(0) - newKeyCode) + 1: newKeyCode;
      }
      
  
      return String.fromCharCode(newKeyCode);
    });
  
    return encryptedArray.join('');
  }

  const encryptString = (string) => {
    return utilityFunction(string, true);
  }

  const decryptString = (string) => {
    return utilityFunction(string, false);
  }

  return {encryptString, decryptString};
})();

export default cipher;