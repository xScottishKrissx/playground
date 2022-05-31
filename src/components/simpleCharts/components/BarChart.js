import React from 'react'
import {Bar,Line} from 'react-chartjs-2'
// This is mandatory and the chart will NOT work without it (yes, it's greyed out)
import {Chart as ChartJS} from 'chart.js/auto'

export default function BarChart(props) {
  return <Line data={props.data}/>
}
