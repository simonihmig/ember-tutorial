import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'article',

  /**
   * @property post
   * @public
   */
  post: null,

  teaserLength: 50,

  teaserText: computed('poss.text', 'teaserLength', function() {
    let text = this.get('post.text');
    let l = this.get('teaserLength');
    if (text.length > l)
      return `${text.substring(0, l)}...`;
    else
      return text;
  })
});
