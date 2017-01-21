import React, { Component, PropTypes } from 'react';


export default class Header extends Component{
	constructor(props){
		super(props);		
	}
render(){
return(
	<nav className="navbar navbar-default">
		<div className="container-fluid">
			<div className="navbar-header">
			  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			  </button>
			  <a className="navbar-brand" href="#">D3 Demo</a>
			</div>
			<div className="collapse navbar-collapse pull-right" id="navbar-collapse">
			  <ul className="nav navbar-nav">
				<li><button type="button" className="btn navbar-btn btn-primary" name="add Chart" onClick={this.props.addChart} value="Add Chart">Add Chart</button></li>
			</ul> 
			</div>
		</div>
	</nav>);
	
}

}