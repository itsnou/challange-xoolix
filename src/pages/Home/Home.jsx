import { useSelector } from 'react-redux';
import {StyledDiv} from './styled'
import Search from '../../components/Search/Search';
import Card from '../../components/Card/Card';

const Home = () => {
  const dogs = useSelector(state => state.animals);
  
  return (
    <StyledDiv>
      <h1>Raza de perros</h1>
      <Search />
      <div className="card-container">
        {
          dogs && dogs.length > 0 ?
          dogs.map((animal,idx) => <Card key={idx} id={idx} dog={animal}/>) 
          : null
        }
      </div>
    </StyledDiv>
   );
}
 
export default Home;