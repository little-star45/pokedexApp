import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import balloonIcon from '../assets/logo1.png'
import { LinkContainer } from 'react-router-bootstrap';
import { MyNavbar, MyNavbarBrand, MyNavLink } from '../styles/MainStyles';

const NaviBar = () => {
  return (
    <>
    <MyNavbar  fixed="top">
        <Container>
            <img
              alt=""
              src={balloonIcon}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{' '}
           <MyNavbarBrand>Pokebowl App</MyNavbarBrand>
           <Nav className="me-auto">
             <LinkContainer to="/">
              <MyNavLink>Home</MyNavLink>
            </LinkContainer>
           </Nav>
        </Container>
    </MyNavbar>
    </>
  )
}

export default NaviBar
