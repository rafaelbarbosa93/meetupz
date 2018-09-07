import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
	render(){
		return (
			<div>
				<nav className="blue darken-3">
			    <div className="nav-wrapper">
			      <a href="/" className="brand-logo">Meetupz</a>
			      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="fa fa-bars"></i></a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			        <li><Link to="/"><i className="fa fa-users"></i>
			        Meetups</Link></li>
			      </ul>
			    </div>
	  		</nav>
	  		<ul className="sidenav" id="mobile-demo">
			    <li><a href="sass.html">Sass</a></li>
			    <li><a href="badges.html">Components</a></li>
			    <li><a href="collapsible.html">JavaScript</a></li>
  			</ul>
  		</div>
		)
	}
}

export default Navbar