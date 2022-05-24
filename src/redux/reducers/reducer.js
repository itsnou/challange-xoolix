const initialState = {
	animals: []
}

const module = (state=initialState, {type,payload}) => {
  switch (type) {
    case 'setAnimals':
      return{
        ...state,
        animals: payload
      }
    default:
      return state 
  }
}

export default module;