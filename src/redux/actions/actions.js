import axios from 'axios';


export const getBreeds = (breed) => async (dispatch) => {
  const breeds= await axios.get(`https://dog.ceo/api/breed/${breed}/images`)
  const breedList = breeds.data.message.slice(0,10)
  dispatch({type: 'setAnimals', payload: breedList})
}