Paddle Battle - Kegs with Legs Site for Mondo Robot
=============

## Dependencies

- [Bundler Gem Installer](http://gembundler.com/)
- [Node + NPM Package Manager](https://github.com/joyent/node/wiki/Installation)
- [Grunt](http://gruntjs.com/getting-started)
- [Bower](http://bower.io)

**Installing Grunt:**

This app requires Grunt `>=0.4.0`. If you've never installed Grunt, or you have installed an earlier version, visit [Grunt's Getting Started Guide](http://gruntjs.com/getting-started) before proceeding.

`npm install -g grunt-cli`

**Installing Bower:**

This app uses Bower for front-end package management. If you have never installed Bower, you can install it globally using npm:

`npm install -g bower`

## Installation

**Install gems:**  

`bundle install`

**Install node modules:**

`npm install`

**Install bower dependencies:**

`bower install`

**Run grunt tasks:**

`grunt`

## Run the application

`foreman start -p 5001`

## Deploys

**Git config**

In order to deploy to Heroku, you will need to edit your .git/config and add the following lines:

```
[remote "develop"]
    url = git@heroku.com:paddle-battle-dev.git
    fetch = +refs/heads/*:refs/remotes/heroku/*
[remote "production"]
    url = git@heroku.com:paddle-battle-prod.git
    fetch = +refs/heads/*:refs/remotes/heroku/*
```

**Develop*:** `$ git push develop develop:master`
