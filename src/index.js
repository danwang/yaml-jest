// @flow
import crypto from 'crypto';
import yaml from 'js-yaml';
import type {Config, Path, TransformOptions, Transformer} from './jest-types';

const getCacheKey = (
  fileData: string,
  filePath: string,
  configString: string,
  options: TransformOptions,
): string => {
  return crypto.createHash('md5')
    .update(fileData)
    .update(configString)
    .digest('hex');
};

const process = (
  sourceText: string,
  sourcePath: Path,
  config: Config,
  options?: TransformOptions,
): string => {
  const result: string = yaml.safeLoad(sourceText);
  const json = JSON.stringify(result, undefined, '\t');
  return `module.exports = ${json}`;
};

const transformer: Transformer = {
  getCacheKey,
  process,
};

module.exports = transformer;
