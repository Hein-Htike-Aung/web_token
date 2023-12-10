export interface ResponseError extends Error {
  statusCode: number;
}

export interface ResponseObj {
  messages: string[];
  data?: object;
}

export interface ErrorResponseObj {
  messages: string[];
  errors?: object;
}

declare module 'express' {
  interface Request {
    user?: { id: number; role_id: number };
    file?: any;
  }
}

declare module 'express-session' {
  export interface SessionData {
    username: string;
    access_token: string;
  }
}

export interface ParsedQs {
  [key: string]: string | number | ParsedQs | string[] | ParsedQs[] | undefined;
}

export type ReqHandler = RequestHandler<ParamsDictionary, ParsedQs>;

export type queryParam =
  | string
  | number
  | ParsedQs
  | string[]
  | number[]
  | ParsedQs[]
  | undefined;

export type CountQRes = { count: number }[];

export interface TokenBasedRequest extends Request {
  user?: User | { id: number };
  agent?: Agent | { id: number };
  customer?: Customer | { id: number };
  headers: IncomingHttpHeaders;
}

export type TokenVerifyError =
  | JsonWebTokenError
  | NotBeforeError
  | TokenExpiredError;

export type TokenVerifyPayload = JwtPayload | { id: number; type: string };

// Type definitions for otp-generator 4.0
// Project: https://github.com/Maheshkumar-Kakade/otp-generator
// Definitions by: Md Sifatul Islam Rabbi <https://github.com/sifatulrabbi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
  digits?: boolean;
  lowerCaseAlphabets?: boolean;
  upperCaseAlphabets?: boolean;
  specialChars?: boolean;
}

declare const _default: {
  generate: (length?: number, options?: Options) => string;
};
export = _default;
