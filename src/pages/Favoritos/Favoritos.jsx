import { StyledDiv } from "./styled";
import { useState, useEffect } from 'react'
import Card from '../../components/Card/Card';

const Favoritos = () => {
  const [favLS, setFavLs] = useState([]);

  useEffect(() => {
    setFavLs(JSON.parse(localStorage.getItem('dog')))
  },[])
  return ( 
    <StyledDiv>
      <h1>Favoritos</h1>
      {
        favLS && favLS.length > 0 ?
        favLS.map((animal,idx) => {
        return(
          <Card 
            key={idx} 
            dog={animal}
          />
        )})
        :
        <h1>Aún no tienes favoritos</h1>
      }
    </StyledDiv>
   );
}
 
export default Favoritos;