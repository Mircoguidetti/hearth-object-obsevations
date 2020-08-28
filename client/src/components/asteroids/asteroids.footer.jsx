import ArrowRight from '../../images/arrow-right.svg'
import ArrowUp from '../../images/arrow-up.svg'
import React from 'react';

const AsteroidsFooter = () => {
    return (
        <div className='footer-container'>
            <span>
                <img className='arrow-img' src={ArrowUp}/> Distance <span className='font-small'> (au) </span>
            </span>
            <div className='line-footer'/>
                <span>
                    <img className='arrow-img' src={ArrowRight}/> Velocity <span className='font-small'>(km/s)</span>
                </span>
        </div>
    )
}


export default AsteroidsFooter