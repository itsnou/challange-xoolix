import { StyledDiv } from './styled'
import { useEffect, useState } from 'react'
import Fav from '../../assets/fav.png'
import NotFav from '../../assets/nofav.png'

const Card = (dog) => {
  const [favorite, setFavorite] = useState(false);
  const [arrFav, setArrFav] = useState([]);
  const [favLS, setFavLS] = useState([]);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('dog'))
    if(fav){
      setFavLS(fav)
    }
  },[])

  function cargarFavorito() {
    const arr = [...favLS, dog.dog];
    setFavLS(arr)
    console.log(favLS)
    // setArrFav(favLS)
    // console.log(arrFav)
    // setFavorite(!favorite);
    // localStorage.setItem('dog', JSON.stringify(arrFav));
  }

  return ( 
    <StyledDiv>
      <img src={dog.dog} alt={dog.dog}/>
      {
        favorite ? 
          <img onClick={cargarFavorito} className="favorite" src={Fav} alt="favorite" />
        :
          <img onClick={cargarFavorito} className="favorite" src={NotFav} alt="not favorite" />
      }
    </StyledDiv>
  );
}
 
export default Card;