// @flow
// Only because importing from jest/types/* doesn't work
export type Config = Object;
export type Path = string;

export type TransformOptions = {|
  instrument: boolean,
  watch: boolean,
|};

export type Transformer = {|
  canInstrument?: boolean,

  getCacheKey: (
    fileData: string,
    filePath: Path,
    configStr: string,
    options: TransformOptions,
  ) => string,

  process: (
    sourceText: string,
    sourcePath: Path,
    config: Config,
    options?: TransformOptions,
  ) => string,
|};
