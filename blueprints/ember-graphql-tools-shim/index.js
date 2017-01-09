/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-graphql-tools-shim',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonToProject('ember-graphql-shim')
    .then(() => {
      return this.addPackagesToProject([
        { name: 'graphql-tools', target: '^0.9.0' }
      ]).then(() => {
      });
    });
  }
};
