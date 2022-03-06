/**
 * Http Status Codes
 *
 * HTTP response status codes indicate whether a specific HTTP request has been successfully completed.
 * Responses are grouped in five classes:
 *
 * Informational responses [100–199]
 * Successful responses [200–299]
 * Redirection messages [300–399]
 * Client error responses [400–499]
 * Server error responses [500–599]
 *
 * Source {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status}
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
   * @description This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.
   */
  SWITCHING_PROTOCOLS = 101,
  /**
   * @description This code indicates that the server has received and is processing the request, but no response is available yet.
   */
  PROCESSING = 102,
  /**
   * @description This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.
   */
  EARLY_HINTS = 103,
  /**
   * @description The request succeeded. The result meaning of "success" depends on the HTTP method
   */
  OK = 200,
  /**
   * @description The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.
   */
  CREATED = 201,
  /**
   * @description The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.
   */
  ACCEPTED = 202,
  /**
   * @description This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the 200 OK response is preferred to this status.
   */
  NON_AUTHORITATIVE_INFORMATION = 203,
  /**
   * @description There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.
   */
  NO_CONTENT = 204,
  /**
   * @description Tells the user agent to reset the document which sent this request.
   */
  RESET_CONTENT = 205,
  /**
   * @description This response code is used when the Range header is sent from the client to request only part of a resource.
   */
  PARTIAL_CONTENT = 206,
  /**
   * @description Conveys information about multiple resources, for situations where multiple status codes might be appropriate.
   */
  MULTI_STATUS = 207,
  /**
   * @description Used inside a "<dav:propstat>" response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.
   */
  ALREADY_REPORTED = 208,
  /**
   * @description The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
   */
  IM_USED = 226,
  /**
   * @description The request has more than one possible response.
   */
  MULTIPLE_CHOICES = 300,
  /**
   * @description The URL of the requested resource has been changed permanently. The new URL is given in the response.
   */
  MOVED_PERMANENTLY = 301,
  /**
   * @description This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
   */
  FOUND = 302,
  /**
   * @description The server sent this response to direct the client to get the requested resource at another URI with a GET request.
   */
  SEE_OTHER = 303,
  /**
   * @description This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
   */
  NOT_MODIFIED = 304,
  /**
   * @description The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request.
   */
  TEMPORARY_REDIRECT = 307,
  /**
   * @description This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
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
