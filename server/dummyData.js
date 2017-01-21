export default {
		init:{
			types:[{type:'pieChart',name:'Pie Chart'},{type:'discreteBarChart',name:'Bar Chart'}],
			sources:[{type:'population',name:'Population'},{type:'area',name:'Land Area'}]
		},
		population:{
			label:"Population per state",
			values:[
				{
					state:"New South Wales",
					value:7544000,
				},
				{
					state:"Tasmania",
					value:515000,
				},

				{
					state:"Western Australia",
					value:2589000,
				},
				{
					state:"South Australia",
					value:1677000,
				},
				{
					state:"Queensland",
					value:4691000,
				},
				{
					state:"Victoria",
					value:5791000,
				},
			]
		},
		area:{
		label:"Area per state in square kilometers",
			values:[
			{
				state:"New South Wales",
				value:809444,
			},
			{
				state:"Tasmania",
				value:68401,
			},

			{
				state:"Western Australia",
				value:2646000,
			},
			{
				state:"South Australia",
				value:984377,
			},
			{
				state:"Queensland",
				value:1853000,
			},
			{
				state:"Victoria",
				value:237629,
			},
		]
		}
	};
