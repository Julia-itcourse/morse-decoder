const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function convertMorseTable() {
  const resultMap = {};
  for (const [key, value] of Object.entries(MORSE_TABLE)) {
    let newKey = key.replace(/-/g, "11");
    newKey = newKey.replace(/\./g, "10");
    newKey = newKey.padStart(10, "0");
    resultMap[newKey] = value;
  }
  resultMap["**********"] = " ";

  return resultMap;
}

const CONVERTED_MORS_TABLE = convertMorseTable();

function decode(string) {
  const result = chunkString(string, 10);
  const convertedArray = result.map((chunk) => CONVERTED_MORS_TABLE[chunk]);
  const consvertedString = convertedArray.join("");
  return consvertedString;
}

function chunkString(str, length) {
  const chunkSize = Math.ceil(str.length / length);
  const result = Array(chunkSize);
  let startPosition = 0;

  for (let i = 0; i < chunkSize; i++) {
    result[i] = str.substr(startPosition, length);
    startPosition += length;
  }

  return result;
}

module.exports = {
  decode,
};
