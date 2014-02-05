ACM-competition
===============

This is the testing website for the ACM coding competitions at USU. word.

###Setup for dev

1. set up an environment variable for node: `NODE_ENV=localdev`
2. create `config/localdev.js` with `module.exports = { strategy: 'couch' };`
 in it. Possible strategies are `memory`, `couch`, or `mongo`.
3. `npm install`
4. `npm install -g gulp`
5. `gulp`

###Todo
 - Users need a way to update/change their info
 - Admin needs to be able to create questions
 - Event status is not being saved
 - Save creation date with event
 - feature: startdate, stopdate, duration
 - password reset stuff
 - on create user, don't set pass, send email instead
 - kick people to login screen if they aren't logged in