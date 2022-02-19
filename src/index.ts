import {
  makeHttpResponsesDictionary,
  getStatusPhraseByCode,
  getStatusDescriptionByCode,
} from "./helpers";
import { StatusCode } from "./StatusCode";
import { StatusDescription } from "./StatusDescription";
import { StatusLabel } from "./StatusLabel";
import { StatusPhrase } from "./StatusPhrase";

export default {
  StatusCode,
  StatusDescription,
  StatusPhrase,
  StatusLabel,
  makeHttpResponsesDictionary,
  getStatusPhraseByCode,
  getStatusDescriptionByCode,
};
