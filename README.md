EnvironmentWash
===============

Team project for SWEN-444 User Centered Requirements and Design.

Environment Wash is a web application that addresses the needs of citizens who
are concerned about environmental issues. The solution that Environment Wash
will attempt to achieve is to raise awareness and encourage active volunteerism
for environmental projects in a person’s local community. Environment Wash will
achieve this by providing an online space where concerned citizens can create,
organize and discover environmental projects in their local communities.

## Demo

You can play around with a live demo of the site [here](http://104.131.177.161:8000)

## Usage

Environment Wash supports the following functionality:

### Signup / Create Account

To access the full functionality of Environment Wash, user need to first make
an account. To make an account simply click the *Create Account* Button on the
home page and enter your information. Once you have an account you can log into
the website by clicking the *Login* button and entering your username and
password.

### Search for projects

Users can search for projects by either entering thier search criteria in the
search box or by clicking the Discover button found in the navigation bar.

### Sign up to volunteer for a project

To sign up to volunteer for a project, simply navigate to the page of the 
project and click *Volunteer*.

### Post comments on a project page

Users can ask questions about a project by posting a comment on a project page.
To post a comment, simply navigate to the project page and use the new comment
box found at the bottom of the page.

### Create a project

Users can create thier own project's by clicking the *Plan Project* button
found in the navigation bar.

## Known Issues

None currently


## Developing & Contributing

### Installation Prerequisites

Install the following applications:

* git
* node
* npm

Once npm has been installed and configured, gloablly install the following node
packages:

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