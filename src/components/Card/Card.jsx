import { StyledDiv } from './styled'
import Fav from '../../assets/fav.png'
import NotFav from '../../assets/nofav.png'
import { useState, useEffect } from 'react';
import { verificarFavorito } from '../../methods/methods';

const Card = ({dog, cargarFavorito, recargarLS}) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(verificarFavorito(dog))
  },[dog])

  function handleClick (dog) {
    const fav = verificarFavorito(dog);
    if(!fav){
      cargarFavorito(dog);
      setFavorite(!favorite)
    }else{
      recargarLS(dog)
      setFavorite(!favorite)
    }
  }

  return ( 
    <StyledDiv>
      <img src={dog} alt={dog}/>
      {
        favorite ? 
          <img onClick={() => handleClick(dog)} className="favorite" src={Fav} alt="favorite" />
        :
          <img onClick={() => handleClick(dog)} className="favorite" src={NotFav} alt="not favorite" />
      }
    </StyledDiv>
  );
}
 
export default Card;