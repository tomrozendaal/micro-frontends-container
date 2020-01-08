import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <span role="img" aria-label="books">
              🍿
            </span>{' '}
            Movies
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Overview</Nav.Link>
              <Nav.Link href="/new">New movie</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Switch>
          <Route path="/" exact component={Nav} />
        </Switch>
      </Container>

      <footer>
        <Container>
          <p>Footer</p>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default App
