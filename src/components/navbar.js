import React from 'react';
import { Button } from 'antd'
import './navbar.css'
const Navbar=()=>{

    return (
        <div>
     <div className='line1'>
            <div className='webname'>
            <p className='navtxt'>ATools<span className='dot'>.</span></p>
            </div>
          
            <div className='login'>
            <span>
                 <Button  className='btn1' type="link">Start Free Trial</Button></span>
                 <span><Button className='btn2' type="link">Login</Button> </span>
            </div>
            </div>


        </div>
    )
}

export default Navbar;