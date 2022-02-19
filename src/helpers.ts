import { StatusCode } from "./StatusCode";
import { StatusPhrase } from "./StatusPhrase";
import { StatusDescription } from "./StatusDescription";
import { StatusLabel } from "./StatusLabel";
import { IHttpResponsesDictionary } from "./Interfaces";

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

export const getStatusPhraseByCode = (code: number): StatusPhrase => {
  const httpDictionary = makeHttpResponsesDictionary();

  return httpDictionary[code].phrase;
};

export const getStatusDescriptionByCode = (code: number): StatusDescription => {
  const httpDictionary = makeHttpResponsesDictionary();

  return httpDictionary[code].description;
};
