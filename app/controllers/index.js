import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  
  sortedModels: computed.sort('model', 'sortOrder'),

  sortOrder: ['date:desc']
});
