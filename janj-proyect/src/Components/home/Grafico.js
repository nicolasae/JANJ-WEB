import React from 'react';
import {Line} from 'react-chartjs-2';
const axios= require('axios')

const data = {
		labels: ['1', '2', '3', '4', '5', '6'],
		datasets: [
			{
				label: 'Divisas ',
				data: [12, 19, 3, 5, 2, 3],
				// fill: false,
				backgroundColor: '#2dc997',
				borderColor: 'rgba(255, 99, 132, 0.2)',
			},
		],
	}
	
	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	}


export default class Grafico extends React.Component {
	constructor(props){
		super(props)
		this.state={
				randomTicket:null,
				dates:[],
				values:[],
				data:null,
				options:null,
		}
		this.initial_state()
	}
	getHistorial=async()=>{
		var baseurl = String(process.env.REACT_APP_API_URL)
		var url = baseurl+'/aleatorio_ticket'
		var config = {
            method: 'get',
            url: url,
            headers: { 
              'Content-Type': 'application/json'
            },
          };
		await axios(config)
		.then(response => response.data)
		.then(async(data) => {
			await this.setState({randomTicket: data.ticket})
		})
		var url = baseurl+'/consulta_historial'
		var data = JSON.stringify({
			ticket:this.state.randomTicket,
			periodo:'1m',
		})	
		config = {
            method: 'post',
            url: url,
            headers: { 
              'Content-Type': 'application/json'
            },
            data: data
          };
        await axios(config)
        .then(response => response.data) 
		.then(data => {
			var fecha=[];var value=[];
			for(const i in data){
				fecha.push(data[i].fecha)
				value.push(data[i].value)
			}
			this.setState({ dates: fecha, values: value });
		})
		await this.buildDataset()

	}
	buildDataset=async()=>{
		const data = {
			labels: this.state.dates,
			datasets: [
				{
					label: this.state.randomTicket,
					data: this.state.values,
					fill: false,
					backgroundColor: '#2dc997',
					borderColor: '#2dc997',
				},
			],
		}
		
		const options = {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		}
		await this.setState({ data: data, options: options})
	
	}
	initial_state=async()=>{
		await this.getHistorial()	

	}
	render() {
		return (
			<>
				{this.state.data && this.state.options ? 
				<Line data={this.state.data} options={this.state.options} />:null}
			</>
		);
	}
}
