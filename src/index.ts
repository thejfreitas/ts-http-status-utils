import {
  makeHttpResponsesDictionary,
  getStatusPhraseByCode,
  getStatusDescriptionByCode,
} from "./helpers";
import { StatusCode } from "./StatusCode";
import { StatusDescription } from "./StatusDescription";
import { StatusLabel } from "./StatusLabel";
import { StatusPhrase } from "./StatusPhrase";
import { RequestMethod } from "./RequestMethod";

export default {
  StatusCode,
  StatusDescription,
  StatusPhrase,
  StatusLabel,
  RequestMethod,
  makeHttpResponsesDictionary,
  getStatusPhraseByCode,
  getStatusDescriptionByCode,
};
