import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['score', 'category', 'email'],
	score: null,
	email: null,
	category: null,

    commentText: 'my comment in response',
    actions: {
            saveComment: function() {
                    console.log(this.get('commentText'));

                    var score = this.store.createRecord('score', {
                            comment: this.get('commentText'),
                            date: new Date(), 
                            score: this.get('score'), 
                            email: this.get('email'),
                            category: this.get('category')
                    });

                    score.save();
            }
    }
});
