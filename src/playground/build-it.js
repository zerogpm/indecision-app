console.log('App.js is running!');

const appRoot = document.getElementById('app');

let state = false;

const onShow = () => {
  state = !state;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onShow}>{state ? 'Hide details' : 'Show details'}</button>
      {state ? <p>its show</p> : null}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();