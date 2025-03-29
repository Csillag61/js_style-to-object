'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';'); // Split the input string by ';'
  const result = {};

  for (let line of lines) {
    line = line.trim(); // Remove leading/trailing spaces

    if (!line) {
      continue;
    } // Skip empty lines

    const [key, value] = line.split(':'); // Split by ':' into key and value

    if (key && value) {
      result[key.trim()] = value.trim(); // Trim and assign the key-value pair
    }
  }

  return result;
}

module.exports = convertToObject;
