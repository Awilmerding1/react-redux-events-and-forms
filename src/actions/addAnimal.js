export default function fetchAnimals(animal) {

  return dispatch => {
    return fetch('http://localhost:3000/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(animal)
    })
    .then(resp => resp.json())
    .then(animal => dispatch({type: 'ADD_ANIMAL', payload: animal}))
  }

}
