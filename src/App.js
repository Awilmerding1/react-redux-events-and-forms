import React from 'react';
import Animals from './Animals'
import {connect} from 'react-redux'
import fetchAnimals from './actions/fetchAnimals'

class App extends React.Component {

  componentDidMount(){
    this.props.fetchAnimals()
  }

  render() {
    return (
      <div>
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
