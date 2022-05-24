import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import { StyledDiv } from './styled'
import { getBreeds } from '../../redux/actions/actions'

const Search = () => {
  const [search, setSearch] = useState('affenpinscher');
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBreeds(search.toLowerCase()))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch])

  const getAnimal = () => {
    dispatch(getBreeds(search.toLowerCase()))
  }

  return (
    <StyledDiv>
      <div className="search">
        <input placeholder="Affenpinscher" onChange={event => setSearch(event.target.value)}></input>
        <button onClick={getAnimal}>Buscar</button>
      </div>
    </StyledDiv>
   );
}
 
export default Search;