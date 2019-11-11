import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about', {path: '/about'});
  this.route('services');
  this.route('contact');

  this.route('posts', {path: '/posts'}, function() {
    this.route('new');
    // this.path('post', {path: ':post_id'});
  });
});

export default Router;
