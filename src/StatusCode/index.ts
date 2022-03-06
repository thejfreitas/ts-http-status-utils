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
   * @description The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
   */
  BAD_REQUEST = 400,
  /**
   * @description Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
   */
  UNAUTHORIZED = 401,
  /**
   * @description This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.
   */
  PAYMENT_REQUIRED = 402,
  /**
   * @description The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
   */
  FORBIDDEN = 403,
  /**
   * @description The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.
   */
  NOT_FOUND = 404,
  /**
   * @description The request method is known by the server but is not supported by the target resource. For example, an API may not allow calling DELETE to remove a resource.
   */
  METHOD_NOT_ALLOWED = 405,
  /**
   * @description This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.
   */
  NOT_ACCEPTABLE = 406,
  /**
   * @description This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.
   */
  PROXY_AUTHENTICATION_REQUIRED = 407,
  /**
   * @description This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection.
   */
  REQUEST_TIMEOUT = 408,
  /**
   * @description This response is sent when a request conflicts with the current state of the server.
   */
  CONFLICT = 409,
  /**
   * @description This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
   */
  GONE = 410,
  /**
   * @description Server rejected the request because the Content-Length header field is not defined and the server requires it.
   */
  LENGTH_REQUIRED = 411,
  /**
   * @description The client has indicated preconditions in its headers which the server does not meet.
   */
  PRECONDITION_FAILED = 412,
  /**
   * @description Request entity is larger than limits defined by server. The server might close the connection or return an Retry-After header field.
   */
  PAYLOAD_TOO_LARGE = 413,
  /**
   * @description The URI requested by the client is longer than the server is willing to interpret.
   */
  URI_TOO_LONG = 414,
  /**
   * @description The media format of the requested data is not supported by the server, so the server is rejecting the request.
   */
  UNSUPPORTED_MEDIA_TYPE = 415,
  /**
   * @description The range specified by the Range header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data.
   */
  RANGE_NOT_SATISFIABLE = 416,
  /**
   * @description This response code means the expectation indicated by the Expect request header field cannot be met by the server.
   */
  EXPECTATION_FAILED = 417,
  /**
   * @description The server refuses the attempt to brew coffee with a teapot.
   */
  IM_A_TEAPOT = 418,
  /**
   * @description The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
   */
  MISDIRECTED_REQUEST = 421,
  /**
   * @description The request was well-formed but was unable to be followed due to semantic errors.
   */
  UNPROCESSABLE_ENTITY = 422,
  /**
   * @description The resource that is being accessed is locked.
   */
  LOCKED = 423,
  /**
   * @description The request failed due to failure of a previous request.
   */
  FAILED_DEPENDENCY = 424,
  /**
   * @description Indicates that the server is unwilling to risk processing a request that might be replayed.
   */
  TOO_EARLY = 425,
  /**
   * @description The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).
   */
  UPGRADE_REQUIRED = 426,
  /**
   * @description The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
   */
  PRECONDITION_REQUIRED = 428,
  /**
   * @description The user has sent too many requests in a given amount of time ("rate limiting").
   */
  TOO_MANY_REQUESTS = 429,
  /**
   * @description The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  /**
   * @description The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.
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
