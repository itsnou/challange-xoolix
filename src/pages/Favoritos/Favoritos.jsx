import { StyledDiv } from "./styled";
import Card from '../../components/Card/Card';
import { useEffect, useState } from "react";

const Favoritos = () => {
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem('dog')));

  useEffect(() => {
    window.addEventListener('storage', () => {
      setFav(JSON.parse(localStorage.getItem('dog')));
    })
    return () => {
      window.removeEventListener('storage', console.log('salio'))
    }
  },[])

  return ( 
    <StyledDiv>
      <h1>Favoritos</h1>
      <div className="card-container">
        {
          fav && fav.length > 0 ?
          fav.map((animal,idx) => {
          return(
            <Card 
              key={idx} 
              dog={animal}
            />
          )})
          :
          <h1>Aún no tienes favoritos</h1>
        }
      </div>
    </StyledDiv>
   );
}
 
export default Favoritos;