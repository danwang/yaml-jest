import * as crypto from "crypto";
import * as yaml from "js-yaml";
import type { Config, Path, TransformOptions, Transformer } from "./jest-types";

const getCacheKey = (
  fileData: string,
  filePath: string,
  configString: string,
  options: TransformOptions
): string => {
  return crypto
    .createHash("md5")
    .update(fileData)
    .update(
      typeof configString === "string"
        ? configString
        : JSON.stringify(configString)
    )
    .digest("hex");
};

const process = (
  sourceText: string,
  sourcePath: Path,
  config: Config,
  options?: TransformOptions
): string => {
  const result = yaml.load(sourceText);
  const json = JSON.stringify(result, undefined, "\t");
  return `module.exports = ${json}`;
};

const transformer: Transformer = {
  getCacheKey,
  process,
};

export default transformer;
