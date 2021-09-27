import React from 'react';
import { Button, Navbar, Dropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Nas from '../pages/Nas';
import Projects from '../pages/Projects';
import Hom from '../pages/Home1';
import "../css/Nav.css";

function NavBar(props) {
  //<Route exact path="/proyectos" component={Projects} />
  return (
    <div className="App">
      <Router>
        <Redirect to="/home" expand="lg" />
        <Navbar bg="dark">
          <NavLink to="/home">
            <Button variant="outline-light">Home</Button>
          </NavLink>
          <NavLink to="/proyectos">
            <Button variant="outline-light">Projects</Button>
          </NavLink>
          <NavLink to="/server-nas">
            <Button variant="outline-light">NAS</Button>
          </NavLink>
            <Dropdown >
              <Dropdown.Toggle  id="dropdown-basic">
                {props.email}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/user-conf">Config</Dropdown.Item>
                <Dropdown.Item href="/">Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          
        </Navbar>

        <Switch>
          <Route exact path="/home" component={Hom} />
          <Route path="/proyectos">
            <Projects email={props.email} />
          </Route>
          <Route path="/server-nas">
            <Nas email={props.email} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default NavBar;