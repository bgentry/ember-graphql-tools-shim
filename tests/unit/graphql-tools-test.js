import { module, test } from 'ember-qunit';

import {
  MockList,
  addErrorLoggingToSchema,
  addMockFunctionsToSchema,
  addResolveFunctionsToSchema,
  addSchemaLevelResolveFunction,
  makeExecutableSchema
} from 'graphql-tools';

module('Unit | vendor imports | graphql-tools');

test('it exports MockList', function(assert) {
  assert.ok(MockList);
});

test('it exports addErrorLoggingToSchema', function(assert) {
  assert.ok(addErrorLoggingToSchema);
});

test('it exports addMockFunctionsToSchema', function(assert) {
  assert.ok(addMockFunctionsToSchema);
});

test('it exports addResolveFunctionsToSchema', function(assert) {
  assert.ok(addResolveFunctionsToSchema);
});

test('it exports addSchemaLevelResolveFunction', function(assert) {
  assert.ok(addSchemaLevelResolveFunction);
});

test('it exports makeExecutableSchema', function(assert) {
  assert.ok(makeExecutableSchema);
});
