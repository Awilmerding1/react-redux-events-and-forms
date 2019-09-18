export default function fetchAnimals() {

  return dispatch => {
    return fetch('http://localhost:3000/animals')
    .then(resp => resp.json())
    .then(animals => dispatch({type: 'FETCH_ANIMALS', payload: animals}))
  }

}
