"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './components/hello-world'
import Greeting from './components/greeting'
import ProfilePic from './components/profile-pic'


ReactDOM.render(
  <HelloWorld name="Brotha Lynch Hung" mood="somewhat angry"/>,
  document.getElementById("hello-world-component")
);

ReactDOM.render(
	<Greeting timeOfDay="night" object="moon"/>,
	document.getElementById("greeting-component")

);

ReactDOM.render(
	<ProfilePic href="http://nyan.cat/" className="profile-pic"/>,
	document.getElementById("profile-pic-component")
);
