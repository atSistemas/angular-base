declare module base {
  export module console {
    export function info(...messages: any[]): any;
    export function success(...messages: any[]): any;
    export function error(...messages: any[]): any;
    export function line(...messages: any[]): any;
    export function clear(...messages: any[]): void;
  }
  export module webpack {
    export function ProgressBarPlugin(): void;
    export function CompileErrorsPlugin(): void;
  }
  export module fs {
    export function fileExists(file: string): boolean;
    export function readDir(path: string): any;
    export function writeFile(file:string, content: string): boolean;
  }
}


export = base;