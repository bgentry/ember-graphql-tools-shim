/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-graphql-tools-shim',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject({
      { name: 'ember-graphql-shim' },
      { name: 'ember-browserify' }
    })
    .then(() => {
      return this.addPackagesToProject([
        { name: 'graphql-tools', target: '^0.8.4' },
        { name: 'graphql', target: '^0.8.2' }
      ]).then(() => {
      });
    });
  }
};
