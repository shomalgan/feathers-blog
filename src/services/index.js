const posts = require('./posts/posts.service.js');
const users = require('./users/users.service.js');
const comments = require('./comments/comments.service.js');
const makers = require('./makers/makers.service.js');
const tags = require('./tags/tags.service.js');
const toTags = require('./to-tags/to-tags.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(posts);
  app.configure(users);
  app.configure(comments);
  app.configure(makers);
  app.configure(tags);
  app.configure(toTags);
};
