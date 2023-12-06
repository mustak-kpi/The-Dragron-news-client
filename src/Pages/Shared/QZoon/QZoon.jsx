import React from 'react';
import QZoon1 from '../../../assets/qZone1.png'
import QZoon2 from '../../../assets/qZone2.png'
import QZoon3 from '../../../assets/qZone3.png'

const QZoon = () => {
    return (
        <div>
            <h4 className='mt-4'>Q-Zone</h4>
          <div className=' text-center '>
            <img src={QZoon1} alt="" />
            <img src={QZoon2} alt="" />
            <img src={QZoon3} alt="" />
          </div>
        </div>
    );
};

export default QZoon;