import Ember from 'ember';

export default Ember.Controller.extend({

    sortProps: ['date:desc'],
    sortedComments: Ember.computed.sort('model', 'sortProps'),
});
