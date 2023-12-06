import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftNav = () => {
const [catagorays , setCatagorays] = useState([]);

useEffect(()=>{

    fetch('http://localhost:5000/catagory')
    .then(res => res.json())
    .then(data => setCatagorays(data))
    .catch(error => console.error(error))
},[])
    return (
        <div>
            <h3>All Caterogy</h3>
            <div className='ps-4 '>
                {
                    catagorays.map(catagore => <p
                    key={catagore.id}
                    >    
                    <Link to={`/catagoray/${catagore.id}`} className='text-decoration-none text-black'>{catagore.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};
export default LeftNav;