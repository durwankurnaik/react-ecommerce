import React from 'react'
import Announcemet from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  const headingStyle = {
    textAlign: "center",
    marginTop: "20px",
    fontWeight: 600,
    fontSize: "25px"
  }
  return (
    <>
      <Announcemet />
      <Navbar/>
      <Slider />
      <div style={headingStyle}>
        <h1>Shop by Category</h1>
      </div>
      <Categories />
      <div style={headingStyle}>
        <h1>Popular Products</h1>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Home
