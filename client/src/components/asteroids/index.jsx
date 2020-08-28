import React, {useEffect, useState} from 'react';
import {getCurrentDate, getDate} from '../../utils'

import AsteroidsHeader from './asteroids.header.jsx'
import BubbleChart from '../charts/bubble-chart.jsx'
import getAsteroids from '../../api/get-asteroids'

const Asteroids = () => {
    const [data, setData] = useState([])
    const [day, setDay] = useState(getCurrentDate)

    
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const dateFormatted = getDate(day)
        getAsteroids(dateFormatted).then(asteroids => {
            
            setData(asteroids)
            setLoading(false)
        })
        
    },[])
    
    const handleChangeDay = (d) => {
        setLoading(true)
        setDay(d)
        const dateFormatted = getDate(d)
        getAsteroids(dateFormatted).then(asteroids => {
            setData(asteroids)
            setLoading(false)
        })
    }

    return (
    <div className='asteroids-container'>
        <AsteroidsHeader handleChangeDay={handleChangeDay} day={day} />
        <BubbleChart loading={loading} data={data}/>

    </div>
    )
}


export default Asteroids