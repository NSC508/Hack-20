// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import FormInput from "./components/FormInput";

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { NavigationBar } from './components/NavigationBar';


// function App() {
//   return (
//     <React.Fragment>
//       <Router>
//         <NavigationBar />
//       </Router>
//       <FormInput />
//     </React.Fragment>
//   );
// }

// export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormInput from "./components/FormInput";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";

import { Home } from "./Home";
import { About } from "./About";
import { Submission } from "./Submission";
import Sidebar from "./components/Sidebar";

import fire from "./components/config/fire";
import Login from "./components/Login";
import HomeTest from "./components/HomeTest";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />

          <Sidebar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={Submission} />
          </Switch>
        </Router>
        {this.state.user ? <HomeTest /> : <Login />}
      </React.Fragment>
    );
  }
}

export default App;