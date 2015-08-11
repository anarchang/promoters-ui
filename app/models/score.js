import DS from 'ember-data';

var Score = DS.Model.extend({
 	score: DS.attr('number'),
 	comment: DS.attr('string'),
 	email: DS.attr('string'),
 	date: DS.attr('date'),
});

// Score.reopenClass({
// 	FIXTURES: [
// 		{
// 			id: 1,
// 			score: 8,
// 			comment: 'It was great!',
// 			email: 'tim@email.com',
// 		},
// 		{
// 			id: 2,
// 			score: 9,
// 			comment: "I'm going to tell all of my friends",
// 			email: 'tim@promoter.com'
// 		}
// 	]
// });

export default Score;