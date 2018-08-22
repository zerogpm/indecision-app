console.log('App.js is running!');

let app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemove = () => {
  app.options = [];
  render();
};

const appRoot = document.getElementById('app');
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {(app.subtitle) && <p>{app.subtitle}</p>}
      <p>{ app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
      <p>{app.options.length}</p>
      <button onClick={onRemove}>Remove All</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>your option: {option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();