import React from 'react'

class ProfilePic extends React.Component{
	render(){
		return (
			<a {...this.props}>
				<img style={{width: '200px'}} src="http://bit.ly/1MItzOs"/>
			</a>
		)
	}
}

export default ProfilePic