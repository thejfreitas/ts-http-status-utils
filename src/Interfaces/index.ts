import { StatusCode } from "../StatusCode";
import { StatusDescription } from "../StatusDescription";
import { StatusPhrase } from "../StatusPhrase";

export interface IHttpResponsesDictionary {
  [id: number]: {
    code: StatusCode;
    phrase: StatusPhrase;
    description: StatusDescription;
  };
}
