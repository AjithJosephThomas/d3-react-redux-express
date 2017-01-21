import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import Header from './Header';
import ChartContainer from '../Chart/ChartContainer';
// Import Actions
import { addChart,updateChart,deleteChart,triggerDrawChart,triggerInit} from './MainActions';

// Import Selectors
//import { getPosts } from '../../PostReducer';

class Main extends Component {
	componentDidMount() {
		this.props.dispatch(triggerInit());
	}
	triggerAddChart=(event)=>{
		this.props.dispatch(addChart());
	}
	triggerDrawChart=(chart)=>{
		this.props.dispatch(triggerDrawChart(chart));
	}
	triggerDeleteChart=(index)=>{
		this.props.dispatch(deleteChart(index));
	}
	triggerTypeSelect=(itemIndex,newVal)=>{
		this.props.dispatch(updateChart(itemIndex,'type',newVal));
	}
	triggerSourceSelect=(itemIndex,newVal)=>{
		this.props.dispatch(updateChart(itemIndex,'source',newVal));
	}
	renderCharts=()=>{
		return this.props.main.charts.map((chart)=>{
			return (
				<div className="col-md-12 col-lg-6 col-x-6" key={chart.index}>
					<ChartContainer chart={chart} types={this.props.main.chart.types} key={chart.index} sources={this.props.main.chart.sources}
						drawChart={this.triggerDrawChart.bind(this)} typeSelect={this.triggerTypeSelect.bind(this)} deleteChart={this.triggerDeleteChart.bind(this)}
						sourceSelect={this.triggerSourceSelect.bind(this)}/>
				</div>
				);
		});
	}
  render() {
    return (
      <div className="container-fluid">
		<Header addChart={this.triggerAddChart}/>
		<div className="row">
			{this.renderCharts()}
		</div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
Main.need = [() => { return triggerInit(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
	main:state.main
  };
}

export default connect(mapStateToProps)(Main);
