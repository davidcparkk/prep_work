# README

## Blog Posts

 The Blog Posts application is a backend JSON API. User will be able to fetch data from the API either by typing in the address bar of their browser or through HTTP request via terminal once the server is running. Project is built using Ruby on Rails framework. The testing suite used is RSpec. 

There are two API endpoints ('/api/ping' and '/api/posts'). The 'api/ping' route will simply return a success message indicating a live server, while the '/api/posts' route will fetch data from an external API and return that data filtered or sorted depending on user's query parameters. There are three additional parameters that are accepted with this route: tags, direction, and sortBy. Tags is required, whereas direction and SortBy are optional.

### Prerequisites

Rails (2.5.3)
rspec-rails (3.5)
factory_bot_rails (4.0)
shoulda-matchers (3.1)
faker

To see further details, please refer to Gemfile.


### Getting Started

In order to set up project on your local machine for development or testing purposes, see instructions below:

1. To start up server, type command in terminal: 
```
rails s
```
2. Open browser and type in url:
```
localhost:3000
```
3. To access '/api/ping' API endpoint, type in url: 
```
localhost:3000/api/ping
```
4. To access '/api/posts' API endpoint, type in url: 
```
localhost:3000/api/posts?tags=#{tag}&direction=#{direction}sortBy=#{sortBy}
```
Note that to access the API you are required to have a 'tags' parameter in the query string or an error message will be rendered onto the screen. SortBy will default to 'asc' whereas direction will default to 'id'.


### Testing

To run test suite, type in terminal of your root directory:
```
bundle exec rspec
```

Some of the issues covered:
- Returning valid JSON response from API routes
- Status codes, both of successes and of errors
- Checking duplicate values of response if query parameter had more than one "tag" value
