import { StatusCode } from "../StatusCode";
import { StatusDescription } from "../StatusDescription";
import { StatusPhrase } from "../StatusPhrase";

/**
 * Represents an HTTP response object.
 */
export interface HttpResponseObject {
  code: StatusCode;
  phrase: StatusPhrase;
  description: StatusDescription;
}

/**
 * Represents a dictionary of HTTP response objects.
 */
export interface IHttpResponsesDictionary {
  [id: number]: HttpResponseObject;
}
