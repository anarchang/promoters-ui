import Ember from 'ember';

export default Ember.Controller.extend({

    sortProps: ['date:desc'],
    sortedComments: Ember.computed.sort('model', 'sortProps'),

    barheight: function() {this.get('model').score * 10}.property('model')
});
