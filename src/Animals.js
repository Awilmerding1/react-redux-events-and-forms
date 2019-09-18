import React from 'react'
import Animal from './Animal'

class Animals extends React.Component {
  render() {
    return (
      <div>
          {this.props.animals.map(animal => <Animal key={animal.id} animal={animal}/>)}
      </div>
    );
  }
}

export default Animals;
