import React from 'react';
import { Link } from 'react-router-dom'
import {DiEnvato} from "react-icons/di"

function Header() {
    return (
        <div className='container'>
            <div className='button'>
                <button className='btn-1'>Buy Now</button>
                <h1 className='text'><DiEnvato className='color'/>envatomarket</h1>
            </div>
            <nav className='navbar'>

                <div className='head1'>
                    <ul className='head'>
                        <li>
                            <Link className='links' to='./home'>Home<select></select></Link>
                        </li>
                        
                        <li>
                            <Link className='links' to='./explorecars'>Explore cars<select></select></Link>
                        </li>

                        <li>
                            <Link className='links' to='./helpcenter'>Help center</Link>
                        </li>

                        <li>
                            <Link className='links' to='./pages'>Pages<select></select></Link>
                        </li>
                    
                    </ul>
                </div>
            </nav>
        </div>



    )
}

export default Header