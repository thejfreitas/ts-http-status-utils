import {
  makeHttpResponsesDictionary,
  getStatusPhraseByCode,
  getStatusDescriptionByCode,
} from "../src/helpers";
import { HttpResponseObject } from "../src/Interfaces";
import { StatusCode } from "../src/StatusCode";
import { StatusPhrase } from "../src/StatusPhrase";
import { StatusDescription } from "../src/StatusDescription";
import { StatusLabel } from "../src/StatusLabel/";

describe("makeHttpResponsesDictionary tests", () => {
  const dictionary = makeHttpResponsesDictionary();

  it("should create a dictionary with 61 objects", () => {
    expect(Object.entries(dictionary)).toHaveLength(61);
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

  describe("Should test all dictionary entries", () => {
    Object.values(dictionary).forEach((item) => {
      it(`The code ${item.code} should have the phrase: ${item.phrase} and its description according to the dictionary`, () => {
        const [STATUS] = Object.entries(StatusCode).filter((statusFromEnum) => {
          if (statusFromEnum[1] === item.code) {
            return statusFromEnum;
          }
        });
        const [LABEL] = STATUS;

        expect(LABEL).toEqual(
          Object.values(StatusLabel)
            .filter((label) => label === LABEL)
            .toString()
        );

        expect(item.code).not.toBeUndefined();
        expect(item.phrase).not.toBeUndefined();
        expect(item.description).not.toBeUndefined();

        expect(item).toHaveProperty("code");
        expect(item.code).toEqual(StatusCode[LABEL]);

        expect(item).toHaveProperty("phrase");
        expect(item.phrase).toEqual(StatusPhrase[LABEL]);

        expect(item).toHaveProperty("description", StatusDescription[LABEL]);
        expect(item.description).toEqual(StatusDescription[LABEL]);
      });
    });
  });
});

describe("getStatusPhraseByCode tests", () => {
  it(`should get the proper status phrase from an informational response - ${StatusPhrase.OK}`, () => {
    expect(getStatusPhraseByCode(StatusCode.OK)).toEqual(StatusPhrase.OK);
  });

  it(`should get the proper status phrase from a successful response - ${StatusPhrase.PROCESSING}`, () => {
    expect(getStatusPhraseByCode(StatusCode.PROCESSING)).toEqual(
      StatusPhrase.PROCESSING
    );
  });

  it(`should get the proper status phrase from a redirection message - ${StatusPhrase.NOT_MODIFIED}`, () => {
    expect(getStatusPhraseByCode(StatusCode.NOT_MODIFIED)).toEqual(
      StatusPhrase.NOT_MODIFIED
    );
  });

  it(`should get the proper status phrase from a client error response - ${StatusPhrase.UNAUTHORIZED}`, () => {
    expect(getStatusPhraseByCode(StatusCode.UNAUTHORIZED)).toEqual(
      StatusPhrase.UNAUTHORIZED
    );
  });

  it(`should get the proper status phrase from a server error response - ${StatusPhrase.BAD_GATEWAY}`, () => {
    expect(getStatusPhraseByCode(StatusCode.BAD_GATEWAY)).toEqual(
      StatusPhrase.BAD_GATEWAY
    );
  });
});

describe("getStatusDescriptionByCode tests", () => {
  it(`should get proper description from an informational response - code: ${StatusCode.EARLY_HINTS}`, () => {
    expect(getStatusDescriptionByCode(StatusCode.EARLY_HINTS)).toEqual(
      StatusDescription.EARLY_HINTS
    );
  });

  it(`should get proper description from a successful response - code: ${StatusCode.ACCEPTED}`, () => {
    expect(getStatusDescriptionByCode(StatusCode.ACCEPTED)).toEqual(
      StatusDescription.ACCEPTED
    );
  });

  it(`should get proper description from a redirection message - code: ${StatusCode.SEE_OTHER}`, () => {
    expect(getStatusDescriptionByCode(StatusCode.SEE_OTHER)).toEqual(
      StatusDescription.SEE_OTHER
    );
  });

  it(`should get proper description from a client error response - code: ${StatusCode.METHOD_NOT_ALLOWED}`, () => {
    expect(getStatusDescriptionByCode(StatusCode.METHOD_NOT_ALLOWED)).toEqual(
      StatusDescription.METHOD_NOT_ALLOWED
    );
  });

  it(`should get proper description from a server error response - code: ${StatusCode.NOT_IMPLEMENTED}`, () => {
    expect(getStatusDescriptionByCode(StatusCode.NOT_IMPLEMENTED)).toEqual(
      StatusDescription.NOT_IMPLEMENTED
    );
  });
});
