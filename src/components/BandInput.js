// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {

  state = {
    name: '',
  }

  handleChange = event => {
      this.setState({
        name: event.target.value
      });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    console.log(this.state.name)
    this.setState({
      name: '',
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={event => this.handleSubmit(event)}>
          <input 
            type="text"
            placeholder="Band Name" 
            value={this.state.name} 
            onChange={this.handleChange} 
          />
          <input type="submit" />
        </form>
        
      </div>
    )
  }
}

export default BandInput

