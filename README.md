EnvironmentWash
===============

EnvironmentWash project for SWEN-444 User Centered Requirements and Design

## Live Demo

You can play around with a live demo of the site at http://benkantor.github.io/EnvironmentWash

## Known Issues

* Authentication is currently not implemented. Signing in or Creating an Account will login you in as a hard coded user.

* Posting on project page message boards has not been implemented yet

* A new project will not appear after filling out the create new product form.


## Developing & Contributing

### Installation Prerequisites

Install the following applications:

* git
* node
* npm

Once npm has been installed and configured, gloablly install the following node packages:

* grunt-cli
* bower

cli:

    npm install -g grunt-cli bower

### Building and running the project

Open a terminal and install the project dependencies:

    cd EnvironmentWash/frontend
    npm install
    bower install

Now you can run the server locally by running:

    cd EnvironmentWash/frontend
    grunt serve

Or, you can build the project into the **/dist** folder using the command:

    cd EnvironmentWash/frontend
    grunt build