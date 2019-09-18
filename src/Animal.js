import React from 'react'


class Animal extends React.Component {
  render() {
    return (
      <div>
          {this.props.animal.name} - {this.props.animal.species.name}
      </div>
    )
  }
}

export default Animal;
