import mergePropsWithAvailableProps from "./index.js";

const props = {
  validProp1: "validProp",
  validProp2: null,
  validProp3: undefined,
  invalidProp: "anotherInvalidProp"
};

const allowedProps = {
  validProp1: null,
  validProp2: null,
  validProp3: null
};

test("valid props to be merged", () => {
  const expected = {
    validProp1: "validProp",
    validProp2: null
  };

  expect(mergePropsWithAvailableProps(allowedProps, props)).toEqual(expected);
});
