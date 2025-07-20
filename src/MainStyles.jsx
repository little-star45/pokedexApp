import styled from 'styled-components'
import { Button, Card } from 'react-bootstrap'
import { rgba } from 'polished';

const GREENCOLOR = '#47d973'
const REDCOLOR =  rgba(255, 69, 0, 0.8)
const BASECOLOR = '#0091ff'

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
  background-color: rgba(255, 222, 0, 0.8);
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
  background-color: ${GREENCOLOR};
  border-color: ${GREENCOLOR};
  color: #ffffff;

  &:hover {
    background-color: ${GREENCOLOR}+80;
    border-color: ${GREENCOLOR}+80;
  }
`

export const ResetButton = styled(MainButton)`
  background-color: ${REDCOLOR};
  border-color: ${REDCOLOR};
  color: #ffffff;

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
  font-weight: 800;
  color: rgba(255, 222, 0);
  background-color: rgba(42, 117, 187,0.8);
`

export const PokeTitle = styled(Card.Title)`
  font-weight: 800;
  font-size: 50px;
  margin-top: 10px;
  color: rgba(255, 222, 0, 0.8);
  -webkit-text-stroke: 3px rgba(42, 117, 187,1);
`

export const ParamsTitle = styled.div`
  font-weight: 800;
  font-size: 24px;
  margin-top: 10px;
  color: rgba(255, 222, 0, 0.8);
  -webkit-text-stroke: 1px rgba(42, 117, 187,1);
`