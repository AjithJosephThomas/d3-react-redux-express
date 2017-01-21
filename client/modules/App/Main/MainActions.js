import callApi from '../../../util/apiCaller';
// Export Constants
export const ADD_CHART = 'ADD_CHART';
export const UPDATE_CHART = 'UPDATE_CHART';
export const INITIALIZE = 'INITIALIZE';
export const DRAW_CHART='DRAW_CHART';
export const DELETE_CHART='DELETE_CHART';
// Export Actions
export function addChart() {
  return {
    type: ADD_CHART
  };
}
export function updateChart(index,param,value) {
  return {
    type: UPDATE_CHART,
	index,param,value
  };
};
export function initialize(data) {
  return {
    type: INITIALIZE,
    data
  };
};
export function drawChart(index,data) {
  return {
    type: DRAW_CHART,
    index,data
  };
};
export function deleteChart(index,data) {
  return {
    type: DELETE_CHART,
    index
  };
};
export function triggerDrawChart(chart) {
  return (dispatch) => {
    return callApi('chart/'+chart.type+'/'+chart.source).then(res => dispatch(drawChart(chart.index,res)));
  };
};
export function triggerInit() {
  return (dispatch) => {
    return callApi('init').then(res => dispatch(initialize(res)));
  };
}
