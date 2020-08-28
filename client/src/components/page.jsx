import Asteroids from './asteroids/index.jsx'
import Brightest from './magnitude/index.jsx'
import React from 'react';

const Page = () => (
    <div className='page-container'>
        <Asteroids />
        <Brightest />
    </div>
)

export default Page