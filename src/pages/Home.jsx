import React from 'react'
import Announcemet from '../components/Announcemet'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
      <Announcemet />
      <Navbar/>
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Home
