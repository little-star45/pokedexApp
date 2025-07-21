import styled from 'styled-components'
import { Button, Card, Navbar, Nav } from 'react-bootstrap'
import { rgba } from 'polished';

const GREENCOLOR = rgba(143, 215, 165, 1)
const REDCOLOR =  rgba(220, 99, 55, 0.723)
const TEXTYELLOW=rgba(255, 222, 0, 0.8)
// const TEXTBLUE=rgba(42, 117, 187)

const typeColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
}


export const MainButton = styled(Button)`
  background-color: rgba(255, 222, 0, 0.6);
  border-color: rgba(42, 117, 187);
  border-width: 3px;
  font-weight: 600;
  color: #433e3e;
  margin: 0 0.5rem;

  &:hover {
    background-color: #ffffff;
    border-color: ${REDCOLOR};
    color: #433e3e;
    margin: 0 0.5rem;
  }
`
export const SearchButton = styled(MainButton)`
  background-color: rgba(143, 215, 165, 0.5);
  border-color: rgba(143, 185, 165, 1);
  color: #ffffff;
  font-weight: 800;
  font-size: 18px;
  padding: 2px 10px;;
  -webkit-text-stroke: 1px rgba(42, 117, 187,0.8);
  -webkit-text-fill-color: rgba(255, 222, 0, 1);

  &:hover {
    background-color: ${GREENCOLOR}+80;
    border-color: ${GREENCOLOR}+80;
  }
`

export const ResetButton = styled(SearchButton)`
  background-color: rgba(220, 109, 55, 0.4);
  border-color: rgba(220, 99, 55, 0.7);

  &:hover {
    background-color: ${REDCOLOR}+80;
    border-color: ${REDCOLOR}+80;
  }
`
export const PokeCard = styled(Card)`
  background-color: ${({ bgType }) => rgba(typeColors[bgType] || '#fffff',0.4)};
  border-color: ${({ bgType }) => rgba(typeColors[bgType] || '#fffff',0.8)};
  border-width: 3px;
  width: 18rem;
  margin: 3px;

  &:hover {
    background-color: ${({ bgType }) => rgba(typeColors[bgType] || '#fffff',0.6)};
    border-color: ${({ bgType }) => rgba(typeColors[bgType] || '#fffff',1)};
    width: 18rem;
  }
`

export const PokeDetailCard = styled(Card)`
  background-color: ${({ bgType }) => rgba(typeColors[bgType] || '#fffff',0.4)};
  border-color: ${({ bgType }) => rgba(typeColors[bgType] || '#fffff',0.8)};
  border-width: 3px;
  /* width: 24rem; */
  margin: 3px 15rem;

  &:hover {
    background-color: ${({ bgType }) => rgba(typeColors[bgType] || '#fffff',0.6)};
    border-color: ${({ bgType }) => rgba(typeColors[bgType] || '#fffff',1)};
    /* width: 18rem; */
  }
`

export const MyFooter = styled.div`
  margin-top: 2rem;
  font-weight: 800;
  color: rgba(255, 222, 0);
  background-color: rgba(42, 117, 187,0.8);
  position: static;
  right: 0;
  left: 0;
  bottom: 0;

  a{
    color:rgba(255, 222, 0)
  }
`

export const PokeTitle = styled(Card.Title)`
  font-weight: 800;
  font-size: 50px;
  margin-top: 10px;
  color: ${TEXTYELLOW};
  -webkit-text-stroke: 2px rgba(42, 117, 187,1);
`

export const PokeTitleHome = styled(PokeTitle)`
  font-weight: 900;
  font-size: 30px;
  -webkit-text-stroke: 1px rgba(42, 117, 187,1);
  text-shadow: 2px 2px 5px rgba(42, 117, 187,0.5);
`

export const ParamsTitle = styled.div`
  font-weight: 800;
  font-size: 24px;
  margin-top: 10px;
  color: ${TEXTYELLOW};
  -webkit-text-stroke: 1px rgba(42, 117, 187,1);
`

export const MyNavbar = styled(Navbar)`
  color: rgba(255, 222, 0, 0.8)!important;
  background-color: rgba(42, 117, 187,0.8);
`

export const MyNavbarBrand = styled(Navbar.Brand)`
  font-weight: 800;
  color: rgba(255, 222, 0, 1)!important;
  font-size: 26px;
`

export const MyNavLink = styled(Nav.Link)`
  font-weight: 800;
  color: rgba(255, 222, 0, 1)!important;
  font-size: 20px;

  &:hover {
    text-shadow: 2px 2px 2px #ff6200;
  }
`