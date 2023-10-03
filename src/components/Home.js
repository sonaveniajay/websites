import React from 'react'



const Data=[
  {
    img:'http://waydex.volkovdesign.com/img/cars/1-1.jpg',
    title: 'Toyota RAV4',
    year:'2021',
    price:'$440/month',
  }, 

  {
    img:'http://waydex.volkovdesign.com/img/cars/2-1.jpg',
    title:'BMW 3 Series',
    year:'2019',
    price:'$350/month'
  },

  {
    img:'http://waydex.volkovdesign.com/img/cars/3-1.jpg',
    title:'volkswagen T-Cross',
    year:'2020',
    price:'$400/month'
  }





]

  


function Home() {
  return (
    <div className='container'>
      <ul className='vechiles'>
        {Data.map( (each) => {
          return(
            <li>
            <img className='img1' src={each.img} alt=''/>
            <p className='title1'>{each.title}</p>
            <p className='year1'>{each.year}</p>
            <p className='price1'>{each.price}</p>
            </li>
          )

        }
        )
      }
      </ul>

    </div>
  )
}
  

export default Home