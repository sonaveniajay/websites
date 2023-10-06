import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='w-100 '>
    <div className=' box-shadow border border-primary  w-25 p-5 m-3 mx-auto text-center' >
       <h3> HRFC Login</h3>
       <input placeholder='username ' className='username rounded border'/><br/><br/>
       <input placeholder='password'  className='password rounded border'/><br/><br/>
       <input placeholder='conform password' className='conform password rounded border'/><br/><br/>
       <button className='btn btn-primary'>submit</button>
       <Link to='/login'><h4>Login</h4></Link>
    </div>

</div>
  )
}

export default Signup