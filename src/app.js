console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['One', 'Two']
};

// JSX - JavaScript XML
var template = (
<div>
  <h1>{app.title}</h1>
  {(app.subtitle) && <p>{app.subtitle}</p>}
  <p>{ app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
  <ol>
    <li>Item one</li>
    <li>Item two</li>
  </ol>
</div>
);

var user = {
  name : 'Mike',
  age : 26,
  location: 'Vancouver'
};

function getLocation(user) {
  return user.location ? <p>location {user.location}</p> : undefined;
}

var template2 = (
  <div>
    <h1>{user.name ? user.name : 'No Name'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
