class VisibilityApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonChanged = this.handleButtonChanged.bind(this);
    this.state = {
      buttonState : false
    };
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleButtonChanged}>{ this.state.buttonState ? "Show Details" : "Hide Details"}</button>
        <p>{ this.state.buttonState ? null : "it shows"}</p>
      </div>
    );
  }

  handleButtonChanged() {
    this.setState((prevState) => {
      return {
        buttonState: !prevState.buttonState
      };
    });
  }
}


ReactDOM.render(<VisibilityApp />, document.getElementById('app'));