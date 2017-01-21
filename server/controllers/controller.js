import mockData from '../dummyData';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function init(req, res) {
 res.json(mockData.init);
}


export function chart(req, res) {
 res.json(generateChart(req.params.type,mockData[req.params.source]));
}
function generateChart(type,data){
	switch(type){
		case "pieChart":
			return generatePieChart(data);
		default:
			return generateDiscreteBarChart(data);
	}
}
 function generatePieChart(data){
	var keys=Object.keys(data.values[0]);
	return{x:keys[0],y:keys[1],data:data.values,label:data.label};
}

 function generateDiscreteBarChart(data){
	var keys=Object.keys(data.values[0]);
	var datum=[{key:data.label,values:data.values}];
	return{x:keys[0],y:keys[1],data:datum,label:data.label};
}