import React from 'react';
import './Uistyle.css'
import Credentials from './credentials';
import Navbar from './navbar';
const Ui=()=>{


    return (
        <div>
           <Navbar/>
            <div className='main'>
            <div className='credentials'>
            < Credentials/>
            </div>

<div className='image'>

</div>
</div>
</div>
    )
}
export default Ui;