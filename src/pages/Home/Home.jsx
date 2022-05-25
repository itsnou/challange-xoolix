import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {StyledDiv} from './styled'
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';

const Home = () => {
  const dogs = useSelector(state => state.animals);
  const [favLS, setFavLS] = useState([]);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('dog'))
    if(fav){
      setFavLS(fav)
    }
  },[])

  function cargarFavorito(dog) {
    const arr = [...favLS, dog];
    setFavLS(arr);
    localStorage.setItem('dog', JSON.stringify(arr));
  }

  function recargarLS(dog) {
    const arrayFav = JSON.parse(localStorage.getItem('dog'))
    arrayFav.splice(arrayFav.indexOf(dog), 1)
    setFavLS(arrayFav)
    localStorage.setItem('dog', JSON.stringify(arrayFav))
  }
  
  return (
    <StyledDiv>
      <h1>Raza de perros</h1>
      <Search />
      <div className="card-container">
        {
          dogs && dogs.length > 0 ?
          dogs.map((animal,idx) => {
          return(
            <Card 
             key={idx} 
             dog={animal}
             cargarFavorito={() => cargarFavorito(animal)}
             recargarLS={() => recargarLS(animal)}
            />
          )}) 
          : null
        }
      </div>
    </StyledDiv>
   );
}
 
export default Home;