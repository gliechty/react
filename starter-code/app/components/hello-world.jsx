import React from 'react'

class HelloWorld extends React.Component {
  render() {
    return (
    	<div>
	    	<p>Hello {this.props.name}</p>
	    	<p>You are feeling {this.props.mood}!</p>
    	</div>
    )
  }
}
export default HelloWorld