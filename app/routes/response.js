import Ember from 'ember';

export default Ember.Route.extend({

	commentText: 'my comment',
	actions: {
		saveComment: function() {		
			console.log(this.get('commentText'));

			var score = this.store.createRecord('score', {
                comment: this.get('commentText'),
                date: new Date()
            });

			score.save();
		}	
	}
});
