import React, { PropTypes, Component } from 'react';
import Chart from './Chart';
require('./Chart.css');
export default class ChartContainer extends Component {
	constructor(props){
		super(props);
	}
	setChartType(event){
		
		if(this.props.chart.type!=event.target.value){
			this.props.typeSelect(this.props.chart.index,event.target.value)
		}
	}
	setChartSource(event){
		
		if(this.props.chart.source!=event.target.value){
			this.props.sourceSelect(this.props.chart.index,event.target.value)
		}
	}
	onDrawChartClick(event){
		this.props.drawChart(this.props.chart);
	}
	onDeleteChartClick(event){
		this.props.deleteChart(this.props.chart.index);
	}
	renderChartTypes=()=>{
		return this.props.types.map((type)=>{
			let isChecked=(this.props.chart.type===type.type);
			return (
				<div className="col-md-5 col-lg-4 col-xl-4" key={type.type}>
					<label className="radio-inline"><input type="radio" checked={isChecked} value={type.type} name={type.type}/>{type.name}</label>
				</div>
			);
		}
		);
	}
	renderChartSource(){
		return this.props.sources.map((source)=>{
			let isChecked=(this.props.chart.source===source.type);
			return (
				<div className="col-md-5 col-lg-4 col-xl-4" key={source.type}>
					<label className="radio-inline"><input type="radio" checked={isChecked} value={source.type} name={source.type}/>{source.name}</label>					
				</div>
			);
		}
		);
	}

  render() {
	let title="Make your selections";
	if (this.props.chart.source.length&&this.props.chart.type.length){
	for(var i in this.props.sources){
			if(this.props.sources[i].type===this.props.chart.source){
				title=this.props.sources[i].name;
			}
		}
		for(var i in this.props.types){
			if(this.props.types[i].type===this.props.chart.type){
				title+=" | "+this.props.types[i].name;
			}
		}
	}

	if(this.props.chart.isChartMode){
		return(<div className="col-md-12 co-lg-12 col-xl-12">
			<div className="panel panel-default">
			 <div className="panel-heading">
				<h3 className="panel-title pull-left">{title}</h3>
				<button type="button" className="btn btn-primary btn-sm pull-right no-margin" name="delete Chart" onClick={this.onDeleteChartClick.bind(this)} value="Delete">Delete</button>
				<div className="clearfix"></div>
			</div>
				<div className="panel-body">
					<Chart chart={this.props.chart.data} type={this.props.chart.type} index={this.props.chart.index}/>
				</div>
			</div>
		</div>
		);
	}else{
		 return (
      <div className="col-md-12 co-lg-12 col-xl-12">
		<div className="panel panel-default">
		  <div className="panel-heading">
			<h3 className="panel-title pull-left">{title}</h3>
			<button type="button" className="btn btn-primary no-margin btn-sm pull-right" name="delete Chart" onClick={this.onDeleteChartClick.bind(this)} value="Delete">Delete</button>
			<div className="clearfix"></div>
		</div>
		  <div className="panel-body">
				<div className="row">
					<div className="col-md-4 col-lg-3 col-xl-3">
						<label>Chart Source</label>
					</div>
					<div className="col-md-8 col-lg-9 col-xl-9" onChange={this.setChartSource.bind(this)}>
						{this.renderChartSource(this)}
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-md-4 col-lg-3 col-xl-3">
						<label>Chart Type</label>
					</div>
					<div className="col-md-8 col-lg-9 col-xl-9" onChange={this.setChartType.bind(this)}>
						{this.renderChartTypes()}
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 col-lg-12 col-xl-12">
						<button type="button" className="btn navbar-btn btn-primary  pull-right" name="draw Chart" onClick={this.onDrawChartClick.bind(this)} value="Draw">Draw</button>
					</div>
				</div>
		  </div>
		</div>
      </div>
    );
	}
  }
 }

