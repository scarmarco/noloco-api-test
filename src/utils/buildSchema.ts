import { camelCase } from "lodash";
import { getDataType } from "./datatypes";

export const buildSchemaFromJSON = (jsonFile) => {
  let schema = [];

  for (let index = 0; index < jsonFile.length; index++) {
    const iterableDataRow = Object.entries(jsonFile[index]);
    const hasSomeNull = Object.values(jsonFile[index]).some(
      (val) => val === null
    );

    if (!hasSomeNull) {
      schema = iterableDataRow.map(([key, value]) => ({
        display: key,
        name: camelCase(key),
        type: getDataType(value),
        options:
          getDataType(value) === "OPTION" ? String(value).split("\n") : [],
      }));

      break;
    }
  }

  return schema;
};
