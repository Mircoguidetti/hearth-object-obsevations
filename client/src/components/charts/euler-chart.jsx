import AsteroidsFooter from '../asteroids/asteroids.footer.jsx'
import HC_More from 'highcharts/highcharts-more'
import HC_funnel from 'highcharts/modules/venn'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React from 'react'
import {getChartBackgroundColors} from '../../utils'

HC_funnel(Highcharts)
HC_More(Highcharts)

// ============
// CHART CONFIG
// ============
const generateConfig = (props) => {

  const config =  {
    chart: {
        width:50,
        height:50,
  
        backgroundColor: {
            stops: getChartBackgroundColors(),
          },
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: false
            }
        }
    },
    colors:['#123547', '#fff'],
    series: [{
        type: 'venn',
        data: [{
            name:props.data.name,
            sets: ['A'],
            value: props.data.magnitude,
            
            
        }, {
            name:'min',
            sets: ['E'],
            value: 1,
            
            
        }, {
            sets: ['A', 'E'],
            value: 1
        }]
    }],
    tooltip:{
        enabled:false
    },
    credits: {
        enabled: false,
      },
    title: {
        text: ''
    }
}
  return config
}

// =========
// COMPONENT
// =========
const EulerChart = (props) => {
  const config = generateConfig(props)
    
  return props.loading ? <span>Loading...</span> : 
  <div>
      <HighchartsReact highcharts={Highcharts} options={config} />
    </div>
}

export default EulerChart
