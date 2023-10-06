import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Data = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        designation: 'Developer',
        place: 'vizag',
        age: '29',
        status: 'live'
    },
    {
        id: 2,
        name: 'Suresh Kumar',
        designation: 'Tester',
        place: 'Hyderabad',
        age: '29',
        status: 'live'
    },
    {
        id: 3,
        name: 'Rajesh Kumar',
        designation: 'Developer',
        place: 'vizag',
        age: '29',
        status: 'live'
    },
    {
        id: 4,
        name: 'Suresh Kumar',
        designation: 'Tester',
        place: 'Hyderabad',
        age: '29',
        status: 'live'
    },
    {
        id: 5,
        name: 'Rajesh Kumar',
        designation: 'Developer',
        place: 'vizag',
        age: '29',
        status: 'live'
    },
    {
        id: 6,
        name: 'Suresh Kumar',
        designation: 'Tester',
        place: 'Hyderabad',
        age: '29',
        status: 'live'
    },
    {
        id: 7,
        name: 'Rajesh Kumar',
        designation: 'Developer',
        place: 'vizag',
        age: '29',
        status: 'live'
    },
    {
        id: 8,
        name: 'Suresh Kumar',
        designation: 'Tester',
        place: 'Hyderabad',
        age: '29',
        status: 'live'
    },
    {
        id: 9,
        name: 'Rajesh Kumar',
        designation: 'Developer',
        place: 'vizag',
        age: '29',
        status: 'live'
    },
    {
        id: 10,
        name: 'Suresh Kumar',
        designation: 'Tester',
        place: 'Hyderabad',
        age: '29',
        status: 'live'
    },
]

function Hrdashboard() {
    return (
        <div className='main-dasboard d-flex p-3'>
            <div className='dashboard col-xl-3'>
                <h1 className='text-decoration-underline text-center text-white'>HRPC</h1>
                <ul className='list-items text-white m-4'>
                    <li>Dashboard</li>
                    <li>Events</li>
                    <li>Job Posts</li>
                </ul>

            </div>
            <div className=' col-xl-9 m-3' >
                <div className='d-flex justify-content-between '>
                    <input className='rounded border m-3 ' placeholder='search' />
                    <p>Dylan Hunter<BsFillPersonFill /></p>
                </div>
                <div className='d-flex justify-content-between bg-white rounded border'>
                    <h5>HR Result</h5>
                    <Link to='/dashboard'>  <button className='btn btn-primary rounded border'>Add HR</button></Link >

                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Emp Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Place</th>
                            <th scope="col">Age</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((each) => {
                            return (
                                <tr>
                                    <td>{each.id}</td>
                                    <td>{each.name}</td>
                                    <td>{each.designation}</td>
                                    <td>{each.place}</td>
                                    <td>{each.age}</td>
                                    <td>{each.status}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Hrdashboard