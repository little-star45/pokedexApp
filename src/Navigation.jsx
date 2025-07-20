import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import balloonIcon from './pokemon-1513925_1920.jpg'
import { LinkContainer } from 'react-router-bootstrap';

const NaviBar = () => {
  return (
    <>
    <Navbar  bg="light" variant="light" fixed="top">
        <Container>
            <img
              alt=""
              src={balloonIcon}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
           <Navbar.Brand style={{fontWeight: '800', fontSize: '24px'}}> Pokédex App </Navbar.Brand>
           <Nav className="me-auto">
             <LinkContainer to="/pokedexApp/">
              <Nav.Link style={{fontWeight: '700', fontSize: '20px'}}>Home</Nav.Link>
            </LinkContainer>
           </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default NaviBar
