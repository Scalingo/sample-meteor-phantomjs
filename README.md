# Sample - Meteor, spiderable and PhantomJS

The sample application show how to deploy a __Meteor__ application using PhantomJS
on the PaaS [__Scalingo__](https://scalingo.com)

## Context

The `spiderable` meteor package requires phantomjs to be available to work correctly.

## Walkthrough

The phantomjs binary is not installed by default in the application environment, so 
you have to install it as dependency of your application. The package
[`dfischer:phantomjs`](https://atmospherejs.com/dfischer/phantomjs) provides a wrapper
around the NPM module `phantomjs` which installs the correct binary.

Another known issue is that the `spiderable` package is not working correctly in a _dockerized_
environment: https://github.com/meteor/meteor/issues/2429. Hopefully, the community has developed
an alternative package which works as expected: `ongoworks:spiderable`

```shell
meteor create spiderable-app
cd spiderable-app
meteor add ongoworks:spiderable
meteor add dfischer:phantomjs

git init
git add .
git commit -m "meteor project with PhantomJS"
scalingo create spiderable-app
git push scalingo master
```

At the end of the process, you can access your project. If you have a look at the source,
you'll essentialy see a `<script>` tag including the meteor application

However, if you go to the following URL:

https://spiderable-app.scalingo.io/?_escaped_fragment_=

You can see by looking at the generated HTML that PhantomJS has correctly run, the page
contains the text of the content. Ready to be indexed.
