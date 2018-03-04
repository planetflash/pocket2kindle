const sass = require("node-sass");
const sassUtils = require("node-sass-utils")(sass);
const sassVars = require("../../theme.js");

const convertToSassDimension = function(result) {
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

const sassFunc = {
  // Convert theme.js into sass values
  "get($keys)": function(keys) {
    keys = keys.getValue().split(".");
    let result = sassVars;
    let i;
    for (i = 0; i < keys.length; i++) {
      result = result[keys[i]];
      // Convert to SassDimension if dimenssion
      if (typeof result === "string") {
        result = convertToSassDimension(result);
      } else if (typeof result === "object") {
        Object.keys(result).forEach(function(key) {
          const value = result[key];
          if (typeof value === "string") {
            result[key] = convertToSassDimension(value);
          }
        });
      }
    }
    result = sassUtils.castToSass(result);
    return result;
  }
};

module.exports = {
  sassFunc
};
