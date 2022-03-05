import { StatusCode } from "../StatusCode";
import { StatusDescription } from "../StatusDescription";
import { StatusPhrase } from "../StatusPhrase";

export interface HttpResponseObject {
  code: StatusCode;
  phrase: StatusPhrase;
  description: StatusDescription;
}

export interface IHttpResponsesDictionary {
  [id: number]: HttpResponseObject;
}
