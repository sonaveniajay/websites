import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs'

function Dashboard() {
    return (
        <div className='main-div d-flex p-3'>
            <div className='sub-div col-xl-3 '>
                <h1 className='text-center text-decoration-underline'>HRPC</h1>
                <ul className='lists m-3 '>
                    <li>Dashboard</li>
                    <li>Events</li>
                    <li>Job posts</li>
                </ul>
            </div>
            <div className=' child-div rounded' >
                <div className='d-flex justify-content-between'>
                    <input  className='rounded border'placeholder='search'/>
                    <p>Dylan Hunter<BsFillPersonFill/></p>
                </div>
                <div><h4 className='m-3'>Add HR</h4></div>
                <div className=' d-flex p-3'>
                    <div className='col-xl-4'>
                        
                        <lable>username</lable>
                        <input className='rounded border' type='text'></input>
                    </div>
                    <div>
                        <lable>username</lable>
                        <input className='rounded border' type='text'></input>
                    </div>
                    <div>
                        <lable>username</lable>
                        <input  className='rounded border' type='text'></input>
                    </div>
                    
                </div>
                <div className=' d-flex p-3'>
                    <div className='col-xl-4'>
                        
                        <lable>username</lable>
                        <input className='rounded border' type='text'></input>
                    </div>
                    <div>
                        <lable>username</lable>
                        <input  className='rounded border' type='text'></input>
                    </div>
                    <div>
                        <lable>username</lable>
                        <input  className='rounded border' type='text'></input>
                    </div>
                    
                </div>
                <div className=' d-flex p-3'>
                    <div className='col-xl-4'>
                        
                        <lable>username</lable>
                        <input  className='rounded border' type='text'></input>
                    </div>
                    <div>
                        <lable>username</lable>
                        <input  className='rounded border' type='text'></input>
                    </div>
                    <div>
                        <lable>username</lable>
                        <input  className='rounded border' type='text'></input>
                    </div>
                    
                </div>
                <button className='btn btn-primary m-3'>submit</button>

            </div>
        </div>
    )
}

export default Dashboard