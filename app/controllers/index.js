import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  
  model: [
    {
      title: 'My first blog post',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab autem ea in tempora. Consequatur et fugiat quaerat sunt. Debitis ducimus fugiat laudantium nemo quidem, quo sapiente. Aspernatur dolore, similique!',
      author: 'Simon Ihmig',
      date: new Date("2017-05-21T12:00:00")
    },
    {
      title: 'My second blog post',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab autem ea in tempora. Consequatur et fugiat quaerat sunt. Debitis ducimus fugiat laudantium nemo quidem, quo sapiente. Aspernatur dolore, similique!',
      author: 'Simon Ihmig',
      date: new Date("2017-05-23T19:00:00")
    }
  ],

  sortedModels: computed.sort('model', 'sortOrder'),

  sortOrder: ['date:desc']
});
