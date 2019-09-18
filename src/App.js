import React from 'react';
import {connect} from 'react-redux'
import fetchAnimals from './actions/fetchAnimals'

import Animals from './Animals'
import AnimalForm from './AnimalForm'

class App extends React.Component {

  componentDidMount(){
    this.props.fetchAnimals()
  }

  render() {
    return (
      <div>
          <AnimalForm/>
          <Animals animals={this.props.animals}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    animals: state.animals
  }
}

export default connect(mapStateToProps, {fetchAnimals})(App);
