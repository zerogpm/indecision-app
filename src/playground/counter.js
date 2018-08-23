// const user = {
//   name : 'Mike',
//   age : 26,
//   location: 'Vancouver'
// };
//
// function getLocation(user) {
//   return user.location ? <p>location {user.location}</p> : undefined;
// }
//
// const template2 = (
//   <div>
//     <h1>{user.name ? user.name : 'No Name'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user)}
//   </div>
// );
//
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };
//
// const appRoot = document.getElementById('app');
//
// const renderCounterApp = () => {
//   const template3 = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset Number</button>
//     </div>
//   );
//   ReactDOM.render(template3, appRoot);
// };
//
// renderCounterApp();

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Count : </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }

  handleAddOne() {
    console.log('+1');
  }

  handleMinusOne() {
    console.log('-1');
  }

  handleReset() {
    console.log('reset');
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));