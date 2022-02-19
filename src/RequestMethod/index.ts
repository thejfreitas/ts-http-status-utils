/**
 * HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. Although they can also be nouns, these request methods are sometimes referred to as HTTP verbs. Each of them implements a different semantic, but some common features are shared by a group of them: e.g. a request method can be safe, idempotent, or cacheable.
 * Source {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods}
 *
 * @export
 * @enum {string}
 */
export enum RequestMethod {
  /**
   * @description The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
   */
  GET = "GET",
  /**
   * @description The HEAD method asks for a response identical to a GET request, but without the response body.
   */
  HEAD = "HEAD",
  /**
   * @description The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.
   */
  POST = "POST",
  /**
   * @description The PUT method replaces all current representations of the target resource with the request payload.
   */
  PUT = "PUT",
  /**
   * @description The DELETE method deletes the specified resource.
   */
  DELETE = "DELETE",
  /**
   * @description The CONNECT method establishes a tunnel to the server identified by the target resource.
   */
  CONNECT = "CONNECT",
  /**
   * @description The OPTIONS method describes the communication options for the target resource.
   */
  OPTIONS = "OPTIONS",
  /**
   * @description The TRACE method performs a message loop-back test along the path to the target resource.
   */
  TRACE = "TRACE",
  /**
   * @description The PATCH method applies partial modifications to a resource.
   */
  PATCH = "PATCH",
}
