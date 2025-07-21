import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import balloonIcon from './logo1.png'
import { LinkContainer } from 'react-router-bootstrap';

const NaviBar = () => {
  return (
    <>
    <Navbar  bg="light" variant="light" fixed="top">
        <Container>
            <img
              alt=""
              src={balloonIcon}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{' '}
           <Navbar.Brand style={{fontWeight: '800', fontSize: '24px'}}> Pokebowl App </Navbar.Brand>
           <Nav className="me-auto">
             <LinkContainer to="/">
              <Nav.Link style={{fontWeight: '700', fontSize: '20px'}}>Home</Nav.Link>
            </LinkContainer>
           </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default NaviBar
