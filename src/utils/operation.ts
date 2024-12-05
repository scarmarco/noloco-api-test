export const doOperation = (normalizedData, fieldName, op = "eq", value) => {
  if (op === "gt") {
    return normalizedData.filter((row) => row[fieldName] > value);
  }

  if (op === "lt") {
    return normalizedData.filter((row) => row[fieldName] < value);
  }

  return normalizedData.find((row) => row[fieldName] === value);
};
