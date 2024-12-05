const isNumeric = (string: any) => /^[+-]?\d+(\.\d+)?$/.test(string);

const isFloat = (n: any) => {
  if (isNumeric(n)) {
    return +n % 1 !== 0;
  }

  return false;
};

const isInteger = (n: any) => {
  if (isNumeric(n)) {
    return +n % 1 === 0;
  }

  return false;
};

const isDate = (date: any) => {
  if (typeof date === "string") {
    const dateObj = new Date(date);
    return !isNaN(dateObj.valueOf());
  }

  return false;
};

const isBoolean = (bool: any) =>
  bool === true ||
  bool === false ||
  String(bool).toLowerCase() === "true" ||
  String(bool).toLowerCase() === "false";

const isOption = (str: any) => {
  if (typeof str === "string") {
    const newLines = str.split("\n");
    return newLines.length > 1;
  }
};

export const getDataType = (value: any) => {
  if (isOption(value)) {
    return "OPTION";
  }

  if (isBoolean(value)) {
    return "BOOLEAN";
  }

  if (isFloat(value)) {
    return "FLOAT";
  }

  if (isInteger(value)) {
    return "INTEGER";
  }

  if (isDate(value)) {
    return "DATE";
  }

  return "TEXT";
};
