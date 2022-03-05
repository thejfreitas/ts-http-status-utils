/**
 * Status Description
 *
 * @export
 * @enum {number}
 */
export enum StatusDescription {
  /**
   * @description - StatusCode 100
   */
  CONTINUE = "This interim response indicates that the client should continue the request or ignore the response if the request is already finished.",
  /**
   * @description - StatusCode = 101
   */
  SWITCHING_PROTOCOLS = "This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.",
  /**
   * @description - StatusCode = 102
   */
  PROCESSING = "This code indicates that the server has received and is processing the request, but no response is available yet.",
  /**
   * @description - StatusCode = 103
   */
  EARLY_HINTS = "This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.",
  /**
   * @description - StatusCode = 200
   */
  OK = "The request succeeded. The result meaning of `success` depends on the HTTP method.",
  /**
   * @description - StatusCode = 201
   */
  CREATED = "The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.",
  /**
   * @description - StatusCode = 202
   */
  ACCEPTED = "The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.",
  /**
   * @description - StatusCode = 203
   */
  NON_AUTHORITATIVE_INFORMATION = "This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the 200 OK response is preferred to this status.",
  /**
   * @description - StatusCode = 204
   */
  NO_CONTENT = "There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.",
  /**
   * @description - StatusCode = 205
   */
  RESET_CONTENT = "Tells the user agent to reset the document which sent this request.",
  /**
   * @description - StatusCode = 206
   */
  PARTIAL_CONTENT = "This response code is used when the Range header is sent from the client to request only part of a resource.",
  /**
   * @description - StatusCode =
   */
  MULTIPLE_CHOICES = "The request has more than one possible response. The user agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)",
  /**
   * @description - StatusCode =
   */
  MOVED_PERMANENTLY = "The URL of the requested resource has been changed permanently. The new URL is given in the response.",
  /**
   * @description - StatusCode =
   */
  FOUND = "This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.",
  /**
   * @description - StatusCode =
   */
  SEE_OTHER = "The server sent this response to direct the client to get the requested resource at another URI with a GET request.",
  /**
   * @description - StatusCode =
   */
  NOT_MODIFIED = "This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.",
  /**
   * @description - StatusCode =
   */
  TEMPORARY_REDIRECT = "The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.",
  /**
   * @description - StatusCode =
   */
  PERMANENT_REDIRECT = "This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.",
  /**
   * @description - StatusCode =
   */
  BAD_REQUEST = "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).",
  /**
   * @description - StatusCode =
   */
  UNAUTHORIZED = "Although the HTTP standard specifies `unauthorized`, semantically this response means 'unauthenticated'. That is, the client must authenticate itself to get the requested response.",
  /**
   * @description - StatusCode =
   */
  PAYMENT_REQUIRED = "This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.",
  /**
   * @description - StatusCode =
   */
  FORBIDDEN = "The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.",
  /**
   * @description - StatusCode 404
   */
  NOT_FOUND = "The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.",
  /**
   * @description - StatusCode =
   */
  METHOD_NOT_ALLOWED = "The request method is known by the server but is not supported by the target resource. For example, an API may not allow calling DELETE to remove a resource.",
  /**
   * @description - StatusCode =
   */
  NOT_ACCEPTABLE = "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.",
  /**
   * @description - StatusCode =
   */
  PROXY_AUTHENTICATION_REQUIRED = "This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.",
  /**
   * @description - StatusCode =
   */
  REQUEST_TIMEOUT = "This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.",
  /**
   * @description - StatusCode =
   */
  CONFLICT = "This response is sent when a request conflicts with the current state of the server.",
  /**
   * @description - StatusCode =
   */
  GONE = "This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for `limited-time, promotional services`. APIs should not feel compelled to indicate resources that have been deleted with this status code.",
  /**
   * @description - StatusCode =
   */
  LENGTH_REQUIRED = "Server rejected the request because the Content-Length header field is not defined and the server requires it.",
  /**
   * @description - StatusCode =
   */
  PRECONDITION_FAILED = "The client has indicated preconditions in its headers which the server does not meet.",
  /**
   * @description - StatusCode =
   */
  PAYLOAD_TOO_LARGE = "Request entity is larger than limits defined by server. The server might close the connection or return an Retry-After header field.",
  /**
   * @description - StatusCode =
   */
  URI_TOO_LONG = "The URI requested by the client is longer than the server is willing to interpret",
  /**
   * @description - StatusCode =
   */
  UNSUPPORTED_MEDIA_TYPE = "The media format of the requested data is not supported by the server, so the server is rejecting the request.",
  /**
   * @description - StatusCode =
   */
  RANGE_NOT_SATISFIABLE = "The range specified by the Range header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data.",
  /**
   * @description - StatusCode =
   */
  EXPECTATION_FAILED = "This response code means the expectation indicated by the Expect request header field cannot be met by the server.",
  /**
   * @description - StatusCode 418
   */
  IM_A_TEAPOT = "The server refuses the attempt to brew coffee with a teapot.",
  /**
   * @description - StatusCode =
   */
  UNPROCESSABLE_ENTITY = "The request was well-formed but was unable to be followed due to semantic errors.",
  /**
   * @description - StatusCode =
   */
  TOO_EARLY = "Indicates that the server is unwilling to risk processing a request that might be replayed.",
  /**
   * @description - StatusCode =
   */
  UPGRADE_REQUIRED = "The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).",
  /**
   * @description - StatusCode =
   */
  PRECONDITION_REQUIRED = "The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.",
  /**
   * @description - StatusCode =
   */
  TOO_MANY_REQUESTS = "The user has sent too many requests in a given amount of time (`rate limiting`).",
  /**
   * @description - StatusCode =
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = "The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.",
  /**
   * @description - StatusCode =
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = "The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.",
  /**
   * @description - StatusCode 500
   */
  INTERNAL_SERVER_ERROR = "The server has encountered a situation it does not know how to handle.",
  /**
   * @description - StatusCode =
   */
  NOT_IMPLEMENTED = "The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.",
  /**
   * @description - StatusCode =
   */
  BAD_GATEWAY = "This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.",
  /**
   * @description - StatusCode =
   */
  SERVICE_UNAVAILABLE = "The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.",
  /**
   * @description - StatusCode =
   */
  GATEWAY_TIMEOUT = "This error response is given when the server is acting as a gateway and cannot get a response in time.",
  /**
   * @description - StatusCode =
   */
  HTTP_VERSION_NOT_SUPPORTED = "The HTTP version used in the request is not supported by the server.",
  /**
   * @description - StatusCode =
   */
  VARIANT_ALSO_NEGOTIATES = "The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.",
  /**
   * @description - StatusCode =
   */
  INSUFFICIENT_STORAGE = "The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.",
  /**
   * @description - StatusCode =
   */
  LOOP_DETECTED = "The server detected an infinite loop while processing the request.",
  /**
   * @description - StatusCode =
   */
  NOT_EXTENDED = "Further extensions to the request are required for the server to fulfill it.",
  /**
   * @description - StatusCode =
   */
  NETWORK_AUTHENTICATION_REQUIRED = "Indicates that the client needs to authenticate to gain network access.",
}
