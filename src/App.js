
import './App.css';
import {Navbar,Nav,NavDropdown,Form,Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar className="navb" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"> Save nature</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Events</Nav.Link>
      <NavDropdown title="Ways to help" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Donate</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Round up</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Adopt a Reef</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">News</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Contact</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Press
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<h1>  Save Mother Nature </h1>
      <h2>Join our association</h2>
      <div className="back">
      
      <Form >
        <p>Please provide your name and your contact information below:</p>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="success">Submit</Button>{' '}
</Form>
    </div>
    </div>
  );
}

export default App;
