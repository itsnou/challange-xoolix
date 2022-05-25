const initialState = {
	animals: [],
  favoritosCargados: JSON.parse(localStorage.getItem('dog')) || []
}

const module = (state=initialState, {type,payload}) => {
  switch (type) {
    case 'setAnimals':
      return{
        ...state,
        animals: payload
      }
    case 'setFavoritos':
      const array = [...state.favoritosCargados, payload]
      return{
        ...state,
        favoritosCargados: array
      }
    default:
      return state 
  }
}

export default module;