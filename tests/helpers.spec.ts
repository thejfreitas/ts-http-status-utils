import { makeHttpResponsesDictionary } from "../src/helpers";
import { HttpResponseObject } from "../src/Interfaces";

import { StatusCode } from "../src/StatusCode";
import { StatusPhrase } from "../src/StatusPhrase";
import { StatusDescription } from "../src/StatusDescription";

describe("makeHttpResponsesDictionary tests", () => {
  const dictionary = makeHttpResponsesDictionary();

  it("should create a dictionary with 55 objects", () => {
    expect(Object.entries(dictionary)).toHaveLength(55);
  });

  it("should assert content from dictionary for an informational response", () => {
    expect(dictionary[StatusCode.CONTINUE]).toMatchObject<HttpResponseObject>({
      code: StatusCode.CONTINUE,
      phrase: StatusPhrase.CONTINUE,
      description: StatusDescription.CONTINUE,
    });
  });

  it("should assert content from dictionary for a successful response", () => {
    expect(dictionary[StatusCode.CREATED]).toMatchObject<HttpResponseObject>({
      code: StatusCode.CREATED,
      phrase: StatusPhrase.CREATED,
      description: StatusDescription.CREATED,
    });
  });

  it("should assert content from dictionary for a redirection message", () => {
    expect(
      dictionary[StatusCode.MOVED_PERMANENTLY]
    ).toMatchObject<HttpResponseObject>({
      code: StatusCode.MOVED_PERMANENTLY,
      phrase: StatusPhrase.MOVED_PERMANENTLY,
      description: StatusDescription.MOVED_PERMANENTLY,
    });
  });

  it("should assert content from dictionary for a client error response", () => {
    expect(dictionary[StatusCode.NOT_FOUND]).toMatchObject<HttpResponseObject>({
      code: StatusCode.NOT_FOUND,
      phrase: StatusPhrase.NOT_FOUND,
      description: StatusDescription.NOT_FOUND,
    });
  });

  it("should assert content from dictionary for a server error responses", () => {
    expect(
      dictionary[StatusCode.INTERNAL_SERVER_ERROR]
    ).toMatchObject<HttpResponseObject>({
      code: StatusCode.INTERNAL_SERVER_ERROR,
      phrase: StatusPhrase.INTERNAL_SERVER_ERROR,
      description: StatusDescription.INTERNAL_SERVER_ERROR,
    });
  });
});
