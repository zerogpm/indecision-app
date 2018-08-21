console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
<div>
  <h1>Indecision App</h1>
  <p>This is some info</p>
  <ol>
    <li>Item one</li>
    <li>Item two</li>
  </ol>
</div>
);

var template2 = (
  <div>
    <h1>Chris Su</h1>
    <p>Age: 26</p>
    <p>Location: Vancouver</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
