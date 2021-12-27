import React from 'react'
import Announcemet from '../components/Announcemet'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Announcemet />
      <Navbar/>
      <Slider />
      <Categories />
    </div>
  )
}

export default Home
