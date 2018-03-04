const sass = require("node-sass");
const sassUtils = require("node-sass-utils")(sass);

import { convertStringToSassDimension } from "./index.js";

const testTheme = {
  intValue: 123,
  stringValue: "#ff0000",
  pxValue: "16px",
  remValue: "16rem"
};

test("int values are not converted to dimension", () => {
  expect(convertStringToSassDimension(testTheme.intValue)).toEqual(
    testTheme.intValue
  );
});

test("string values are not converted to dimension", () => {
  expect(convertStringToSassDimension(testTheme.stringValue)).toEqual(
    testTheme.stringValue
  );
});

test("px values are converted to dimension", () => {
  expect(convertStringToSassDimension(testTheme.pxValue)).toEqual(
    new sassUtils.SassDimension(16, "px")
  );
});

test("rem values are converted to dimension", () => {
  expect(convertStringToSassDimension(testTheme.remValue)).toEqual(
    new sassUtils.SassDimension(16, "rem")
  );
});
