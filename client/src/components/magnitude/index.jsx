import React, {useEffect, useState} from 'react';
import {getCurrentDate, getDate, getPastSevenDaysDate} from '../../utils'

import EulerChart from '../charts/euler-chart.jsx'
import MagnitudeHeader from './magnitude.header.jsx'
import getMagnitude from '../../api/get-magnitude'

const Magnitude = () => {
    const [data, setData] = useState([])
    const [day, setDay] = useState(getCurrentDate)

    
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const currentDate = getCurrentDate()
        const dateEnd = getDate(currentDate)
        const dateStart = getPastSevenDaysDate()
        getMagnitude(dateStart, dateEnd).then(magnitude => {
            
            setData(magnitude)
            setLoading(false)
        })
        
    },[])

    return (
    <div className='magnitude-container'>
       <MagnitudeHeader  />
       {data.map(d => {
           return (
               <div className="magnitude-euler-container">
                <EulerChart data={d} />
                <div className='magnitude-euler-text-container'>
                    <span>Name: {d.name}</span>
                    <span>Diameter: {d.diameter}</span>
                    <span>Magnitude: {d.magnitude}</span>
                </div>
            </div>
           )
       })}
      
    </div>
    )
}


export default Magnitude