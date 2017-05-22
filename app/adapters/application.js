import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://192.168.1.184:8080',
  namespace: 'api'
});
