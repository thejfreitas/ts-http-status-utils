# ts-http-status-utils :hammer_and_wrench: :computer: :toolbox:

HTTP status code declarations, status phrases, descriptions and util functions

## Motivation

Working on different projects dealing with microservices or different responses
from distributed APIs I noticed that some developers used to default failed
responses to Http code `500 - Internal Server Error` instead of an appropriate
Http code making the debug process harder and misleading depending how you
implement logging tools.

Taking advantage of `TypeScript` and `Docstrings`, this library helps developers
to handle and understand HTTP responses easily as well making it easy to build,
integrate or debug microservices or APIs.

### [How to use](#how-to-use-in-a-real-project)

---

### Available enums

`RequestMethod, StatusCode, StatusPhrase, StatusDescription, StatusLabel`

### RequestMethod

```javascript
RequestMethod.GET;

// Return "GET"

RequestMethod.POST;

// Return "POST"
```

### StatusCode

```javascript
StatusCode.CONTINUE;

// Return 100

StatusCode.OK;

// Return 200
```

### StatusPhrase

```javascript
StatusPhrase.PROCESSING;

// Return "Processing"

StatusPhrase.MOVED_PERMANENTLY;

// Return "Moved Permanently"
```

### StatusDescription

```javascript
StatusDescription.CREATED;

// Return "The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests."
```

### StatusLabel

```javascript
StatusLabel.CREATED;

// Return "CREATED"

StatusLabel.ALREADY_REPORTED;

// Return "ALREADY_REPORTED"
```

### Available functions

`getStatusPhraseByCode, getStatusDescriptionByCode, makeHttpResponsesDictionary`

### getStatusPhraseByCode

```javascript
getStatusPhraseByCode(StatusCode.PROXY_AUTHENTICATION_REQUIRED);

// Return "Proxy Authentication Required"
```

### getStatusDescriptionByCode

```javascript
getStatusDescriptionByCode(StatusCode.BAD_GATEWAY);

// Return "This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response."
```

### makeHttpResponsesDictionary

Create a dictionary containing all HTTP responses

```javascript
{
'100': {
    code: 100,
    phrase: 'Continue',
    description: 'This interim response indicates that the client should continue the request or ignore the response if the request is already finished.'
},
'101': {
    code: 101,
    phrase: 'Switching Protocols',
    description: 'This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.'
},
    ...

'511': {
    code: 511,
    phrase: 'Network Authentication Required',
    description: 'Indicates that the client needs to authenticate to gain network access.'
}
```

```javascript

const dictionary = makeHttpResponsesDictionary();

dictionary[StatusCode.OK];

/**
return
    '200': {
        code: 200,
        phrase: 'OK',
        description: 'The request succeeded. The result meaning of `success` depends on the HTTP method.'
    }
* /

```

## How to use in a real project

```javascript
import {
  StatusCode,
  getStatusPhraseByCode,
  RequestMethod,
  getStatusDescriptionByCode,
} from "ts-http-status-utils";

export const lambdaHandler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  try {
    // RequestMethod enum
    if (event.httpMethod !== RequestMethod.GET) {
      // getStatusPhraseByCode and getStatusDescriptionByCode util functions & StatusCode.METHOD_NOT_ALLOWED
      logError({
        method: event.httpMethod,
        statusCode: StatusCode.METHOD_NOT_ALLOWED,
        statusPhrase: getStatusPhraseByCode(StatusCode.METHOD_NOT_ALLOWED),
        statusDescription: getStatusDescriptionByCode(
          StatusCode.METHOD_NOT_ALLOWED
        ),
      });

      return {
        // StatusCode enum
        statusCode: StatusCode.METHOD_NOT_ALLOWED,
        headers: {},
        body: JSON.stringify({
          // getStatusPhraseByCode util function
          message: getStatusPhraseByCode(StatusCode.METHOD_NOT_ALLOWED),
        }),
      };
    }

    return {
      // StatusCode enum
      statusCode: StatusCode.OK,
      // getStatusPhraseByCode util function
      body: JSON.stringify({
        message: `${getStatusPhraseByCode(
          StatusCode.OK
        )} - Response from lambda`,
      }),
    };
  } catch (error) {
    // getStatusPhraseByCode and getStatusDescriptionByCode util functions
    logError({
      method: event.httpMethod,
      statusCode: error.statusCode,
      statusPhrase: getStatusPhraseByCode(error.statusCode),
      statusDescription: getStatusDescriptionByCode(error.statusCode),
    });

    return {
      statusCode: error.statusCode,
      body: JSON.stringify({
        message:
          error instanceof Error ? error.stack : JSON.stringify(error, null, 2),
      }),
    };
  }
};
```

## Resources

[https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

[https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

[https://datatracker.ietf.org/doc/html/rfc7231](https://datatracker.ietf.org/doc/html/rfc7231)
