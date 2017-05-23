import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  author: DS.attr('string'),
  date: DS.attr('date'),
  blogPost: DS.belongsTo('blog-post')
});
