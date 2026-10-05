import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Add = () => (
  <section className="shop-highlight" aria-labelledby="shop-highlight-title">
    <div className="shop-highlight-content">
      <span className="shop-highlight-eyebrow">Petal Haven</span>
      <h2 id="shop-highlight-title">Flowers for Every Moment</h2>
      <p>Discover handcrafted flowers and thoughtful arrangements for the moments that matter.</p>
      <Link className="shop-highlight-link" to="/Bouquets">Explore our collection</Link>
    </div>
  </section>
)

export default Add
