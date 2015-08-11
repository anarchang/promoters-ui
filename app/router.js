import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('score', {path: 'score/:score_id'});
  this.route('scores');
  this.route('response');
  this.route('thanks');
});

export default Router;
