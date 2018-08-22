'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['One', 'Two']
};

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Mike',
  age: 26,
  location: 'Vancouver'
};

function getLocation(user) {
  return user.location ? React.createElement(
    'p',
    null,
    'location ',
    user.location
  ) : undefined;
}

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'No Name'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user)
);

var count = 0;
var addOne = function addOne() {
  return console.log('+1');
};
var minusOne = function minusOne() {
  return console.log('-1');
};
var reset = function reset() {
  return console.log('reset');
};
var template3 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'Reset'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template3, appRoot);
