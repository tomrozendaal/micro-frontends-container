import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import MicroFrontend from './Microfrontend'

import './App.css'

const Browse = ({ history, match }) => (
  <MicroFrontend host="http://localhost:5002" name="Browse" match={match} history={history} />
)
const Movie = ({ history, match }) => (
  <MicroFrontend host="http://localhost:5003" name="Movie" match={match} history={history} />
)

function App() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <span role="img" aria-label="books">
              🍿
            </span>{' '}
            Movie trailers
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Switch>
          <Route path="/" exact component={Browse} />
          <Route path="/movie/:id" component={Movie} />
        </Switch>
      </Container>

      <footer>
        <Container>
          <Row>
            <Col xs={7}>
              <span>© Movie Trailers</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default App
