// Type definitions for cookie.js
// Project: https://github.com/js-coder/cookie.js
// Definitions by: Boltmade <https://github.com/Boltmade>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface CookieStatic {
  set(key : string, value : string, options? : any) : void;
  remove(keys : string[]) : void;
  empty() : void;
  get(key : string) : string;
  all() : any;
  enabled() : boolean;
}

declare var cookie: CookieStatic;

declare module "cookie" {
  export = cookie;
}
