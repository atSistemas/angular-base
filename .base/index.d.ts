declare module base {
    export module console {
      export function info(...messages: any[]): any;
      export function success(...messages: any[]): any;
      export function error(...messages: any[]): any;
      export function line(...messages: any[]): any;
      export function clear(...messages: any[]): void;
    }
}


export = base;