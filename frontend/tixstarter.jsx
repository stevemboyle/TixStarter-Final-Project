var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;

var App = require('./components/app.jsx');
var EventDetail = require('./components/events/detail.jsx');
var ShowtimeDetail = require('./components/showtimes/detail.jsx');
var ApiUtil = require('./util/apiUtil');

var routes = (
  <Route path="/" component={App}>
    <Route path="event/:eventId" component={EventDetail}>
      <Route path="showtimes/:showtimeId" component={ShowtimeDetail} />
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={HashHistory}>{routes}</Router>,
    document.getElementById('root')
  );
});