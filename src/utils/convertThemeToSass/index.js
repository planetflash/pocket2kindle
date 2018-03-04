const sass = require("node-sass");
const sassUtils = require("node-sass-utils")(sass);
const sassVars = require("../../theme.js");

// Convert js strings to dimenssions
const convertStringToSassDimension = function(result) {
  // Only attempt to convert strings
  if (typeof result !== "string") {
    return result;
  }

  const cssUnits = [
    "rem",
    "em",
    "vh",
    "vw",
    "vmin",
    "vmax",
    "ex",
    "%",
    "px",
    "cm",
    "mm",
    "in",
    "pt",
    "pc",
    "ch"
  ];
  const parts = result.match(/[a-zA-Z]+|[0-9]+/g);
  const value = parts[0];
  const unit = parts[parts.length - 1];
  if (cssUnits.indexOf(unit) !== -1) {
    result = new sassUtils.SassDimension(parseInt(value, 10), unit);
  }

  return result;
};

// Convert theme.js into sass values
const convertThemeToSass = function(keys) {
  keys = keys.split(".");
  let result = sassVars;
  let i;
  for (i = 0; i < keys.length; i++) {
    result = result[keys[i]];
    // Convert to SassDimension if dimenssion
    if (typeof result === "string") {
      result = convertStringToSassDimension(result);
    } else if (typeof result === "object") {
      Object.keys(result).forEach(function(key) {
        const value = result[key];
        result[key] = convertStringToSassDimension(value);
      });
    }
  }
  result = sassUtils.castToSass(result);
  return result;
};

const sassLoaderFunctions = {
  "get($keys)": function(keys) {
    keys = keys.getValue();
    const result = convertThemeToSass(keys);
    return result;
  }
};

module.exports = {
  convertStringToSassDimension,
  convertThemeToSass,
  sassLoaderFunctions
};
