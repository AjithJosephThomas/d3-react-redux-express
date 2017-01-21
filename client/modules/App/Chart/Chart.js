import React, { PropTypes, Component } from 'react';
import NVD3Chart from 'react-nvd3';
export default class Chart extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<NVD3Chart
			  id={this.props.type+this.props.index}
			  width="600"
			  height="370"
			  showValues="true"
			   tooltip={{enabled: true}}
			  type={this.props.type}
			  datum={this.props.chart.data}
			  x={this.props.chart.x}
			  y={this.props.chart.y}
			/>);
	}
 }

