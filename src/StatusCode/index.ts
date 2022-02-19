/**
 * Http Status Codes
 *
 * @export
 * @enum {number}
 */

export enum StatusCode {
  /**
   * @description This interim response indicates that the client should continue the request or ignore the response if the request is already finished.
   */
  CONTINUE = 100,
  /**
   * @description - @
   */
  SWITCHING_PROTOCOLS = 101,
  /**
   * @description - @
   */
  EARLY_HINTS = 103,
  /**
   * @description - @
   */
  OK = 200,
  /**
   * @description - @
   */
  CREATED = 201,
  /**
   * @description - @
   */
  ACCEPTED = 202,
  /**
   * @description - @
   */
  NON_AUTHORITATIVE_INFORMATION = 203,
  /**
   * @description - @
   */
  NO_CONTENT = 204,
  /**
   * @description - @
   */
  RESET_CONTENT = 205,
  /**
   * @description - @
   */
  PARTIAL_CONTENT = 206,
  /**
   * @description - @
   */
  MULTIPLE_CHOICES = 300,
  /**
   * @description - @
   */
  MOVED_PERMANENTLY = 301,
  /**
   * @description - @
   */
  FOUND = 302,
  /**
   * @description - @
   */
  SEE_OTHER = 303,
  /**
   * @description - @
   */
  NOT_MODIFIED = 304,
  /**
   * @description - @
   */
  TEMPORARY_REDIRECT = 307,
  /**
   * @description - @
   */
  PERMANENT_REDIRECT = 308,
  /**
   * @description - @
   */
  BAD_REQUEST = 400,
  /**
   * @description - @
   */
  UNAUTHORIZED = 401,
  /**
   * @description - @
   */
  PAYMENT_REQUIRED = 402,
  /**
   * @description - @
   */
  FORBIDDEN = 403,
  /**
   * @description - @
   */
  NOT_FOUND = 404,
  /**
   * @description - @
   */
  METHOD_NOT_ALLOWED = 405,
  /**
   * @description - @
   */
  NOT_ACCEPTABLE = 406,
  /**
   * @description - @
   */
  PROXY_AUTHENTICATION_REQUIRED = 407,
  /**
   * @description - @
   */
  REQUEST_TIMEOUT = 408,
  /**
   * @description - @
   */
  CONFLICT = 409,
  /**
   * @description - @
   */
  GONE = 410,
  /**
   * @description - @
   */
  LENGTH_REQUIRED = 411,
  /**
   * @description - @
   */
  PRECONDITION_FAILED = 412,
  /**
   * @description - @
   */
  PAYLOAD_TOO_LARGE = 413,
  /**
   * @description - @
   */
  URI_TOO_LONG = 414,
  /**
   * @description - @
   */
  UNSUPPORTED_MEDIA_TYPE = 415,
  /**
   * @description - @
   */
  RANGE_NOT_SATISFIABLE = 416,
  /**
   * @description - @
   */
  EXPECTATION_FAILED = 417,
  /**
   * @description - @
   */
  IM_A_TEAPOT = 418,
  /**
   * @description - @
   */
  UNPROCESSABLE_ENTITY = 422,
  /**
   * @description - @
   */
  TOO_EARLY = 425,
  /**
   * @description - @
   */
  UPGRADE_REQUIRED = 426,
  /**
   * @description - @
   */
  PRECONDITION_REQUIRED = 428,
  /**
   * @description - @
   */
  TOO_MANY_REQUESTS = 429,
  /**
   * @description - @
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  /**
   * @description - @
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  /**
   * @description - @
   */
  INTERNAL_SERVER_ERROR = 500,
  /**
   * @description - @
   */
  NOT_IMPLEMENTED = 501,
  /**
   * @description - @
   */
  BAD_GATEWAY = 502,
  /**
   * @description - @
   */
  SERVICE_UNAVAILABLE = 503,
  /**
   * @description - @
   */
  GATEWAY_TIMEOUT = 504,
  /**
   * @description - @
   */
  HTTP_VERSION_NOT_SUPPORTED = 505,
  /**
   * @description - @
   */
  VARIANT_ALSO_NEGOTIATES = 506,
  /**
   * @description - @
   */
  INSUFFICIENT_STORAGE = 507,
  /**
   * @description - @
   */
  LOOP_DETECTED = 508,
  /**
   * @description - @
   */
  NOT_EXTENDED = 510,
  /**
   * @description - @
   */
  NETWORK_AUTHENTICATION_REQUIRED = 511,
}
