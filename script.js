function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "rate",








    () => {
      event.preventDefault();
      this.setState({
        rating: event.target.id,
        value: (() => {switch (event.target.id) {
            case "one":
              return "1";
            case "two":
              return "2";
            case "three":
              return "3";
            case "four":
              return "4";
            case "five":
              return "5";}
        })() });


      // event.preventDefault();
    });_defineProperty(this, "submit",
    () => {
      this.setState(state => ({
        submitted: !this.state.submitted }));

    });this.state = { rating: "", value: "", submitted: false };this.rate = this.rate.bind(this);this.submit = this.submit.bind(this);}



  render() {
    if (!this.state.submitted) {return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
      React.createElement("form", { method: "post", id: "container", action: "" }, /*#__PURE__*/
      React.createElement("div", { id: "card" }, /*#__PURE__*/
      React.createElement("img", { id: "star", src: "./images/icon-star.svg" }), /*#__PURE__*/
      React.createElement("h1", null, "How did we do?"), /*#__PURE__*/
      React.createElement("p", null, "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"), /*#__PURE__*/
      React.createElement("div", { id: "ratings" }, /*#__PURE__*/
      React.createElement(Button, { id: "one", num: "1", rate: this.rate, selector: this.selector, rating: this.state.rating }), /*#__PURE__*/
      React.createElement(Button, { id: "two", num: "2", rate: this.rate, selector: this.selector, rating: this.state.rating }), /*#__PURE__*/
      React.createElement(Button, { id: "three", num: "3", rate: this.rate, selector: this.selector, rating: this.state.rating }), /*#__PURE__*/
      React.createElement(Button, { id: "four", num: "4", rate: this.rate, selector: this.selector, rating: this.state.rating }), /*#__PURE__*/
      React.createElement(Button, { id: "five", num: "5", rate: this.rate, selector: this.selector, rating: this.state.rating })), /*#__PURE__*/


      React.createElement("input", { onClick: this.submit, type: "submit", id: "submit", value: "SUBMIT" }))));


    } else

    {return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "card", style: { backgroundColor: "hsl(213, 19%, 22%)" } }, /*#__PURE__*/
      React.createElement("img", { id: "logo", src: "./images/illustration-thank-you.svg" }), /*#__PURE__*/
      React.createElement("p", { id: "result" }, "You selected ", this.state.value, " out of 5"), /*#__PURE__*/
      React.createElement("h1", { id: "TY-header" }, "Thank you!"), /*#__PURE__*/
      React.createElement("p", { id: "TY-paragraph" }, "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!")));



    }
  }}


class Button extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "selector",





    () => {
      this.setState(state => ({
        selected: !this.state.selected }));

      event.preventDefault();
    });this.state = { selected: false };this.selector = this.selector.bind(this);}

  render() {return /*#__PURE__*/React.createElement("div", null,
    this.props.id != this.props.rating ? /*#__PURE__*/
    React.createElement("button", { id: this.props.id, onClick: () => {event.preventDefault();this.selector();this.props.rate();}, className: "grade" }, this.props.num) : /*#__PURE__*/

    React.createElement("button", { id: this.props.id, onClick: () => {event.preventDefault();this.selector();this.props.rate();}, className: "grade", style: { color: "black", backgroundColor: "hsl(25,97%,53%)" } }, this.props.num));

  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("node"));