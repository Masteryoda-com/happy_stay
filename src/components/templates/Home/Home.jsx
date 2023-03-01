import React from 'react'
import './Home.css'
import HomeBanner from '../../../../public/images/site images/header image/header.png'
import { Container } from '@mui/material'
import HotelSearch from '../../organisms/HotelSearch/HotelSearch'

function Home() {
  return (
    <div className='home-container'>
      <Container>
        <div className="home-banner">
          <img src={HomeBanner} alt="" />
        </div>
        <HotelSearch/>
      </Container>
    </div>
  )
}

export default Home