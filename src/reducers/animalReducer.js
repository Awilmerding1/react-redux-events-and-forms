export default function animalReducer(state={animals: []}, action) {

  switch (action.type) {
    case 'FETCH_ANIMALS':
      return {animals: action.payload}
    default:
      return state
  }

}
