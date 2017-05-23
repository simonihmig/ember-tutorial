import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    createComment(author, text) {
      this.store.createRecord('comment', {
        date: new Date(),
        author,
        text,
        blogPost: this.get('model')
      }).save();
    }
  }
});
