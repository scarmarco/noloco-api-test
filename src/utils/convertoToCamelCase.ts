import { camelCase } from "lodash";

export const converToCamelCase = (obj) =>
  obj.map((data) => {
    return Object.keys(data).reduce(
      (obj, key) => ({
        ...obj,
        [camelCase(key)]: data[key],
      }),
      {}
    );
  });
