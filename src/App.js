// import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<About/>} />
        <Route path="/todos" element={<Todos/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

function Nav() {
  return (
    <>
      <Link to="/">About</Link> | <Link to="/todos">Todos</Link> | <Link to="/contact">Contact</Link>
    </>
  );
}

function About() {
  return <p>Home Page Content</p>;
}

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <main>
        <h3>TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add Item
          </button>
        </form>
        <TodoList items={this.state.items} />
      </main>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}


var initialState = {
  firstName: "",
  email: "",
  lastName: "",
  comments: "",
  msg: "",
  errors: [],
  hasLoaded: false
};

function Contact() {
  var [state, setState] = useState(initialState);

  console.log("render");

  useEffect(() => {
    // effect runs after every render

    return () => {
      // cleanup that happens before effect is run the next time
      // useful for removing subscriptions, or event listeners.
    };
  });

  function handleFormChange(e) {
    var newValue = e.target.value;
    var name = e.target.name;

    setState({
      ...state,
      [name]: newValue
    });
  }

  var errs = state.errors.map(item => {
    return <div className="error">{item.msg}</div>;
  });

  return (
    <>
      {state.msg && <div className="error">{state.msg}</div>}
      {errs}
      <fieldset>
        <label>Your First Name</label>
        <br />
        <input
          value={state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={handleFormChange}
        />
      </fieldset>
      <fieldset>
        <label>Your Last Name</label>
        <br />
        <input
          name="lastName"
          value={state.lastName}
          onChange={handleFormChange}
          placeholder="Last Name"
          style={{ width: 250 }}
        />
      </fieldset>
      <fieldset>
        <label>Your Email</label>
        <br />
        <input
          value={state.email}
          onChange={handleFormChange}
          name="email"
          placeholder="you@email.com"
        />
      </fieldset>
      <fieldset>
        <label>Your Comments</label>
        <br />
        <textarea
          name="comments"
          value={state.comments}
          onChange={handleFormChange}
          placeholder="Enter your comments here"
          rows="10"
          cols="60"
        />
      </fieldset>
      <button className="button" 
      // onClick={handleFormSubmit}
      >
        Submit
      </button>
    </>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
