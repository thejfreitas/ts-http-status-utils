import { StatusCode } from "./StatusCode";
import { StatusPhrase } from "./StatusPhrase";
import { StatusDescription } from "./StatusDescription";
import { StatusLabel } from "./StatusLabel";
import { IHttpResponsesDictionary } from "./Interfaces";

export const makeHttpResponsesDictionary = (): IHttpResponsesDictionary => {
  let dictionary = {};

  for (const statusCode in StatusLabel) {
    if (Number.isNaN(Number(StatusLabel[statusCode]))) {
      continue;
    }

    dictionary = {
      ...dictionary,
      [StatusCode[statusCode]]: {
        code: StatusCode[statusCode],
        phrase: StatusPhrase[statusCode],
        description: StatusDescription[statusCode],
      },
    };
  }

  return dictionary;
};

export const getStatusPhraseByCode = (code: number): StatusPhrase => {
  const httpDictionary = makeHttpResponsesDictionary();

  return httpDictionary[code].phrase;
};

export const getStatusDescriptionByCode = (code: number): StatusDescription => {
  const httpDictionary = makeHttpResponsesDictionary();

  return httpDictionary[code].description;
};
