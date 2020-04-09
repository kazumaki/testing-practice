const reverseString = (string) => {
  const newStringArray = [];

  for (let i = string.length - 1; i >= 0; i -= 1) {
    newStringArray.push(string[i]);
  }

  return newStringArray.join('');
}

export default reverseString;