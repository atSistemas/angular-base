declare module base {
    export module console {
      export function info(p: string): any;
      export function success(...paths: any[]): any;
      export function error(...pathSegments: any[]): any;
      export function line(p: string): any;
      export function clear(from: string, to: string): void;
    }
}


export = base;