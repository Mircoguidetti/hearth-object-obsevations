import React from 'react';

const AsteroidsHeader = ({day, handleChangeDay}) => {

    return (
        <div>
            <h3 className='title'>Asteroids of the day</h3>
            <div className='asteroids-header'>
                <span>Select one day to update the chart:</span>
                <div className='week-circle-container'>
                    <span onClick={() => handleChangeDay('mon')} className={day === 'mon' ? "week-circle bg-color-green": "week-circle"}>mon</span>
                    <span onClick={() => handleChangeDay('tue')} className={day === 'tue' ? "week-circle bg-color-green": "week-circle"}>tue</span>
                    <span onClick={() => handleChangeDay('wed')} className={day === 'wed' ? "week-circle bg-color-green": "week-circle"}>wed</span>
                    <span onClick={() => handleChangeDay('thur')} className={day === 'thur' ? "week-circle bg-color-green": "week-circle"}>thur</span>
                    <span onClick={() => handleChangeDay('fri')} className={day === 'fri' ? "week-circle bg-color-green": "week-circle"}>fri</span>
                    <span onClick={() => handleChangeDay('sat')} className={day === 'sat' ? "week-circle bg-color-green": "week-circle"}>sat</span>
                    <span onClick={() => handleChangeDay('sun')} className={day === 'sun' ? "week-circle bg-color-green": "week-circle"}>sun</span>
                </div>
                
            </div>
            
        </div>
    )
}


export default AsteroidsHeader