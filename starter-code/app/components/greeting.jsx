import React from 'react'

class Greeting extends React.Component {
  render() {
    return (
    	<div>
	    	<p>Good{this.props.timeOfDay}, {this.props.object}</p>
    	</div>
    )
  }
}
export default Greeting