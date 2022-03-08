import { StatusCode } from "./StatusCode";
import { StatusPhrase } from "./StatusPhrase";
import { StatusDescription } from "./StatusDescription";
import { StatusLabel } from "./StatusLabel";
import { IHttpResponsesDictionary } from "./Interfaces";

/**
 * Creates a dictionary containing all HTTP Statuses containing code, phrase and description.
 *
 * @returns dictionary
 */
export const makeHttpResponsesDictionary = () => {
  let dictionary: IHttpResponsesDictionary = {};

  for (const statusCode in StatusLabel) {
    if (Number.isNaN(Number(StatusLabel[statusCode]))) {
      continue;
    }

    // @ts-ignore
    const phrase = StatusPhrase[statusCode];
    // @ts-ignore
    const description = StatusDescription[statusCode];

    dictionary = {
      ...dictionary,
      [StatusCode[statusCode]]: {
        code: StatusCode[statusCode],
        phrase: phrase,
        description: description,
      },
    };
  }

  return dictionary;
};

/**
 * Get a status phrase from a given HTTP Status code
 *
 * @param code {StatusCode|number}
 * @returns {string}
 */
export const getStatusPhraseByCode = (
  code: number | StatusCode
): StatusPhrase => {
  const httpDictionary = makeHttpResponsesDictionary();

  return httpDictionary[code].phrase;
};

/**
 * Get a description from a given HTTP Status code
 *
 * @param code {StatusCode|number}
 * @returns {string}
 */
export const getStatusDescriptionByCode = (
  code: number | StatusCode
): StatusDescription => {
  const httpDictionary = makeHttpResponsesDictionary();

  return httpDictionary[code].description;
};
