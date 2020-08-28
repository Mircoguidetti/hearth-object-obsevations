import React from 'react';

const MagnitudeHeader = () => {

    return (
        <div>
            <h3 className='title'>Brightest of the week</h3>
            <span className='color-white' >MAGNITUDE <span className='font-small'>(H)</span></span>
            <div className='magnitude-overview-container'>
                    <div className='magnitude-overview-item'><span className="magnitude-circle bg-white"></span>Filled area: magnitude</div>
                    <div className='magnitude-overview-item'><span className="magnitude-circle"></span>Empty area: brightness</div>
                </div>
        </div>
    )
}


export default MagnitudeHeader