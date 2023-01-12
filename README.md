# Coverty

It's time for testing, and to check your endpoint status with the help of your favorite testing framework 🧪.

## Instalation

Installation in your project 📁

```console
npm install -D coverty
```

## Usage 🎯

Import the module with coverty or custom name from library 📦

### Create a client base urls and set globals properties  for requests ⚡

```javascript
// ES MODULES
import converty from 'converty'

// COMMON JS
const coverty = require('converty').default

// Implementation

const client = converty.setup({
  baseUrl: 'https://myurl/api',
  // Optional global start
  globalHeaders: {
    'myCustomGlobalHeader': 'value'
  },
  globalBody: {
    'myCustomGlobalBody': 'value'
  },
  globalQuerys: {
    'myCustomGlobalQuerys': 'value'
  }
  // Optional global end
})

/* The second parameter of all methods receives an options object similar to the global, but local, so that they only work on this client invocation. */

client.get('/posts', options...).then((results) => {
    console.log(results.information.timeFetching) // in milliseconds
}).catch((err) => {
    console.error(err)
})
```

### The methods  🧩

All methods can be used without creating the client, but if you don't want to repeat certain things, it's better to create the client.

Documentation for http methods taken from **[here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)**.

| Method library        | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| coverty.**generator** | It is a set of methods to obtain fake data to interact with our APIs, they are stored locally and are generated from **[Mockaroo](https://www.mockaroo.com/)**. |
| coverty.**setup**     | Instantiate certain global parameters and the base of your url to which you are going to make requests. Returning an object with methods named the same as **http verbs**. |
| coverty.**get**       | The `GET` method requests a representation of the specified resource. Requests using `GET` should only retrieve data. |
| coverty.**post**      | The `POST` method submits an entity to the specified resource, often causing a change in state or side effects on the server. |
| coverty.**put**       | The `PUT` method replaces all current representations of the target resource with the request payload. |
| coverty.**delete**    | The `DELETE` method deletes the specified resource.          |
| coverty.**patch**     | The `PATCH` method applies partial modifications to a resource. |

The fake data generator has all its methods named intuitively for use. You can generate all of the following data just by calling the method.

- Animals
- Image base64 string
- Boolean
- Cars brands
- Hex colors
- Colors names
- Cities
- Country codes
- Dates
- SQL datetime
- Emails
- Firts names
- Last names
- Genders
- Movie title
- Numbers
- Passwords
- Text **(optional max param object value from method)**
- Timestamp
- Timezone

```javascript
// ES MODULES
import converty from 'converty'

// COMMON JS
const coverty = require('converty').default

// Example generate a email

const emailGenerated = converty.generator.getEmail() // Random email

console.log(emailGenerated)
```

This only returns 1 element, if you want more than one you could click and fill in an array to send your data if you need it

```javascript
// ES MODULES
import converty from 'converty'

// COMMON JS
const coverty = require('converty').default

// Example generate array of emails

const data = []

for(let i = 0; i < 5; i++){
  data.push(coverty.generator.getEmail())
}

console.log(data)
```

### The  responses ⛵

1. Response.**status**: status code of the request http.
2. Response.**headers**: headers response by the server.
3. Response.**data**: data response by the server.
4. Response.information.**timeFetching**: server response time in milliseconds.
5. Response.information.**timeTranformationJson**: time to transform the JSON.
6. Response.information.**url**: url where the request was directed.
7. Response.information.**sentHeaders**: headers sent to server.
8. Response.information.**sentBody**: body sent to server.
9. Response.information.**sentQuerys**: query sent to server.

Thanks to **typescript** you will be able to have autocompletion in visual studio code and other popular IDEs, so you can easily extract the api responses and some performance information. Just like **typescript** helps with module methods for easy use.