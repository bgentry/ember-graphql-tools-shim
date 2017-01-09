# ember-graphql-tools-shim

This README outlines the details of collaborating on this Ember addon.

## Installation

```
ember install ember-graphql-tools-shim
```

## Usage

```js
import graphqlTools from 'graphql-tools';

const { addResolveFunctionsToSchema } = graphqlTools;

addResolveFunctionsToSchema(this.pretender.schema, {
  Query: {
    watchers: () => mockWatchers
  }
});
```

## Developing

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
