// import logo from './logo.svg';
import trashcan from './trashcan.png';
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link,/* useLocation, useParams*/ } from 'react-router-dom';

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
    <nav>
      <Link to="/">About</Link> | <Link to="/todos">Checklist</Link> | <Link to="/contact">Contact</Link>
    </nav>
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
      <main id='todo'>
        <h3>Checklist</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
          </label>
          <input
            id="new-todo" onChange={this.handleChange} value={this.state.text} placeholder='What needs to be done?'
          />
          <button type='#'>
            Add Item
          </button>
        </form>
        <TodoList items={this.state.items} delete={this.deleteItem} />
        {/*<Sort/>*/}
        {/* <button type='button' className={this.state.activeName === inactive ? 'active' : ''} onClick={this.handleActiveButton}>All</button> */}
        <button type='button'>Completed</button>
        <button type='button'>Incomplete</button>
      </main>
    );
  }
//Active className not working...
  handleActiveButton(e) {
    e.preventDefault();
  
    const activeName = e.target.name;
    this.setState({ activeName });
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
  };
  //Delete doesn't work...
  deleteItem(e,){
    console.log(e)
    var itemsCopy = this.state.items.slice()
    itemsCopy.splice(e,1);
    this.setState({items:itemsCopy});
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}><input type='checkbox'/>{item.text}<button onClick={this.props.delete}><img src={trashcan} alt="&#128465;"/></button></li>
        ))}
      </ul>
    );
  }
}

//Trying to sort TodoList
function Sort() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState();

  useEffect(() => {
    const sortArray = type => {
      const types = {
        all: 'all',
        checked: 'checked',
        unchecked: 'unchecked',
      };
      const sortProperty = types[type];
      const sorted = [...this.state.index].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);
  return (
    <div className="App">
      <select onChange={(e) => setSortType(e.target.value)}> 
        <option value="All">All</option>
        <option value="Checked">Checked</option>
        <option value="Unchecked">Unchecked</option>
      </select>

      {data.map(band => (
        <div key={this.state.items.id} style={{ margin: '30px' }}>
          <div>{`All: ${this.state.items}`}</div>
          <div>{`Checked: ${this.state.items.checked}`}</div>
          <div>{`Unchecked: ${this.state.items.unchecked}`}</div>
        </div>
      ))}
    </div>
  );
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
