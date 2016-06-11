import minimist = require('minimist');

declare function subarg <T> (args: string[], opts?: subarg.Options): subarg.ParsedArgs & T;

declare namespace subarg {
  export interface Options extends minimist.Options {}

  export interface ParsedArgs {
    _: Array<string | ParsedArgs>;
    [arg: string]: any;
  }
}

export = subarg;
