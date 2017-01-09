/* jshint node: true */
'use strict';

const merge = require('broccoli-merge-trees');
const path = require('path');
const WebpackWriter = require('broccoli-webpack');

module.exports = {
  name: 'ember-graphql-tools-shim',

  included(app) {
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/graphql-tools.amd.js')
  },

  treeForVendor(tree) {
    const graphqlToolsPath = path.dirname(require.resolve('graphql-tools'))
    const graphqlToolsTree = new WebpackWriter([ graphqlToolsPath ], {
      entry: './index.js',
      output: {
        library: 'graphql-tools',
        libraryTarget: 'amd',
        filename: 'graphql-tools.amd.js'
      }
    });

    if (!tree) {
      return this._super.treeForVendor.call(this, graphqlToolsTree);
    }

    const trees = merge([graphqlToolsTree, tree], {
      overwrite: true
    });

    return this._super.treeForVendor.call(this, trees);
  }
};
