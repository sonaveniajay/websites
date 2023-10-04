import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { GoPeople } from 'react-icons/go'
import { BiGasPump } from 'react-icons/bi'
import { BsSpeedometer2 } from 'react-icons/bs'
import { PiSteeringWheelLight } from 'react-icons/pi'
import { TbWheel } from 'react-icons/tb'
import { BiDollarCircle } from 'react-icons/bi'
import { GrDocumentText } from 'react-icons/gr'
import { AiOutlineInsurance } from 'react-icons/ai'
import { Button } from 'bootstrap'

const Data = [
  {
    img: 'http://waydex.volkovdesign.com/img/cars/1-1.jpg',
    title: 'Toyota RAV4',
    people: '4 people',
    petrol: 'gasoline',
    speed: '6.1km / 1-litre',
    steering: 'autometic',
    year: '2021',
    price: '$440/month',
    button: 'Rent now'
  },

  {
    img: 'http://waydex.volkovdesign.com/img/cars/2-1.jpg',
    title: 'BMW 3 Series',
    people: '4 people',
    petrol: 'gasoline',
    speed: '8.2km / 1-litre',
    steering: 'autometic',
    year: '2019',
    price: '$350/month',
    button: 'Rent now'
  },

  {
    img: 'http://waydex.volkovdesign.com/img/cars/3-1.jpg',
    title: 'volkswagen T-Cross',
    people: '4 people',
    petrol: 'gasoline',
    speed: '5.3km / 1-litre',
    steering: 'autometic',
    year: '2020',
    price: '$400/month',
    button: 'Rent now'
  },

  {
    img: 'http://waydex.volkovdesign.com/img/cars/4-1.jpg',
    title: 'Cadillac Escalade',
    people: '4 people',
    petrol: 'gasoline',
    speed: '7.7km / 1-litre',
    steering: 'autometic',
    year: '2020',
    price: '$620/month',
    button: 'Rent now'
  },
  {
    img: 'http://waydex.volkovdesign.com/img/cars/5-1.jpg',
    title: 'BMW 4 Series GTI',
    people: '4 people',
    petrol: 'gasoline',
    speed: '7.6km / 1-litre',
    steering: 'autometic',
    year: '2021',
    price: '$530/month',
    button: 'Rent now'
  },
  {
    img: 'http://waydex.volkovdesign.com/img/cars/6-1.jpg',
    title: 'BMW 4 Series',
    people: '4 people',
    petrol: 'gasoline',
    speed: '7.2km / 1-litre',
    steering: 'autometic',
    year: '2019',
    price: '$490/month',
    button: 'Rent now'
  }
]

function Home() {
  return (
    <div className='container-fluid card '>
      <div className='main'>
      <ul className='vechiles p-0 row '>
        {Data.map((each) => {
          return (

            <li className='col-xl-4'>
              <img className='img1 col-xl-4 w-100' src={each.img} alt='' />
              <p className='title1'>{each.title}</p>
              <div className='d-flex justify-content-around'>
                <p className='people1'><GoPeople className='icon' />{each.people}</p>
                <p className='petrol1'><BiGasPump className='icon' />{each.petrol}</p>
              </div>
              <div className='d-flex justify-content-around'>
                <p className='speed1'>< BsSpeedometer2 className='icon' />{each.speed}</p>
                <p className='steering1'>< PiSteeringWheelLight className='icon' />{each.steering}</p>
              </div>
              <p className='year1'>{each.year}</p>
              <p className='price1'>{each.price}</p>
              <button className='btn-buynow'>{each.button}</button>
            </li>
          )

        }
        )
        }
      </ul>
      </div>
      <div className='waydex-1'>
        <div className='waydex'>
          
          <h1 >Four reasons to rent a car in Waydex</h1>
          <p>Looking for a reliable car rental? Look no further! Our company offers affordable prices, full insurance<br />
            coverage, and support on the road. With minimum bureaucracy, you can get on the road hassle-free.
          </p>
          

        </div>

        <div>

          <div className='wheel d-flex  col-xxl-3' >
            <div className='icon-1'>
              < TbWheel className='wheel1' />
            </div>
            <div>
              <h2>Support on the road</h2>
              <p>We've got you covered with<br /> 24/7 support on the road. No<br /> matter where you are, we'll be<br /> there to help you out</p>
            </div>
            <div icon-2>
              <BiDollarCircle className='dollar1' />
            </div>
            <div>
              <h2>Affordable prices</h2>
              <p>Our prices are competitive and<br /> affordable. We strive to provide<br /> the best value for your money.</p>
            </div>
            <div className='icon-3'>
              <GrDocumentText className='document1' />
            </div>
            <div>
              <h2>
                Minimum of bureaucracy
              </h2>
              <p>We know your time is valuable. <br />That's why we've simplified the <br />rental process and eliminated<br /> unnecessary bureaucracy.</p>
            </div>
            <div className='icon-4'>
              <AiOutlineInsurance className='insurance1' />
            </div>
            <div>
              <h2>Full insurance</h2>
              <p>Drive with peace of mind<br /> knowing that our rental cars<br /> come with full insurance<br /> coverage. You are safe with us.</p>
            </div>


          </div>



        </div>
      </div>

    </div>
  )
}


export default Home