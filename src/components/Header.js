import React from 'react';
import { Link } from 'react-router-dom'
import { DiEnvato } from "react-icons/di"

function Header() {
    return (
        <div className='container-1'>
            <div className='button'>
                <button className='btn-1'>Buy Now</button>
                <h1 className='text'><DiEnvato className='color' />envatomarket</h1>
            </div>
            <div className='navbar'>

                <div className='head1'>
                    <ul className='head'>
                        <li>
                            <Link className='links' to='./frontpage'>Frontpage</Link>
                        </li>
                        <li>
                            <Link className='links' to='./home'>Home</Link>
                        </li>

                        <li>
                            <Link className='links' to='./explorecars'>Explorecars</Link>
                        </li>

                        <li>
                            <Link className='links' to='./helpcenter'>Helpcenter</Link>
                        </li>

                        <li>
                            <Link className='links' to='./pages'>Pages</Link>
                        </li>


                       <li className='header-tel'> 8 800 234 56 78</li>
                        
                        <div className='header-text'>Mon-sat 6:00am to 9:00pm
                            <button className='btn-2'>Explore cars</button>

                        </div>
                    </ul>

                </div>
            </div>

            {/* <div className='home-group'>
                <label for='search-1'>car,model or brand</label>
                <input text='type' name='search-1' id='search-1' placeholder='what car are you lo'></input>
            </div>
            <div className='home-group'>
                <label for='search-2'>max monthly payment</label>
                <input text='type' name='search-2' id='search-2' placeholder='Add amount in $'></input>
            </div>
            <div className='home-group' >
                <label for='search-3'>make year</label>
                <input text='type' name='search-3' id='search-3' placeholder='Add a minimal make year'></input>
            </div>
            <button type='button'>search</button> */}


        </div>



    )
}

export default Header