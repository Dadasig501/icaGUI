import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Nas from '../pages/Nas';
import Projects from '../pages/Projects';
function NavBar() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark">
          <Container>
            <Link to="/home">
              <Button>Home</Button>
            </Link>
          </Container>
          <Container>
            <Link to="/proyectos">
              <Button>Proyectos</Button>
            </Link>
          </Container>
          <Container>
            <Link to="/server-nas">
              <Button>Servidor NAS</Button>
            </Link>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/proyectos" component={Projects}/>
          <Route path="/server-nas">
            <Nas />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default NavBar;