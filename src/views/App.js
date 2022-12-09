import logo from './logo.svg';
import './App.scss';

import MyComponent from './examples/mycomponents';
import ListTodo from './todos/listTodos';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './nav/navigation';
import Home from './examples/home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import ListUsers from './Users/listUsers';
import DetailUser from './Users/detailUser';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Home /> */}
          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
          {/* <MyComponent /> */}
          {/* <ListTodo></ListTodo> */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Todos">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path='/user' exact>
              <ListUsers />
            </Route>
            <Route path='/user/:id'>
              <DetailUser />
            </Route>
          </Switch>

        </header>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  );
}

export default App;
