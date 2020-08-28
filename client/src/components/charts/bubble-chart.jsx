import AsteroidsFooter from '../asteroids/asteroids.footer.jsx'
import HC_More from 'highcharts/highcharts-more'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React from 'react'
import {getChartBackgroundColors} from '../../utils'

HC_More(Highcharts)

// ============
// CHART CONFIG
// ============
const generateConfig = (props) => {
    console.log(props.data)
  const config = {

    chart: {
        type: 'bubble',
        zoomType: 'xy',
        borderColor: 'red',
  
        backgroundColor: {
            stops: getChartBackgroundColors(),
          },
    },

    title: {
        text: ''
    },

    xAxis: {
        gridLineWidth: 0,
        labels: {
            enabled: false
        },
        lineColor: 'transparent',
        tickLength: 0,
        accessibility: {
            rangeDescription: 'Range: 0 to 100.'
        }
    },

    yAxis: {
        labels: {
            enabled: false
        },
        title:'',
        gridLineWidth: 1,
        gridLineColor: '#0B2324',
        startOnTick: false,
        endOnTick: false,
        accessibility: {
            rangeDescription: 'Range: 0 to 100.'
        }
    },

    tooltip: {
        backgroundColor: 'transparent',
        borderColor: '#b4bdc1',
        borderRadius: 2,
        borderWidth: 1,
        followPointer: true,
        padding: 16,
        headerFormat: '',
        pointFormat: `
            <div style="color: #fff; text-align:left;">Name: {point.name}</div>
            <div style="color: #fff; text-align:left;">Diameter: {point.z}</div>
            <div style="color: #fff; text-align:left;">Magnitude: {point.magnitude}</div>
         
          <div style="color: #fff; text-align:left;">Distance: {point.y}</div>
          <div style="color: #fff; text-align:left;">Velocity: {point.x}</div>
  
        `,
        style: { color: '#fff', fontSize: '1rem', textAlign: 'center' },
        useHTML: true,
      },

    series: [{
        showInLegend: false,
        data: props.data,
        marker: {
            fillColor: 'transparent',
            fillOpacity: 0.7,
            lineColor: '#2cbc85',
          },
    }
    ],
    credits: {
        enabled: false,
      },

}

  return config
}

// =========
// COMPONENT
// =========
const BubbleChart = (props) => {
  const config = generateConfig(props)
    
  return props.loading ? <span>Loading...</span> : 
  <div>
      <HighchartsReact highcharts={Highcharts} options={config} />
       <AsteroidsFooter />
    </div>
}

export default BubbleChart
