import React from 'react'
import {connect} from 'react-redux'
import addAnimal from './actions/addAnimal'

class AnimalForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: "",
      gender: "Male",
      species: {name: ''}
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addAnimal(this.state)
    this.setState({
      name: "",
      gender: "Male",
      species: {name: ''}
    })
  }

  onChange = (event) => {
    if (event.target.name !== 'species_name') {
      this.setState({
        ...this.state,
        [event.target.name]: event.target.value
      })
    } else {
      this.setState({
        ...this.state,
        species: {name: event.target.value}
      })
    }

  }


  render() {
    return (
      <div>
      <div>
          <h3>Add an Animal!</h3>
          <form onSubmit={this.onSubmit}>
            <label>Name:   </label>
            <input onChange={this.onChange} type="text" value={this.state.name} name="name"/><br/><br/>
            <label>   Gender:   </label>
            <select onChange={this.onChange} value={this.state.gender} name="gender">
              <option >Male</option>
              <option >Female</option>
              <option >Unknown</option>
            </select>
            <br/><br/>
            <label>Species Name:   </label>
              <input onChange={this.onChange} type="text" value={this.state.species.name} name="species_name"/>
            <input type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, {addAnimal})(AnimalForm);
