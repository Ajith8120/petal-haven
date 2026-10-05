import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'
import homeBanner from '../../assets/banner/home_banner_11.jpg'

const Banner = () => {
  return (
    <section className="home-banner" aria-label="Petal Haven floral collection">
      <img className="home-banner-image" src={homeBanner} alt="Petal Haven floral collection" />
      <div className="home-banner-content">
        <h6>Tradition, Fragrance &amp; Love.</h6>
        <h1>Handcrafted Garlands for Your <span className="banner-forever">Fo<span className="banner-forever-r">r</span>ever</span></h1>
        <p>
          Handcrafted floral and cardamom garlands, blending timeless tradition with natural fragrance and love.
        </p>
        <div className="banner-action-group">
          <Link className="home-banner-cta" to="/Garlands">
            Explore <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Banner
