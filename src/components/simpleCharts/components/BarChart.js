import React from 'react'
import {Bar} from 'react-chartjs-2'
// This is mandatory and the chart will NOT work without it (yes, its' greyed out)
import {Chart as ChartJS} from 'chart.js/auto'

export default function BarChart(props) {
  return <Bar data={props.data}/>
}
