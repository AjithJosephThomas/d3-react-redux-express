// Import Actions
import { ADD_CHART,INITIALIZE,UPDATE_CHART,DRAW_CHART,DELETE_CHART } from './MainActions';
import cuid from 'cuid';

// Initial State
const initialState = {
  charts: [],
  chart:{
	types:[],
	sources:[],
	data:null,
	isChartMode:false
  }
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
	case UPDATE_CHART:
		var _charts=[...state.charts];
		for(var i=0;i<_charts.length;i++){
			
			if(state.charts[i].index===action.index){				
				_charts[i][action.param]=action.value;			
			}
		}
		return{
			charts:_charts,
			chart:state.chart
		};
	case DELETE_CHART:
		var _charts=[...state.charts];
		var index;
		for(var i=0;i<_charts.length;i++){
			
			if(state.charts[i].index===action.index){				
				index=i;
				break;
			}
		}
		_charts.splice(index,1);
		return{
			charts:_charts,
			chart:state.chart
		};
	break;
	 case DRAW_CHART:
		var _charts=[...state.charts];
		for(var i=0;i<_charts.length;i++){
			if(_charts[i].index===action.index){
				_charts[i].data=action.data;
				_charts[i].isChartMode=true;
			}
		}
		return{
			charts:_charts,
			chart:state.chart
		};
    case ADD_CHART:
		let newChart={source:"",type:"",index:cuid(),data:null,isChartMode:false};
		state.charts.push(newChart);
      return {
        charts:state.charts,
		chart:state.chart
      };
	case INITIALIZE:
		return {
			charts:state.charts,
			chart:{types:action.data.types,sources:action.data.sources}
		}
	break;
    default:
      return state;
  }
};


// Export Reducer
export default MainReducer;
